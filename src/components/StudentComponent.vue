

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
          <td>{{student.id}}</td>
          <td>{{student.name}}</td>
          <td><a :href="'mailto:'+ student.email">{{student.email}}</a></td>
          <td>
            <a href="#" class="button button-green">Edit</a>
            <button class="button button-red">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
  </template>

<script>
import {StudentService} from '../StudentService.js'

export default {
 
  data (){
    return {students: []}
  },
   async created(){
    const studentService = new StudentService();
    this.students = await studentService.getStudents();
   }

  }


</script>



  