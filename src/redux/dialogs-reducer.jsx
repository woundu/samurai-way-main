const UDNEWMESSAGETEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE"

const dialogsReducer = (state, action) => {

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