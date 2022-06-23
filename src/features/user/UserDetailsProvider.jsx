import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import useAuth from '../../hooks/useAuth';
import { getUserDetails } from './userSlice';

const UserDetailsProvider = (props) => {
    const dispatch = useDispatch();
    const isAuth = useAuth();

    useEffect(() => {
        if (isAuth) {
            dispatch(getUserDetails())
        } else {

        }
    }, [dispatch, isAuth]);
    return props.children;
}

export default UserDetailsProvider;
