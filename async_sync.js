 



async function getData() {
    await setTimeout(() => {
        console.log('A');
    }, 1000);
    console.log('B');   
}

const mainFnc = async () => {
    await getData();
}
mainFnc();