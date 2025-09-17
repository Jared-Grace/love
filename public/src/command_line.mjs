import { command_line_generic } from "./command_line_generic.mjs";
import { exec } from "child_process";
import { promisify } from "util";
const execAsync = promisify(exec);
export async function command_line(command) {
  let extra = {};
  const stdout = await command_line_generic(extra, command);
  return stdout;
}
