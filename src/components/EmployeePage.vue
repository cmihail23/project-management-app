<template>
    <div>
        <v-container>
            <h1>Employee: {{ this.employee.employeeName }} </h1>
            <v-card variant="elevated" color="indigo" class="mt-2">
                <v-card-item>
                    <v-card-title></v-card-title>
                </v-card-item>
                <v-card-text>
                    <v-form fast-fail v-model="this.form" ref="form">
                        <v-text-field :rules="[v => !!v || 'Error: Please enter name']" v-model="this.employee.employeeName"
                            label="Employee Name"></v-text-field>
                        <v-text-field :rules="[v => !!v || 'Error: Please enter email']"
                            v-model="this.employee.employeeEmail" label="Employee Email"></v-text-field>
                        <v-text-field :rules="[v => !!v || 'Error: Please enter phone number']"
                            v-model="this.employee.employeePhoneNumber" label="Employee phone number"></v-text-field>
                        <v-text-field :rules="[v => !!v || 'Error: Please enter department']"
                            v-model="this.employee.department" label="Employee department"></v-text-field>
                        <v-text-field :rules="[v => !!v || 'Error: Please enter employed date']"
                            v-model="this.employee.employeedDate" label="Employeed date" type="date"></v-text-field>
                        <v-btn v-if="this.isAdd" type="submit" color="primary" block class="mt-2"
                            v-on:click="addEmployee()">Add</v-btn>
                        <v-btn v-else type="submit" color="primary" block class="mt-2"
                            v-on:click="editEmployee()">Edit</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    data() {
        return {
            employeeId: this.$route.params.id,
            employee: {},
            form: false,
            isAdd: false
        };
    }, methods: {
        convertFirestoreDateToVuetifyDate(firestoreDateString) {
            var firestoreDate = new Date(firestoreDateString);
            const year = firestoreDate.getFullYear();
            const month = String(firestoreDate.getMonth() + 1).padStart(2, '0');
            const day = String(firestoreDate.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        addEmployee() {
            this.$refs.form.validate().then((validateResult) => {
                if (validateResult.valid) {
                    var newEmployee = {
                        ...this.employee,
                        employeedDate: new Date(this.employee.employeedDate)
                    };
                    axios.post('http://localhost:3000/employees', newEmployee)
                        .then(res => {
                            console.log(res)
                            this.$router.push('/employees/edit/' + res.data.id)
                        })
                        .catch(error => { console.log(error) })
                } else {
                    console.log('Form is not valid');
                }
            });
        },
        editEmployee() {
            this.$refs.form.validate().then((validateResult) => {
                if (validateResult.valid) {
                    var editedEmployee = {
                        ...this.employee,
                        employeedDate: new Date(this.employee.employeedDate)
                    };
                    axios.put(`http://localhost:3000/employees/${this.employeeId}`, editedEmployee)
                        .then(res => { console.log(res) })
                        .catch(error => { console.log(error) })
                } else {
                    console.log('Form is not valid');
                }
            });
        }
    },
    mounted() {
        if (this.employeeId) {
            axios.get(`http://localhost:3000/employees/${this.employeeId}`)
                .then(response => {
                    this.employee = {
                        ...response.data,
                        employeedDate: this.convertFirestoreDateToVuetifyDate(response.data.employeedDate)
                    };
                })
                .catch(error => {
                    console.log(error)
                });
        } else {
            this.isAdd = true;
        }
    }
};
</script>
  
<style scoped></style>