import { command_line_git_multiple } from "../../../love/public/src/command_line_git_multiple.mjs";
export async function git_purge_everyone() {
  let commands_everyone = ["fetch origin", "reset --hard origin/main"];
  await command_line_git_multiple(commands_everyone);
}
