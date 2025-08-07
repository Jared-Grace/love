import { command_line } from "./command_line.mjs";
import { git_push } from "./git_push.mjs";

export function git_acp(message) {
  command_line("git add -A");
  try {
    command_line(`git commit -m "${message}"`);
  } catch (e) {}
  git_push();
}
