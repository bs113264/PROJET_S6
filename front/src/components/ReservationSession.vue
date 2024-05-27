<template>
  <div class="reservation-session-overlay">
    <v-container class="form-container">
      <h1 class="title">Réserver une session</h1>
      <!-- Sélecteur de date -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-date-picker v-model="selectedDate" :min="minDate" :max="maxDate" @input="updatePrixSession"></v-date-picker>
        </v-col>
      </v-row>

      <!-- Nombre d'heures -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-select v-model="selectedHours" :items="availableHours" label="Nombre d'heures" outlined dense></v-select>
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
          <router-link to="/payment">
            <v-btn color="black" dark @click="submitForm">Valider</v-btn>
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

  // Calcul du prix de la session en fonction du nombre d'heures
  const prixSession = computed(() => {
    return selectedHours.value * 20;
  });

  // Liste des heures disponibles
  const availableHours = [...Array(12).keys()].map(hour => hour + 1);

  // Limite de sélection pour les dates
  const minDate = new Date();
  minDate.setDate(minDate.getDate() - minDate.getDay()); // Début de la semaine actuelle
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() - maxDate.getDay() + 6); // Fin de la semaine actuelle

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
</style>
