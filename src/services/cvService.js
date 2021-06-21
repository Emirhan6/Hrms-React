import axios from "axios";

export default class CvService{

    getCvs(){
        return axios.get("http://localhost:8080/api/cvs/getall")
    }

    addCv(cv){
        return axios.post("http://localhost:8080/api/cvs/add",cv)
    }

    getByUserId(id){
        return axios.get("http://localhost:8080/api/cvs/getbyuserid?id="+id)
    }
}