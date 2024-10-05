<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name and surname</th>
          <th>E-mail address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td><a :href="'mailto:' + student.email">{{ student.email }}</a></td>
          <td>
            <RouterLink class="button" :to="'/detail/'+student.id">Details</RouterLink>
            <a href="#" class="button button-green">Edit</a>
            <button @click="deleteStudent(student.id)" class="button button-red">Delete</button>
          </td>
          
        </tr>
      </tbody>
    </table>
  </section>
  <form @submit.prevent="createStudent">
    <h2>Add a new student</h2>
  <label for="name">Name and surname:</label>
  <input v-model="newStudent.name" required type="text" id="name" >

  <label for="email">E-mail address:</label>
  <input v-model="newStudent.email" required type="email" id="email" >

  <button type="submit">Add</button>
  </form>
</template>

<script>
import {StudentService} from '../StudentService.js'
export default {
  data(){
    return {
        students:[],
        newStudent:{
          name:"",
          email:""
        }
    }
  },
  async created(){
    const studentService = new StudentService();
    this.students= await studentService.getStudents();
    },
    methods:{
      async createStudent(){
        const studentService = new StudentService();
        try{
          const createdStudent = await studentService.addStudent(this.newStudent)
          this.students.push(createdStudent);
          this.newStudent.name="";
          this.newStudent.email="";
        }catch(e){
          console.error(e);
        }
      },
      async deleteStudent(id){
        const studentService = new StudentService();
        try{
          await studentService.delStudent(id)
          this.students = this.students.filter(s => s.id !== id )
        } catch(e){
          console.error(e);
        }
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
/* Set the box-sizing property for all items */
* {
  box-sizing: border-box;
}

/* Properties for body */
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

/* Container class that is limited in width and centers content */
/* Setting the left and right margins to "auto" centers the container */
.container {
  margin: auto 20px;
  width: 100%;
}

/* Tables */
table {
  width: 100%;
}
table th,
table td {
  padding: 8px;
  text-align: left;
}
/* We shade every second (even) row of the table */
/* We use tbody to make sure we are not shading the header - this preserves the order of the shading */
table tbody > tr:nth-child(odd) {
  background: #dddddd;
}

/* Buttons */
.button {
  display: inline-block;
  margin: 2px 0;
  padding: 12px 30px 14px;
  border: 0;
  background: #999999;
  border-radius: 6px;
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
}
/* Button on mouse hover*/
.button:hover {
  background: #888888;
}
/* Button in active state */
.button:active,
.button:focus {
  background: #777777;
}

/* Green button */
.button-green {
  background: #33cc55;
}
.button-green:hover {
  background: #22bb44;
}
.button-green:active,
.button-green:focus {
  background: #22aa44;
}

/* Red button */
.button-red {
  background: #dd3333;
}
.button-red:hover {
  background: #cc2222;
}
.button-red:active,
.button-red:focus {
  background: #bb2222;
}

/* Media Query for devices with a minimum width of 992px */
/* ie for desktop computers */
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
</style>