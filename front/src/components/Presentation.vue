<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="textbox">
          <v-card-text>
            <div class="presentation-text">
              <p>Bienvenue sur notre site !</p>
              <p>Nous sommes ravis de vous accueillir et de vous présenter nos services.
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Presentation',
  };
</script>

<style scoped>
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
