<!-- <script setup lang="ts">
import { ref } from 'vue'
import { reactive } from 'vue'
import v_newTicketPreview from './newTicketPreview.vue';


</script>

<template>
	<div class="ticket-constructor" id="ticket_constructor">
		<div class="ticket-header" id="ticket_header">
			<div class="ticket-account">
				<div class="ticket-account-name-zone start">
					<span class="ticket-account-name account-name-info account-name bold">Name: </span>
					<input class="ticket-account-name account-name-value account-name header-value"
					id="ticket_account_name" style="min-height: 1lh; max-height: 1lh"
					v-model="newTicket.user"></input>
				</div>
				<div class="ticket-account-email-zone start">
					<span class="ticket-account-email account-email-info account-email bold">Email: </span>
					<input class="ticket-account-email account-email-value account-email header-value"
					id="ticket_account_email" style="min-height: 1lh; max-height: 1lh"
					v-model="newTicket.email"></input>
				</div>
			</div>
		</div>
			<textarea class="ticket-description" id="ticket_description"
			style="min-height: 20lh; max-height: 35lh"
			v-model="newTicket.description"></textarea>
			
			<button class="ticket-description-send" id="ticket_description_send"
			v-on:click=addTicket>
			Send
			</button>
		</div>
		
	<v_newTicketPreview :ticket="newTicket"></v_newTicketPreview>
</template>

<style scoped>
* {
	/* flex-grow: 1;*/
}

.ticket {
	margin: 0.5vi;
	padding: 1vi;
	border-radius: 2vi;

	background-color: rgba(255, 255, 255, 0.125);
	color: white;
}

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
</style> -->