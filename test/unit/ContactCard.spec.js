import { mount } from '@vue/test-utils'
import ContactCard from '@/components/ContactCard.vue'

describe('ContactCard.vue', () => {
  it('start checking with sample data', () => {
    const validateContacts = [
      {
        login: { uuid: "56ae5552-a4f2-4dcb-a88a-86c9cd7098ea" },
        name: { first: "anil", last: "kumar" },
        email: "test@gmail.com",
        picture: { large: "sample.jpg" },
        location: {
          street: { number: 6549, name: "Madhapur" },
          city: "hyd",
          state: "telegana",
          country: "India",
          postcode: 500081
        },
        cell: "(123) 123-1234",
      },

    ]
    const wrapper = mount(ContactCard, {
      props: { contactMembersList: validateContacts }
    })

    expect(wrapper.text()).toContain('anil kumar')
  })
})
