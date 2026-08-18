import { git_current_run_multiple } from "./git_current_run_multiple.mjs";
export async function git_purge_everyone() {
  let commands_everyone = [
    ["fetch", "origin"],
    ["reset", "--hard", "origin/main"],
  ];
  await git_current_run_multiple(commands_everyone);
}
