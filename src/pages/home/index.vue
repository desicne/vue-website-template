<template>
    <div class="user-info"> <!--class="mdl-layout__content"-->
        
        <div class="user-details"> <!--  mdl-cell mdl-cell--10-col -->
            <h1>
                <b>Dejan</b> Nesic
            </h1>
            
            <div class="info-block">
                <h5>Email</h5>
                <i class="zmdi zmdi-email zmdi-hc-2x"></i>
                <p><a v-bind:href="'mailto:' + 'desicne@gmail.com'">desicne@gmail.com</a></p>
            </div>
            <div class="info-block">
                <h5>Personal Website</h5>
                <i class="zmdi zmdi-desktop-mac zmdi-hc-2x"></i>
                <p><a v-bind:href="'http://desicne.com'">desicne.com</a></p>
            </div>
            <div class="info-block">
                <h5>Twitter</h5>
                <i class="zmdi zmdi-twitter zmdi-hc-2x"></i>
                <p><a v-bind:href="'http://twitter.com/desicne'" target="_blank">desicne</a></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log('Index.vue');
        }
    }
</script>

<style lang="scss">

        main {
            .user-info {
                padding: 40px 8%;
                color: #666;

                b {
                    color: #666;
                }  
            }

        }

        .user-details {
            display: inline-block;
            padding-left: 20px;
        }

        .info-block{
            overflow: hidden;
            margin-bottom: 10px;

            i {
                display: inline-block;
                width: 56px;
                float: left;
                position: relative;
                top: 12px;
                left: 16px;
            }
            h5 {
                font-size: 12px;
                margin: 5px 0 0;
                color: #aaa;
                white-space:nowrap;
            }
            p {
                display: inline-block;
                font-size: 18px;
                white-space:nowrap;
            }

            a {
                text-decoration: none;
                color:#6A64A7;
            }
        }


</style>
