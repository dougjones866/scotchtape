<template>
    <div>
      <div class="container">
        <nav>
          <ul>
            <li>
              <div class="logo">
                <p>ScotchTapeOfficial</p>
                <!-- <img src="/assets/images/eyes.png"/> -->
              </div>
            </li>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/about">About</router-link>
            </li>
            <li>
              <router-link to="/goats">Goats</router-link>
            </li>
            <li>
              <router-link to="/gallery">Gallery</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </nav>

      </div>
      <div class="icon">
       <img src="/assets/images/icon.jpg" alt="profile" />
     </div>
      <!-- <div class="border"></div> -->
    </div>
  </template>
  
  
  
  <script setup>
 
  </script>
  
  
  <style scoped>
  .container {
    margin-bottom: 10px;
    display: inline-flex;
  }
  nav {
    align-items: center;
    margin: 20px;
  }
  .logo {
    border: thin solid;
    margin: 15px;
    padding: 10px;
    text-align: center;
    position: relative;
    
  }
  
  .logo img {
    width: 300px;
    height: auto;
    z-index: -1;
    
  }
  nav ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 5px;
    display: inline;
  }
  a {
    color: black;
  }
  a:link {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .border {
    border-style: solid;
    border-width: 0.1px;
    margin-left: 500px;
    margin-right: 500px;
  }
  .icon {
   position: absolute;
   top: 0;
   right: 0;
   margin: 10px;
 }
 .icon img {
   border-radius: 250px;
   max-width: 100px;
   height: auto;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 }
  </style>