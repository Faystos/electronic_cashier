import '../styles/index.scss';
import services from  './services/Services';
import Store from './store/Store.js';
import Table from './views/Table';

const store = new Store(services);
const table = new Table();
// const tComments = document.querySelectorAll('.comment_td');

document.addEventListener('DOMContentLoaded', () => {
  initApp();  
});

async function initApp() {
  await store.init();
  table.init(store.normalisePerson);

  const tComments = document.querySelectorAll('.comment_td');
  tComments.forEach(comment => {
    comment.addEventListener('click', ({target})=> {

      console.log(store.init());
      
      
      initApp();
    });
  });
  
}


