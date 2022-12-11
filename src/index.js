import path from 'path';
import { start } from "./start/start.js";
import { whereCurrently } from "./whereCurrently/whereCurrently.js";
import { ReadLine } from "./readline/readline.js";
import { homedir } from 'os';


export let paths = {pathNow:homedir(),homePass:homedir(),root:path.parse(homedir()).root}
start();
whereCurrently(paths.pathNow);
ReadLine();