import fs from "fs";
import path from "path";
import {stat} from "fs/promises";
import {paths} from "../../index.js";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";
import {errMsg} from "../../readline/readline.js";


export const ls = ()=> {
    try{
    fs.readdir(paths.pathNow,async (err,files)=>{
        if (err) {
            console.log(errMsg);
            whereCurrently(paths.pathNow);
        } else {
            await Promise.all(
                files.map((file)=>{
                    return new Promise(async (resolve)=>{
                        {
                            const filePath = path.join(paths.pathNow,file)
                            const stats =  await stat(filePath)
                            resolve({ Name:file, Type:stats.isDirectory()? 'Directory' : 'File'})
                        }})
                })
            ).then(res=>{
                console.table(res)
            }).catch(()=>{
                console.error(errMsg)
                whereCurrently(paths.pathNow);
                }
            )
            whereCurrently(paths.pathNow);
        }
    })}catch {
        console.error(errMsg)
        whereCurrently(paths.pathNow);
    }
}