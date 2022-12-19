import path from "path";
import fs from "fs";
import {paths} from "../../index.js";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";
import {errMsg} from "../../readline/readline.js";

export const add = (input) => {
    const nameFile = input.replace("add ","").trim();
    const newPath = path.join(paths.pathNow,nameFile);
    try{
        fs.writeFile(newPath, '',{ flag : 'wx' }, (err) => {
            if (err && err.code === 'EEXIST') {
                console.error(errMsg);
                whereCurrently(paths.pathNow);
                return;
            }
        })
        console.log(`added ${nameFile}`);
        whereCurrently(paths.pathNow);
    } catch (e){
        console.error(errMsg);
        whereCurrently(paths.pathNow);
    }
}