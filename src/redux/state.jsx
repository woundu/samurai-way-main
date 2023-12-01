

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "zdarova skuf", likes: 65 },
                { id: 2, message: "zdarova chuvaki", likes: 165 },
                { id: 3, message: "yoyoyoyooy", likes: 265 },
            ],

            newPostText: 'it-camasutra',


        },
        messagePage: {
            messages: [{ id: 1, message: "yo" },
            { id: 2, message: "yoyoyo" }, { id: 3, message: "yoyoyoyoyoyo" }
            ],
            dialogs: [
                { id: 1, user: "DIMYCH" },
                { id: 1, user: "ANDREY" },
                { id: 3, user: "VALELYA" }
            ],
        },

    },

    getState () {
        return this._state;
    },
    renderEntireTree() {

    },

    // addPost(postMessage) {

    //     let newPost = {
    //         id: 4,
    //         message: postMessage,
    //         likes: 123
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     renderEntireTree(this.getState());

    // },

    // updateNewPostText(newText) {

    //     this._state.profilePage.newPostText = newText;
    //     renderEntireTree(this.getState());

    // },

    dispatch (action) {
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likes: 123
            }
            this._state.profilePage.posts.push(newPost)
            renderEntireTree(this.getState());
        }
        else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            renderEntireTree(this.getState());

        }
    },

    subscribe(observer) {
        renderEntireTree = observer
    }

}

let renderEntireTree = () => {

}


export default store;
window.store = store;