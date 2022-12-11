import path from "path";
import fs from "fs";
import zlib from "zlib";
import {errMsg} from "../../readline/readline.js";

export const decompress = async (input) => {
    const nameFile = input.replace("decompress ","").trim().split(' ')
    if(nameFile.length === 2){
        const source = nameFile[0];
        const baseName = path.basename(nameFile[0])
        const target = path.join(nameFile[1],baseName).replace(".br","")
        try {
            if ( path.isAbsolute(source) && path.isAbsolute(target)) {
                const read = fs.createReadStream(source);
                read.on('error', (error) => {
                    if(error){
                        console.log(errMsg)
                        read.destroy()
                    }
                })
                const write = fs.createWriteStream(target);
                const brotli = zlib.createBrotliDecompress();
                const stream = read.pipe(brotli).pipe(write);
                stream.on('finish', () => {});
            } else {
                console.log(errMsg)
            }
        } catch {
            console.log(errMsg)
        }
    } else {
        console.log(errMsg)
    }

}