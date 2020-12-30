import '../styles/index.scss';
import services from  './services/Services';
import Store from './store/Store.js';
import Table from './views/Table';
import Preloader from './views/Preloader';

const store = new Store(services);
const table = new Table();
const preloader = new Preloader();
console.log(preloader.preloaderInit());


document.addEventListener('DOMContentLoaded', () => {
  initApp();

});

async function initApp() {
  await store.init();
  table.init(store.normalisePerson); 
 
  
  
  const tComment = document.querySelectorAll(`.comment_td`);

  tComment.forEach(el => {
   
    el.addEventListener('click', ()=> {
      el.innerHTML = '';
      el.innerHTML = preloader.preloaderInit();
      initApp()
      .then(() => {
        document.querySelector(`.main_table`).remove();    
      });
      
      
    });
  });
}


