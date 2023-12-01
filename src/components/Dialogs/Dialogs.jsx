import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import { updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";




const Message = (props) => {

    let onSandMessageClick = ()=> {
        
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
        <div className="wrapper">
               
            {props.dialogs.map((dialog) => {
                return (
                       
                        <div key={dialog.id}>
                            <NavLink to="/dialogs/">{dialog.user}</NavLink>
                        </div>
                )
            })}
            <Message messages={props.messages} dispatch = {props.dispatch} />
        </div>
        
    )
}

export default Dialogs