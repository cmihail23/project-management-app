<template>
    <div>
        <v-container>
            <h1>Project: </h1>
            <v-card variant="elevated" color="indigo">
                <v-card-item>
                    <v-card-title>{{ this.project.projectName }}</v-card-title>
                </v-card-item>
                <v-card-text>
                    <v-form fast-fail>


                        <v-btn type="submit" color="primary" block class="mt-2" v-on:click.prevent="signup()">Save</v-btn>

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
            projectId: "",
            project: {}
        };
    }, mounted() {
        if (this.projectId)
            axios.get(`http://localhost:3000/projects/${this.projectId}`)
                .then(response => {
                    console.log(response)
                    console.log("Am primit raspund pe mounted" + response.data)
                    this.project = response.data;
                })
                .catch(error => {
                    console.log(error)
                });
    }
};
</script>
  
<style scoped></style>