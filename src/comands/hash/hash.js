import fs from "fs";
import crypto from "crypto";
import {errMsg} from "../../readline/readline.js";


export const hash = (input) => {
    const nameFile = input.replace("hash ","").trim()
    try {
        fs.readFile(nameFile,(err,data)=> {
            if (!err) {
                console.log(crypto.createHash('sha256').update(data).digest('hex'))
            } else {
                console.log(errMsg);
            }
        })
    } catch {
        console.log(errMsg)
    }
}