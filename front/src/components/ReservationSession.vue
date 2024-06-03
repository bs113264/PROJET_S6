<template>
  <div class="reservation-session-overlay">
    <v-container class="form-container">
      <h1 class="title">Réserver une session</h1>
      <!-- Sélecteur de date -->
      <v-row class="form-group">
        <v-col cols="12">
          <v-date-picker v-model="selectedDate" @input="updatePrixSession" class="full-width-calendar"></v-date-picker>
        </v-col>
      </v-row>

      <!-- Nombre d'heures -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-select v-model="selectedHours" :items="availableHours" label="Nombre d'heures" outlined dense></v-select>
        </v-col>
      </v-row>

      <!-- Case à cocher pour accepter la politique de confidentialité -->
      <v-row class="form-group">
        <v-col cols="12">
          <v-checkbox v-model="privacyPolicyAccepted" label="Accepter la politique de confidentialité" dense></v-checkbox>
        </v-col>
      </v-row>

      <!-- Prix de la session -->
      <v-row class="form-group">
        <v-col cols="12">
          <p>Prix de la session: {{ prixSession }} euros</p>
        </v-col>
      </v-row>

      <!-- Bouton de validation -->
      <v-row class="form-group">
        <v-col cols="12">
          <router-link :to="privacyPolicyAccepted ? '/payment' : ''">
            <v-btn :disabled="!privacyPolicyAccepted" color="black" dark @click="submitForm">Continuer</v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  // Variables pour stocker les informations du formulaire
  const selectedDate = ref(new Date());
  const selectedHours = ref(1);
  const privacyPolicyAccepted = ref(false);

  // Calcul du prix de la session en fonction du nombre d'heures
  const prixSession = computed(() => {
    return selectedHours.value * 20;
  });

  // Liste des heures disponibles
  const availableHours = [...Array(12).keys()].map(hour => hour + 1);

  // Fonction pour soumettre le formulaire
  const submitForm = () => {
    // Effectuer des actions avec les données du formulaire
    console.log("Date de la session:", selectedDate.value);
    console.log("Nombre d'heures:", selectedHours.value);
    console.log("Prix de la session:", prixSession.value);

    // Réinitialiser les valeurs du formulaire après soumission
    selectedDate.value = new Date();
    selectedHours.value = 1;
  };

  // Fonction appelée lors de la sélection d'une nouvelle date
  const updatePrixSession = () => {
    prixSession.value = selectedHours.value * 20;
  };
</script>

<style scoped>
  .reservation-session-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .form-container {
    max-width: 800px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgb(0, 0, 0);
  }

  .title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .full-width-calendar {
    width: 100%;
  }
</style>
