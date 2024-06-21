<template>
  <v-container class="gallery-container">
    <v-row>
      <v-col
        v-for="index in images"
        :key="index"
        cols="12"
        sm="6"
        md="3"
        class="gallery-item"
      >
        <v-img
          :src="getImageUrl(index)"
          class="gallery-image"
          :alt="'Event ' + index"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

  const images = Array.from({ length: 12 }, (_, i) => i + 1).slice(4); // Crée une liste des index d'images et coupe les 4 premiers

  const getImageUrl = (index) => {
    return new URL(`../assets/event${index}.png`, import.meta.url).href;
  };
</script>

<style scoped>
  .gallery-container {
    padding: 20px;
    background-color: #000000;
  }

  .gallery-item {
    margin-bottom: 20px;
  }

  .gallery-image {
    width: 100%;
    height: 800px; /* Définissez une hauteur fixe pour les images */
    object-fit: cover; /* Cette propriété permet de maintenir le ratio d'aspect des images */
    border-radius: 10px;
  }
</style>
