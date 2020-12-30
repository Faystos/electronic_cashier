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
    const tData = this.createData(arr);
    const tBody = `
      <tbody>
        ${tData}
      </tbody>    
    `;
    return tBody;
  };

  createData = arr => {
    return arr.map(el => {     
      const { name, post } = el;      
      const tName = this.inputName(name);
      const tPost = this.intupPost(post);
      const tComment = this.inputCommentsLength(post);
      return this.inputData(tName, tPost, tComment);
    }).join('');
  }

  inputName = name => {
    return ` <td class='main_td'>${name}</td>`;
  }

  intupPost = post => {
    return post.map(post => {
      return `
        <tr>
          <td>Пост: ${post.title}</td>
        </tr>  
      `;
    }).join('');
  }

  inputCommentsLength = post => {
    return post.map(post => {
      return `
        <tr>
          <td class='comment_td'>${post.comment.length}</td>
        </tr>  
      `;
    }).join('');
  }

  inputData = (name, post, comment) => {
    return `
      <tr>
        ${name}
        <td class='main_td'>
          <table>
            ${post}      
          </table>
        </td>
        <td class='main_td'>
          <table>
            ${comment}      
          </table>
        </td>
      </tr>
    `;
  }
}