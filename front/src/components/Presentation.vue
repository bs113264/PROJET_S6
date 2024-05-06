<template>
  <div class="container">
    <h1 class="title">Présentation</h1>
    <div class="textbox">
      <h2 class="subtitle">Écrivez votre présentation</h2>
      <textarea v-model="presentationText" rows="10" placeholder="Écrivez votre présentation ici..."></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Presentation',
    data() {
      return {
        presentationText: ''
      };
    }
  };
</script>

<style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .title {
    text-align: center;
    margin-bottom: 20px;
  }

  .textbox {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }

  .subtitle {
    font-size: 20px;
    margin-bottom: 10px;
  }

  textarea {
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 10px;
    box-sizing: border-box;
    resize: vertical;
  }
</style>
