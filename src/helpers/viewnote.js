import axios from "axios";

export const viewnote = async ({postId}) => {
    let result = await axios.post("http://localhost:3001/note-details",{postId})
    return result.data[0];
}
