import axios from 'axios'

export default class PositionService{
    getPositions(){
        return axios.get("http://localhost:8080/api/jobpositions/getall")
    }

    addPosition(position){
        return axios.post("http://localhost:8080/api/jobpositions",position)
    }

    deletePosition(id){
        return axios.delete(`http://localhost:8080/api/jobpositions?id=${ id }`)
    }

    updatePosition(position){
        return axios.put("http://localhost:8080/api/jobpositions",position)
    }
}