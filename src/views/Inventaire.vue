<template>
  <div class="about">
    <h1>Inventaire</h1>
    <Card />
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: { Card },
  name: "inventaireView",
  component: {
    name: Card,
  },
};
</script>