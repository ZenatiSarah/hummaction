<template>
  <section>
    <article>
      <p>Titre</p>
      <p>Catégorie</p>
      <p>Quantité</p>
      <p>Statut</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "cardComponent",
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
}
article {
  display: flex;
  border: 1px solid;
  margin-bottom: 2rem;
  width: 90%;
  padding: 1rem;
  height: 4rem;
  justify-content: space-around;
}
</style>