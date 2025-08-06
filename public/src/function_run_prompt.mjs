import {command_line_read} from './command_line_read.mjs'
import {function_run} from './function_run.mjs'
export async function function_run_prompt() {
 let line= await command_line_read("");
   const [funcName, ...args] = line.split(' ');
   await function_run(funcName, args)
}
