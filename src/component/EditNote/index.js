import React from "react";
import { useParams } from "react-router-dom";

const EditNote = () => {

    const { postId } = useParams();

    return(
        <div>
            Edit Note! {postId}
        </div>
    )
}

export default EditNote;