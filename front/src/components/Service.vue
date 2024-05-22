<template>
  <v-container>
    <!-- Boutons pour sélectionner le formulaire -->
    <v-row justify="center" class="button-row">
      <v-btn @click="selectedForm = 'videoImage'" :class="{ active: selectedForm === 'videoImage' }">Visuel</v-btn>
      <v-btn @click="selectedForm = 'mix'" :class="{ active: selectedForm === 'mix' }">Mix</v-btn>
      <v-btn @click="selectedForm = 'master'" :class="{ active: selectedForm === 'master' }">Mastering</v-btn>
    </v-row>

    <!-- Formulaire Vidéo/Image -->
    <v-form v-if="selectedForm === 'videoImage'" @submit.prevent="submitVideoImageForm" class="form">
      <v-text-field v-model="request" label="Demande détaillée" required></v-text-field>
      <v-text-field v-model="email" label="Adresse mail" type="email" required></v-text-field>
      <v-text-field v-model="phone" label="Numéro de téléphone" type="tel" required></v-text-field>
      <v-btn color="black" type="submit">Envoyer</v-btn>
    </v-form>

    <!-- Formulaire Mix -->
    <v-form v-if="selectedForm === 'mix'" @submit.prevent="submitMixForm" class="form">
      <v-text-field v-model="soundLink" label="Lien vers le son" required></v-text-field>
      <v-text-field v-model="email" label="Adresse mail" type="email" required></v-text-field>
      <v-text-field v-model="phone" label="Numéro de téléphone" type="tel" required></v-text-field>
      <v-text-field v-model="clientPresent" label="Client présent lors du mix"></v-text-field>
      <v-text-field v-model="mixOption" label="Option Mix (avec ou sans ingé)" required></v-text-field>
      <v-btn color="black" type="submit">Envoyer</v-btn>
    </v-form>

    <!-- Formulaire Master -->
    <v-form v-if="selectedForm === 'master'" @submit.prevent="submitMasterForm" class="form">
      <v-text-field v-model="soundLink" label="Lien vers le son mixé" required></v-text-field>
      <v-text-field v-model="streamingPlatforms" label="Plateformes de streaming ciblés " required></v-text-field>
      <v-text-field v-model="email" label="Adresse mail" type="email" required></v-text-field>
      <v-text-field v-model="phone" label="Numéro de téléphone" type="tel" required></v-text-field>
      <v-btn color="black" type="submit">Envoyer</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';
  import emailjs from 'emailjs-com';

  // Remplacez 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID' et 'YOUR_PUBLIC_KEY' par vos identifiants EmailJS
  const SERVICE_ID = 'service_c7hcgyw';
  const TEMPLATE_ID = 'template_whpzda6';
  const PUBLIC_KEY = 'JzmSIbK9bd4EdS0xl';

  const selectedForm = ref(''); // Pour suivre le formulaire sélectionné

  const request = ref('');
  const email = ref('');
  const phone = ref('');
  const soundLink = ref('');
  const clientPresent = ref('');
  const mixOption = ref('');
  const streamingPlatforms = ref('');

  const submitVideoImageForm = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      request: request.value,
      phone: phone.value,
      email: email.value,
    }, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Optionally reset the form fields
        request.value = '';
        phone.value = '';
        email.value = '';
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };


  const submitMixForm = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      soundLink: soundLink.value,
      clientPresent: clientPresent.value,
      mixOption: mixOption.value,
      email : email.value,
      phone: phone.value,
    }, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Optionally reset the form fields
        soundLink.value = '';
        clientPresent.value = '';
        mixOption.value = '';
        email.value = '';
        phone.value = '';
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  const submitMasterForm = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      soundLink: soundLink.value,
      streamingPlatforms: streamingPlatforms.value,
      email: email.value,
      phone: phone.value,
    }, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Optionally reset the form fields
        soundLink.value = '';
        streamingPlatforms.value = '';
        email.value = '';
        phone.value = '';
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };
</script>

<style scoped>
  .button-row {
    margin-bottom: 20px;
  }

  .active {
    background-color: #5c6273 !important;
    color: white !important;
  }

  .v-container {
    padding-top: 20px;
    max-width: 600px;
    margin: 0 auto;
  }

  .v-btn {
    margin: 10px;
  }

  .form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .form .v-text-field, .form .v-checkbox, .form .v-radio-group {
    margin-bottom: 20px;
  }

  .form .v-btn {
    display: block;
    margin: 20px auto 0;
  }
</style>
