<template>
    <div>
        <v-container>
            <h1>Project: {{ this.project.projectName }} </h1>
            <v-card variant="elevated" color="indigo" class="mt-2">
                <v-card-item>
                    <v-card-title></v-card-title>
                </v-card-item>
                <v-card-text>
                    <v-form fast-fail v-model="this.form">
                        <v-text-field v-model="this.project.projectName" label="Project Name"></v-text-field>
                        <v-text-field v-model="this.project.projectDescription" label="Project Description"></v-text-field>
                        <v-text-field v-model="this.project.projectStartDate" label="Project Start Date"
                            type="date"></v-text-field>
                        <v-text-field v-model="this.project.projectEndDate" label="Project End Date"
                            type="date"></v-text-field>
                        <v-text-field v-model="this.project.projectRevenue" label="Project Revenue"
                            type="number"></v-text-field>
                        <v-select label="Angajati" :items="employees" item-value="id" item-title="employeeName"
                            v-model="this.selectedEmployees" multiple></v-select>

                        <v-btn v-if="this.isAdd" type="submit" color="primary" block class="mt-2"
                            v-on:click.prevent="addProject()">Add</v-btn>
                        <v-btn v-else type="submit" color="primary" block class="mt-2"
                            v-on:click.prevent="editProject()">Edit</v-btn>
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
            projectId: this.$route.params.id,
            project: {},
            employees: [],
            selectedEmployees: [],
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
        addProject() {
            var newProject = {
                ...this.project,
                projectStartDate: new Date(this.project.projectStartDate),
                projectEndDate: new Date(this.project.projectEndDate),
                employees: this.selectedEmployees
            };
            axios.post('http://localhost:3000/projects', newProject)
                .then(res => {
                    console.log(res)
                    this.$router.push('/projects/edit/' + res.data.id)
                })
                .catch(error => { console.log(error) })
        },
        editProject() {
            var editedProject = {
                ...this.project,
                projectStartDate: new Date(this.project.projectStartDate),
                projectEndDate: new Date(this.project.projectEndDate),
                employees: this.selectedEmployees
            };
            console.log(editedProject.employees)
            axios.put(`http://localhost:3000/projects/${this.projectId}`, editedProject)
                .then(res => { console.log(res) })
                .catch(error => { console.log(error) })
        }
    },
    mounted() {
        if (this.projectId) {
            axios.get(`http://localhost:3000/projects/${this.projectId}`)
                .then(response => {
                    this.project = {
                        ...response.data,
                        projectStartDate: this.convertFirestoreDateToVuetifyDate(response.data.projectStartDate),
                        projectEndDate: this.convertFirestoreDateToVuetifyDate(response.data.projectEndDate),
                        employees: response.data.employees
                    };
                    this.selectedEmployees = this.project.employees;
                })
                .catch(error => {
                    console.log(error)
                });
        } else {
            this.isAdd = true;
        }
        axios.get('http://localhost:3000/employees')
            .then(response => {
                this.employees = response.data;
                console.log(this.employees)
            })
            .catch(error => {
                console.log(error)
            });
    }
};
</script>
  
<style scoped></style>