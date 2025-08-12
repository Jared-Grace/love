import { catch_ignore } from "./catch_ignore.mjs";
import { command_line } from "./command_line.mjs";
import { git_push } from "./git_push.mjs";
export function git_acp(message) {
  await command_line("git add -A");
  catch_ignore(lambda);
  git_push();
  function lambda() {
   await  command_line(`git commit -m "${message}"`);
  }
}
