<template>
  <div class="privacy-policy-overlay">
    <v-container class="privacy-policy-container">
      <!-- Titre -->
      <h1 class="title">Politique de confidentialité</h1>

      <!-- Zone de texte pour la politique de confidentialité -->
      <v-textarea
        v-model="privacyPolicyText"
        label="Politique de confidentialité"
        outlined
        rows="10"
        readonly=""
      ></v-textarea>

      <!-- Boutons pour accepter ou décliner -->
      <v-row class="buttons-row">
        <v-col cols="6">
          <v-btn color="primary" @click="acceptPrivacyPolicy">Accepter</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn color="red" @click="declinePrivacyPolicy">Décliner</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // Contenu de la politique de confidentialité
  const privacyPolicyText = ref(`
    Politique de confidentialité
Cette Politique de confidentialité décrit comment LesStudios5am collecte, utilise et protège les informations personnelles que vous nous fournissez lorsque vous utilisez notre site web de réservation de session.
Collecte et utilisation des informations personnelles
Lorsque vous utilisez notre site web, nous pouvons collecter les informations personnelles suivantes :
•\tNom
•\tPrénom
•\tAdresse e-mail
Nous collectons ces informations dans le but de :
•\tIdentifier l'utilisateur et faciliter l'utilisation du site web.
•\tTransmettre les informations de réservation de session au client.
Les informations personnelles collectées sont stockées dans notre base de données sécurisée et ne sont accessibles qu'au DSI de l'entreprise.
Conservation des données
Nous conserverons vos informations personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, y compris pour satisfaire à toute obligation légale, comptable ou de reporting.
Partage des informations personnelles
Nous ne partagerons pas vos informations personnelles avec des tiers sans votre consentement préalable, sauf si cela est nécessaire pour satisfaire à une obligation légale.
Droits en matière de protection des données
Vous avez le droit d'accéder à vos informations personnelles, de les rectifier, de les supprimer et de limiter leur traitement. Vous avez également le droit de vous opposer au traitement de vos informations personnelles. Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail suivante : 5amsouth@gmail.com.
Consentement parental
Nous ne collectons pas intentionnellement les informations personnelles des enfants de moins de 16 ans sans le consentement préalable des parents ou tuteurs. Si vous pensez que nous avons collecté des informations personnelles sur un enfant de moins de 16 ans sans le consentement parental, veuillez nous contacter afin que nous puissions supprimer ces informations.
Modifications de la Politique de confidentialité
Nous nous réservons le droit de modifier cette Politique de confidentialité à tout moment. Les modifications prendront effet immédiatement après leur publication sur le site web.
En continuant à utiliser notre site web, vous consentez à notre Politique de confidentialité.
Si vous avez des questions concernant cette Politique de confidentialité, veuillez nous contacter à l'adresse e-mail suivante : 5amsouth@gmail.com.

  `);

  // Fonction pour accepter la politique de confidentialité
  const acceptPrivacyPolicy = () => {
    alert("Vous avez accepté la politique de confidentialité de notre site. Bonne navigation !")
  };

  // Fonction pour décliner la politique de confidentialité
  const declinePrivacyPolicy = () => {
    alert("Vous n'avez pas accepté la politique de confidentialité de notre site. L'utilisation de ce dernier ne vous est donc pas autorisée !")
  };
</script>

<style scoped>
  .privacy-policy-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9); /* Opacité de l'arrière-plan */
    z-index: 1000; /* Place la politique de confidentialité au-dessus du reste du contenu */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .privacy-policy-container {
    max-width: 800px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .title {
    text-align: center;
    margin-bottom: 20px;
  }

  .buttons-row {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
</style>
