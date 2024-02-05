<template>
    <div>
        <div>
            <v-row justify="end">
                <v-spacer />
                <v-col class="d-flex justify-end">
                    <v-btn v-on:click.prevent="addEmployee()" color="success" class="mt-2">Add employee</v-btn>
                </v-col>
            </v-row>
        </div>
        <v-data-table :items="employees">
            <template v-slot:item="row">
                <tr>
                    <td>{{ row.item.employeeName }}</td>
                    <td>{{ row.item.employeePhoneNumber }}</td>
                    <td>{{ row.item.employeeEmail }}</td>
                    <td>{{ row.item.department }}</td>
                    <td>{{ new Date((row.item.employeedDate._seconds * 1000) + (row.item.employeedDate._nanoseconds
                        / 1e6)).toDateString() }}</td>
                    <td>{{ row.item.id }}</td>
                    <td>
                        <v-btn class="mx-2" v-on:click.prevent="editEmployee(row.item.id)">Open
                        </v-btn>
                    </td>
                    <td>
                        <v-btn class="mx-2" v-on:click.prevent="deleteEmployee(row.item.id)" color="error">
                            Delete
                        </v-btn>
                    </td>
                </tr>
            </template>

        </v-data-table>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    data() {
        return {
            employees: []
        };
    }, methods: {
        convertFirestoreDateToVuetifyDate(firestoreDateString) {
            console.log(firestoreDateString)
            var firestoreDate = new Date(firestoreDateString);
            const year = firestoreDate.getFullYear();
            const month = String(firestoreDate.getMonth() + 1).padStart(2, '0');
            const day = String(firestoreDate.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        editEmployee(employeeId) {
            this.$router.push('/employees/edit/' + employeeId)
        },
        deleteEmployee(employeeId) {
            axios.delete(`http://localhost:3000/employees/${employeeId}`).then(response => {
                console.log(response);
                this.employees = this.employees.filter(empl => empl.id != employeeId);
            }).catch(error => {
                console.log(error)
            })
        },
        addEmployee() {
            this.$router.push('/employees/add')

        }
    },
    mounted() {
        axios.get('http://localhost:3000/employees')
            .then(response => {
                this.employees = response.data;
            })
            .catch(error => {
                console.log(error)
            });
    }
};
</script>
  
<style scoped></style>