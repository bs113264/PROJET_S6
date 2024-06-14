<script setup>
  import { ref } from 'vue';
  import { loadStripe } from '@stripe/stripe-js';
  import { useRouter } from 'vue-router';

  // Variables pour stocker les informations du formulaire de paiement
  const cardNumber = ref('');
  const cardExpiry = ref('');
  const cardCvc = ref('');

  // Prix de la session calculé dans le composant reservationsession
  const prixSession = ref(40); // Définissez la valeur initiale à 0

  // Détails de la session
  const selectedDate = ref('2024-06-25'); // Exemple de date, à remplacer par la valeur réelle
  const selectedStartTime = ref('10:00'); // Exemple d'heure de début, à remplacer par la valeur réelle
  const selectedHours = ref(2); // Exemple de nombre d'heures, à remplacer par la valeur réelle

  // Résumé de la réservation
  const reservationSummary = ref('');

  // État du chargement
  const isLoading = ref(false);

  // Charger Stripe avec votre clé publique
  const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

  const router = useRouter();

  // Fonction pour gérer le paiement
  const handlePayment = async () => {
    try {
      // Vérifier si les champs du formulaire sont valides avant de continuer
      if (!validateForm()) {
        // Si les champs ne sont pas valides, ne pas traiter le paiement
        return;
      }

      // Activer l'état de chargement
      isLoading.value = true;

      // Simuler un délai de 5 secondes pour le traitement du paiement
      setTimeout(async () => {
        try {
          // Créer un token de carte de crédit avec les informations du formulaire
          const stripe = await stripePromise;
          const { token, error } = await stripe.createToken({
            card: {
              number: cardNumber.value,
              exp_month: cardExpiry.value.split('/')[0],
              exp_year: cardExpiry.value.split('/')[1],
              cvc: cardCvc.value,
            },
          });

          if (error) {
            throw error;
          }

          // Envoyer le token à votre serveur pour traitement
          console.log('Token de carte de crédit:', token);

          // Générer un code de session aléatoire
          const sessionCode = generateSessionCode();

          // Afficher un message de succès avec le code de session
          alert(`Paiement effectué avec succès. Veuillez vous présenter à votre rendez-vous muni de votre code de session: ${sessionCode}`);
        } catch (error) {
          console.error('Erreur lors du traitement du paiement:', error);
          alert('Erreur lors du traitement du paiement. Veuillez réessayer.');
        } finally {
          // Désactiver l'état de chargement
          isLoading.value = false;
        }
      }, 5000); // Délai de 5 secondes
    } catch (error) {
      console.error('Erreur lors du traitement du paiement:', error);
      // Désactiver l'état de chargement en cas d'erreur
      isLoading.value = false;
      // Gérer les erreurs de paiement et fournir un retour d'information à l'utilisateur
    }
  };

  // Fonction pour générer un code de session aléatoire
  const generateSessionCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
    return code;
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

  const goToReservation = () => {
    router.push('/reservation');
  };

  // Mettre à jour le résumé de la réservation
  const updateReservationSummary = () => {
    reservationSummary.value = `
      Merci d'avoir choisi LesStudiosam,
      vous avez réservé le ${selectedDate.value} à ${selectedStartTime.value}
      pour une durée de ${selectedHours.value} heure(s).
      Le prix de la session est de ${prixSession.value} euros.
    `;
  };

  // Mettre à jour le résumé de la réservation initialement
  updateReservationSummary();
</script>

<template>
  <v-container class="payment-container">
    <h1 class="title">Règlement carte bancaire </h1>
    <!-- Prix de la session -->
    <v-row class="form-group">
      <v-col cols="12">
      </v-col>
    </v-row>

    <!-- Résumé de la réservation -->
    <v-row class="form-group">
      <v-col cols="12">
        <v-card class="mx-auto" outlined>
          <v-card-text class="card-text">{{ reservationSummary }}</v-card-text>
        </v-card>
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

      <!-- Bouton de retour -->
      <v-row class="form-group">
        <v-col cols="12">
          <v-btn color="black" dark @click="goToReservation">Retour</v-btn>
        </v-col>
      </v-row>

      <!-- Roue de chargement -->
      <v-row class="form-group" v-if="isLoading">
        <v-col cols="12" class="d-flex justify-center">
          <v-progress-circular indeterminate color="black"></v-progress-circular>
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

  .card-text {
    text-shadow: black;
    font-size: medium;
    box-shadow: black;
  }

  .form-group {
    margin-bottom: 20px;
  }
</style>
