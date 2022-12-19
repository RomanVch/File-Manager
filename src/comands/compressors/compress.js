import path from "path";
import fs from "fs";
import zlib from "zlib";
import {errMsg} from "../../readline/readline.js";
import {pathExist} from "../../utils/pathExist.js";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";
import {paths} from "../../index.js";

export const compress = async (input) => {
    const nameFile = input.replace("compress ","").trim().split(' ')
    const baseName = path.basename(nameFile[0])
    const source = nameFile[0];
    const target = path.join(nameFile[1],baseName)+".br";
    const sourceExists = await pathExist(source);
    const targetExists = await pathExist(nameFile[1]);
    if(nameFile.length === 2 && sourceExists && targetExists){

        try {
            if (path.isAbsolute(source) && path.isAbsolute(target)) {
                const read = fs.createReadStream(source);
                read.on('error', (error) => {
                    if(error){
                        console.log(errMsg)
                        whereCurrently(paths.pathNow);
                        read.destroy()
                    }
                })
                const write = fs.createWriteStream(target);
                const brotli = zlib.createBrotliCompress();
                const stream = read.pipe(brotli).pipe(write);
                stream.on('finish', () => {
                    console.log(`${source} > ${target} compressing`);
                    whereCurrently(paths.pathNow);
                });
            } else {
                console.log(errMsg)
                whereCurrently(paths.pathNow);
            }
        } catch {
            console.log(errMsg)
            whereCurrently(paths.pathNow);
        }
    } else {
        console.log(errMsg)
        whereCurrently(paths.pathNow);
    }
}