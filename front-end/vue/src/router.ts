import { createRouter, createWebHistory } from 'vue-router';
import tickets from './pages/Tickets.vue';
import login from './pages/Login.vue'
import help from './pages/Help.vue'
import ticket from './pages/Ticket.vue'

const routes = [
	{ path: '/', component: tickets },
	{ path: '/help', component: help },
	{ path: '/account', component: login },
	{ name:'ticket', path: '/tickets/:id', component: ticket },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
