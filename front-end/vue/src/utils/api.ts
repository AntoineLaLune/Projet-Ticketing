const apiTicketsUrl = globalThis.location.origin + "/api/tickets/"
const apiUsersUrl = globalThis.location.origin + "/api/users/"

// Tickets
export async function getTickets() {
	const ticketsResponse = await fetch(apiTicketsUrl);
	const ticketsData = await ticketsResponse.json();
	return ticketsData;
}

export async function getTicket(id:number) {
	const url:string = apiTicketsUrl+id.toString();

	const ticketResponse = await fetch(url);
	const ticketData = await ticketResponse.json();
	return ticketData;
}

export async function createTicket(mail:string, name:string, lastName:string, content:string, priority:string) {
	const response = await fetch(apiTicketsUrl, {
		method: "POST",
		headers: { 'Content-Type' : "application/json" },
		body: JSON.stringify({
			mail : mail,
			name : name,
			lastName : lastName,
			content : content,
			priority : priority
		})
	});
	const ticketData = await response.json();
	return ticketData;
}

export async function closeTicket(id:number) {
	const url:string = apiTicketsUrl+id.toString();

	const response = await fetch(url, {
		method: "PUT",
		headers: { 'Content-Type' : "application/json" },
		body: JSON.stringify({
			close_date : new Date()
		})
	});
	const ticketData = await response.json();
	return ticketData;
}

export async function affectTech(id:number, technician_id:number) {
	const url:string = apiTicketsUrl+id.toString();

	const response = await fetch(url, {
		method: "PUT",
		headers: { 'Content-Type' : "application/json" },
		body: JSON.stringify({
		technician_id : technician_id
		})
	});
	const ticketData = await response.json();
	return ticketData;
}

export async function answerTicket(id:number, answer:string) {
	const url:string = apiTicketsUrl+id.toString();

	const response = await fetch(url, {
		method: "PUT",
		headers: { 'Content-Type' : "application/json" },
		body: JSON.stringify({
		answer : answer
		})
	});
	console.log("Sucess");
	const ticketData = response.status;
	return ticketData;
}

export async function deleteTicket() {

}

// Users
export async function getUser(id:number) {
	const url:string = apiUsersUrl+id.toString();

	const userResponse = await fetch(url);
	const userData = await userResponse.json();
	return userData;
}
