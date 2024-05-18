<template>
  <div class="presentation-overlay">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="textbox">
          <v-card-text>
            <div class="presentation-text">
              <p>Bienvenue sur notre site !</p>
              <p>Nous sommes ravis de vous accueillir et de vous présenter nos services.
              Nous sommes un studio d'enregistrement situé au 125 rue de france, 06000 Nice</p>
            </div>
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
  };
</script>

<style scoped>

  .presentation-overlay {
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

  .textbox {
    border-radius: 10px;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);
    padding: 1px;
  }

  .presentation-text {
    font-size: 32px;
    line-height: 1.6;
  }
</style>
