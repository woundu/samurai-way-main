import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";





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
        newMessageText : ""

    },
    _callSubscriber () {

    },
    getState () {
        return this._state;
    },
    renderEntireTree() {

    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._callSubscriber(this._state)

    },

    subscribe(observer) {
        this._callSubscriber = observer
    }

}

export default store;
window.store = store;