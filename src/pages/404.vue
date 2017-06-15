<template>
    <div class="mdl-grid mdl-grid--no-spacing">
        <div class="mdl-cell mdl-cell--top mdl-cell--2-col"></div>
        <div class="mdl-cell mdl-cell--center mdl-cell--8-col">
            <div class="wl-card-404 mdl-card mdl-shadow--1dp">
                <div class="mdl-card__title">
                    Page Not Found
                </div>
                <div class="mdl-card__supporting-text">
                    Oops. Something is wrong here.<br/>
                    We could not find the page<br/> you were looking for.<br/>
                </div>
                <div class="mdl-card__actions mdl-card--border">
                    <router-link tag="button" :to="{name: 'home'}" class="mdl-button mdl-js-button mdl-js-ripple-effect">
                        Back to Home page
                    </router-link>
                </div>
            </div>
        </div>
        <div class="mdl-cell mdl-cell--top mdl-cell--2-col"></div>
    </div>
</template>

<script>
    
    export default {
        methods: {
        }
    }

</script>

<style lang="scss">
    .page-undefined {
        background: url(../../static/images/backgrounds/404.jpeg) no-repeat bottom center;

        .wl-card-404 {
            margin-top: 40px;
            background: white url(../../static/images/backgrounds/404.jpeg) no-repeat bottom right;
            background-size: 60%;

            .mdl-card__title {
                padding: 60px 60px 0;
                font-size: 3em;
                font-family: "Roboto Condensed", "Roboto";
                color: rgb(41,128,185);
            }

            .mdl-card__supporting-text {
                padding: 20px 60px 0;
                min-height: 250px;
            }
            
            .mdl-card__actions {
                button {
                    color: rgb(41,128,185);
                }
            }
        }
    }
</style>

