import {command_line_read} from './command_line_read.mjs'
export async function function_run_prompt() {
  let prompt = "";
 return await command_line_read(prompt);
}
