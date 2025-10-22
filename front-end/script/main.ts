// const web:HTMLDivElement = document.getElementById("id") as HTMLDivElement;

interface data {
    id:number
    name:string
    country:string
    zip_code:number
}

interface datas {
    datas:data[]
}

async function main(): Promise<datas> {
    const res:Response = await fetch("http://10.96.23.116:4000/test");
    if (res.ok) {
        const datas:datas = await res.json();
        return datas;
    } else {
        throw new Error("Erreur API (OH nonnnnn)");
    }
}

async function main2(id:number): Promise<data> {
    const res:Response = await fetch("http://10.96.23.116:4000/test/" + id);
    if (res.ok) {
        const data:data = await res.json();
        return data;
    } else {
        throw new Error("Erreur API (OH nonnnnn)");
    }
}

async function main3(name:string,contry:string,zip_code:number): void {
    const res:Response = await fetch("http://10.96.23.116:4000/test/",);
    res.
}