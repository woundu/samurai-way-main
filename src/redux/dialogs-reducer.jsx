const UDNEWMESSAGETEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE"


let initialState = {
    messages: [
        { id: 1, message: "yo" },
        { id: 2, message: "yoyoyo" },
        { id: 3, message: "yoyoyoyoyoyo" }
    ],

    dialogs: [
        { id: 1, user: "DIMYCH" },
        { id: 1, user: "ANDREY" },
        { id: 3, user: "VALELYA" },
    ],
    newMessageText: "",
}


const dialogsReducer = (state = initialState, action) => {

    debugger

    if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        state.newMessageText = action.newText;
       
    }
    else if (action.type === "SEND-MESSAGE") {
        let body = state.newMessageText;

        state.messages.push({ id: 4, message: body })
        state.newMessageText = ""
    }

    return state;
}
export const sendMessageActionCreator = ()=> {
    
    return {
        type:SEND_MESSAGE,
       
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    
    return {
        type: UDNEWMESSAGETEXT,
        newText: text,
    }
}

export default dialogsReducer;