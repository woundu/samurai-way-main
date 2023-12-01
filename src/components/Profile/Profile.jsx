import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import StoreContext from "../../StoreContext";



const Profile = (props)=> {
    
    
    return <div>
        
            <ProfileInfo/>
             <MyPosts/>
    </div>
}

export default Profile