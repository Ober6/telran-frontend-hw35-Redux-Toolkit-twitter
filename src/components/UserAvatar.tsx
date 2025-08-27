import {useAppDispatch, useAppSelector} from "../redux/hooks.ts"
import {userActions} from "../redux/slices/userSlice.ts";

const UserAvatar = () => {
    const avatar = useAppSelector(state => state.user.avatar);
    const name = useAppSelector(state => state.user.name);
    const dispatch = useAppDispatch();
    return (
        <div>
            <img src={avatar} alt={name} className={'user-avatar'}
                 onClick={() => dispatch(userActions.changeAvatar(prompt('Enter new avatar url') as string))}
            />
        </div>
    );
};

export default UserAvatar;