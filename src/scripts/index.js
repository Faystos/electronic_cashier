import '../styles/index.scss';
import services from  './services/Services';
import Store from './store/Store.js';
import Table from './views/Table';

const store = new Store(services);
const table = new Table();

document.addEventListener('DOMContentLoaded', () => {
  initApp();  
});


async function initApp() {
  await store.init(); 
  table.init(store.normalisePerson);
  // console.log(store.normalisePerson); 
}

