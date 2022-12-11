import fs from "fs";
import path from "path";
import {stat} from "fs/promises";
import {paths} from "../../index.js";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";


export const ls = ()=> {
    fs.readdir(paths.pathNow,async (err,files)=>{
        if (err)
            console.log(err);
        else {
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
            })
            whereCurrently(paths.pathNow);
        }
    })
}