import { catch_log_async } from "./catch_log_async.mjs";
import { command_line } from "./command_line.mjs";
export async function git_push() {
  await catch_log_async(lambda);
  async function lambda() {
    await command_line("git push");
  }
}
