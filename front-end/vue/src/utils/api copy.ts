export async function answerTicket(id:number, answer:string) {
	const url = apiUrl+"/tickets/"+id.toString();
	console.log("answerTicket: sending PUT to", url);
	try {
		const response = await fetch(url, {
			method: "PUT",
			headers: { 'Content-Type' : "application/json" },
			body: JSON.stringify({
				answer : answer
			})
		});
		console.log("answerTicket: fetch resolved - status", response.status, "ok", response.ok);
		const ticketData = await response.json();
		return ticketData;
	} catch (err) {
		console.error("answerTicket: fetch error", err);
		throw err;
	}
}

export async function deleteTicket() {

}

async function test() {
	console.log("send");
	try {
		const tickets = await Promise.race([
			answerTicket(6, "TESTTEST"),
			new Promise((_, reject) => setTimeout(() => reject(new Error('timeout after 10s')), 10000))
		]);
		console.log("end");
		console.log(tickets);
	} catch (err) {
		console.error("test: error or timeout", err);
	}
}

test()