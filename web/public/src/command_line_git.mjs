import { command_line_git_prefix } from "./command_line_git_prefix.mjs";
import { command_line } from "./command_line.mjs";
export async function command_line_git(command_git) {
  await command_line(command_line_git_prefix() + command_git);
}
