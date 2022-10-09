<template>
  <v-container fluid>
    <form ref="form" @submit.prevent="sendEmail">
      <v-text-field
        v-model="user_name"
        type="text"
        name="user_name"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="user_email"
        type="text"
        name="user_name"
        label="Email"
        required
      ></v-text-field>
      <v-textarea v-model="message" name="message" label="Message"></v-textarea>
      <v-btn type="submit">Send</v-btn>
    </form>
  </v-container>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      user_name: '',
      user_email: '',
      message: '',
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          'service_c2edgo4',
          'template_5k2dvib',
          this.$refs.form,
          'BET_7-tzu8R4Fzrxk'
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            this.user_name = '';
            this.user_email = '';
            this.message = '';
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    },
  },
};
</script>
