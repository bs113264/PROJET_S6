<template>
  <v-container class="form-container">
    <h1 class="title">Réserver une session</h1>
    <!-- Formulaire -->
    <v-form @submit.prevent="submitForm">

      <!-- Jour -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-text-field v-model="sessionDay" label="Jour de la session" outlined type="date" required dense></v-text-field>
        </v-col>
      </v-row>

      <!-- Heure de début -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-text-field v-model="startTime" label="Heure de début" outlined type="time" required dense></v-text-field>
        </v-col>
      </v-row>

      <!-- Heure de fin -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-text-field v-model="endTime" label="Heure de fin" outlined type="time" required dense></v-text-field>
        </v-col>
      </v-row>

      <!-- Ingénieur son -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-select v-model="soundEngineer" label="Ingénieur son" outlined required :items="engineers" dense></v-select>
        </v-col>
      </v-row>

      <!-- Mix et mastering -->
      <v-row class="form-group">
        <v-col cols="12">
          <v-checkbox v-model="mixAndMaster" label="Je veux un mastering de mon morceau" dense></v-checkbox>
          <v-checkbox v-model="mixAndMaster" label="Je veux un mix de mon morceau" dense></v-checkbox>
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
            <v-btn color="black" dark type="submit">Valider</v-btn>
          </router-link>
        </v-col>
      </v-row>

    </v-form>
  </v-container>
</template>

<script setup>
  import { ref, computed } from 'vue';

  // Variables pour stocker les informations du formulaire
  const sessionDay = ref('');
  const startTime = ref('');
  const endTime = ref('');
  const soundEngineer = ref('');
  const mixAndMaster = ref(false);

  // Liste des ingénieurs son
  const engineers = ["DAF SHADOW", "BOSKO"];

  // Calcul du prix de la session en fonction du nombre d'heures
  const prixSession = computed(() => {
    const debut = new Date(`2000-01-01T${startTime.value}`);
    const fin = new Date(`2000-01-01T${endTime.value}`);
    const diffMillis = fin - debut;
    const diffHeures = Math.ceil(diffMillis / (1000 * 60 * 60));
    return diffHeures * 20;
  });

  // Fonction pour soumettre le formulaire
  const submitForm = () => {
    // Effectuer des actions avec les données du formulaire
    console.log("Jour de la session:", sessionDay.value);
    console.log("Heure de début:", startTime.value);
    console.log("Heure de fin:", endTime.value);
    console.log("Ingénieur son:", soundEngineer.value);
    console.log("Mix et mastering:", mixAndMaster.value);
    console.log("Prix de la session:", prixSession.value);

    // Réinitialiser les valeurs du formulaire après soumission
    sessionDay.value = '';
    startTime.value = '';
    endTime.value = '';
    soundEngineer.value = '';
    mixAndMaster.value = false;
  };
</script>

<style scoped>
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f4f4f4;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
