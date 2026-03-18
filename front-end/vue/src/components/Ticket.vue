<script setup lang="ts">
import { ref } from "vue";
import { reactive } from "vue";
const Valeur = ref("4");

const editable = ref(true)

defineProps({
	ticket: {
		type: Object,
		default: () => ({
			user:"coucou",
			email:"ahahah@ahah.ah"
		})
	}
})

interface Ticket {
	user: string, 
	email: string,
	creationDate: string,
	modificationDate: string,
	description: string
}

const newTicket:Ticket = reactive({
	user: "",
	email: "",
	creationDate: "",
	modificationDate: "",
	description: "",
})

const tickets = ref([
	{
		user: "Claude",
		email: "claudemoretti@gmail.com",
		creationDate: "01/12/2025",
		modificationDate: "12/12/2025",
		description: "12/12/2025"
	}
])

function addTicket() {
	// send newTicket to API, then, if response 200, send to front (push to tickets value)
}

</script>

<template>
	<div class="ticket" id="ticket">
		<div class="ticket-header" id="ticket_header">
			<div class="ticket-account">
				<div class="ticket-account-user-zone start">
					<span class="ticket-account-user account-user-info account-user bold">User: </span>

					<span v-if="!editable" class="ticket-account-user account-user-value account-user" id="ticket_account_user">
						{{ $props.ticket.user }}
					</span>
					<input v-if="editable" class="ticket-account-name account-name-value account-name header-value"
					id="ticket_account_name" style="min-height: 1lh; max-height: 1lh"
					v-model="newTicket.user"></input>
				</div>
				<div class="ticket-account-email-zone start">
					<span class="ticket-account-email account-email-info account-email bold">Email: </span>

					<span v-if="!editable" class="ticket-account-email account-email-value account-email" id="ticket_account_email">
						{{ $props.ticket.email }}
					</span>
					<input v-if="editable" class="ticket-account-email account-email-value account-email header-value"
					id="ticket_account_email" style="min-height: 1lh; max-height: 1lh"
					v-model="newTicket.email"></input>
				</div>
			</div>
			<div class="ticket-info">
				<div class="ticket-info-creation-date-zone end">
					<span class="ticket-info-creation-date creation-date-info creation-date bold">Creation_Date: </span>
					<span v-if="!editable" class="ticket-info-creation-date creation-date-value creation-date" id="ticket_info_creation_date">
						{{ $props.ticket.creationDate }}
					</span>
				</div>
				<div class="ticket-info-modification-date-zone end">
					<span
						class="ticket-info-modification-date modification-date-info modification-date bold">Modification_Date
						:</span>
					<span v-if="!editable" class="ticket-info-modification-date modification-date-value modification-date" id="ticket_info_modification_date">
						{{ $props.ticket.modificationDate }}
					</span>
				</div>
			</div>
		</div>

		<div class="ticket-desciption">
			<div v-if="!editable" >
				{{ $props.ticket.description }}
			</div>
			<div v-if="editable" >
				<textarea class="ticket-description" id="ticket_description"
				style="min-height: 20lh; max-height: 35lh"
				v-model="newTicket.description"></textarea>
				<button class="ticket-description-send" id="ticket_description_send"
				v-on:click=addTicket>
				Send
				</button>
			</div>
		</div>



	</div>
</template>

<style scoped>
* {
	flex-grow: 1;
}

.ticket {
	margin: 0.5vi;
	padding: 1vi;
	border-radius: 2vi;

	background-color: rgba(255, 255, 255, 0.125);
	color: white;
}

.ticket-header {
	display: flex;
	justify-content: space-between;
	padding: 1vi;

	border-style: none;
	border-radius: 2vi 2vi 0vi 0vi;

	background-color: rgba(255, 255, 255, 0.125);
	color: white;
}

.ticket-desciption {
	display: flex;
	justify-content: start;

	border-style: none;
	border-radius: 0vi 0vi 2vi 2vi;

	width: 100% !important;
	background-color: rgba(255, 255, 255, 0.05);
	color: white;
}

.start {
	display: flex;
	justify-content: start;
}

.end {
	display: flex;
	justify-content: end;
}

.bold {
	font-weight: bold;
}

/* ticket constructor */

.ticket-header>* {
	display: flex;
	justify-content: space-around;
	padding: 1vi;

	border-style: none;
	border-radius: 2vi 2vi 0vi 0vi;

	background-color: rgba(255, 255, 255, 0.125);
	color: white;
}

input {
	padding: 0.5vi;
	margin-left: 0.5vi;

	border-style: none;
	border-radius: 2vi;

	width: 100% !important;
	background-color: rgba(255, 255, 255, 0.05);
	color: white;

	outline: 0px;
}

input:hover {
	background-color: #343434;
	color: white;
}


textarea {
	display: flex;
	justify-content: start;

	border-style: none;
	border-radius: 0vi 0vi 2vi 2vi;

	width: 100% !important;
	background-color: rgba(255, 255, 255, 0.05);
	color: white;

	outline: 0px;
}

textarea:hover {
	background-color: #343434;
	color: white;
}

button {
	margin: 0.5vi;
	padding: 1vi;
	border-style: none;
	border-radius: 2vi;

	display: flex;
	justify-content: end;

	background-color: rgba(255, 255, 255, 0.05);
	color: white;
}

button:hover {
	background-color: #343434;
	color: white;
}
</style>