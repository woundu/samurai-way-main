import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";



const Profile = (props)=> {
    
    
    return <div>
        <ProfileInfo/>
        <MyPosts posts = {props.posts} diapatch = {props.diapatch} newPostText = {props.newPostText} />
    </div>
}

export default Profile