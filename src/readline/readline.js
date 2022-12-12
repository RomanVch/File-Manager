import readline from 'readline';
import { paths } from "../index.js";
import {upLine, cd, ls, cat, add, rn, rm, cp, mv, oSystem, hash, compress, decompress } from "../comands/index.js";
import {whereCurrently} from "../whereCurrently/whereCurrently.js";
import {userName} from "../start/start.js";

export const errMsg = "Operation failed"

export const ReadLine = () => {
    const rl = readline.createInterface(process.stdin, process.stdout);
    rl.on('line',(input) => {
        const inputTrim = input.trim()
        if (inputTrim === "up") {
            upLine()
        } else if (inputTrim.startsWith("cd ")) {
            cd(inputTrim);
        }
        else if (inputTrim === "ls"){
            ls()
        } else if (inputTrim.startsWith("cat ")) {
            cat(inputTrim)
        } else if (inputTrim.startsWith("add ")) {
            add(inputTrim)
        } else if (inputTrim.startsWith("rn ")) {
            rn(inputTrim)
        } else if (inputTrim.startsWith("cp ")) {
            cp(inputTrim,"copy")
        } else if (inputTrim.startsWith("mv ")) {
            mv(inputTrim)
        } else if (inputTrim.startsWith("rm ")) {
            rm(inputTrim)
            whereCurrently(paths.pathNow);
        } else if (inputTrim.startsWith("mv ")) {
            mv(inputTrim)
            whereCurrently(paths.pathNow);
        } else if (inputTrim.startsWith("os ")) {
            oSystem(inputTrim)
            whereCurrently(paths.pathNow);
        } else if (inputTrim.startsWith("hash ")) {
            hash(inputTrim)
            whereCurrently(paths.pathNow);
        } else if (inputTrim.startsWith("compress ")) {
            compress(inputTrim)
        } else if (inputTrim.startsWith("decompress ")) {
            decompress(inputTrim)
        } else if(inputTrim === ".exit"){
            console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
            process.exit()
        }
        else {
            console.log('Invalid input')
            whereCurrently(paths.pathNow);
        }
    }).on('SIGINT',()=>{
        console.log(`Thank you for using File Manager, Username, goodbye!`)
    });
}

