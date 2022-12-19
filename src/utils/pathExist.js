import {stat} from "fs/promises";

export const pathExist = async (path) =>{
    try {
        await  stat(path);
        return true;
    } catch {
        return false;
    }}
