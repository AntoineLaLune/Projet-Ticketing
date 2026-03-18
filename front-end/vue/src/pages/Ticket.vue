<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";

import * as api from "@/utils/api.ts"
import { RouterLink } from "vue-router";

type Ticket = {
    answer_date:string,
    asked_by_last_name:string,
    asked_by_name:string,
    closing_date:string,
    content:string,
    creation_date:string,
    id:number,
    latest_update:string,
    priority:string,
    technician_answer:string,
    technician_id:number,
    user_mail:string
}

const ticket:Ref<Ticket> = ref({})
const technician = ref([])
const userIsTechnician = ref(false);

const editable = ref(false)

// const props = defineProps({
//     ticket: {
//         type: Object,
//         default: () => ({
//             user: ref([]),
//             email: ref([]),
//             creation_date: ref([]),
//             modification_date: ref([]),
//             answer_date: ref([]),
//             closing_date: ref([])
//         })
//     },
//     user: {
//         type: Object,
//         default: () => ({
//             user: ref([]),
//             email: ref([])
//         })
//     }
// })

api.getTicket(4).then(res => {
    const ticketData = res.data[0];
    ticket.value = ticketData;
    console.log(ticket.value)
    if (res.data.technician_id != null) {
        api.getUser(res.data.technician_id).then(res => {
            technician.value = res.data;
        })
    }
})

function ticketState(ticket: any) {
    if (ticket.closing_date == null) {
        return 'opened'
    }
    return 'closed'
}

setTimeout(async function () {
    const ticketsData = ticket.value;
    if (technician != null) {
        // const technicianData = technician.value;
        // const p = document.getElementById("technician"+ticket.technician_id.toString())
        // const user = await api.getUser(ticket.technician_id);
        // const userData = user.data
        // p.textContent = userData.name + " ";
    }
}, 2000);

//onMounted(async () => {
    // const ticketResponse = await api.getTicket(4);
    // const ticketData = ticketResponse.data[0];
    // ticket.value = ticketData;
    // if (ticketData.technician_id != null) {
    //     const userResponse = await api.getUser(ticketData.technician_id);
    //     const technicianData = userResponse.data[0];
    //     technician.value = technicianData;
    // }
//})
const url:URL = new URL(window.location.href);
console.log(url.pathname.charAt); // Logs "/"
</script>

<template>
    <div class="body">
        <div class="ticket">
            <div class="ticket-header">
                <div class="ticket-account">
                    <div>
                        <span>Utilisateur: {{ ticket.asked_by_name }}  {{ ticket.asked_by_last_name }}</span>
                    </div>
                    <div>
                        <span>Email: {{ ticket.user_mail }}</span>
                    </div>
                </div>
                <div class="ticket-info">
                    <div>
                        <span>Création: {{ ticket.creation_date }}</span>
                    </div>
                    <div>
                        <span>Dernière modification: {{ ticket.latest_update }}</span>
                    </div>
                    <div>
                        <span>Réponse: {{ ticket.answer_date }}</span>
                    </div>
                    <div>
                        <span>Fermeture: {{ ticket.closing_date }}</span>
                    </div>
                </div>
            </div>
            <div class="ticket-desciption">
                {{ ticket.content }}
            </div>
        </div>

        <!-- <div v-if="userIsTechnician" id="ticket_constructor" class="ticket-constructor">
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
    display: inline-block;
    width: 100%;
    height: 100%;

    cursor: pointer;

    background-color: rgba(255, 255, 255, 0.00);
    color: white;
}

.table-case {


    >p,
    span,
    div {
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
