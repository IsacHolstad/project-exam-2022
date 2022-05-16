
//
//
//
//
const myAPI = "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts";
//console.log(myAPI);
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI; 
console.log(corsFixUrl)

const blogPost = document.querySelector(".blog-posts");
const caruselPost = document.querySelector(".carusel-container")
////
////
async function blogResults() {
    try{
        const response = await fetch(corsFixUrl);
        console.log(response);
        const responseJSON = await response.json();
        ////console.log(responseJSON);
        const blogInfo = responseJSON.results;
        console.log();
        for (let i = 0; i < responseJSON.length; i++) {
            console.log(responseJSON[i])
            if (i === 8) {
                break
            }
            blogPost.innerHTML += `<div><a href="detail.html?id=${responseJSON[i].id}">
            ${responseJSON[i].slug}
            ${responseJSON[i].date}
            </div>`
        }

    }
    catch(error) {
        blogPost.innerHTML += `<center><h2>error</h2></center>`;
    }
}
blogResults()

console.log(Math.PI)


