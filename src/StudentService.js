import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export class StudentService{
    async getStudents(){
        const responds = await axios.get(url);
        return responds.data;
    }

    async getStudent(id){
        const responds = await axios.get`${url}/${id}`;
        return responds.data;
    }
}