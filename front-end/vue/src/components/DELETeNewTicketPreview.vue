<!-- <script setup lang="ts">
import { ref } from "vue";
const Valeur = ref("4");

const editable = ref(false)

defineProps({
	ticket: {
		type: Object,
		default: () => ({
			user:"coucou",
			email:"ahahah@ahah.ah"
		})
	}
})

</script>

<template>
	<div class="ticket" id="ticket">
		<div class="ticket-header" id="ticket_header">
			<div class="ticket-account">
				<div class="ticket-account-user-zone start">
					<span class="ticket-account-user account-user-info account-user bold">User: </span>
					<span v-if="!editable"  class="ticket-account-user account-user-value account-user" id="ticket_account_user">
						{{ $props.ticket.user }}
					</span>
				</div>
				<div class="ticket-account-email-zone start">
					<span class="ticket-account-email account-email-info account-email bold">Email: </span>
					<span class="ticket-account-email account-email-value account-email" id="ticket_account_email">
						{{ $props.ticket.email }}
					</span>
				</div>
			</div>
			<div class="ticket-info">
				<div class="ticket-info-creation-date-zone end">
					<span class="ticket-info-creation-date creation-date-info creation-date bold">Creation_Date: </span>
					<span class="ticket-info-creation-date creation-date-value creation-date" id="ticket_info_creation_date">
						{{ $props.ticket.creationDate }}
					</span>
				</div>
				<div class="ticket-info-modification-date-zone end">
					<span
						class="ticket-info-modification-date modification-date-info modification-date bold">Modification_Date
						:</span>
					<span class="ticket-info-modification-date modification-date-value modification-date" id="ticket_info_modification_date">
						{{ $props.ticket.modificationDate }}
					</span>
				</div>
			</div>
		</div>
		<div class="ticket-desciption">
			{{ $props.ticket.description }}
		</div>
	</div>
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
</style> -->