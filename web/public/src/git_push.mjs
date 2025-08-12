import { catch_log } from "./catch_log.mjs";
import { log } from "./log.mjs";
import { command_line } from "./command_line.mjs";
export function git_push() {
  catch_log(lambda);
  function lambda() {
    await command_line("git push");
  }
}
