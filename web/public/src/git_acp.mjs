import { command_line } from "./command_line.mjs";
import { git_push } from "./git_push.mjs";
export function git_acp(message) {
  command_line("git add -A");
  try {
    lambda();
  } catch (e) {}
  git_push();
  function lambda() {
    command_line(`git commit -m "${message}"`);
  }
}
