const Home = {
	template: '<h1>Home</h1>',
	name: 'Home'
}

const Products = {
	template: '<h1>Products</h1>',
	name: 'Products'
}

const Contact = {
	template: '<h1>Contact</h1>',
	name: 'Contact'
}

// router
const router = new VueRouter({
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/products', component: Products, name: 'Products' },
        { path: '/contact', component: Contact, name: 'Contact' },
    ]
})