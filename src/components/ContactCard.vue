<template>
    <div class="contact-card" v-for="contact in contactMembersList" :key="contact.login.uuid">
        <div class="contact-photo">
              <img :src="contact.picture.large" :alt="`${contact.name.first} ${contact.name.last}`" />
        </div>
        <div class="contact-info">
            <div class="contact-name">{{ contact.name.first }} {{ contact.name.last }}</div>
            <div class="contact-details">
                <div class="contact-address">
                    {{contact.location.street.number}} {{contact.location.street.name}} <br>
                     {{ contact.location.postcode }} {{contact.location.city}} {{contact.location.state}}<br>
                    {{contact.location.country}} 
                </div>
                <button class="call-button">Call {{ contact.cell }}</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    contactMembersList: {
        type: Array,
        required: true
    }
});
</script>