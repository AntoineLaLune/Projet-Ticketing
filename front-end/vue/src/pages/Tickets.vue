<script setup lang="ts">
import { ref } from "vue";
// import Ticket from './components/Ticket.vue';

import * as api from "@/utils/api.ts"
import { RouterLink } from "vue-router";


// const ticket = await fetch(...)

const tickets = ref([])

api.getTickets().then(res => {
	console.log(res.data);
	console.log("CC");
	tickets.value = res.data;
	console.log("CC");
})

// async function init() {
// 	tickets.value =  await api.getAllTickets()
// }
// init()

// if (ticketsData.tickets == undefined) {
// document.getElementById("current_challenge_loading").textContent="Aucun challenge disponible.";
//}

const constructorButtonContent = ref("Créer un ticket");
const isConstructorShow = ref(false);

function showConstructor() {
	if (isConstructorShow.value == true) { isConstructorShow.value = false; constructorButtonContent.value = "Créer un ticket" }
	else { isConstructorShow.value = true; constructorButtonContent.value = "Annuler le ticket" }
}

function ticketState(ticket) {
	if (ticket.closing_date == null) {
		return 'opened'
	}
	return 'closed'
}

let trytry:number = 0;

async function getTechnicianUserName(ticket) {
	trytry = trytry + 1;
	console.log("Try num: "+trytry.toString())
	console.log("Id: "+ticket.technician_id)

	if (ticket.technician_id == null) {
		return ""
	} else {
		const technician_id:number = ticket.technician_id;
		const technician = await api.getUser(technician_id);

		const technicianData = technician.data;
		return technicianData.name + " " + technicianData.last_name;
	}
}

// DERNIERE CHOSE QUE JE FESSAIS ↓ C'est afficher le nom prenom du tech celon l'id

// setTimeout(async function(){
// 	const ticketsData = tickets.value;
// 	for (let i = 0; i < ticketsData.length; i++) {
// 		const ticket = ticketsData[i];
// 		if (ticket.technician_id) {
// 			const p = document.getElementById("technician"+ticket.technician_id.toString())
// 			const user = await api.getUser(ticket.technician_id);
// 			const userData = user.data
// 			p.textContent = userData.name + " ";
// 		}
// 	}
// }, 2000);
</script>

<template>
	<div class="body">
		<table>
			<thead>
				<tr>
					<th scope="col">
						<p>Id</p>
					</th>
					<th scope="col">
						<p>Email</p>
					</th>
					<th scope="col">
						<p>Tech Attribué</p>
					</th>
					<th scope="col">
						<p>Création</p>
					</th>
					<th scope="col">
						<p>Dernière modification</p>
					</th>
					<th scope="col">
						<p>Réponse</p>
					</th>
					<th scope="col">
						<p>Fermeture</p>
					</th>
					<th scope="col">
						<p>Utilisateur</p>
					</th>
					<th scope="col">
						<p>Aperçus du contenut</p>
					</th>
					<th scope="col">
						<p>Priorité</p>
					</th>
					<th scope="col">
						<p>Aperçus de la réponse</p>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="ticket of tickets" v-bind:class="ticketState(ticket)">
					<th class="table-case" scope="row">
						<p>{{ ticket.id }}</p>
					</th>
					<td class="table-case">
						<p>{{ ticket.user_mail }}</p>
					</td>
					<td class="table-case">
						<p v-if="ticket.technician_id" v-bind:id="'technician'+ticket.technician_id">Chargement...</p>
						<p v-else></p>
					</td>
					<td class="table-case">
						<p>{{ ticket.creation_date }}</p>
					</td>
					<td class="table-case">
						<p>{{ ticket.latest_update }}</p>
					</td>
					<td class="table-case">
						<p>{{ ticket.answer_date }}</p>
					</td>
					<td class="table-case">
						<p>{{ ticket.closing_date }}</p>
					</td>
					<td class="table-case">
						<p>{{ ticket.asked_by_name }} {{ ticket.asked_by_last_name }}</p>
					</td>
					<td class="table-case">
						<p>{{ ticket.content }}</p>
					</td>
					<td class="table-case">
						<p v-if="ticket.priority == 'HIGH'">Haut</p>
						<p v-if="ticket.priority == 'MEDIUM'">Moyen</p>
						<p v-if="ticket.priority == 'LOW'">Bas</p>
					</td>
					<td class="table-case">
						<p>{{ ticket.technician_answer }}</p>
					</td>
					<td class="table-case" style="width: 100px; height: 75px;">
						<router-link v-bind:to="{ name: 'ticket', params: { id: ticket.id } }">
							<button>Voir</button>
						</router-link>
					</td>
				</tr>
			</tbody>
		</table>

		<!--<div class="ticket_constructor">
		<v_ticketConstructor v-if="isConstructorShow"/>
		<button class="constructor_button" v-on:click="showConstructor">{{ constructorButtonContent }}</button>
	</div> -->
		<!--v_ticket v-for="ticket in tickets" v-bind:ticket="ticket"/-->

		<!-- <div v-for="ticket in tickets">
		{{ ticket.user }}
	</div> -->
	</div>
</template>

<style scoped>
html,
body {
	height: 100%;
	margin: 0;
	background-color: lemonchiffon;
}

* {
	border-width: 0;
	padding: 0;
	margin: 0;
}

button {
	margin: 0vi;
	padding: 0vi;
	border-style: none;
	display:inline-block;
    width: 100%;
    height: 100%;

	cursor: pointer;

	background-color: rgba(255, 255, 255, 0.00);
	color: white;
}

.table-case {


	> p, span, div {
		display: flex;
		justify-content: start;
		padding: 8px;
	}

	border: none;
	background-color: rgba(255, 255, 255, 0.05);
}

tr.opened {
	background-color: rgba(255, 0, 0, 0.25) !important;

	&:hover {
		background-color: rgba(255, 0, 0, 0.50) !important;
	}
}

tr.closed {
	background-color: rgba(0, 255, 0, 0.25) !important;

	&:hover {
		background-color: rgba(0, 255, 0, 0.50) !important;
	}
}

.body {
	margin: 1vi;
	padding: 2vi;
	background-color: #343434;
	color: #FFFFFF;
	display: flex;
	flex-flow: column;

	.login {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
