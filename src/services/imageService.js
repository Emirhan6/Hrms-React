import axios from "axios";

export default class ImageService{
    getById(imageId){
        return axios.get("http://localhost:8080/api/images/getByJobseekerId?id="+imageId)
    }
}