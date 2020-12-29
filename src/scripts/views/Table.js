export default class Table {

  constructor() {
    this.body = document.querySelector('body');
  }
  

  init = arr => {
    // console.log(arr);

    const mainTable = this.createMainTable(arr);
    console.log(mainTable);
    
    
    
    this.body.appendChild(mainTable);   
  }

  createMainTable = (arr) => {    
    const table = document.createElement('table');
    const tHead = this.createTHead();  
    const tBody = this.createTBody(arr);
    // console.log(tHead);
    console.log(tBody);
    table.insertAdjacentHTML('afterbegin', tHead);
    table.insertAdjacentHTML('beforeend', tBody);
    
    return table;
  }

  createTHead = () => {
    const tHead =
    `<thead>
      <tr>
        <td>имя</td>
        <td>посты</td>
        <td>кол-во коментариев</td>
      </tr>
    </thead>`;
    return tHead;
  }

  createTBody = (arr) => {

    const tName = arr.map(el => {
      return`
        <tr>
          <td>${el.name}</td>      
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