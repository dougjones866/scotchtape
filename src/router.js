import { createRouter, createWebHistory} from 'vue-router'
const Home = () => import('./views/Home.vue');
const About = () => import('./views/About.vue');
// const Goats = () => import('./views/Goats.vue');
const Gallery = () => import('./views/Gallery.vue');
const Contact = () => import('./views/Contact.vue');

const router = createRouter ({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, alias: '/scotchtape' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    // { path: '/goats', component: Goats },
    { path: '/contact', component: Contact },
    { path: '/gallery', component: Gallery },
  ]
  })
  

 

export default router;