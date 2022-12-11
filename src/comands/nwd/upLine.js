import path from "path";
import {paths} from "../../index.js";
import {whereCurrently} from "../../whereCurrently/whereCurrently.js";

const reGexs={
    root:/^[A-Za-z]:\\/
}


export const upLine = ()=>{
    const newPath = path.join(paths.pathNow, '../');
    if (reGexs.root.test(newPath)) {
        paths.pathNow = newPath
    }else{
        console.log(errMsg)
    }
    whereCurrently(paths.pathNow)
}