import fs from "fs";
import crypto from "crypto";
import {errMsg} from "../../readline/readline.js";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";
import {paths} from "../../index.js";


export const hash = (input) => {
    const nameFile = input.replace("hash ","").trim()
    try {
        fs.readFile(nameFile,(err,data)=> {
            if (!err) {
                console.log(crypto.createHash('sha256').update(data).digest('hex'))
                whereCurrently(paths.pathNow);
            } else {
                console.log(errMsg);
                whereCurrently(paths.pathNow);
            }
        })
    } catch {
        console.log(errMsg);
        whereCurrently(paths.pathNow);
    }
}