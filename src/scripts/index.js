import '../styles/index.scss';
import services from  './services/Services';
import Store from './store/Store.js';

const store = new Store(services);

document.addEventListener('DOMContentLoaded', () => {
  initApp();  
});


async function initApp() {
  await store.init(); 
  console.log(store.normalisePerson); 
}

