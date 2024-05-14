<template>
  <v-container>
    <h1 class="title">Nous Contacter</h1>

    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(intervenant, index) in intervenants" :key="index">
        <v-card class="contact-card">
          <v-card-title class="contact-title">{{ intervenant.prenom }} {{ intervenant.nom }}</v-card-title>
          <v-card-text>
            <p><strong>Poste:</strong> {{ intervenant.poste }}</p>
            <p><strong>Email:</strong> {{ intervenant.email }}</p>
            <p><strong>Tel:  </strong> {{ intervenant.tel   }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const intervenants = [
    { nom: "Santos", prenom: "Steven", poste: "Directeur Général", email: "ameyzin137@gmail.com", tel:"06 25 52 13 08"},
    { nom: "Santos", prenom: "Aristide", poste: "Responsable Informatique", email: "aristide.ma.santos@gmail.com", tel: "06 63 75 77 36" },
    { nom: "Belleguie", prenom: "Maxime", poste: "Responsable Management", email: "maximebelleguie@gmail.com", tel:"06 16 53 17 06" },
    { nom: "DAF", prenom: "SHADOW", poste: "Ingénieur Son", email: "youngdaf0@gmail.com", tel: "07 44 75 17 29"},
    { nom: "BOSKO", prenom: "", poste: "Ingénieur Son"},
    { nom: "Robustella", prenom: "Aurélien", poste: "Responsable Évenementiel"},
    { nom: "Sylla", prenom: "Khadim", poste: "Responsable Visuel", email: "Khadim.sylla.911@outlook.fr", tel: "06 19 35 29 74"}
  ];
</script>

<style scoped>
  .title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: bold;
    color: #333;
  }

  .contact-card {
    margin-bottom: 40px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .contact-title {
    background-color: #333;
    color: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 15px;
    font-size: 20px;
    font-weight: bold;
  }
</style>
