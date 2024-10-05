<template>
    <H2>Student details</H2>
</template>

<script>
import { StudentService} from '@/StudentService';

export default {
    props:["id"],
    data() {
        return {
            student:null,
            loading: false,
            error: null
        },
    },
    async created(){
    const studentService = new StudentService();
    this.students = await studentService.getStudents();
   },
   watch: {
    "$routes.params.id":"fetchStudent"
   }
   methods:{
    async fetchStudent(){
        const studentService = new StudentService();
        this.loading = true;
        try(){
            const id = Number(this.$routes.params.id);
            if(id){
                this.student = 
            }
        }
        
    }
   }
}


</script>

