<script setup lang="ts">
import { ref } from "vue";

import * as api from "@/utils/api.ts"
import { RouterLink } from "vue-router";

const tickets = ref([])

api.getTickets().then(res => {
	tickets.value = res.data;
	console.log("CC");
})

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
						<p>Utilisateur</p>
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
						<p>Contenu</p>
					</th>
					<th scope="col">
						<p>Priorité</p>
					</th>
					<th scope="col">
						<p>Aperçus de la réponse</p>
					</th>
					<th scope="col">
						<p>Aperçus</p>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="ticket of tickets" v-bind:class="ticketState(ticket)">
					<th class="table-case" scope="row">
						<p>{{ ticket.id }}</p>
					</th>
					<td class="table-case">
						<p>{{ ticket.asked_by_name }}<br>{{ ticket.asked_by_last_name }}</p>
					</td>
					<td class="table-case">
						<p>{{ ticket.user_mail }}</p>
					</td>
					<td class="table-case">
						<p v-if="ticket.technician_id" v-bind:id="'technician'+ticket.technician_id">{{ ticket.name }}<br>{{ ticket.last_name }}</p>
						<p v-else><i>Aucun...</i></p>
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
					<td class="table-case">
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
.body {
	display: flex;
	flex-flow: column;
}

button {
	margin: 0vi;
	padding: 0vi;
	border-style: none;
	display:inline-block;
    width: 100%;
    height: 100%;

	cursor: pointer;

	background-color: rgba(255, 255, 255, 0.0);
}

.table-case {
	width: 100px; height: 75px;

	> p, span, div {
		padding: 6px;
	}
}

tr.opened {
	background-color: var(--tr-open) !important;

	&:hover {
		background-color: var(--tr-open-hover) !important;
	}
}

tr.closed {
	background-color: var(--tr-closed) !important;

	&:hover {
		background-color: var(--tr-closed-hover) !important;
	}
}
</style>
