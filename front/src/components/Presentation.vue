<template>
  <div class="presentation-overlay">
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="textbox">
          <v-card-text>
            <div class="presentation-text">
              <p>Bienvenue sur notre site !</p>
              <p>Liés par l’amitié, Khadim, Phara, Steven, Punch et Aristide ont toujours souhaité avancer dans une démarche artistique commune. Initialement implantée dans un box de parking sous l’association « 5am production », la structure est devenue celle des « Studios 5AM » en 2020, ouvrant ses nouvelles portes dans le centre-ville de Nice, sur la rue de France.  Aujourd’hui, Les Studios 5AM ont développé trois aspects de leur activité qui leur permettent de devenir des acteurs émergents de la culture artistique azuréenne.  En premier lieu, la structure propose à ses clients un ensemble de prestations audio-visuelles (enregistrement, mixage, mastering, réalisation vidéo, shootings et accompagnement artistique plus global). Avec la création de son label indépendant « Le Five », elle s’est également engagée à développer des artistes (Phara et Norhvn) et à les accompagner dans leur carrière musicale</p>
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .textbox {
    border-radius: 10px;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.9);
    padding: 1px;
    background-color: black;
  }

  .presentation-text {
    font-size: 32px;
    line-height: 1.6;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.9);
  }
</style>
