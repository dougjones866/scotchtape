import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheButton from './components/TheButton.vue';
import MainBorder from './components/UI/MainBorder.vue';
import NavBar from './components/UI/NavBar.vue';
import Popup from './components/UI/Popup.vue'
import BigPopup from './components/UI/BigPopup.vue'
import Bulletin from './components/Bulletin.vue'
import ButtonList from './components/UI/ButtonList.vue'
import IconList from './components/IconList.vue'
import Goat from './components/Goat.vue';
import Info from './components/Info.vue';
// import TheCard from './components/TheCard.vue';
// import BlogEntry from './components/BlogEntry.vue';
// import NewEntry from './components/NewEntry.vue';

const app = createApp(App)

app.component('the-header', TheHeader);
app.component('the-footer', TheFooter);
app.component('the-button', TheButton);
app.component('main-border', MainBorder);
app.component('popup', Popup);
app.component('big-popup', BigPopup);
app.component('bulletin', Bulletin);
app.component('button-list', ButtonList);
app.component('nav-bar', NavBar);
app.component('icon-list', IconList);
app.component('goat', Goat);
app.component('info', Info);
// app.component('the-card', TheCard);
// app.component('blog-entry', BlogEntry);
// app.component('new-entry', NewEntry);


app.use(router).mount('#app')
