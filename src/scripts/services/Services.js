class Services {
  constructor () {
    this.urlPeople = `https://jsonplaceholder.typicode.com/users`;
    this.urlComments = `https://jsonplaceholder.typicode.com/comments`;
    this.urlPosts = `https://jsonplaceholder.typicode.com/posts`;   
  }

  getResource = async (url) => {
    const res = await fetch(`${url}`);
    if(!res.ok) throw new Error(`Ошибка загрузки ${url}, статус соединения ${res.status}.`);
    return await res.json();
  }

  getAllPeoples = async () => {
    const res = await this.getResource(this.urlPeople);    
    return res;
  }

  getAllComments = async () => {
    const res = await this.getResource(this.urlComments);    
    return res;
  }

  getAllPosts = async () => {
    const res = await this.getResource(this.urlPosts);
    return res;
  }
}

const services = new Services();
export default services;