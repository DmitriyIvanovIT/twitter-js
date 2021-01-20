'use strict';
const arr = [{
        "userName": "Олег Васильевич",
        "nickname": "vasil",
        "text": "Где детонатор?",
        "postDate": "02.14.2012, 05:00"
    },
    {
        "userName": "Brock",
        "nickname": "brock",
        "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
        "postDate": "02.05.2012, 13:27",
        "img": "https://fish-text.ru/images/logo.png",
        "likes": 50
    },
    {
        "userName": "Raamin",
        "nickname": "raamin",
        "text": "По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.",
        "postDate": "03.11.2012, 10:30",
        "likes": 999
    },
    {
        "userName": "Дональд",
        "nickname": "trampampam",
        "text": "Зарегался на вк, хороший сервис и не банят",
        "postDate": "02.05.2012, 13:27",
        "img": "https://i2.wp.com/media.globalnews.ca/videostatic/news/vamt80qbaq-94ovmaxjqg/trumptwitterupdate.jpg?w=500&quality=70&strip=all",
        "likes": 50
        
    }
];

document.addEventListener('DOMContentLoaded', () => {
    class Twitter {
        constructor({
            listElem
        }) {
            this.tweet = new Posts({posts: [...arr]});
            this.elements = {
                listElem: document.querySelector(listElem)
            }
        }

        renderPosts() {

        }

        showUserPost() {

        }

        showLikesPost() {

        }

        showAllPost() {

        }

        openModal() {

        }
    }

    class Posts {
        constructor({
            posts = []
        } = {}) {
            this.posts = posts;
        }

        addPost(tweet) {
            this.posts.push(new Post(tweet));
        }

        deletePost(id) {
            this.posts.splice(id, 1);
        }

        likePost(id) {
            this.posts.find((item, i) => {if (i === id) return item.likes++});
        }
    }

    class Post {
        constructor({
            userName,
            nickname,
            postData,
            text,
            img = './images/unnamed.jpg',
            likes = 0,
            liked = false,
        }) {
            this.userName = userName;
            this.nickname = nickname;
            this.postData = postData;
            this.text = text;
            this.img = img;
            this.likes = likes;
            this.liked = liked;
        }

        changeLike() {
            this.liked = !this.liked;

            if (this.like) {
                this.likes++;
            } else {
                this.likes--;
            }
        }
    }

    const twitter = new Twitter({
        listElem: '.tweet-list'
    });

    console.log(arr);

    twitter.tweet.deletePost(1);
    twitter.tweet.likePost(1);

    console.log(twitter.tweet.posts);
});