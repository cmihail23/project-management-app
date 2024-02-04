<template>
    <div>
        
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            employees: []
        };
    },
    mounted() {
        axios.get('http://localhost:3000/employees')
            .then(response => {
                console.log(response)
                console.log("Am primit raspund pe mounted" + response.data)
                this.employees = response.data;
            })
            .catch(error => {
                console.log(error)
            });
    }
};
</script>
  
<style scoped></style>