async function main() {
    const res = await fetch("http://10.96.23.116:4000/test")
    return res.json();
}

console.log(await main());