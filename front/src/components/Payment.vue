<script setup>
  import { ref } from 'vue';
  import { loadStripe } from '@stripe/stripe-js';

  // Variable pour stocker les informations du formulaire de paiement
  const cardNumber = ref('');
  const cardExpiry = ref('');
  const cardCvc = ref('');

  // Prix de la session calculé dans le composant reservationsession
  const prixSession = ref(40); // Définissez la valeur initiale à 0

  // Charger Stripe avec votre clé publique
  const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

  // Fonction pour gérer le paiement
  const handlePayment = async () => {
    try {
      // Vérifier si les champs du formulaire sont valides avant de continuer
      if (!validateForm()) {
        // Si les champs ne sont pas valides, ne pas traiter le paiement
        return;
      }

      // Créer un token de carte de crédit avec les informations du formulaire
      const stripe = await stripePromise;
      const { token } = await stripe.createToken({
        card: {
          number: cardNumber.value,
          exp_month: cardExpiry.value.split('/')[0],
          exp_year: cardExpiry.value.split('/')[1],
          cvc: cardCvc.value,
        },
      });

      // Envoyer le token à votre serveur pour traitement
      console.log('Token de carte de crédit:', token);

      // Effectuer d'autres actions nécessaires, telles que la redirection vers une page de confirmation
    } catch (error) {
      console.error('Erreur lors du traitement du paiement:', error);
      // Gérer les erreurs de paiement et fournir un retour d'information à l'utilisateur
    }
  };

  // Fonction pour valider les champs du formulaire
  const validateForm = () => {
    // Implémentez les règles de validation appropriées pour les champs du formulaire
    // Par exemple, vérifiez si les champs ne sont pas vides, s'ils sont au bon format, etc.
    if (cardNumber.value.length !== 16) {
      alert('Numéro de carte invalide. Assurez-vous qu\'il contient 16 chiffres.');
      return false;
    }
    // Ajoutez d'autres règles de validation pour les champs de date d'expiration et de CVC si nécessaire
    return true;
  };
</script>

<template>
  <v-container class="payment-container">
    <h1 class="title">Règlement carte bancaire </h1>
    <!-- Prix de la session -->
    <v-row class="form-group">
      <v-col cols="12">
        <p>Prix de la session: {{ prixSession }} euros</p>
      </v-col>
    </v-row>

    <!-- Formulaire de paiement -->
    <v-form @submit.prevent="handlePayment">

      <!-- Champ de numéro de carte -->
      <v-row class="form-group">
        <v-col cols="12">
          <v-text-field v-model="cardNumber" label="Numéro de carte" outlined dense></v-text-field>
        </v-col>
      </v-row>

      <!-- Champ de date d'expiration -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-text-field v-model="cardExpiry" label="Date d'expiration (MM/YY)" outlined dense></v-text-field>
        </v-col>
      </v-row>

      <!-- Champ CVC -->
      <v-row class="form-group">
        <v-col cols="12" sm="6">
          <v-text-field v-model="cardCvc" label="CVC" outlined dense></v-text-field>
        </v-col>
      </v-row>

      <!-- Bouton de paiement -->
      <v-row class="form-group">
        <v-col cols="12">
          <v-btn color="black" dark type="submit">Payer</v-btn>
        </v-col>
      </v-row>

    </v-form>
  </v-container>
</template>

<style scoped>

  .payment-container {
    max-width: 800px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
