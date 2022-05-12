const myAPI = "http://isacblog.flywheelsites.com/wp-json";
//console.log(myAPI);
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI; 
console.log(corsFixUrl)

const blogPosts = document.querySelector(".blog-posts")