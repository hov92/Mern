import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function ProfileScreen() {
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin;
    const userDetails = useSelector((state) => state.userDetails)
    const { loading, error, user } = userDetails
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsUser())
    }, [dispatch, userInfo._id])
    const submitHandler = (e) => {
        e.preventDefault();
        //dispatch
    }
    return (
        <div>
            <form className="form" onSubmit={submithandler}>
                <div><h1>User Profile</h1></div>
                {loading? <LoadingBox></LoadingBox>:
                error? <MessageBox variant="danger">{error}</MessageBox>:
                <>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Enter name" value={user.name}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="Enter email" value={user.email}></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="text" placeholder="Enter password" value={user.password}></input>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input id="confirmPassword" type="text" placeholder="Enter confirmPassword"></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Update</button>
                </div>



                </>}
            </form>
        </div>
    )
}

export default ProfileScreen
