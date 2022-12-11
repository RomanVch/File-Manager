import {cp} from "./cp.js";
import {rm} from "./rm.js";
import {errMsg} from "../../readline/readline.js";

export const mv = (input) => {
    const arrFiles = input.replace("mv ","").trim().split(' ');
    if ( arrFiles.length === 2 ) {
        const source = arrFiles[0];
        cp(input.replace("mv ","").trim(),"move")
        rm(source)
    } else {
        console.log(errMsg)
    }
}