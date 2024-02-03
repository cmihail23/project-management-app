<template>
    <div>
        <ul>
            <li v-for="(project, index) in  projects " :key="index" class="mt-3">
                <v-card>
                    <v-card-item>
                        <v-card-title>
                            <span>
                                <h4>{{ project.projectName }}</h4>
                            </span>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text style="padding-top: 20px;">
                        {{ project.projectDescription }}
                    </v-card-text>
                </v-card>
            </li>
        </ul>
    </div>
</template>
  
<script>
import axios from "axios";

export default {
    name: "ProjectsPage",
    data() {
        return {
            projects: []
        };
    }, methods: {
        getPeriodString(startDate, endDate) {
            console.log(startDate)
            console.log(endDate)

            return typeof (startDate) + " - " + endDate.toLocaleString()
        }
    },
    mounted() {
        axios.get('http://localhost:3000/projects')
            .then(response => {
                console.log(response)
                console.log("Am primit raspund pe mounted" + response.data)
                this.projects = response.data;
            })
            .catch(error => {
                console.log(error)
            });
    }
};
</script>
  
<style scoped></style>