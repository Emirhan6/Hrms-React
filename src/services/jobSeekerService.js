import axios from 'axios'

export default class JobSeekerService{
    getJobSeekers(){
        return axios.get("http://localhost:8080/api/jobseekers/getall")
    }

    addJobSeeker(jobSeeker){
        return axios.post("http://localhost:8080/api/jobseekers",jobSeeker)
    }

    deleteJobSeeker(id){
        return axios.delete(`http://localhost:8080/api/jobseekers?id=${ id }`)
    }

    updateJobSeeker(jobSeeker){
        return axios.put("http://localhost:8080/api/jobseekers",jobSeeker)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobseekers/getbyid?id="+id)
    }

    getByName(name){
        return axios.get("http://localhost:8080/api/jobseekers/getbyname?name="+name)
    }
}