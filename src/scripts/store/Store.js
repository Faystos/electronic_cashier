export default class Store {
  constructor(services) {
    this.api = services;

    this.peoples = null;
    this.comments = null;
    this.posts = null; 
    this.normalisePerson = null;   
  }

  init = async () => {
    const response =  await Promise.all([
      this.api.getAllPeoples(),
      this.api.getAllComments(),
      this.api.getAllPosts()
    ]); 
    
    const [ peoples, comments, posts ] = response; 

    this.peoples = this.serializePeoples(peoples);
    this.comments = this.serializeComments(comments);
    this.posts = this.serializePosts(posts);  
  
    const normalisePost = this.posts.map(posts => {
      posts.forEach(post => {
        this.comments.forEach((comments) => {      
          comments.forEach(comment => {
            if(post.id === comment.postId) {
              post[`comment`] = comments;
            }
          });     
        });
      });
      return posts;
    });

    this.normalisePerson = this.peoples.map(person => {
      normalisePost.forEach(posts => {
        posts.forEach(post => {
          if(person.id === post.userId) {
            person[`post`] = posts;           
          }
        });
      });      
      return person;
    });  
    return response;
  } 

  serializePeoples = (peoples) => {
    return peoples.map(el => {
      el = {
        name: el.name,
        id: el.id
      };      
      return el;
    });
  }  

  serializeComments = (comments) => {
    return comments.reduce((acc, comment) => {
      const {postId} = comment;
      acc[postId] = (acc[postId] || []);
      acc[postId].push(comment);      
      return acc;
    }, []);
  }

  serializePosts = (posts) => {
    return posts.reduce((acc, post) => {
      const { userId } = post;
      acc[userId] = (acc[userId] || []);
      acc[userId].push(post);
      return acc;
    }, []);
  }  
}