<template>
    <div class="container ">
        <form @submit.prevent>

            <div class="form-group">
                <label for="name" class="col-form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="John">
            </div>

            <div class="form-group">
                <label for="email" class="col-form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="email@example.com">
            </div>

            <div class="form-group">
                <label for="phone" class="col-form-label">Phone</label>
                <input type="number" class="form-control" id="phone" placeholder="+987654321">
            </div>

            <div class="form-group">
                <label for="bio">Bio</label>
                <textarea class="form-control" id="bio" rows="1"></textarea>
            </div>

            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupFileAddon01">Upload your Photo</span>
                </div>
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="inputGroupFile01"
                           aria-describedby="inputGroupFileAddon01">
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                </div>
            </div>

            <br>

            <button type="submit" class="btn btn-primary" @click="">Submit</button>
        </form>

    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import { GET_ALL_USERS_QUERY } from '../../services/Queries.js';
    export default {
        name: "ProfileComponent",
        components: {},
        data() {
            return {
                users: '',
            };
        },
        computed: {
            ...mapState([]),
        },
        created() {
            // this.getUsers();
        },
        methods: {
            async getUsers() {
                this.users = await this.$apollo.query({ query: GET_ALL_USERS_QUERY })
            }
        },
    }
</script>

<style scoped>

</style>
