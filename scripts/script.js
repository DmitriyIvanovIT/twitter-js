'use strict';

document.addEventListener('DOMContentLoaded', () => {
    class FetchData {
        getResourse = async url => {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`Произошла ошибка ${res.status}`);

            }
            return res.json();
        }

        getPost = () => this.getResourse('db/database.json');
    };

    class Twitter {
        constructor({
            listElem
        }) {
            const fetchData = new FetchData();
            this.tweets = new Posts();
            this.elements = {
                listElem: document.querySelector(listElem)
            }

            fetchData.getPost()
                .then(data => {
                    
                    data.forEach(this.tweets.addPost);

                    this.showAllPost();
                });

        }

        renderPosts(tweets) {
            this.elements.listElem.textContent = '';

            tweets.forEach(({ id, userName, nickname, getDate, text, img, likes }) => {
                this.elements.listElem.insertAdjacentHTML('beforeend', `
                    <li>
                        <article class="tweet">
                            <div class="row">
                                <img class="avatar" src="images/${nickname}.jpg" alt="Аватар пользователя ${userName}">
                                <div class="tweet__wrapper">
                                    <header class="tweet__header">
                                        <h3 class="tweet-author">${userName}
                                            <span class="tweet-author__add tweet-author__nickname">@${nickname}</span>
                                            <time class="tweet-author__add tweet__date">${getDate()}</time>
                                        </h3>
                                        <button class="tweet__delete-button chest-icon" data-id="${id}"></button>
                                    </header>
                                    <div class="tweet-post">
                                        <p class="tweet-post__text">${text}</p>
                                        ${img ? `
                                        <figure class="tweet-post__image">
                                            <img src="${img}" alt="Сообщение ${nickname}  ${text}">
                                        </figure>
                                        ` : ''}
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <button class="tweet__like">
                                    ${likes}
                                </button>
                            </footer>
                        </article>
                    </li>
                `);
            });
        }

        showUserPost() {

        }

        showLikesPost() {

        }

        showAllPost() {
            this.renderPosts(this.tweets.posts);
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

        addPost = (tweets) => {
            this.posts.push(new Post(tweets));
        }

        deletePost(id) {
            this.posts.find((item, i) => {if (item.id === id) return this.posts.splice(i, 1);});
            
        }

        likePost(id) {
            this.posts.find((item, i) => {if (item.id === id) return item.likes++});
        }
    }

    class Post {
        constructor({
            id,
            userName,
            nickname,
            postDate,
            text,
            img,
            likes = 0,
            liked = false
        }) {
            this.id = id || this.generateID();
            this.userName = userName;
            this.nickname = nickname;
            this.postDate = postDate ? new Date(postDate) : new Date();
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

        generateID() {
            return ((+new Date).toString(32) + Math.random().toString(32).substring(2, 9));
        }

        getDate = () => {
            const options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }
            return this.postDate.toLocaleTimeString('ru-Ru', options);
        }
    }

    const twitter = new Twitter({listElem: '.tweet-list'});
});