<template>
    <div class="about">
      <div class="profile">
        <img src="/assets/images/scotch.jpg" alt="profile" />
      </div>
      <div class="info">
        <h3 class="aboutpage">
          Testing placeholder
          Ever seen a goat? Do u understand the brutish relentless disregard
          for authority between those horns? There is only power in that body and
          only rage with which to unleash it. Stampede together. I am an animator.
        </h3>
      </div>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  
  <style scoped>
  .about {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    /* margin-bottom: 100px; */
    height: 600px;
  }
  .info {
    padding: 15px;
    /* max-width: 300px; */
    height: auto;
    flex: 50%;
  }
  .aboutpage {
      font-weight: bold;
  }
 
  .profile img {
    border-right:solid;
    border-top: solid;
    border-bottom: solid;
    max-height: 600px;
    width: auto;
    /* padding: 10px; */
    /* margin: 10px; */
     flex: 50%
  }
  @media only screen and (max-width: 500px) {
    .profile img {
      width: 100%;
      border-bottom:solid;
      margin-bottom: 15px;
    }
    .aboutpage {
          margin-bottom: 75px;
    }
  }
  </style>