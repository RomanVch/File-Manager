import path from "path";
import fs from "fs";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";
import {paths} from "../../index.js";
import {errMsg} from "../../readline/readline.js";
import {pathExist} from "../../utils/pathExist.js";

function deleteFile (file) {
    fs.unlink(file, function (err) {
        if (err) {
            whereCurrently(paths.pathNow);
        }
    });
}

export const cp = async (input,type) => {
    try {
        const arrFiles = input.replace("cp ","").trim().split(' ')
        const source = arrFiles[0];
        const baseName = path.basename(arrFiles[0]);
        const target = path.join(arrFiles[1],baseName);
        const targetExists = await pathExist(arrFiles[1]);
        const sourceExists = await pathExist(arrFiles[0]);
        if (arrFiles.length === 2 && targetExists && sourceExists) {
            const read = fs.createReadStream(source);
            const write = fs.createWriteStream(target);
            return new Promise(function() {
                read.pipe(write);
                if(type === 'move') {
                    read.once("close", function () {
                        read.close();
                    deleteFile(source);
                });}
                console.log(`${type} ${source} > ${target}`)
                whereCurrently(paths.pathNow);
            }).catch(function() {
                read.destroy();
                write.end();
                console.log(errMsg);
                whereCurrently(paths.pathNow);
            });
        } else{
            console.log(errMsg)
            whereCurrently(paths.pathNow);
        }
    }
    catch (e){
        console.log(errMsg)
        whereCurrently(paths.pathNow);
    }
}