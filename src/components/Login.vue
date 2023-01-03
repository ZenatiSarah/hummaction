<template>
  <div class="home">
    <div id="form_login">
      <p>
        <input
          id="pseudo"
          v-model="pseudo"
          type="text"
          name="pseudo"
          placeholder="Pseudo"
        />
      </p>
      <p>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          placeholder="Mot de passe"
        />
      </p>
      <div v-if="errors.length">
        <p v-for="error in errors" :key="error">{{ error }}</p>
      </div>
      <p>
        <button @click="checkForm">Envoyez !</button>
      </p>
    </div>
  </div>
</template>

<script>
//<input type="submit" value="submit" /> dans le formulaire
// Dans la balise form : @submit="" methods="post"
export default {
  name: "loginForm",
  data() {
    return {
      pseudo: null,
      password: null,
      errors: [],
    };
  },
  methods: {
    checkForm(e) {
      e.preventDefault();
      if (this.pseudo && this.password != null) {
        console.log("ok !");
      } else {
        this.errors.push("Pseudo ou mot de passe incorrect !");
      }
    },
  },
};
</script>
