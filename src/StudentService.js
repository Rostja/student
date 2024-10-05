import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users";

export class StudentService{
    async getStudents(){
        const responds = await axios.get(url);
        return responds.data;
    }

    async getStudent(id){
        const responds = await axios.get(`${url}/${id}`);
        return responds.data;
    }

    async addStudent(student){
        const responds= await axios.post(url,student);
        return responds.data;

                
}
    async delStudent(id){
        const responds = await axios.delete(`${url}/${id}`);
        return responds.data;
    }
}