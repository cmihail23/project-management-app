<template>
    <div>
        <v-data-table :items="employees">
            <template v-slot:item="row">
                <tr>
                    <td>{{ row.item.employeeName }}</td>
                    <td>{{ row.item.employeePhoneNumber }}</td>
                    <td>{{ row.item.employeeEmail }}</td>
                    <td>{{ row.item.department }}</td>
                    <td>{{ row.item.employeedDate }}</td>
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
        editEmployee(employeeId) {
            console.log("Am apelat edit pt anagajat: " + employeeId)
        },
        deleteEmployee(employeeId) {
            console.log("Am apelat delete pt anagajat: " + employeeId)
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