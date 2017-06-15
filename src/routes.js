var VueRouter = require('vue-router')

// Router setup
export const router = new VueRouter({
    linkActiveClass: "is-active",
    mode: 'history',
    saveScrollPosition: true,
    routes: [
        { path: '',                        name: 'root', title: 'Home Page', component: require('./pages/home/index.vue') },
        { path: '/profile',                name: 'profile', title: 'Profile', redirect: '/profile/child-1', component: require('./pages/home.vue'),
            children: [
                { path: 'child-1',          name: 'child-1', title: 'Child-1', component: require('./pages/profile/child-1.vue') },
                { path: 'child-2',          name: 'child-2', title: 'Child-2', component: require('./pages/profile/child-2.vue') },
                { path: 'child-3',          name: 'child-3', title: 'Child-3', component: require('./pages/profile/child-3.vue') },
            ]  
        },
        { path: '/new-sub',                name: 'new-sub', title: 'New Sub', redirect: '/new-sub/a-child-1', component: require('./pages/home.vue'),
            children: [
                { path: 'a-child-1',       name: 'a-child-1', title: 'a-child-1', component: require('./pages/new-sub/a-child-1.vue') },
                { path: 'a-child-2',       name: 'a-child-2', title: 'a-child-2', component: require('./pages/new-sub/a-child-2.vue') },
                { path: 'a-child-3',       name: 'a-child-3', title: 'a-child-3', component: require('./pages/new-sub/a-child-3.vue') },
            ]  
        },
        { path: '/blog',                    name: 'blog', title: 'Blog', component: require('./pages/blog/index.vue') },
        
        // child pages example
        /*
        { path: '/main-one',                               name: 'main-one', title: 'main-one', redirect: '/main-one/first-child', component: require('./pages/main-one/index.vue'),
            children: [
                { path: 'first-child',                     name: 'first-child', title: 'first-child', component: require('./pages/main-one/first-child.vue'),
                    children: [
                        { path: ':first-childId',           name: 'first-childId', title: 'first-childId', component: require('./pages/main-one/first-childId.vue'),
                            children: [
                                { path: 'members/:detailId',  name: 'member', title: 'Members', component: require('./pages/main-one/member.vue') },
                            ]
                        }
                    ]
                }
            ]
        },*/

        { path: '*',                    name: '404', title: 'Page not found', component: require('./pages/404.vue') }, // default redirect to home if unkown route
    ]
})

