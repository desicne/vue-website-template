<template>

    <div class="side-bar">

        <img class="round-picture" src="../../../static/images/profile.jpg"/>

        <!-- Tabs -->
        <div class="mdl-layout__tab-topbar">
            <router-link class="mdl-layout__tab" :to="{ name: 'root' }">Home</router-link>
            <router-link tag="div" class="mdl-layout__tab has-sub-tabs" :to="{ name: 'profile' }">
                <span class="title">Profile</span>
                <div class="sub-tabs">
                    <router-link class="mdl-layout__tab" :to="{ name: 'child-1' }">Child-1</router-link><br>
                    <router-link class="mdl-layout__tab" :to="{ name: 'child-2' }">Child-2</router-link><br>
                    <router-link class="mdl-layout__tab" :to="{ name: 'child-3' }">Child-3</router-link>
                </div>
            </router-link>
            <router-link tag="div" class="mdl-layout__tab has-sub-tabs" :to="{ name: 'new-sub' }">
                <span class="title">New Sub</span>
                <div class="sub-tabs">
                    <router-link class="mdl-layout__tab" :to="{ name: 'a-child-1' }">Child-1</router-link><br>
                    <router-link class="mdl-layout__tab" :to="{ name: 'a-child-2' }">Child-2</router-link><br>
                    <router-link class="mdl-layout__tab" :to="{ name: 'a-child-3' }">Child-3</router-link>
                </div>
            </router-link>
            <router-link class="mdl-layout__tab" :to="{ name: 'blog' }">Blog</router-link>
        </div>

        <!-- Location and social -->
        <div class="links">
            <div class="location">
                <i class="zmdi zmdi-pin"></i> Novi Sad,Serbia
            </div>
            <div class="social-networks">
                <a v-bind:href="'https://www.github.com/desicne/'" target="_blank">
                    <i class="zmdi zmdi-github"></i>
                </a>
                <a v-bind:href="'https://www.instagram.com/desicne/'" target="_blank">
                    <i class="zmdi zmdi-instagram"></i>
                </a>
                <a v-bind:href="'http://twitter.com/desicne'" target="_blank">
                    <i class="zmdi zmdi-twitter"></i>
                </a>
                <a v-bind:href="'https://www.linkedin.com/in/dnesic/'" target="_blank">
                    <i class="zmdi zmdi-linkedin"></i>
                </a>
            </div>
        </div>
    </div>
    
</template>

<script>
    var Vue = require('vue')

    export default {
        computed: {
            title: function(){ 
                return this.$route.title;
            }
        },
    }
</script>


<style lang="scss">
        
    .side-bar {

        background-color: #fcfcfc;
        width: 20%;
        height: 100vh;
        margin: 0;
        display: inline-block;
        box-shadow: 0 0 35px #777;
        text-align: left;
        vertical-align: top;
        z-index: 10;


        transition: background-color 0.6s ease 0.1s;
            

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            display: block;
            margin: auto;
            padding-top: 30px;
            padding-bottom: 30px;
        }


        .mdl-layout__tab-topbar {
            height: 64px;
            width: auto;
            background: transparent;
            text-align: center;

            .mdl-layout__tab {
                line-height: 64px;
                height: 64px;
                width: 80%;
                cursor: pointer;
                text-align: center;
                text-decoration: none;
                color: #777;
                font-size: 18px;

                    
                &.has-sub-tabs {
                    transition-property: font-size, line-height, color, height, visibility;
                    transition-duration: 0.5s;
                    transition-timing-function: swing;

                    .sub-tabs {
                        visibility: hidden;
                        margin-top: 10px;
                        max-width: 0px;
                        width: auto;
                        display: none;
                        transition-property: max-width;
                        transition-duration: 0.5s;
                        transition-timing-function: swing;
                        
                        a {
                            font-size: 14px;
                        }
                    }

                    &.is-active {
                        transition-delay: 0.2s;
                        font-size: 10px;
                        line-height: 15px;
                        height: auto;
                        color: rgba(0,0,0,0.7);
                        background: rgba(0,0,0,0.1);

                        .sub-tabs {
                            visibility: visible;
                            transition-delay: 0.5s;
                            max-width: 320px;
                            display: block;
                        }
                    }
                }
            }
        }

        .mdl-textfield .mdl-button {
            position: relative;
            top: 0px;
            margin-right: -30px;

            i {
                padding-top: 3px;
            }   
        }

        .links {
            position: absolute;
            bottom: 20px;
            color: #aaa;
            text-align: center;
            width: 20%;

            .location {
                font-size: 12px;
                margin: 10px;
            }

            .social-networks {
                i {
                    margin-left: 3px;
                    margin-right: 3px;
                    color: #aaa;

                    &:hover {
                        color: #42A5F5;
                    }

                }
            }
        }
    }

</style>
