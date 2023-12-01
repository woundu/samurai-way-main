import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";





const Message = (props) => {



    return (
        <div className={classes.messages}>
            {props.messages.map((message) => {
                return (

                    <div key={message.id} className={classes.message}>
                        <NavLink to="/dialogs/">{message.message}</NavLink>
                    </div>
                )
            })}
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
            <Message message = {props.messages}/>

        </div>
    )
}

export default Dialogs