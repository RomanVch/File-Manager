import fs from "fs";
import path from "path";
import {paths} from "../../index.js";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";
import {errMsg} from "../../readline/readline.js";

export const rn = (input)=>{
    const arrFiles = input.replace("rn ","").trim().split(' ')
    try{
        if(arrFiles.length === 2 ){
            fs.rename(arrFiles[0],path.join(paths.pathNow,arrFiles[1]),(err)=>{
                if(err){
                    console.log(errMsg);
                }else {
                    console.log(`rename ${arrFiles[0]} > ${arrFiles[1]}`)
                    whereCurrently(paths.pathNow);
                }
            })
        } else {
            console.error(errMsg)
        }
    }catch (e) {
        console.error(errMsg)
    }
}