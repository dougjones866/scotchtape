<template>
    <button>{{ btnText }}</button>   
</template>


<script setup>

const props = defineProps({
  btnText: {
    type: String,
    default: "Button",
  }
});
</script>

<style scoped>
button {
    font-family: "Courier New", Courier, monospace;
    border-style:none;
    color:white;
    background-color:black;
    padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
button:hover{
    font-weight:bold;
}
</style>