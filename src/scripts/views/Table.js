export default class Table {

  constructor() {
    this.body = document.querySelector('body');
  }
  

  init = arr => {
    const mainTable = this.createMainTable(arr);    
    this.body.appendChild(mainTable);   
  }

  createMainTable = (arr) => {    
    const table = document.createElement('table');
    table.classList.add('main_table');
    const tHead = this.createTHead();  
    const tBody = this.createTBody(arr);    
    table.insertAdjacentHTML('afterbegin', tHead);
    table.insertAdjacentHTML('beforeend', tBody);    
    return table;
  }

  createTHead = () => {
    const tHead = `
      <thead>
        <tr>
          <td class='main_td'>Имя(автора)</td>
          <td class='main_td'>Название(поста)</td>
          <td class='main_td'>Количество(комментариев)</td>
        </tr>
      </thead>
    `;
    return tHead;
  }

  createTBody = (arr) => {
    const tName = arr.map(el => {     
      const { post } = el;      
     
      const tPost = post.map(post => {
        return `
        <tr>
          <td>Пост: ${post.title}</td>
        </tr>  
        `;
      }).join(' ');

      const tComment = post.map(post => {
        return `
        <tr>
          <td>${post.comment.length}</td>
        </tr>  
        `;
      }).join(' ');


      return`
        <tr>
          <td class='main_td'>${el.name}</td>
          <td class='main_td'>
            <table>
              ${tPost}      
            </table>
          </td>
          <td class='main_td'>
            <table>
              ${tComment}      
            </table>
          </td>
        </tr>
      `;
    }).join(' ');
    

    const tBody = `
      <tbody>
        ${tName}
      </tbody>    
    `;

    return tBody;
  };
}