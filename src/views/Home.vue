<template>
  <div class="maincontainer">
    <div class="goateyes">
    </div>  
    <div class="icon">
      <button @click="isActive = !isActive">
        <img src="../assets/images/icon.jpg" alt="profile" />
      </button>
      
    </div>
    <goat class="goateyes" />
    <div class="container">
      
      <div class="mainbox"></div>
      <info />
      <!-- <big-popup /> -->
      <div class="popups">
      <popup
        class="contentbox"
        v-if="isActive1"
        img="van.gif"
        @close="close1"
      />
      <popup
        class="contentbox2"
        v-if="isActive2"
        img="yagi.png"
        @close="close2"
      >
      </popup>
      <popup
        class="contentbox3"
        v-if="isActive3"
        img="yagihip.gif"
        @close="close3"
      >
      <h1>Yagi</h1>
      </popup>
    </div>
      <!-- <div class="profile">
        <img src="/assets/images/yagihip.gif" alt="profile" />
      </div> -->
    </div>
    
    <div class="iconbox">
      <icon-list />
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import IconList from '../components/IconList.vue';

const isActive1 = ref(true);
const isActive2 = ref(true);
const isActive3 = ref(true);

const close1 = () => {
  isActive1.value = !isActive1.value;
};

const close2 = () => {
  isActive2.value = !isActive2.value;
};

const close3 = () => {
  isActive3.value = !isActive3.value;
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  margin-bottom: 75px;
  /* width:100%;
    min-height: 600px; */
  position: relative;
}
.popups {
  display: inline-block;
}
.iconbox {
  position:fixed;
  bottom: 25px;
  display: flex;
  flex-direction: row;

}

.goateyes {
  
}


.profile {
}
.profile img {
  flex: 1;
  bottom: 8px;
  left: 10px;
  max-width: 630px;
  height: auto;
  position: fixed;
  z-index: -3;
}

.icon {
  z-index: 8;
  top: 100px;
}


.icon button {
  border: none;
  background: none;
  display: inline-block;
}
.icon button img:hover {
  max-width: 110px;
}


@media only screen and (max-width: 500px) {
  .mainContainer {
    width: 100%;
    /* border-top:solid; */
    border-left: none;
  }

  .profile img {
    width: 100%;
    position: fixed;
    z-index: -1;
    bottom: 1%;
  }
}

.icon {
  position: absolute;
  top: 100px;
  right: 10px;
  margin: 10px;
}
.icon img {
  border-radius: 250px;
  max-width: 100px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
