import axios from "axios";
import React, {useState, useEffect, useRef} from "react";
import './random-api.css'

const getFullUserName = (userInfo) => {
    const {name: {first, last}} = userInfo;
    return `${first} ${last}`;
}


export default function RandomAPI () {
    
    const [randomUserData, setRandomUserData] = useState('') 
    const [userInfos, setUserInfos] = useState([])
    const [nextPageNumber, setNextPageNumber] = useState(1)


    const fetchNextUser = () => {
        fetchRandomData(nextPageNumber).then((randomData) => {
            // setRandomUserData(JSON.stringify(randomData, null, 2) || "No user data found.")
            if (randomData === undefined) return
            const newUserInfos = [
                ...userInfos,
                ...randomData.results,
            ]
            setUserInfos(newUserInfos)
            setNextPageNumber(randomData.info.page + 1);
        })
    }

    const fetchRandomData = () => {
        return axios
            .get(`https://randomuser.me/api?page=${nextPageNumber}`)
            .then(({data}) => {
                return data
            })
            .catch(err => {
                console.error('Error:',err)
            })
    }

    useEffect(() => {
        fetchNextUser();
        },[])

    return (
        <div className="random-api-box random">
            <h2 className="random__title">Random Api</h2>
            <button className="random__button" onClick={() => {
                fetchNextUser();
            }}>
            Fetch Next User
            </button>
            <div className="random__box">
            {
                userInfos.map((userInfo, idx) => (
                    <div className="random-person__box" key={idx}>
                        <p className="random__name" >{getFullUserName(userInfo)}</p>
                        <img className="random__picture" src={userInfo.picture.thumbnail} />
                    </div>
                ))
            }
            </div>
        </div>
    )
}

