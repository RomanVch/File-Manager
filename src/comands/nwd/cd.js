import path from "path";
import {stat} from "fs/promises";
import {paths} from "../../index.js";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";
import {pathExist} from "../../utils/pathExist.js";
import {errMsg} from "../../readline/readline.js";


export const cd = async (input)=>{
    try {
        const inputPath = input.replace('cd ','').trim()
        if(path.isAbsolute(inputPath)){
            const stats =  await stat(inputPath);
            if (stats.isDirectory()) {
                paths.pathNow = inputPath;
                whereCurrently(inputPath);
            } else {
                console.error(errMsg)
                whereCurrently(paths.pathNow);
            }
        } else {
            const newPath = path.join(paths.pathNow, inputPath)
            const checkPath = await pathExist(newPath)
            if (checkPath) {
                const newPaths = path.join(paths.pathNow, inputPath)
                    paths.pathNow = newPaths
                    whereCurrently(newPath);
            } else {
                console.error(errMsg);
                whereCurrently(paths.pathNow);
            }
        }
    } catch (e) {
        console.error(errMsg);
        whereCurrently(paths.pathNow);
    }
}