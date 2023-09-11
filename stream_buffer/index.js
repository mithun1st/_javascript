const fileSystem = require('fs');




// const readStream = fileSystem.createReadStream('./stream_buffer/lorem_ipsum2.txt');
const readStream = fileSystem.createReadStream('./stream_buffer/lorem_ipsum_read.txt');
const writeStream = fileSystem.createWriteStream('./stream_buffer/lorem_ipsum_write.txt');

let strBuild = [];

readStream.on('data', (seg) => {
    console.log('#streaming...');
    console.log(seg);
    strBuild.push(seg);
    // console.log(seg.toString());

    //write txt by stream (delete lorem_ipsum_write.txt file )
    writeStream.write(seg);
    writeStream.write(seg.toString());
});

readStream.on('end', () => {
    console.log('#stream finished.')
    // const parseData= Buffer.concat(strBuild)
    // console.log(parseData);
    console.log(strBuild);
    console.log(strBuild.toString());
    console.log(typeof (strBuild));
    console.log(typeof (strBuild.toString()));
    console.log(Buffer.concat(strBuild).toString());
});



