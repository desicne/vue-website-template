<template>
   <div id="app"> <!--mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button mdl-layout--fixed-header-->       
        <side-nav-bar></side-nav-bar>
        <main> <!--class="mdl-layout__content"-->
            <router-view></router-view>
        </main>
    </div>
</template>


<script>
    /* Initialise Vue */
    export default {
        computed: {
            pageClass: function (){
                var routeName = this.$route.name;
                var pageClass = 'page-' + routeName;   
                return pageClass;
            }
        },
        methods: {
            refreshPageClass: function(newClass, oldClass){
                app.className = app.className.replace(' ' + oldClass, '') // Remove the previous page class
                app.className += ' ' + newClass
            }
        },
        components: {
            sideNavBar: require('./components/base/side-nav-bar.vue')
        },
        mounted () {
            this.refreshPageClass(this.pageClass) 
        },
        watch: {
            'pageClass': function(newValue, oldValue) {
                this.refreshPageClass(newValue, oldValue)
            }
        }
    }


</script>

<style lang="scss">

    body {
        margin: 0;
        overflow: hidden;
    }

    main {
        width:79%;
        display: inline-block;
        z-index: 5;
        > div {
            width: 100%;
        }
    }

</style>