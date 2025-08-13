import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { catch_ignore } from "./catch_ignore.mjs";
import { command_line } from "./command_line.mjs";
import { git_push } from "./git_push.mjs";
export async function git_acp(message) {
  await command_line("git add -A");
  await catch_ignore_async(async function lambda() {
    await command_line(`git commit -m "${message}"`);
  });
  await git_push();
}
