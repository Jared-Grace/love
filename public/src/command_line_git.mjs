import {command_line} from './command_line.mjs';
export async function command_line_git(command_git) {
  await command_line("git " + command_git);
}
