<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">No Left Behind</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-expand">
                <div class="navbar-nav ">
                    <router-link class="nav-item nav-link" to="/profile">Profile</router-link>
                    <router-link class="nav-item nav-link" to="/journey">Journey</router-link>
                    <router-link class="nav-item nav-link" to="/feedback">Feedback</router-link>
                </div>
            </div>
        </nav>

    </div>

</template>

<script>

    export default {
        name: "HeaderComponent",
        data() {
            return {}
        },
    }
</script>

<style scoped>
</style>
