import axios from "axios";

export const deletenote = ({note}) => {
        axios.post("http://localhost:3001/deletenotes/delete", note).then((response) =>{
        })
        .catch(err => {
            if(err.response){
                console.log(err);
            }
        })
}