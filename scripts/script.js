'use strict';

document.addEventListener('DOMContentLoaded', () => {
    class Twitter {
        constructor({ listElem }) {
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
        constructor({ posts = [] } = {} ) {
            this.posts = posts;
        }

        addPost(tweet) {
            this.posts.push(new Post(tweet));
        }

        deletePost(id) {
            this.posts.find((item, i) => {
                if (item.id === id) return posts.splice(i, 1);
            });

            
        }

        likePost(id) {
            this.posts.find(item => {
                if (item.id === id) return item.likes++;
            });
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

    const twitter = new Twitter({listElem: '.tweet-list'});
    console.log(twitter);
});