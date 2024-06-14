<template>
  <v-app>
    <v-app-bar color="black" class="h-auto">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title><b>FIVE</b></v-app-bar-title>
      <!-- Bouton Instagram avec lien -->
      <v-btn icon href="https://www.instagram.com/lefivemob/" target="_blank" color="white">
        <v-icon>instagram</v-icon>
      </v-btn>
      <!-- Bouton Facebook avec lien -->
      <v-btn icon href="https://www.facebook.com/lesstudios5am/about/" target="_blank" color="white">
        <v-icon>facebook</v-icon>
      </v-btn>
      <!-- Bouton pour afficher la boîte de dialogue de connexion -->
      <v-btn icon @click="authenticateWithInstagram" color="white">
        <v-icon>person</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Barre latérale -->
    <v-navigation-drawer
      v-model="drawer"
      app
      style="background-color: transparent">
      <v-btn color="white" dark class="my-4" to="/presentation">Qui sommes nous ?</v-btn>
      <v-btn color="white" dark class="my-4" to="/services">Services</v-btn>
      <v-btn color="white" dark class="my-4" to="/reservation">Réserve ta session</v-btn>
      <v-btn color="white" dark class="my-4" to="/rgpd">Nos Events</v-btn>
      <v-btn color="white" dark class="my-4" to="/contact">Nous Contacter</v-btn>
    </v-navigation-drawer>

    <main class="w-100 bg-amber h-100 w-100">
      <v-sheet fluid class="background-container">
        <!-- Contenu principal -->
        <div class="content">
          <router-view />
        </div>
      </v-sheet>
    </main>

    <!-- Footer avec le bouton pour afficher la politique de confidentialité -->
    <v-footer app class="footer">
      <v-spacer></v-spacer>
      <v-btn color="white" @click="showPrivacyPolicy = true" class="privacy-btn">Politique de confidentialité</v-btn>
      <v-spacer></v-spacer>
    </v-footer>

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

    <!-- Dialogue pour afficher la politique de confidentialité -->
    <v-dialog v-model="showPrivacyPolicy" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">Politique de confidentialité</span>
        </v-card-title>
        <v-card-text>
          <v-textarea
            v-model="privacyPolicyText"
            label="Politique de confidentialité"
            outlined
            rows="10"
            readonly
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="acceptPrivacyPolicy">Accepter</v-btn>
          <v-btn color="red" @click="declinePrivacyPolicy">Décliner</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="black" dark @click="showPrivacyPolicy = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';

  const showDialog = ref(false);
  const isCreatingAccount = ref(true); // Par défaut, le formulaire affiche la création de compte
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const drawer = ref(false);
  const tab = ref(null);

  const showPrivacyPolicy = ref(false);

  const privacyPolicyText = ref(`
Conditions Générales d'Utilisation (CGU)

1. Présentation du site
Le site FiveMob est édité par LesStudios5am, société SAS, immatriculée au registre du commerce et des sociétés sous le numéro [numéro RCS], dont le siège social est situé 125 rue de France 06000 Nice.

2. Objet
Les présentes conditions d'utilisation ont pour objet de définir les modalités selon lesquelles les utilisateurs accèdent et utilisent le site FiveMob.

3. Acceptation des conditions
En accédant au site et en l'utilisant, l'utilisateur reconnaît avoir pris connaissance et accepté sans réserve les présentes conditions d'utilisation.

4. Propriété intellectuelle
Le contenu du site, incluant notamment les textes, images, logos, et vidéos, est protégé par le droit d'auteur et autres droits de propriété intellectuelle détenus par LesStudios5am ou ses concédants. Toute reproduction ou utilisation non autorisée du contenu est strictement interdite.

5. Responsabilité
LesStudios5am ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.

Conditions Générales de Vente (CGV)

1. Champ d'application
Les présentes conditions générales de vente s'appliquent à toutes les ventes de produits effectuées par LesStudios5am sur le site FiveMob.

2. Commande
Les commandes passées sur le site sont soumises à l'acceptation préalable des présentes CGV. Le client déclare avoir pris connaissance des CGV avant de passer sa commande.

3. Prix
Les prix des produits sont indiqués en euros et sont susceptibles d'être modifiés à tout moment. Les frais de livraison sont à la charge du client et sont précisés lors du processus de commande.

4. Paiement
Le paiement s'effectue en ligne par carte bancaire ou tout autre moyen de paiement accepté par LesStudios5am. La commande est validée à réception du paiement.

5. Livraison
Les produits sont livrés à l'adresse indiquée par le client lors du processus de commande. Les délais de livraison sont donnés à titre indicatif et LesStudios5am ne saurait être tenue responsable des retards de livraison imputables au transporteur.

6. Droit de rétractation
Le client dispose d'un délai de rétractation de 14 jours à compter de la réception des produits pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.

Politique de confidentialité

Cette Politique de confidentialité décrit comment LesStudios5am collecte, utilise et protège les informations personnelles que vous nous fournissez lorsque vous utilisez notre site web de réservation de session.

Collecte et utilisation des informations personnelles

Lorsque vous utilisez notre site web, nous pouvons collecter les informations personnelles suivantes :
•\tNom
•\tPrénom
•\tAdresse e-mail

Nous collectons ces informations dans le but de :
•\tIdentifier l'utilisateur et faciliter l'utilisation du site web.
•\tTransmettre les informations de réservation de session au client.

Les informations personnelles collectées sont stockées dans notre base de données sécurisée et ne sont accessibles qu'au DSI de l'entreprise.
Conservation des données

Nous conserverons vos informations personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, y compris pour satisfaire à toute obligation légale, comptable ou de reporting.
Partage des informations personnelles

Nous ne partagerons pas vos informations personnelles avec des tiers sans votre consentement préalable, sauf si cela est nécessaire pour satisfaire à une obligation légale.
Droits en matière de protection des données

Vous avez le droit d'accéder à vos informations personnelles, de les rectifier, de les supprimer et de limiter leur traitement. Vous avez également le droit de vous opposer au traitement de vos informations personnelles. Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail suivante : 5amsouth@gmail.com.

Consentement parental
Nous ne collectons pas intentionnellement les informations personnelles des enfants de moins de 16 ans sans le consentement préalable des parents ou tuteurs. Si vous pensez que nous avons collecté des informations personnelles sur un enfant de moins de 16 ans sans le consentement parental, veuillez nous contacter afin que nous puissions supprimer ces informations.

Modifications de la Politique de confidentialité
Nous nous réservons le droit de modifier cette Politique de confidentialité à tout moment. Les modifications prendront effet immédiatement après leur publication sur le site web.
En continuant à utiliser notre site web, vous consentez à notre Politique de confidentialité.

Si vous avez des questions concernant cette Politique de confidentialité, veuillez nous contacter à l'adresse e-mail suivante : 5amsouth@gmail.com.
`);

  const CLIENT_ID = '3139174822882261';
  const CLIENT_SECRET = '94a3ae96d613fb40a9d0155f85cd0228';
  const REDIRECT_URI = 'https://www.google.fr/'; // Remplacez par l'URI de redirection configurée

  const router = useRouter();

  const authenticateWithInstagram = () => {
    const authUrl = `https://api.instagram.com/oauth/authorize?
    client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile&response_type=code`;
    window.location.href = authUrl;
  };

  const handleInstagramCallback = async (code) => {
    try {
      const response = await axios.post('https://api.instagram.com/oauth/access_token', {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code: code
      });

      const accessToken = response.data.access_token;
      const userResponse = await axios.get(`https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`);

      const user = userResponse.data;
      console.log('User logged in:', user);

      // Enregistrer les informations utilisateur dans votre système ou gestion d'état
      // ...

      // Rediriger l'utilisateur vers la page souhaitée
      router.push('/presentation');
    } catch (error) {
      console.error('Error during Instagram authentication:', error);
    }
  };

  // Vérifier si le code d'authentification est présent dans l'URL de redirection
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  if (code) {
    handleInstagramCallback(code);
  }

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

  function acceptPrivacyPolicy() {
    alert("Vous avez accepté la politique de confidentialité de notre site. Bonne navigation !");
    showPrivacyPolicy.value = false;
  }

  function declinePrivacyPolicy() {
    alert("Vous n'avez pas accepté la politique de confidentialité de notre site. L'utilisation de ce dernier ne vous est donc pas autorisée !");
    showPrivacyPolicy.value = false;
  }
</script>

<style scoped>
  .background-container {
    background-image: url('assets/logo2.PNG');
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

  .footer {
    background-color: black;
    color: white;
  }

  .privacy-btn {
    color: black;
    background-color: white;
  }
</style>
