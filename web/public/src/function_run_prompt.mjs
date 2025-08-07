import { command_line_read } from "./command_line_read.mjs";
import { function_run_git } from "./function_run_git.mjs";
export async function function_run_prompt() {
  let line = await command_line_read("");
  const [funcName, ...args] = line.split(" ");
  await function_run_git(funcName, args);
}
