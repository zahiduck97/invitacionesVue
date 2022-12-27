export default {
    name: 'template1',
    path: '/misxv1/template1',
    // component: () => import(/* webpackChunkName: "mainTemplate1" */ '@/modules/template1/layouts/template1Layout.vue'),
    // props: true,
    children: [
        {
            path: ':id',
            name: 'idTemplate1',
            component: () => import(/* webpackChunkName: "idTemplate1" */ '@/modules/template1/views/template1Layout.vue'),        
            props: (route) => {
                return {
                    id: route.params.id
                }
            }
        },
        {
            path: ':id/:qr',
            name: 'idqrTemplate1',
            component: () => import(/* webpackChunkName: "idTemplate1" */ '@/modules/template1/views/template1Layout.vue'),        
            props: (route) => {
                return {
                    id: route.params.id,
                    qr: route.params.qr,
                }
            }
        }
    ]
    
    
}