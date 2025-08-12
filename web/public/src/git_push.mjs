import { log } from "./log.mjs";
import { command_line } from "./command_line.mjs";
export function git_push() {
  try {
    lambda();
  } catch (e) {
    log(e);
  }
  function lambda() {
    command_line("git push");
  }
}
