<template>
    <div class="container">
        <h1 class="title">My Contacts</h1>
        <div class="contact-list">
            <ContactCard :contactMembersList="paginatedData" />
            <div class="pagination">
            <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Prev</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
            </div>
         
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed,Ref } from 'vue';
import axios from 'axios';
import ContactCard from '@/components/ContactCard.vue';
const contactList = ref<[]>([]);
const currentPage: Ref<number> = ref(1);
const itemsPerPage = 10; 
onMounted(async () => {
    try {
        const response = await axios.get('https://api.randomuser.me/?results=30'); 
        contactList.value = response.data.results; 
    } catch (error) {
        console.error('Error fetching in contact details:', error);
    }
})
const totalPages = computed(() => {
  return Math.ceil(contactList.value.length / itemsPerPage);
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return contactList.value.slice(start, end);
});

function goToPage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}

</script>