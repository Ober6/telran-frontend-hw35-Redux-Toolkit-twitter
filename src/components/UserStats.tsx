import UserAvatar from "./UserAvatar.tsx";
import {useAppDispatch, useAppSelector} from "../redux/hooks.ts";
import {userActions} from "../redux/slices/userSlice.ts";


const UserStats = () => {
    const dispatch = useAppDispatch();
    const name = useAppSelector(state => state.user.name);
    const followers = useAppSelector(state => state.user.followers);
    const subscribers = useAppSelector(state => state.user.subscribers);
    return (
        <div className={"user-stats"}>
            <UserAvatar/>
            <p
                onClick={() => dispatch(userActions.rename(prompt("Enter new nickname") as string))}
            >{name}</p>
            <div className={"stats"}>
                <div
                    onClick={() => dispatch(userActions.follow(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(userActions.unfollow(1));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => dispatch(userActions.subscribe(1))}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(userActions.unsubscribe(1));
                    }}
                >Subscribers: {subscribers}</div>
            </div>
        </div>
    );
};

export default UserStats;