<template>
  <v-container class="form-container">
    <h1>Réserver une session</h1>
    <!-- Formulaire -->
    <v-form @submit.prevent="submitForm">

      <!-- Jour -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-text-field v-model="sessionDay" label="Jour de la session" outlined type="date" required></v-text-field>
        </v-col>
      </v-row>

      <!-- Heure de début -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-text-field v-model="startTime" label="Heure de début" outlined type="time" required></v-text-field>
        </v-col>
      </v-row>

      <!-- Heure de fin -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-text-field v-model="endTime" label="Heure de fin" outlined type="time" required></v-text-field>
        </v-col>
      </v-row>

      <!-- Ingénieur son -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-select v-model="soundEngineer" label="Ingénieur son" outlined required>
            <v-list-item v-for="engineer in engineers" :key="engineer" :value="engineer">{{ engineer }}</v-list-item>
          </v-select>
        </v-col>
      </v-row>

      <!-- Mix et mastering -->
      <v-row class="form-group">
        <v-col cols="12">
          <v-checkbox v-model="mixAndMaster" label="Oui, je veux un mix et un mastering"></v-checkbox>
        </v-col>
      </v-row>

      <!-- Bouton de validation -->
      <v-row class="form-group">
        <v-col cols="12">
          <v-btn color="primary" type="submit">Valider</v-btn>
        </v-col>
      </v-row>

    </v-form>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  // Variables pour stocker les informations du formulaire
  const sessionDay = ref('');
  const startTime = ref('');
  const endTime = ref('');
  const soundEngineer = ref('');
  const mixAndMaster = ref(false);

  // Liste des ingénieurs son
  const engineers = ["Ingénieur 1", "Ingénieur 2", "Ingénieur 3"];

  // Fonction pour soumettre le formulaire
  const submitForm = () => {
    // Effectuer des actions avec les données du formulaire
    console.log("Jour de la session:", sessionDay.value);
    console.log("Heure de début:", startTime.value);
    console.log("Heure de fin:", endTime.value);
    console.log("Ingénieur son:", soundEngineer.value);
    console.log("Mix et mastering:", mixAndMaster.value);

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
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
  }

  .form-group {
    margin-bottom: 20px;
  }
</style>
