<template>
    <h2>Student details</h2>
    <section v-if="error">
        <p>
            {{ error }}
        </p>
    </section>
    <section v-if="student && !error" >
        <h3>
            {{ student.name }}
        </h3>
        <p>
            id: {{ student.id }}        
        </p>
        <p>
            email: {{ student.email }}
        </p>
    </section>
</template><script>

import { StudentService } from '@/StudentService';
export default {
    props:["id"],
  data(){    return {
        student:null,
        loading:false,
        error:null    }
  },
  async created(){
    await this.fetchStudent();
    },
    watch:{
        "$route.params.id":"fetchStudent"
    },
    methods:{
        async fetchStudent(){
            const studentService = new StudentService();
            this.loading=true;
            try{
                const id=Number(this.$route.params.id);
                if(id){
                    this.student = await studentService.getStudent(id);
                }else{
                    this.error="Student not found";
                }
            } catch(e){
                this.error="New error";
                console.log(e)
            }finally{
                this.loading=false;
            }
        }
    }
};
</script>