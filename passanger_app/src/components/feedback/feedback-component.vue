<template>
    <div class="container inside_main">
        <div class="row justify-content-center align-content-center">
                <star-rating></star-rating>
            </div>

        <div class="row">
            <div class="col">
                <form @submit.prevent>
                    <div class="form-group">
                        <label for="bio">Left your comment here</label>
                        <textarea class="form-control" id="bio" rows="1"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" @click="">Submit</button>
                </form>

            </div>
        </div>



    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {GET_ALL_USERS_QUERY} from '../../services/Queries.js';
    import StarRating from 'vue-star-rating'

    export default {
        name: "JourneyComponent",
        components: {
            StarRating
        },
        data() {
            return {
                position: [],
            };
        },
        computed: {
            ...mapState([]),
            // staffExist: function () {
            // }
        },
        created() {
            // this.getUsers();
        },
        methods: {

        },
    }
</script>

<style scoped>
    /*.inside_mains {*/
    /*border-radius: 20px;*/
    /*}*/

    /*.colsDoc {*/
    /*padding-top: 1em;*/
    /*}*/
</style>
