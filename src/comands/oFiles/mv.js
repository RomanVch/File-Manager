import {cp} from "./cp.js";
import {errMsg} from "../../readline/readline.js";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";
import {paths} from "../../index.js";

export const mv = async (input) => {
    try {
        const arrFiles = input.replace("mv ","").trim().split(' ');
        if ( arrFiles.length === 2 ) {
            await cp(input.replace("mv ","").trim(),"move")
        } else {
            console.log(errMsg)
            whereCurrently(paths.pathNow);
        }
    } catch (e){
        console.log(errMsg)
        whereCurrently(paths.pathNow);
    }
}