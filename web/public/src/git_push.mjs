import { catch_log } from "./catch_log.mjs";
import { log } from "./log.mjs";
import { command_line } from "./command_line.mjs";
export async function git_push() {
  catch_log(lambda);
  async function lambda() {
    await command_line("git push");
  }
}
