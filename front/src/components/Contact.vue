<template>
  <div class="contact-overlay">
  <v-container>
    <h1 class="title">Nous Contacter</h1>

    <v-row>
      <!-- Intervenants sur le côté gauche -->
      <v-col cols="12" sm="6" md="4">
        <v-row>
          <v-col cols="12" v-for="(intervenant, index) in intervenants.slice(0, 1)" :key="index">
            <v-card class="contact-card">
              <v-card-title class="contact-title">{{ intervenant.prenom }} {{ intervenant.nom }}  <h5>{{ intervenant.poste }}</h5></v-card-title>
              <v-card-text>
                <!-- Déplacer cette ligne juste en dessous de la balise v-card-title -->
                <p><strong>Email:</strong> {{ intervenant.email }}</p>
                <p><strong>Tel:</strong> {{ intervenant.tel }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <!-- Formulaire de contact au centre -->
      <v-col cols="12" sm="6" md="4">
        <v-card class="contact-card">
          <v-card-title class="contact-title">Contactez-nous</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="sendEmail">
              <v-text-field v-model="nom" label="Nom" required></v-text-field>
              <v-text-field v-model="prenom" label="Prénom" required></v-text-field>
              <v-text-field v-model="email" label="Email" required></v-text-field>
              <v-textarea v-model="message" label="Message" required></v-textarea>
              <v-btn color="black" type="submit">Envoyer</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Intervenants sur le côté droit -->
      <v-col cols="12" sm="6" md="4">
        <v-row>
          <v-col cols="12" v-for="(intervenant, index) in intervenants.slice(3)" :key="index">
            <v-card class="contact-card">
              <v-card-title class="contact-title">{{ intervenant.prenom }} {{ intervenant.nom }}  <h5>{{ intervenant.poste }}</h5></v-card-title>
              <v-card-text>
                <p><strong>Email:</strong> {{ intervenant.email }}</p>
                <p v-if="intervenant.tel"><strong>Tel:</strong> {{ intervenant.tel }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
    </div>
</template>

<script setup>
  import { ref } from 'vue';
  import emailjs from 'emailjs-com';

  // Remplacez 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID' et 'YOUR_PUBLIC_KEY' par vos identifiants EmailJS
  const SERVICE_ID = 'service_9bcsuii';
  const TEMPLATE_ID = 'template_u2rxeia';
  const PUBLIC_KEY = 'JzmSIbK9bd4EdS0xl';

  const intervenants = [
    { nom: "BOSKO", prenom: "", poste: "Ingénieur Son", email: "ameyzin137@gmail.com", tel: "06 25 52 13 08" },
    { nom: "DAF", prenom: "SHADOW", poste: "Ingénieur Son", email: "youngdaf0@gmail.com", tel: "07 44 75 17 29" },
    { nom: "BOSKO", prenom: "", poste: "Ingénieur Son" },
    { nom: "DAF", prenom: "SHADOW", poste: "Ingénieur Son", email: "youngdaf0@gmail.com", tel: "07 44 75 17 29"  },
  ];

  const nom = ref('');
  const prenom = ref('');
  const email = ref('');
  const message = ref('');

  const sendEmail = () => {
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      nom: nom.value,
      prenom: prenom.value,
      email: email.value,
      message: message.value,
    }, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Optionally reset the form fields
        nom.value = '';
        prenom.value = '';
        email.value = '';
        message.value = '';
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };
</script>

<style scoped>
  .contact-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: bold;
    color: #000000;
  }

  .contact-card {
    margin-bottom: 40px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgb(0, 0, 0);


  }

  .contact-title {
    background-color: #000000;
    color: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 15px;
    font-size: 27px;
    font-weight: bold;
  }
</style>
