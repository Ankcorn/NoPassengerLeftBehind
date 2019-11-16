<template>
    <div id="app">
        <header>
            <header-component></header-component>
        </header>
        <main id="page-container">
            <div class="row pt-3">
                <div class="col-1"></div>
                <div class="col-10 inside_main">
                    <router-view/>
                </div>
                <div class="col-1"></div>
            </div>
        </main>
        <!--<footer id="footer">-->
            <!--<footer-component></footer-component>-->
        <!--</footer>-->

    </div>

</template>

<script>
    import HeaderComponent from './components/header_footer/header-component.vue';

    import {mapGetters, mapState} from 'vuex';

    export default {
        name: 'App',
        components: {
            HeaderComponent,
        },
        data() {
            return {
                checkLogged: false,
            };
        },

    };
</script>

<style>
    main {
        background-color: rgb(34, 164, 243);
        /*background: linear-gradient(45deg, dodgerblue, white);*/
    }

    #page-container {
        position: relative;
        min-height: 100vh;
        padding-bottom: 1em;
    }
    .inside_main {
        border-radius: 20px;
        padding: 1em;
        background-color: white;
    }

</style>

