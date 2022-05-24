const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

////
////
////
/////
////
/////
////SPACING FOR NOW ONLY

const ApiUrl = `https://isacblog.flywheelsites.com/wp-json/wp/v2/posts${id}`;
console.log(ApiUrl)
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + ApiUrl;
console.log(corsFixUrl);

///
///
///
///
///

