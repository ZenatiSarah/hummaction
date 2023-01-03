<template>
  <div class="home">
    <div class="auth_img">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>

    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "loginView",
  components: {
    Login,
  },
};
</script>


<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth_img {
  width: 20rem;
  height: 20rem;
}

img {
  width: 100%;
  height: 100%;
}
</style>
