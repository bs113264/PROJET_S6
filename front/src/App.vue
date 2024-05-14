<template>
  <v-app>
    <v-app-bar class="h-auto">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title><b>FIVE MOB</b></v-app-bar-title>
      <v-btn icon color="black">
        <v-icon>check</v-icon>
      </v-btn>
      <v-btn icon color="black">
        <v-icon>check</v-icon>
      </v-btn>
      <v-btn icon @click="showDialog = true" color="black">
        <v-icon>person</v-icon>
      </v-btn>
      <template v-slot:append></template>
    </v-app-bar>

    <!-- Barre latérale -->
    <v-navigation-drawer
      v-model="drawer"
      app
      style="background-color: transparent">
      <v-btn color="white" dark class="my-4" to="/presentation">Qui sommes nous ?</v-btn>
      <v-btn color="white" dark class="my-4" to="/services">Services</v-btn>
      <v-btn color="white" dark class="my-4" to="/reservation">Réserve ta session</v-btn>
      <v-btn color="white" dark class="my-4" to="/rgpd">Politique confidentialité</v-btn>
      <v-btn color="white" dark class="my-4" to="/contact">Nous contacter</v-btn>
    </v-navigation-drawer>

    <main class="w-100 bg-amber h-100 w-100">
      <v-sheet fluid class="background-container">
        <!-- Contenu principal -->
        <div class="content">
          <router-view />
        </div>
      </v-sheet>
    </main>

    <!-- Dialogue pour la connexion/création de compte -->
    <v-dialog v-model="showDialog" persistent max-width="600px">
      <v-card>
        <v-card-title color="black">
          Création ou Connexion de Compte
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-switch
                v-model="isCreatingAccount"
                label="Déjà inscrit ?"
                color="black"></v-switch>
            </v-col>
          </v-row>
          <!-- Formulaire -->
          <v-form @submit.prevent="submitForm">
            <!-- Si on crée un compte, on affiche les champs supplémentaires -->
            <template v-if="isCreatingAccount">
              <v-text-field v-model="firstName" label="Prénom"></v-text-field>
              <v-text-field v-model="lastName" label="Nom"></v-text-field>
            </template>
            <v-text-field
              v-model="email"
              label="Email"
              type="email"></v-text-field>
            <v-text-field
              v-model="password"
              label="Mot de passe"
              type="password"></v-text-field>
            <v-btn color="black" dark type="submit">
              {{ isCreatingAccount ? 'Créer un compte' : 'Se connecter' }}
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="black" dark @click="showDialog = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';

  const showDialog = ref(false);
  const isCreatingAccount = ref(true); // Par défaut, le formulaire affiche la création de compte
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const drawer = ref(false);
  const tab = ref(null);

  const items = [
    { text: 'Qui sommes nous ?' },
    { text: 'Services' },
    { text: 'Réserve ta session'},
    { text:  'Politique de confidentialité'},
    { text:  'Nous contacter'},
    // Ajoutez d'autres sections selon vos besoins
  ];

  function submitForm() {
    if (isCreatingAccount.value) {
      // Traitement pour la création de compte
      console.log('Créer un compte');
    } else {
      // Traitement pour la connexion
      console.log('Se connecter');
    }

    // Réinitialiser les champs du formulaire
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    password.value = '';

    // Fermer la boîte de dialogue
    showDialog.value = false;
  }
</script>

<style scoped>
  .background-container {
    background-image: url('assets/logo.jpg');
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100%;
    padding-top: 56px; /* Taille de la barre de navigation (ajustez selon votre cas) */
  }

  .content {
    /* Ajoutez du style au contenu principal de votre studio d'enregistrement */
  }
</style>
