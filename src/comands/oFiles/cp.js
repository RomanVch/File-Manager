import path from "path";
import fs from "fs";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";
import {paths} from "../../index.js";
import {errMsg} from "../../readline/readline.js";
import {stat} from "fs/promises";

export const cp = async (input,type) => {
    try {
        const arrFiles = input.replace("cp ","").trim().split(' ')
        const source = arrFiles[0];
        const baseName = path.basename(arrFiles[0])
        const target = path.join(arrFiles[1],baseName);
        const stats =  await stat(target)
        if (arrFiles.length === 2 && stats.isDirectory()) {
            const read = fs.createReadStream(source);
            read.on('error', (error) => {
                if (error) {
                    console.log(1)
                    console.log(errMsg)
                    read.destroy()
                }
            })
            const write = fs.createWriteStream(target);
            return new Promise(function(resolve, reject) {
                read.on('error', reject);
                write.on('error', reject);
                write.on('finish', resolve);
                read.pipe(write);
            }).then(()=>{
                console.log(`${type} ${source} > ${target}`)
                whereCurrently(paths.pathNow);
            }).catch(function() {
                read.destroy();
                write.end();
                whereCurrently(paths.pathNow);
            });
        }
    }
    catch (e){
        console.log(errMsg)
        whereCurrently(paths.pathNow);
    }
}