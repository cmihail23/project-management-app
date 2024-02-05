<template>
    <div>
        <div>
            <v-row justify="end">
                <v-spacer />
                <v-col class="d-flex justify-end">
                    <v-btn v-on:click.prevent="addProject()" color="success" class="mt-2">Add project</v-btn>
                </v-col>
            </v-row>
        </div>
        <div v-for="(project, index) in  projects " :key="index" class="mt-3">
            <v-card>
                <v-card-item>
                    <v-card-title>
                        <span>
                            <h4>Name: {{ project.projectName }}</h4>
                        </span>
                    </v-card-title>
                </v-card-item>
                <v-card-text style="padding-top: 20px;">
                    <v-row>
                        <v-col>
                            Description: {{ project.projectDescription }}
                            <br>
                            Revenue: {{ project.projectRevenue }}$
                        </v-col>
                        <v-col>
                            <v-card-actions class="d-flex justify-end">
                                <v-btn variant="outlined" size="large" v-on:click.prevent="this.editProject(project.id)">
                                    Edit
                                </v-btn>
                                <v-btn variant="outlined" size="large" v-on:click.prevent="this.deleteProject(project.id)">
                                    Delete
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </div>
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
        editProject(projectId) {
            this.$router.push('/projects/edit/' + projectId)
        },
        deleteProject(projectId) {
            axios.delete(`http://localhost:3000/projects/${projectId}`).then(response => {
                console.log(response);
                this.projects = this.projects.filter(proj => proj.id != projectId);
            }).catch(error => {
                console.log(error)
            })
        },
        addProject() {
            this.$router.push('/projects/add')
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