import { shell_profile_path } from "./shell_profile_path.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { file_append } from "./file_append.mjs";
import { text_combine } from "./text_combine.mjs";
export async function shell_profile_line_ensure(wanted) {
  "Puts one line in the shell profile, and only once. Setup is run again every time a step is added to it, so a step that appended blindly would export the same variable a second and a third time and leave the human to notice.";
  let profile = shell_profile_path();
  let contents = await file_read_try(profile);
  let present = contents ? contents.includes(wanted) : false;
  if (present) {
    let r = {
      profile,
      wanted,
      added: false,
    };
    return r;
  }
  let started = text_combine("\n", wanted);
  let ended = text_combine(started, "\n");
  await file_append(profile, ended);
  let r2 = {
    profile,
    wanted,
    added: true,
  };
  return r2;
}
