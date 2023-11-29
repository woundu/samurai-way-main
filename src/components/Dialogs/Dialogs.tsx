import React from "react";
import classes from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";

type DialogItem = {
    Id:number;
    user: string;
}

type Message = {
    id: number;
    message: string;
}

const DIalogItem = (props:DialogItem)=>{
    let path = "/dialogs/" +props.Id
    return <div className={classes.item}>
    <NavLink to = {path}>{props.user}</NavLink>
   
</div>
}

const Message = (props:Message)=>{
    let path = "/dialogs/" +props.id
    return <div className={classes.item}>
    <NavLink to = {path}>{props.message}</NavLink>
   
</div>
}



const Dialogs = ()=>{
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DIalogItem Id ={1} user="DIMYCH"/>
                <DIalogItem Id ={2} user="ANDREY"/>
                <DIalogItem Id ={3} user="VALEYA"/>
            </div>
            <div className={classes.messages}>
                <Message id={1} message="yo"/>
                <Message id={2} message="come on"/>
                <Message id={3} message="everybody"/>
            </div>
        </div>
    )
}

export default Dialogs