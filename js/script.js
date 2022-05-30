const myAPI = 'https://isacblog.flywheelsites.com/wp-json/wp/v2/posts';
//console.log(myAPI);
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + myAPI; 


const blogIMG = document.querySelector(".blog-posts");

const caruselPost = document.querySelector(".swiper-slide")





////

async function blogResults() {
    try{
        const response = await fetch(corsFixUrl);
        ////console.log(response);
        const responseJSON = await response.json();
        ////console.log(responseJSON);
        const blogInfo = responseJSON.results;
        for (let i = 0; i < responseJSON.length; i++) {
            
            
           
            blogIMG.innerHTML += `<div><a href="detail.html?id=${responseJSON[i].id}"></div>
            <h3> ${responseJSON[i].title.rendered}</h3>
            <div class="img-blog-posts"> ${wholeResponse[i].content.rendered}</div>
            <p>${wholeResponse[i].excerpt.rendered}</p>
            <center><a href="detail.html?id=${responseJSON[i].id}"><button class="read-more-btn">Read More</button></center>
        
            `
           // caruselPost.innerHTML = `<div class="recent-top-posts"><a href="detail.html?id=${responseJSON[i].id}"></div>
            //<div>${wholeResponse[i].content.rendered}</div>`

           

            

           


        }

    }
    catch(e) {
        blog.innerHTML = `<center><h2>error</h2></center>`;
    }
}
blogResults()


