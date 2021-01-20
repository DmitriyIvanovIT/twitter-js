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
    }
]

document.addEventListener('DOMContentLoaded', () => {
    class Twitter {
        constructor({
            listElem
        }) {
            this.tweet = new Posts();
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
        constructor(param) {
            this.userName = param.userName;
            this.nickname = param.nickname;
            this.postData = param.postData;
            this.text = param.text;
            this.img = param.img;
            this.likes = param.likes;
            this.liked = param.liked;
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
    console.log(twitter);
});