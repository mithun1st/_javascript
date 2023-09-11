const fs = require('fs');

(async () => {
    fs.writeFileSync('./fileSystem/file1.txt', "hello world");
    await readTextFile();
    fs.writeFileSync('./fileSystem/file1.txt', "Hi There");
    await readTextFile();
    fs.appendFileSync('./fileSystem/file1.txt', ", This is Mithun");
    await readTextFile();
})();



//read function
async function readTextFile() {
    const data = fs.readFileSync('./fileSystem/file1.txt');
    console.log(typeof (data));
    console.log(data);
    console.log(data.toString());
}