let wholeResponse = [
    {
        "id": 155,
        "date": "2022-05-27T13:01:36",
        "date_gmt": "2022-05-27T13:01:36",
        "guid": {
            "rendered": "http://isacblog.local/?p=155"
        },
        "modified": "2022-05-27T13:02:08",
        "modified_gmt": "2022-05-27T13:02:08",
        "slug": "fpv-drones-recal",
        "status": "publish",
        "type": "post",
        "link": "https://isacblog.flywheelsites.com/fpv-drones-recal/",
        "title": {
            "rendered": "FPV drones recal"
        },
        "content": {
            "rendered": "<div class=\"wp-block-image\">\n<figure class=\"alignleft size-large is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/maxresdefault-1024x576.jpg\" alt=\"\" class=\"wp-image-156\" width=\"600\" height=\"360\"/></figure></div>\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna ipsum, lacinia ut congue at, interdum ut lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ultricies turpis quis erat commodo, at egestas ex condimentum. Mauris euismod vel ex vitae efficitur. Praesent facilisis dictum diam, ut vestibulum nunc lacinia vitae. Praesent pulvinar euismod est, id vulputate eros congue eget. In sit amet urna tincidunt, fermentum magna vitae, commodo justo. Vestibulum odio tortor, semper in diam tempus, iaculis dignissim nunc.</p>\n\n\n\n<p>Integer et velit id nisi imperdiet accumsan eget quis enim. Curabitur lacinia arcu id mauris consectetur, quis feugiat dolor aliquam. Morbi porttitor diam id purus tincidunt, a posuere justo lobortis. Quisque pulvinar sem id luctus congue. Phasellus sit amet mi eleifend diam viverra hendrerit sit amet non libero. Sed consequat sapien in dolor rhoncus pharetra. Suspendisse potenti. Sed feugiat nulla vel iaculis bibendum. Nullam tempus nibh vitae lobortis suscipit.</p>\n\n\n\n<p>In sem ligula, gravida in magna id, consectetur facilisis justo. Nullam velit tortor, mattis at efficitur et, hendrerit quis augue. Mauris vestibulum massa lectus, eu tincidunt enim varius vitae. Proin varius maximus nunc. Nullam ullamcorper scelerisque fermentum. In eu lorem pellentesque, molestie ex at, lacinia mauris. Phasellus interdum, justo ut pellentesque mattis, lorem risus cursus eros, nec egestas leo leo in sapien. Pellentesque mollis et est ut commodo.</p>\n\n\n\n<p>Sed pretium egestas purus, sit amet condimentum ipsum dapibus vitae. Cras venenatis volutpat laoreet. Donec pulvinar quis nisl a auctor. Suspendisse maximus felis erat, id lacinia tortor faucibus suscipit. Aenean quis elit id metus fringilla euismod at ut erat. Cras ut sem elementum, cursus tellus sit amet, pellentesque est. Nam porttitor ultricies neque ut sagittis. Sed dignissim velit id nibh maximus, quis laoreet nisi feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur sit amet malesuada ex. Phasellus tortor sem, efficitur sit amet semper sed, porttitor non libero. Aliquam libero metus, eleifend nec lobortis sit amet, ornare sed dui. Proin in scelerisque mi, ac iaculis libero.</p>\n\n\n<div class=\"wp-block-image\">\n<figure class=\"alignright size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/1181425_2.webp\" alt=\"\" class=\"wp-image-157\" width=\"600\" height=\"360\"/></figure></div>\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna ipsum, lacinia ut congue at, interdum ut lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ultricies turpis quis erat commodo, at egestas ex condimentum. Mauris euismod vel ex vitae efficitur. Praesent facilisis dictum diam, ut vestibulum nunc lacinia vitae. Praesent pulvinar euismod est, id vulputate eros congue eget. In sit amet urna tincidunt, fermentum magna vitae, commodo justo. Vestibulum odio tortor, semper in diam tempus, iaculis dignissim nunc.</p>\n\n\n\n<p>Integer et velit id nisi imperdiet accumsan eget quis enim. Curabitur lacinia arcu id mauris consectetur, quis feugiat dolor aliquam. Morbi porttitor diam id purus tincidunt, a posuere justo lobortis. Quisque pulvinar sem id luctus congue. Phasellus sit amet mi eleifend diam viverra hendrerit sit amet non libero. Sed consequat sapien in dolor rhoncus pharetra. Suspendisse potenti. Sed feugiat nulla vel iaculis bibendum. Nullam tempus nibh vitae lobortis suscipit.</p>\n\n\n\n<p>In sem ligula, gravida in magna id, consectetur facilisis justo. Nullam velit tortor, mattis at efficitur et, hendrerit quis augue. Mauris vestibulum massa lectus, eu tincidunt enim varius vitae. Proin varius maximus nunc. Nullam ullamcorper scelerisque fermentum. In eu lorem pellentesque, molestie ex at, lacinia mauris. Phasellus interdum, justo ut pellentesque mattis, lorem risus cursus eros, nec egestas leo leo in sapien. Pellentesque mollis et est ut commodo.</p>\n\n\n\n<p>Sed pretium egestas purus, sit amet condimentum ipsum dapibus vitae. Cras venenatis volutpat laoreet. Donec pulvinar quis nisl a auctor. Suspendisse maximus felis erat, id lacinia tortor faucibus suscipit. Aenean quis elit id metus fringilla euismod at ut erat. Cras ut sem elementum, cursus tellus sit amet, pellentesque est. Nam porttitor ultricies neque ut sagittis. Sed dignissim velit id nibh maximus, quis laoreet nisi feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur sit amet malesuada ex. Phasellus tortor sem, efficitur sit amet semper sed, porttitor non libero. Aliquam libero metus, eleifend nec lobortis sit amet, ornare sed dui. Proin in scelerisque mi, ac iaculis libero.</p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna ipsum, lacinia ut congue at, interdum ut lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ultricies turpis quis erat commodo, at egestas ex condimentum. Mauris euismod vel ex vitae efficitur. Praesent facilisis dictum diam, ut vestibulum nunc lacinia vitae.</p>\n<p class=\"more-link\"><a href=\"https://isacblog.flywheelsites.com/fpv-drones-recal/\" class=\"themebutton\">Read More</a></p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 156,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            1
        ],
        "tags": [],
        "_links": {
            "self": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/155"
                }
            ],
            "collection": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts"
                }
            ],
            "about": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/types/post"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/users/1"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/comments?post=155"
                }
            ],
            "version-history": [
                {
                    "count": 1,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/155/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 158,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/155/revisions/158"
                }
            ],
            "wp:featuredmedia": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media/156"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media?parent=155"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "category",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/categories?post=155"
                },
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/tags?post=155"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    },
    {
        "id": 151,
        "date": "2022-05-27T12:48:04",
        "date_gmt": "2022-05-27T12:48:04",
        "guid": {
            "rendered": "http://isacblog.local/?p=151"
        },
        "modified": "2022-05-27T12:51:09",
        "modified_gmt": "2022-05-27T12:51:09",
        "slug": "new-mini-drones",
        "status": "publish",
        "type": "post",
        "link": "https://isacblog.flywheelsites.com/new-mini-drones/",
        "title": {
            "rendered": "New mini drones"
        },
        "content": {
            "rendered": "<div class=\"wp-block-image\">\n<figure class=\"alignleft size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/d98cb7cb27781313304519dd780c1058.webp\" alt=\"mini drone set\" class=\"wp-image-152\" width=\"600\" height=\"360\"/></figure></div>\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna ipsum, lacinia ut congue at, interdum ut lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ultricies turpis quis erat commodo, at egestas ex condimentum. Mauris euismod vel ex vitae efficitur. Praesent facilisis dictum diam, ut vestibulum nunc lacinia vitae. Praesent pulvinar euismod est, id vulputate eros congue eget. In sit amet urna tincidunt, fermentum magna vitae, commodo justo. Vestibulum odio tortor, semper in diam tempus, iaculis dignissim nunc.</p>\n\n\n\n<p>Integer et velit id nisi imperdiet accumsan eget quis enim. Curabitur lacinia arcu id mauris consectetur, quis feugiat dolor aliquam. Morbi porttitor diam id purus tincidunt, a posuere justo lobortis. Quisque pulvinar sem id luctus congue. Phasellus sit amet mi eleifend diam viverra hendrerit sit amet non libero. Sed consequat sapien in dolor rhoncus pharetra. Suspendisse potenti. Sed feugiat nulla vel iaculis bibendum. Nullam tempus nibh vitae lobortis suscipit.</p>\n\n\n\n<p>In sem ligula, gravida in magna id, consectetur facilisis justo. Nullam velit tortor, mattis at efficitur et, hendrerit quis augue. Mauris vestibulum massa lectus, eu tincidunt enim varius vitae. Proin varius maximus nunc. Nullam ullamcorper scelerisque fermentum. In eu lorem pellentesque, molestie ex at, lacinia mauris. Phasellus interdum, justo ut pellentesque mattis, lorem risus cursus eros, nec egestas leo leo in sapien. Pellentesque mollis et est ut commodo.</p>\n\n\n\n<p>Sed pretium egestas purus, sit amet condimentum ipsum dapibus vitae. Cras venenatis volutpat laoreet. Donec pulvinar quis nisl a auctor. Suspendisse maximus felis erat, id lacinia tortor faucibus suscipit. Aenean quis elit id metus fringilla euismod at ut erat. Cras ut sem elementum, cursus tellus sit amet, pellentesque est. Nam porttitor ultricies neque ut sagittis. Sed dignissim velit id nibh maximus, quis laoreet nisi feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur sit amet malesuada ex. Phasellus tortor sem, efficitur sit amet semper sed, porttitor non libero. Aliquam libero metus, eleifend nec lobortis sit amet, ornare sed dui. Proin in scelerisque mi, ac iaculis libero.</p>\n\n\n<div class=\"wp-block-image\">\n<figure class=\"alignright size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/minidrone.jpg\" alt=\"mini drone with phone\" class=\"wp-image-153\" width=\"600\" height=\"360\"/></figure></div>\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna ipsum, lacinia ut congue at, interdum ut lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ultricies turpis quis erat commodo, at egestas ex condimentum. Mauris euismod vel ex vitae efficitur. Praesent facilisis dictum diam, ut vestibulum nunc lacinia vitae. Praesent pulvinar euismod est, id vulputate eros congue eget. In sit amet urna tincidunt, fermentum magna vitae, commodo justo. Vestibulum odio tortor, semper in diam tempus, iaculis dignissim nunc.</p>\n\n\n\n<p>Integer et velit id nisi imperdiet accumsan eget quis enim. Curabitur lacinia arcu id mauris consectetur, quis feugiat dolor aliquam. Morbi porttitor diam id purus tincidunt, a posuere justo lobortis. Quisque pulvinar sem id luctus congue. Phasellus sit amet mi eleifend diam viverra hendrerit sit amet non libero. Sed consequat sapien in dolor rhoncus pharetra. Suspendisse potenti. Sed feugiat nulla vel iaculis bibendum. Nullam tempus nibh vitae lobortis suscipit.</p>\n\n\n\n<p>In sem ligula, gravida in magna id, consectetur facilisis justo. Nullam velit tortor, mattis at efficitur et, hendrerit quis augue. Mauris vestibulum massa lectus, eu tincidunt enim varius vitae. Proin varius maximus nunc. Nullam ullamcorper scelerisque fermentum. In eu lorem pellentesque, molestie ex at, lacinia mauris. Phasellus interdum, justo ut pellentesque mattis, lorem risus cursus eros, nec egestas leo leo in sapien. Pellentesque mollis et est ut commodo.</p>\n\n\n\n<p>Sed pretium egestas purus, sit amet condimentum ipsum dapibus vitae. Cras venenatis volutpat laoreet. Donec pulvinar quis nisl a auctor. Suspendisse maximus felis erat, id lacinia tortor faucibus suscipit. Aenean quis elit id metus fringilla euismod at ut erat. Cras ut sem elementum, cursus tellus sit amet, pellentesque est. Nam porttitor ultricies neque ut sagittis. Sed dignissim velit id nibh maximus, quis laoreet nisi feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur sit amet malesuada ex. Phasellus tortor sem, efficitur sit amet semper sed, porttitor non libero. Aliquam libero metus, eleifend nec lobortis sit amet, ornare sed dui. Proin in scelerisque mi, ac iaculis libero.</p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi magna ipsum, lacinia ut congue at, interdum ut lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ultricies turpis quis erat commodo, at egestas ex condimentum. Mauris euismod vel ex vitae efficitur. Praesent facilisis dictum diam, ut vestibulum nunc lacinia vitae.</p>\n<p class=\"more-link\"><a href=\"https://isacblog.flywheelsites.com/new-mini-drones/\" class=\"themebutton\">Read More</a></p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 153,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            1
        ],
        "tags": [],
        "_links": {
            "self": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/151"
                }
            ],
            "collection": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts"
                }
            ],
            "about": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/types/post"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/users/1"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/comments?post=151"
                }
            ],
            "version-history": [
                {
                    "count": 1,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/151/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 154,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/151/revisions/154"
                }
            ],
            "wp:featuredmedia": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media/153"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media?parent=151"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "category",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/categories?post=151"
                },
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/tags?post=151"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    },
    {
        "id": 146,
        "date": "2022-05-19T11:37:47",
        "date_gmt": "2022-05-19T11:37:47",
        "guid": {
            "rendered": "http://isacblog.local/?p=146"
        },
        "modified": "2022-05-19T12:10:24",
        "modified_gmt": "2022-05-19T12:10:24",
        "slug": "usa-military-force-drone-making",
        "status": "publish",
        "type": "post",
        "link": "https://isacblog.flywheelsites.com/usa-military-force-drone-making/",
        "title": {
            "rendered": "USA military force drone making"
        },
        "content": {
            "rendered": "\n<div class=\"wp-block-image\"><figure class=\"alignleft size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/militaire_0.jpg\" alt=\"milietary drone flying\" class=\"wp-image-147\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin vulputate. Mauris convallis mollis sem ut laoreet. Nulla et blandit turpis.</p>\n\n\n\n<p>Vestibulum nunc sapien, porta quis nisi ac, condimentum tempus erat. Etiam at aliquam velit. Integer accumsan laoreet enim, sit amet dapibus lectus pharetra id. Vestibulum viverra, massa sit amet rutrum aliquam, justo metus dapibus elit, in rutrum dui nunc et massa. Nulla vitae risus cursus, euismod risus vel, pharetra nibh. Aenean nec varius lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus iaculis ligula, a viverra justo rhoncus condimentum. Fusce at sem a quam condimentum consequat at et dui. Pellentesque eu auctor est. Donec lacus nibh, tincidunt vel felis vitae, tempor tempor ipsum. Vestibulum sit amet dolor vel purus porttitor convallis. Duis nec turpis eu risus semper condimentum. Phasellus leo tortor, elementum sed venenatis eget, ullamcorper elementum est.</p>\n\n\n\n<p>Praesent vitae leo porttitor odio suscipit aliquam. Cras rhoncus, nibh ac accumsan tincidunt, sem leo porttitor mi, quis accumsan libero sapien at erat. Nulla finibus et purus dignissim commodo. Vivamus quis ullamcorper lectus. Donec consequat consequat ante. Nulla porta sapien nec luctus congue. Suspendisse iaculis, nunc sollicitudin malesuada lacinia, neque metus lacinia est, quis sollicitudin eros metus eget velit. Sed fringilla euismod facilisis. Sed ut mauris rhoncus, ultrices lectus ac, mollis nulla.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignright size-large is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/mil-commercial-uav-1800-1024x683.jpg\" alt=\"military man holding drone\" class=\"wp-image-148\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin vulputate. Mauris convallis mollis sem ut laoreet. Nulla et blandit turpis.</p>\n\n\n\n<p>Vestibulum nunc sapien, porta quis nisi ac, condimentum tempus erat. Etiam at aliquam velit. Integer accumsan laoreet enim, sit amet dapibus lectus pharetra id. Vestibulum viverra, massa sit amet rutrum aliquam, justo metus dapibus elit, in rutrum dui nunc et massa. Nulla vitae risus cursus, euismod risus vel, pharetra nibh. Aenean nec varius lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus iaculis ligula, a viverra justo rhoncus condimentum. Fusce at sem a quam condimentum consequat at et dui. Pellentesque eu auctor est. Donec lacus nibh, tincidunt vel felis vitae, tempor tempor ipsum. Vestibulum sit amet dolor vel purus porttitor convallis. Duis nec turpis eu risus semper condimentum. Phasellus leo tortor, elementum sed venenatis eget, ullamcorper elementum est.</p>\n\n\n\n<p>Praesent vitae leo porttitor odio suscipit aliquam. Cras rhoncus, nibh ac accumsan tincidunt, sem leo porttitor mi, quis accumst mauris rhoncus, ultrices lectus ac, mollis nulla.</p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin</p>\n<p class=\"more-link\"><a href=\"https://isacblog.flywheelsites.com/usa-military-force-drone-making/\" class=\"themebutton\">Read More</a></p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 147,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            1
        ],
        "tags": [],
        "_links": {
            "self": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/146"
                }
            ],
            "collection": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts"
                }
            ],
            "about": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/types/post"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/users/1"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/comments?post=146"
                }
            ],
            "version-history": [
                {
                    "count": 1,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/146/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 149,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/146/revisions/149"
                }
            ],
            "wp:featuredmedia": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media/147"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media?parent=146"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "category",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/categories?post=146"
                },
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/tags?post=146"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    },
    {
        "id": 141,
        "date": "2022-05-19T11:04:44",
        "date_gmt": "2022-05-19T11:04:44",
        "guid": {
            "rendered": "http://isacblog.local/?p=141"
        },
        "modified": "2022-05-19T12:11:15",
        "modified_gmt": "2022-05-19T12:11:15",
        "slug": "easa-making-drone-licenses",
        "status": "publish",
        "type": "post",
        "link": "https://isacblog.flywheelsites.com/easa-making-drone-licenses/",
        "title": {
            "rendered": "Easa making drone licenses"
        },
        "content": {
            "rendered": "\n<div class=\"wp-block-image\"><figure class=\"alignleft size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/B1CFC67B-5B22-4965-AE56-15116EE9220B-845x550-1.jpg\" alt=\"drone license\" class=\"wp-image-142\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin vulputate. Mauris convallis mollis sem ut laoreet. Nulla et blandit turpis.</p>\n\n\n\n<p>Vestibulum nunc sapien, porta quis nisi ac, condimentum tempus erat. Etiam at aliquam velit. Integer accumsan laoreet enim, sit amet dapibus lectus pharetra id. Vestibulum viverra, massa sit amet rutrum aliquam, justo metus dapibus elit, in rutrum dui nunc et massa. Nulla vitae risus cursus, euismod risus vel, pharetra nibh. Aenean nec varius lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus iaculis ligula, a viverra justo rhoncus condimentum. Fusce at sem a quam condimentum consequat at et dui. Pellentesque eu auctor est. Donec lacus nibh, tincidunt vel felis vitae, tempor tempor ipsum. Vestibulum sit amet dolor vel purus porttitor convallis. Duis nec turpis eu risus semper condimentum. Phasellus leo tortor, elementum sed venenatis eget, ullamcorper elementum est.</p>\n\n\n\n<p>Praesent vitae leo porttitor odio suscipit aliquam. Cras rhoncus, nibh ac accumsan tincidunt, sem leo porttitor mi, quis accumsan libero sapien at erat. Nulla finibus et purus dignissim commodo. Vivamus quis ullamcorper lectus. Donec consequat consequat ante. Nulla porta sapien nec luctus congue. Suspendisse iaculis, nunc sollicitudin malesuada lacinia, neque metus lacinia est, quis sollicitudin eros metus eget velit. Sed fringilla euismod facilisis. Sed ut mauris rhoncus, ultrices lectus ac, mollis nulla.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignright size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/esadronelicense.png\" alt=\"copy of a drone licensse\" class=\"wp-image-143\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin vulputate. Mauris convallis mollis sem ut laoreet. Nulla et blandit turpis.</p>\n\n\n\n<p>Vestibulum nunc sapien, porta quis nisi ac, condimentum tempus erat. Etiam at aliquam velit. Integer accumsan laoreet enim, sit amet dapibus lectus pharetra id. Vestibulum viverra, massa sit amet rutrum aliquam, justo metus dapibus elit, in rutrum dui nunc et massa. Nulla vitae risus cursus, euismod risus vel, pharetra nibh. Aenean nec varius lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus iaculis ligula, a viverra justo rhoncus condimentum. Fusce at sem a quam condimentum consequat at et dui. Pellentesque eu auctor est. Donec lacus nibh, tincidunt vel felis vitae, tempor tempor ipsum. Vestibulum sit amet dolor vel purus porttitor convallis. Duis nec turpis eu risus semper condimentum. Phasellus leo tortor, elementum sed venenatis eget, ullamcorper elementum est.</p>\n\n\n\n<p>Praesent vitae leo porttitor odio suscipit aliquam. Cras rhoncus, nibh ac accumsan tincidunt, sem leo porttitor mi, quis accumsan libero sapien at erat. Nulla finibus et purus dignissim commodo. Vivamus quis ullamcorper lectus. Donec consequat consequat ante. Nulla porta sapien nec luctus congue. Suspendisse iaculis, nunc sollicitudin malesuada lacinia, neque metus lacinia est, quis sollicitudin eros metus eget velit. Sed fringilla euismod facilisis. Sed ut mauris rhoncus, ultrices lectus ac, mollis nulla.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignleft size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/Safety-and-EASA.png\" alt=\"easa company logo\" class=\"wp-image-144\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin vulputate. Mauris convallis mollis sem ut laoreet. Nulla et blandit turpis.</p>\n\n\n\n<p>Vestibulum nunc sapien, porta quis nisi ac, condimentum tempus erat. Etiam at aliquam velit. Integer accumsan laoreet enim, sit amet dapibus lectus pharetra id. Vestibulum viverra, massa sit amet rutrum aliquam, justo metus dapibus elit, in rutrum dui nunc et massa. Nulla vitae risus cursus, euismod risus vel, pharetra nibh. Aenean nec varius lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus iaculis ligula, a viverra justo rhoncus condimentum. Fusce at sem a quam condimentum consequat at et dui. Pellentesque eu auctor est. Donec lacus nibh, tincidunt vel felis vitae, tempor tempor ipsum. Vestibulum sit amet dolor vel purus porttitor convallis. Duis nec turpis eu risus semper condimentum. Phasellus leo tortor, elementum sed venenatis eget, ullamcorper elementum est.</p>\n\n\n\n<p></p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin</p>\n<p class=\"more-link\"><a href=\"https://isacblog.flywheelsites.com/easa-making-drone-licenses/\" class=\"themebutton\">Read More</a></p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 142,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            1
        ],
        "tags": [],
        "_links": {
            "self": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/141"
                }
            ],
            "collection": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts"
                }
            ],
            "about": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/types/post"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/users/1"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/comments?post=141"
                }
            ],
            "version-history": [
                {
                    "count": 1,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/141/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 145,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/141/revisions/145"
                }
            ],
            "wp:featuredmedia": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media/142"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media?parent=141"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "category",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/categories?post=141"
                },
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/tags?post=141"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    },
    {
        "id": 135,
        "date": "2022-05-19T10:51:21",
        "date_gmt": "2022-05-19T10:51:21",
        "guid": {
            "rendered": "http://isacblog.local/?p=135"
        },
        "modified": "2022-05-19T12:12:08",
        "modified_gmt": "2022-05-19T12:12:08",
        "slug": "amazon-using-drones-for-delivery",
        "status": "publish",
        "type": "post",
        "link": "https://isacblog.flywheelsites.com/amazon-using-drones-for-delivery/",
        "title": {
            "rendered": "Amazon using drones for delivery"
        },
        "content": {
            "rendered": "\n<div class=\"wp-block-image\"><figure class=\"alignleft size-large is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/2000-1024x614.webp\" alt=\"amazon drone\" class=\"wp-image-136\" width=\"600\" height=\"360\" srcset=\"https://isacblog.flywheelsites.com/wp-content/uploads/2022/05/2000-1024x614.webp 1024w, https://isacblog.flywheelsites.com/wp-content/uploads/2022/05/2000-300x180.webp 300w, https://isacblog.flywheelsites.com/wp-content/uploads/2022/05/2000-768x461.webp 768w, https://isacblog.flywheelsites.com/wp-content/uploads/2022/05/2000-570x342.webp 570w, https://isacblog.flywheelsites.com/wp-content/uploads/2022/05/2000.webp 1200w\" sizes=\"(max-width: 600px) 100vw, 600px\" /></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin vulputate. Mauris convallis mollis sem ut laoreet. Nulla et blandit turpis.</p>\n\n\n\n<p>Vestibulum nunc sapien, porta quis nisi ac, condimentum tempus erat. Etiam at aliquam velit. Integer accumsan laoreet enim, sit amet dapibus lectus pharetra id. Vestibulum viverra, massa sit amet rutrum aliquam, justo metus dapibus elit, in rutrum dui nunc et massa. Nulla vitae risus cursus, euismod risus vel, pharetra nibh. Aenean nec varius lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus iaculis ligula, a viverra justo rhoncus condimentum. Fusce at sem a quam condimentum consequat at et dui. Pellentesque eu auctor est. Donec lacus nibh, tincidunt vel felis vitae, tempor tempor ipsum. Vestibulum sit amet dolor vel purus porttitor convallis. Duis nec turpis eu risus semper condimentum. Phasellus leo tortor, elementum sed venenatis eget, ullamcorper elementum est.</p>\n\n\n\n<p>Praesent vitae leo porttitor odio suscipit aliquam. Cras rhoncus, nibh ac accumsan tincidunt, sem leo porttitor mi, quis accumsan libero sapien at erat. Nulla finibus et purus dignissim commodo. Vivamus quis ullamcorper lectus. Donec consequat consequat ante. Nulla porta sapien nec luctus congue. Suspendisse iaculis, nunc sollicitudin malesuada lacinia, neque metus lacinia est, quis sollicitudin eros metus eget velit. Sed fringilla euismod facilisis. Sed ut mauris rhoncus, ultrices lectus ac, mollis nulla.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignright size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/amazondrone2.webp\" alt=\"amzon drone flying\" class=\"wp-image-137\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin vulputate. Mauris convallis mollis sem ut laoreet. Nulla et blandit turpis.</p>\n\n\n\n<p>Vestibulum nunc sapien, porta quis nisi ac, condimentum tempus erat. Etiam at aliquam velit. Integer accumsan laoreet enim, sit amet dapibus lectus pharetra id. Vestibulum viverra, massa sit amet rutrum aliquam, justo metus dapibus elit, in rutrum dui nunc et massa. Nulla vitae risus cursus, euismod risus vel, pharetra nibh. Aenean nec varius lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus iaculis ligula, a viverra justo rhoncus condimentum. Fusce at sem a quam condimentum consequat at et dui. Pellentesque eu auctor est. Donec lacus nibh, tincidunt vel felis vitae, tempor tempor ipsum. Vestibulum sit amet dolor vel purus porttitor convallis. Duis nec turpis eu risus semper condimentum. Phasellus leo tortor, elementum sed venenatis eget, ullamcorper elementum est.</p>\n\n\n\n<p>Praesent vitae leo porttitor odio suscipit aliquam. Cras rhoncus, nibh ac accumsan tincidunt, sem leo porttitor mi, quis accumsan libero sapien at erat. Nulla finibus et purus dignissim commodo. Vivamus quis ullamcorper lectus. Donec consequat consequat ante. Nulla porta sapien nec luctus congue. Suspendisse iaculis, nunc sollicitudin malesuada lacinia, neque metus lacinia est, quis sollicitudin eros metus eget velit. Sed fringilla euismod facilisis. Sed ut mauris rhoncus, ultrices lectus ac, mollis nulla.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignleft size-large is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/amazondrone1-1024x557.jpeg\" alt=\"small amazon drone\" class=\"wp-image-139\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin vulputate. Mauris convallis mollis sem ut laoreet. Nulla et blandit turpis.</p>\n\n\n\n<p>Vestibulum nunc sapien, porta quis nisi ac, condimentum tempus erat. Etiam at aliquam velit. Integer accumsan laoreet enim, sit amet dapibus lectus pharetra id. Vestibulum viverra, massa sit amet rutrum aliquam, justo metus dapibus elit, in rutrum dui nunc et massa. Nulla vitae risus cursus, euismod risus vel, pharetra nibh. Aenean nec varius lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas maximus iaculis ligula, a viverra justo rhoncus condimentum. Fusce at sem a quam condimentum consequat at et dui. Pellentesque eu auctor est. Donec lacus nibh, tincidunt vel felis vitae, tempor tempor ipsum. Vestibulum sit amet dolor vel purus porttitor convallis. Duis nec turpis eu risus semper condimentum. Phasellus leo tortor, elementum sed venenatis eget, ullamcorper elementum est.</p>\n\n\n\n<p>Praesent vitae leo porttitor odio suscipit aliquam. Cras rhoncus, nibh ac accumsan tincidunt, sem leo porttitor mi, quis accumsan libero sapien at erat. Nulla finibus et purus dignissim commodo. Vivamus quis ullamcorper lectus. Donec consequat consequat ante. Nulla porta sapien nec luctus congue. Suspendisse iaculis, nunc sollicitudin malesuada lacinia, neque metus lacinia est, quis sollicitudin eros metus eget velit. Sed fringilla euismod facilisis. Sed ut mauris rhoncus, ultrices lectus ac, mollis nulla.</p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam urna tellus, ornare vel nisi et, sodales dignissim dolor. Quisque consequat dapibus tellus, in tempus odio ultrices a. Sed eu massa eu ipsum vulputate gravida. Integer rutrum malesuada ante, lobortis viverra elit scelerisque et. Nunc condimentum quis nibh sed viverra. Suspendisse a lorem sed tellus sollicitudin</p>\n<p class=\"more-link\"><a href=\"https://isacblog.flywheelsites.com/amazon-using-drones-for-delivery/\" class=\"themebutton\">Read More</a></p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 136,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            1
        ],
        "tags": [],
        "_links": {
            "self": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/135"
                }
            ],
            "collection": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts"
                }
            ],
            "about": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/types/post"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/users/1"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/comments?post=135"
                }
            ],
            "version-history": [
                {
                    "count": 1,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/135/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 140,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/135/revisions/140"
                }
            ],
            "wp:featuredmedia": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media/136"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media?parent=135"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "category",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/categories?post=135"
                },
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/tags?post=135"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    },
    {
        "id": 74,
        "date": "2022-05-09T11:39:18",
        "date_gmt": "2022-05-09T11:39:18",
        "guid": {
            "rendered": "http://isacblog.local/?p=74"
        },
        "modified": "2022-05-12T19:10:58",
        "modified_gmt": "2022-05-12T19:10:58",
        "slug": "cnn-using-drones",
        "status": "publish",
        "type": "post",
        "link": "https://isacblog.flywheelsites.com/cnn-using-drones/",
        "title": {
            "rendered": "CNN using drones"
        },
        "content": {
            "rendered": "\n<div class=\"wp-block-image\"><figure class=\"alignleft size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/cnn-drone.jpg\" alt=\"cnn drone flying\" class=\"wp-image-75\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignright size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/CNN-Drone-e1508741695237.jpg\" alt=\"cnn drone\" class=\"wp-image-76\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignleft size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/290_CNNDrone_1.jpg\" alt=\"new cnn drone\" class=\"wp-image-77\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros</p>\n\n\n\n<p>Nullam viverra tincidunt viverra. Maecenas accumsan sed magna et maximus. Aliquam feugiat nisi at ligula pretium, ut tempus metus elementum. Praesent fermentum faucibus ornare. Curabitur bibendum euismod egestas. Phasellus justo turpis, imperdiet vitae augue eget, pretium venenatis nunc. Phasellus commodo quam at bibendum tempor. Praesent leo purus, condimentum vitae tellus nec, auctor porttitor libero. Nunc quam nunc, tristique non sapien vel, venenatis pretium ex.</p>\n\n\n\n<p></p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet</p>\n<p class=\"more-link\"><a href=\"https://isacblog.flywheelsites.com/cnn-using-drones/\" class=\"themebutton\">Read More</a></p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 76,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            1
        ],
        "tags": [],
        "_links": {
            "self": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/74"
                }
            ],
            "collection": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts"
                }
            ],
            "about": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/types/post"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/users/1"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/comments?post=74"
                }
            ],
            "version-history": [
                {
                    "count": 4,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/74/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 104,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/74/revisions/104"
                }
            ],
            "wp:featuredmedia": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media/76"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media?parent=74"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "category",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/categories?post=74"
                },
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/tags?post=74"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    },
    {
        "id": 69,
        "date": "2022-05-09T11:36:53",
        "date_gmt": "2022-05-09T11:36:53",
        "guid": {
            "rendered": "http://isacblog.local/?p=69"
        },
        "modified": "2022-05-12T19:13:20",
        "modified_gmt": "2022-05-12T19:13:20",
        "slug": "sweden-banning-private-drones",
        "status": "publish",
        "type": "post",
        "link": "https://isacblog.flywheelsites.com/sweden-banning-private-drones/",
        "title": {
            "rendered": "Sweden banning private drones"
        },
        "content": {
            "rendered": "\n<div class=\"wp-block-image\"><figure class=\"alignleft size-large is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/drone-in-dark-2-1024x538.png\" alt=\"flying drone\" class=\"wp-image-70\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignright size-large is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/holding-drone-1024x683.jpeg\" alt=\"man holding drone\" class=\"wp-image-71\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignleft size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/1-1.webp\" alt=\"pov drone flying \" class=\"wp-image-72\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet</p>\n<p class=\"more-link\"><a href=\"https://isacblog.flywheelsites.com/sweden-banning-private-drones/\" class=\"themebutton\">Read More</a></p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 70,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            1
        ],
        "tags": [],
        "_links": {
            "self": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/69"
                }
            ],
            "collection": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts"
                }
            ],
            "about": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/types/post"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/users/1"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/comments?post=69"
                }
            ],
            "version-history": [
                {
                    "count": 4,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/69/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 109,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/69/revisions/109"
                }
            ],
            "wp:featuredmedia": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media/70"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media?parent=69"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "category",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/categories?post=69"
                },
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/tags?post=69"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    },
    {
        "id": 64,
        "date": "2022-05-09T11:34:05",
        "date_gmt": "2022-05-09T11:34:05",
        "guid": {
            "rendered": "http://isacblog.local/?p=64"
        },
        "modified": "2022-05-12T19:16:00",
        "modified_gmt": "2022-05-12T19:16:00",
        "slug": "gass-power-drone",
        "status": "publish",
        "type": "post",
        "link": "https://isacblog.flywheelsites.com/gass-power-drone/",
        "title": {
            "rendered": "Gass power drone"
        },
        "content": {
            "rendered": "\n<div class=\"wp-block-image\"><figure class=\"alignleft size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/download.jpg\" alt=\"gass powerd drone\" class=\"wp-image-65\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignright size-large is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/bigdrone-1024x576.jpeg\" alt=\"big human drone \" class=\"wp-image-66\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignleft size-large is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/IMG-20190428-WA0063_1599x-1024x768.jpg\" alt=\"small gas drone\" class=\"wp-image-67\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet</p>\n<p class=\"more-link\"><a href=\"https://isacblog.flywheelsites.com/gass-power-drone/\" class=\"themebutton\">Read More</a></p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 66,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            1
        ],
        "tags": [],
        "_links": {
            "self": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/64"
                }
            ],
            "collection": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts"
                }
            ],
            "about": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/types/post"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/users/1"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/comments?post=64"
                }
            ],
            "version-history": [
                {
                    "count": 4,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/64/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 113,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/64/revisions/113"
                }
            ],
            "wp:featuredmedia": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media/66"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media?parent=64"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "category",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/categories?post=64"
                },
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/tags?post=64"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    },
    {
        "id": 59,
        "date": "2022-05-09T11:18:19",
        "date_gmt": "2022-05-09T11:18:19",
        "guid": {
            "rendered": "http://isacblog.local/?p=59"
        },
        "modified": "2022-05-12T19:17:16",
        "modified_gmt": "2022-05-12T19:17:16",
        "slug": "new-drone-camera",
        "status": "publish",
        "type": "post",
        "link": "https://isacblog.flywheelsites.com/new-drone-camera/",
        "title": {
            "rendered": "New drone camera"
        },
        "content": {
            "rendered": "\n<div class=\"wp-block-image\"><figure class=\"alignleft size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/screen-shot-2017-10-12-at-9-50-16-am-1.webp\" alt=\"4k drone camera\" class=\"wp-image-60\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignright size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/1.webp\" alt=\"pov drone flying\" class=\"wp-image-61\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nullam viverra tincidunt viverra. Maecenas accumsan sed magna et maximus. Aliquam feugiat nisi at ligula pretium, ut tempus metus elementum. Praesent fermentum faucibus ornare. Curabitur bibendum euismod egestas. Phasellus justo turpis, imperdiet vitae augue eget, pretium venenatis nunc. Phasellus commodo quam at bibendum tempor. Praesent leo purus, condimentum vitae tellus nec, auctor porttitor libero. Nunc quam nunc, tristique non sapien vel, venenatis pretium ex.</p>\n\n\n\n<p>Sed tempor ex ullamcorper, rhoncus leo ac, imperdiet arcu. Vivamus justo augue, ultrices at efficitur non, aliquam semper nibh. Vestibulum faucibus maximus nulla, vehicula facilisis dolor bibendum sed. Cras molestie viverra sapien quis venenatis. Nullam feugiat semper elit, ut suscipit augue tincidunt in. Duis vitae pulvinar ex, et fringilla risus. Donec ac ullamcorper ligula.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignleft size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/What-Is-FPV-Camera-Technology-In-Drones-Answered-e1580564982157.jpg\" alt=\"smallest drone camera\" class=\"wp-image-62\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet</p>\n<p class=\"more-link\"><a href=\"https://isacblog.flywheelsites.com/new-drone-camera/\" class=\"themebutton\">Read More</a></p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 44,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            1
        ],
        "tags": [],
        "_links": {
            "self": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/59"
                }
            ],
            "collection": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts"
                }
            ],
            "about": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/types/post"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/users/1"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/comments?post=59"
                }
            ],
            "version-history": [
                {
                    "count": 4,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/59/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 117,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/59/revisions/117"
                }
            ],
            "wp:featuredmedia": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media/44"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media?parent=59"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "category",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/categories?post=59"
                },
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/tags?post=59"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    },
    {
        "id": 53,
        "date": "2022-05-09T11:15:13",
        "date_gmt": "2022-05-09T11:15:13",
        "guid": {
            "rendered": "http://isacblog.local/?p=53"
        },
        "modified": "2022-05-12T19:18:35",
        "modified_gmt": "2022-05-12T19:18:35",
        "slug": "safety-protocols-for-license",
        "status": "publish",
        "type": "post",
        "link": "https://isacblog.flywheelsites.com/safety-protocols-for-license/",
        "title": {
            "rendered": "Safety protocols for license"
        },
        "content": {
            "rendered": "\n<div class=\"wp-block-image\"><figure class=\"alignleft size-large is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/drone-safety-1024x683.jpg\" alt=\"safty guy flying drone\" class=\"wp-image-54\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignright size-full is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/images-1.jpg\" alt=\"safety guy\" class=\"wp-image-55\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nullam viverra tincidunt viverra. Maecenas accumsan sed magna et maximus. Aliquam feugiat nisi at ligula pretium, ut tempus metus elementum. Praesent fermentum faucibus ornare. Curabitur bibendum euismod egestas. Phasellus justo turpis, imperdiet vitae augue eget, pretium venenatis nunc. Phasellus commodo quam at bibendum tempor. Praesent leo purus, condimentum vitae tellus nec, auctor porttitor libero. Nunc quam nunc, tristique non sapien vel, venenatis pretium ex.</p>\n\n\n\n<p>Sed tempor ex ullamcorper, rhoncus leo ac, imperdiet arcu. Vivamus justo augue, ultrices at efficitur non, aliquam semper nibh. Vestibulum faucibus maximus nulla, vehicula facilisis dolor bibendum sed. Cras molestie viverra sapien quis venenatis. Nullam feugiat semper elit, ut suscipit augue tincidunt in. Duis vitae pulvinar ex, et fringilla risus. Donec ac ullamcorper ligula.</p>\n\n\n\n<div class=\"wp-block-image\"><figure class=\"alignleft size-large is-resized\"><img loading=\"lazy\" src=\"http://isacblog.flywheelsites.com/wp-content/uploads/2022/05/drone-in-dark-1-1024x538.png\" alt=\"flying drone\" class=\"wp-image-57\" width=\"600\" height=\"360\"/></figure></div>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet pulvinar laoreet, est ligula semper ipsum, eu sodales est nulla ullamcorper eros. Aliquam ante elit, porttitor ut diam non, pellentesque vehicula tellus. Nunc a lacus a purus luctus commodo ac sit amet sem. Cras congue vestibulum lectus, a ullamcorper ligula blandit non. Nam ultrices eros felis, vel pulvinar turpis volutpat ac. Proin bibendum metus nulla, ut suscipit ipsum ullamcorper ac. Nunc imperdiet nunc non cursus varius. Donec porta consectetur metus, non accumsan tellus pharetra eu. Sed rhoncus elit nec aliquam molestie. Donec quis nulla purus.</p>\n\n\n\n<p>Nulla id volutpat libero, vitae imperdiet tellus. Ut tristique et justo a tempor. Maecenas ligula augue, sollicitudin ut felis nec, auctor placerat leo. Maecenas porttitor ligula sit amet sem accumsan, sit amet eleifend nisl placerat. Duis vel interdum ligula. Donec molestie ex massa, quis pulvinar tortor tincidunt quis. Nunc iaculis neque a nunc iaculis mattis. Mauris dictum est eget posuere sollicitudin. Nulla facilisi. Maecenas in eros eu sem bibendum semper. Vestibulum venenatis accumsan justo. Phasellus feugiat nisl non odio venenatis pulvinar. Cras ut consectetur libero, in convallis diam. Morbi eleifend placerat vulputate. Nunc pulvinar, ex eget dignissim commodo, odio turpis pretium diam, vitae maximus odio lacus condimentum sapien. Sed molestie eget urna vitae cursus.</p>\n\n\n\n<p>Vivamus eu ipsum laoreet, egestas risus sit amet, ultricies arcu. Nulla porta lorem eu leo rutrum condimentum. In fermentum tortor id risus finibus, eu faucibus mi mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam mattis semper eros, imperdiet euismod risus consequat sed. Cras porttitor, ligula porttitor laoreet eleifend, augue quam hendrerit lacus, vel dignissim nibh ex sed est. Fusce eu urna faucibus, vehicula tellus ut, mollis elit.</p>\n",
            "protected": false
        },
        "excerpt": {
            "rendered": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque laoreet tellus, eget mollis dolor sagittis blandit. Pellentesque est magna, faucibus quis tristique eget, iaculis sit amet erat. Sed feugiat odio odio, ac mollis lacus volutpat varius. Nunc sed suscipit neque. Aenean lacus sapien, pharetra quis risus gravida, dignissim tempor tortor. Donec dictum, neque imperdiet</p>\n<p class=\"more-link\"><a href=\"https://isacblog.flywheelsites.com/safety-protocols-for-license/\" class=\"themebutton\">Read More</a></p>\n",
            "protected": false
        },
        "author": 1,
        "featured_media": 54,
        "comment_status": "open",
        "ping_status": "open",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            1
        ],
        "tags": [],
        "_links": {
            "self": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/53"
                }
            ],
            "collection": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts"
                }
            ],
            "about": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/types/post"
                }
            ],
            "author": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/users/1"
                }
            ],
            "replies": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/comments?post=53"
                }
            ],
            "version-history": [
                {
                    "count": 4,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/53/revisions"
                }
            ],
            "predecessor-version": [
                {
                    "id": 121,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/posts/53/revisions/121"
                }
            ],
            "wp:featuredmedia": [
                {
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media/54"
                }
            ],
            "wp:attachment": [
                {
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/media?parent=53"
                }
            ],
            "wp:term": [
                {
                    "taxonomy": "category",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/categories?post=53"
                },
                {
                    "taxonomy": "post_tag",
                    "embeddable": true,
                    "href": "https://isacblog.flywheelsites.com/wp-json/wp/v2/tags?post=53"
                }
            ],
            "curies": [
                {
                    "name": "wp",
                    "href": "https://api.w.org/{rel}",
                    "templated": true
                }
            ]
        }
    }
];



console.log(wholeResponse)
const getImgSrc = (imgStr) => {
    const div = document.createElement('div');
    div.innerHTML = imgStr
    const img = div.querySelector('img');
    if (img !== null) {// if it is availebal
        return img.src
    }
};
for (let i = 0; i < wholeResponse.length; i++) {
    let myImage = getImgSrc(wholeResponse[i].content.rendered)
    if (myImage) { //check that the images are returning
        ////console.log(myImage)
       

    }

}
window.onload = function(){
    var slides = document.getElementsByClassName('carousel-item'),
        addActive = function(slide) {slide.classList.add('active')},
        removeActive = function(slide) {slide.classList.remove('active')};
    addActive(slides[0]);
    
    setInterval(function (){
      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          slides[0].style.zIndex = 100;
          setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
          break;
        }
        if (slides[i].classList.contains('active')) { 
          slides[i].removeAttribute('style');
          setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, 4000);
  }



