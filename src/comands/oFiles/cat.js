import fs from "fs";
import os from "os";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";
import {paths} from "../../index.js";
import {errMsg} from "../../readline/readline.js";


export const cat = async (input) => {
    try {
        const newPath = input.replace("cat ","").trim()
        let text = '';
        const readerStream = fs.createReadStream(newPath);
        readerStream.on('error', (error) => {
            if(error){
                console.log(errMsg)
                whereCurrently(paths.pathNow);
            }
        })
        await readerStream.setEncoding('utf-8');
        await readerStream.on('data', (data) => {
            text += data + os.EOL;
        });
        await readerStream.on('end',async function () {
            await process.stdout.write(text);
            await whereCurrently(paths.pathNow);
        });
    } catch (e){
        console.log()
    }
}