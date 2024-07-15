<template>
  <div class="container">
    <div class="hanafuda">
      <img src="/assets/images/hjan.jpg" alt="Janurary Hanafuda" />
      <img src="/assets/images/hfeb.jpg" alt="Feburary Hanafuda" />
      <img src="/assets/images/hmar.jpg" alt="March Hanafuda" />
      <img src="/assets/images/hapr.jpg" alt="April Hanafuda" />
    </div>
</div>
<div class="container2">
  <img src="/assets/images/yagi.png" alt="profile" />
</div>
</template>

<script setup>

</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  
}

.hanafuda {
  border-style: solid;
  background-color: red;
  grid-area: 1 / 1 / 6 / 6;
}
.hanafuda img {
  max-width: 30%;
  height: auto;
  padding: 10px;
  margin: 10px;
  border-style: solid;
  background-color: white;
}
.container2 {
  background-color: white;
  margin-bottom: 100px;
}
.container2 img {
  max-width: 40%;
  border-style: solid;
  border-top: none;
}
@media only screen and (max-width: 500px) {
  .hanafuda {
    width: 100%;
  }
  .hanafuda img {
    max-width: 40%;
  }
  .container2 img {
    max-width: 40%;
  }
}
</style>
