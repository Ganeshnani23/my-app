import axios from 'axios'
import React, { useEffect, useState } from 'react'
import userstyles from "./AllUser.module.css"

const AllUsersComponent = () => {
    let [pageNum, SetPageNum] = useState(1);
    const [totalPage, setTotalPages] = useState(1);
    const [userData, setData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [updateUserData, setUpdateUserData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "id": ""
    });

    useEffect(() => {
        function fetchingUsers() {
            axios.get(`https://reqres.in/api/users?page=${pageNum}`).then(data => {
                setData(data.data.data);
                setTotalPages(data.data.total_pages);
                // console.log(data.data.data)
                setDataLoaded(true);

            }).catch(err => console.log(err))
        }
        fetchingUsers();
    }, [pageNum]);

    const setPageNumber = (num) => {
        if (num >= 1 && num <= totalPage) {
            SetPageNum(num);
            // console.log(userData);
            // console.log(pageNum);
        }
    }

    const handleEdit = (data) => {
        setUpdateUserData(data);
        setShowUpdateForm(true);
        // console.log(updateUserData);
    }

    const handleUpdateChanges = (e) => {
        setUpdateUserData({ ...updateUserData, [e.target.name]: e.target.value });
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://reqres.in/api/users/${updateUserData.id}`, updateUserData).then(res => {
            let updatedData = userData.filter(data => {
                if (data.id === updateUserData.id) {
                    return [...userData, data.first_name = updateUserData.first_name, data.last_name = updateUserData.last_name]
                }else{
                    return userData
                }
            })
            // console.log(updatedData)
            setData(updatedData);
            alert("data updated successfully status code " + res.status);
        }).catch(err => {
            // console.log(err);
            alert("failed to update status " + err.status)
        });
        setShowUpdateForm(false);
    }


    const handleDelete = (user_Id) => {
        axios.delete(`https://reqres.in/api/users/${user_Id}`).then(res => {
            let updatedData = userData.filter(data => {
                // console.log(user_Id);
                return data.id !== user_Id
            })
            setData(updatedData);
            console.log(res);
            alert("data deleted successfully status code " + res.status)
        }).catch(err => {
            console.log(err);
            alert("data not deleted status " + err.status)
        });
    }
    return (
        <>
            <div className={userstyles.cardmain} onClick={() => setShowUpdateForm(false)}>
                {
                    dataLoaded ? <>
                        {
                            userData.map(user => {
                                return (
                                    <div className="card" style={{ width: "18rem" }} onClick={e => e.stopPropagation()} key={user.id}>
                                        <img src={user.avatar} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                                            <div className={userstyles.buttons}>
                                                <button className="btn btn-primary" onClick={() => handleEdit(user)}>Edit</button>
                                                <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </> : <>Data is Loading from api</>
                }
            </div>
            <div className={userstyles.pagination}>
                <button onClick={() => setPageNumber(pageNum - 1)}><i className="fa-solid fa-arrow-left"></i></button>
                <h4>{pageNum}</h4>
                <button onClick={() => setPageNumber(pageNum + 1)}><i className="fa-solid fa-arrow-right"></i></button>
            </div>


            {
                showUpdateForm ?
                    <div className={userstyles.updatinguserconatiner} onClick={(e) => {
                        e.stopPropagation();
                        setShowUpdateForm(false)
                    }}>
                        <div className={userstyles.formcontainer} onClick={e => e.stopPropagation()}>
                            <form onSubmit={handleUpdateSubmit}>
                                <input type="text" name="first_name" id="" placeholder='First Name' required value={updateUserData.first_name} onChange={handleUpdateChanges} />
                                <input type="text" name="last_name" required placeholder='Last Name' value={updateUserData.last_name} onChange={handleUpdateChanges} />
                                <input type="email" name="email" required placeholder='Email id' value={updateUserData.email} onChange={handleUpdateChanges} />
                                <input type="submit" value="Update Details" />
                            </form>
                        </div>
                    </div> : <></>
            }
        </>
    )
}

export default AllUsersComponent