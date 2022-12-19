import {unlink} from "fs";
import {errMsg} from "../../readline/readline.js";


export const rm = async (input)=>{
    const nameFile = input.replace("rm ","").trim()
    try {
       await unlink(nameFile,(err)=>{
            if (err) {
                console.log(errMsg)
            }
        })
    } catch (e) {
        console.log(errMsg)
    }
}