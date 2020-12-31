import '../styles/index.scss';
import services from  './services/Services';
import Store from './store/Store.js';
import Table from './views/Table';
import Preloader from './views/Preloader';

const store = new Store(services);
const table = new Table();
const preloader = new Preloader();

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  await store.init();
  table.init(store.normalisePerson);
  const tComment = document.querySelectorAll(`.comment_td`);
  updateTable(tComment, initApp);  
}

function updateTable (tComment, promise) {
  tComment.forEach(el => {   
    el.addEventListener('click', ()=> {
      el.innerHTML = '';
      el.innerHTML = preloader.preloaderInit();
      promise()
      .then(() => {
        document.querySelector(`.main_table`).remove();    
      });      
    });
  });
}