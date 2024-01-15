import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewNote = () => {
    const { postId } = useParams();
    
    const [noteDetail, setNoteDetail] = useState([]);

    useEffect(() =>{
        axios.post("http://localhost:3001/note-details",{postId}).then((response) =>{
            setNoteDetail(response.data[0]);
        })

    },[])

    return(
        <div>
            <p>
                {noteDetail.title}
            </p>
            <p>
                {noteDetail.postbody}
            </p>
        </div>
       
    )
}

export default ViewNote;