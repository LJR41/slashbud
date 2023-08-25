import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import NavBar from './NavBar'

const OneList = () => {
    const {id} = useParams()
    const [oneList, setOneList] = useState([])
    const [listItems, setListItems] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/lists/one/${id}`)
        .then(response => {
            setOneList(response.data)
            setListItems(response.data.listObjects)})
        .catch(err => console.log(err))
    }, [])
    

    // http://localhost:3000/onelist/64e81fae66671b2cc5de73f8

    return (
        <div className="flex-col bg-gradient-to-r from-cyan-600 to-purple-500 ... space ">
            <NavBar />
            <div className="move ...ring-offset-4 ring-4 items-center justify-center max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700e">
                <h2 className="flex items-center justify-center ... bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700e">{oneList.listName}</h2>
                {listItems.map((eachItem, indx) =>{
                    return(
                        <ol>
                            <li>{eachItem.title}</li>
                        </ol>
                    )
                })}
            </div>

            {/* <div>
                <h3>{oneList.lists[0].listObjects[0]}</h3>
                <img src={oneList.listObjects[0].img}></img>
                {oneList.lists[0].isGames?<p>{oneList.listObjects[0].genre}</p>:<p>{oneList.listObjects[0].game}</p>}
            </div>
            <div>
                <p>{oneList.lists[0].isPublic?"Yes":"No"}</p>
                <p>Last Updated: {oneList.lists[0].updatedAt}</p>
                <p>First Created: {oneList.lists[0].createdAt}</p>
                <button type='button'>UPDATE BUTTON NEEDS WORK</button>
                <button type='button'>DELETE BUTTON NEEDS WORK</button>
            </div> */}
        </div>
    )
}

export default OneList