import fs from "fs";
import {errMsg} from "../../readline/readline.js";


export const rm = (input)=>{
    const nameFile = input.replace("rm ","").trim()
    try {
        fs.unlink(nameFile,(err)=>{
            if (err) {
                console.log(errMsg)
            }
        })
    } catch (e) {
        console.log(errMsg)
    }
}