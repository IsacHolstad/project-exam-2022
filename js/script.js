const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
//
//
//
//


const myAPI = "http://isacblog.flywheelsites.com/wp-json/wp/v2/posts";
//console.log(myAPI);
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI; 
console.log(corsFixUrl)

const blogPosts = document.querySelector(".blog-posts")
