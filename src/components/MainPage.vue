<template>
    <div style="height: 100vh; background-color: #9FA8DA; padding-top: 100px;">
        <v-container fill-heights>
            <v-row>
                <v-col>
                    <v-card hover variant="elevated" color="indigo-darken-2" href="/projects">
                        <v-card-item>
                            <v-card-title><span>
                                    <h2>Projects</h2>
                                </span></v-card-title>
                        </v-card-item>
                        <v-card-text style="padding-top: 20px;">
                            <v-img :src="require('../assets/archive.png')" class="main-image"></v-img>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card hover variant="elevated" color="indigo-darken-2" href="/employees">
                        <v-card-item>
                            <v-card-title><span>
                                    <h2>Employees</h2>
                                </span></v-card-title>
                        </v-card-item>
                        <v-card-text style="padding-top: 20px;">
                            <v-img :src="require('../assets/group.png')" class="main-image"></v-img>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>

export default {
    name: 'MainPage',
    data() {
        return {

        };
    },
    methods: {

    },
};
</script>
  
<style scoped>
span {
    color: black;
}

.main-image {
    height: 250px;
}
</style>