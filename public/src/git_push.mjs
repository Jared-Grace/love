import { log } from "./log.mjs";
import { command_line } from "./command_line.mjs";
export function git_push() {
  try {
    command_line("git push");
  } catch (e) {
    log(e);
  }
}
