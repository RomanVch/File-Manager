import os from "os";
import {errMsg} from "../../readline/readline.js";

let formatter = new Intl.NumberFormat("ru", {
    maximumFractionDigits: 2
});

export const oSystem = (input) => {
    const args = input.replace("os ","").trim();
    try {
        if (args === '--EOL') {
            console.log(JSON.stringify(os.EOL))
        } else if(args === '--cpus'){
            const cpus = [...os.cpus()]
            const cpuSpeed = {}
            cpus.forEach((cpu,index)=>{
                cpuSpeed[index+1] = formatter.format(cpus[index].speed/1000)+" GHz"
            })
            const cpuInfo = {
                model:cpus[0].model.trim(),
                amountCpu:cpus.length,
                speed:cpuSpeed
            }
            console.log(cpuInfo)
        } else if (args === '--homedir') {
            console.log(os.homedir());
        } else if (args === '--username') {
            console.log(os.userInfo().username);
        } else if (args === '--architecture') {
            console.log(os.arch());
        } else {
            console.log(errMsg);
        }
    } catch (e) {
        console.log(errMsg);
    }
}