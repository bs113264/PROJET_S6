<template>
  <div>
    <!-- Bouton "Book ta Session" -->
    <v-btn class="book-session-btn" @click="showDialog = true">
      Book ta Session !
    </v-btn>

    <!-- Formulaire dans un dialog -->
    <v-dialog v-model="showDialog" persistent max-width="600px">
      <!-- Contenu de votre formulaire -->
    </v-dialog>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  // Variable pour contrôler l'affichage du dialog
  const showDialog = ref(false);
</script>

<style scoped>
  .background-container {
    position: relative; /* Permet de positionner les éléments enfants relativement à ce conteneur */
    width: 100%;
    height: 100%;
  }

  .logo {
    width: 100%; /* Ajustez la taille de votre logo */
    height: auto;
    z-index: 1; /* Assurez-vous que le logo est au-dessus du bouton */
  }

  .book-session-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -300%);
    z-index: 2; /* Assurez-vous que le bouton est au-dessus du logo */
    font-size: 24px; /* Ajustez la taille du texte du bouton selon vos besoins */
    padding: 30px 20px; /* Ajustez les dimensions du bouton selon vos besoins */
    max-height: 40px;
  }
</style>
