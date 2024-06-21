<template>
  <div class="presentation-overlay">
    <v-container>
      <v-row justify="center">
        <!-- Colonne de gauche pour les feuilles de contact -->
        <v-col cols="12" sm="6" md="4">
          <v-card class="contact-card" v-for="(contact, index) in contactsLeft" :key="index">
            <v-card-title class="contact-title">{{ contact.name }} <h5>{{ contact.post }}</h5></v-card-title>
            <v-card-text>
              <p><strong>Email:</strong> {{ contact.email }}</p>
              <p><strong>Tel:</strong> {{ contact.tel }}</p>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Colonne pour le texte -->
        <v-col cols="12" sm="6" md="4">
          <v-card class="textbox">
            <v-card-text>
              <div class="presentation-text">
                <p>Bienvenue sur notre site !</p>
                <p>Liés par l’amitié, Khadim, Phara, Steven, Punch et Aristide ont toujours souhaité avancer dans une démarche artistique commune. Initialement implantée dans un box de parking sous l’association « 5am production », la structure est devenue celle des « Studios 5AM » en 2020, ouvrant ses nouvelles portes dans le centre-ville de Nice, sur la rue de France.  Aujourd’hui, Les Studios 5AM ont développé trois aspects de leur activité qui leur permettent de devenir des acteurs émergents de la culture artistique azuréenne.  En premier lieu, la structure propose à ses clients un ensemble de prestations audio-visuelles (enregistrement, mixage, mastering, réalisation vidéo, shootings et accompagnement artistique plus global). Avec la création de son label indépendant « Le Five », elle s’est également engagée à développer des artistes (Phara et Norhvn) et à les accompagner dans leur carrière musicale</p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Colonne de droite pour les feuilles de contact -->
        <v-col cols="12" sm="8" md="3">
          <v-card class="contact-card" v-for="(contact, index) in contactsRight" :key="index">
            <v-card-title class="contact-title">{{ contact.name }}   <h5>{{ contact.post }}</h5></v-card-title>
            <v-card-text>
              <p><strong>Email:</strong> {{ contact.email }}</p>
              <p><strong>Tel:</strong> {{ contact.tel }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Presentation',
    data() {
      return {
        contactsLeft: [
          { name: 'Steven Santos', post: 'Responsable Management', email: 'ameyzin137@gmail.com', tel: '06 25 52 13 08' },
          { name: 'Aristide Santos', post: 'Responsable Informatique', email: 'aristide.ma.santos@gmail.com', tel: '06 63 75 77 36' },
          { name: 'Maxime Belleguie', post: 'Directeur Général', email: 'maximebelleguie@gmail.com', tel: '06 16 53 17 06' }
        ],
        contactsRight: [
          { name: 'Aurélien Robustella', post: 'Responsable Évenementiel', email: 'exemple4@example.com', tel: '0123456789' },
          { name: 'Khadim Sylla', post: 'Responsable Visuel', email: 'exemple5@example.com', tel: '0123456789' }
        ]
      };
    }
  };
</script>

<style scoped>
  .presentation-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .textbox {
    border-radius: 10px;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.9);
    padding: 1px;
    background-color: black;
  }

  .presentation-text {
    font-family: 'Arial Black', sans-serif; /* Utilisation de la police Roboto Slab */
    font-size: 27px;
    line-height: 1.6;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 20px; /* Ajout de marge intérieure pour une meilleure lisibilité */
  }

  .contact-card {
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgb(0, 0, 0);
  }

  .contact-title {
    background-color: #000000;
    color: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
  }

</style>
