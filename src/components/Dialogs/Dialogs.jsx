import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import { updateNewMessageTextActionCreator } from "../../redux/state";
import { sendMessageActionCreator } from "../../redux/state";




const Message = (props) => {

    let onSandMessageClick = (e)=> {
        let text=   e.target.value;
        props.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (e)=> {
          let text=   e.target.value;
          props.dispatch(updateNewMessageTextActionCreator(text))
    }

    let newMessageText = props.newMessageText;

    return (
        <div className={classes.messages}>
            {props.messages.map((message) => {
                return (

                    <div key={message.id} className={classes.message}>
                        <NavLink to="/dialogs/">{message.message}</NavLink>
                    </div>
                )

            })}
            <div>
                <textarea placeholder="Enter your message"  value = {newMessageText} onChange={onNewMessageChange}>
                           
                </textarea>
            </div>
            <div><button onClick={onSandMessageClick}>Send</button></div>
        </div>
    )
}



const Dialogs = (props) => {


    return (
        <div className={classes.dialogs}>
            {props.dialogs.map((dialog) => {
                return (
                    <div>
                        <div key={dialog.id}>
                            <NavLink to="/dialogs/">{dialog.user}</NavLink>
                        </div>
                    </div>


                )
            })}
            <Message messages={props.messages} dispatch = {props.dispatch} />

        </div>
    )
}

export default Dialogs