import { arguments_assert } from "./arguments_assert.mjs";
import { dev_error_log_path } from "./dev_error_log_path.mjs";
import { dev_log_recent } from "./dev_log_recent.mjs";
export async function dev_error_log_recent(count) {
  arguments_assert(arguments, 1);
  ("The last few errors a page reported from a /dev/ path, newest last. This is the whole point of writing them down - somebody who was not there can ask what broke.");
  ("Naming the file is the whole of what this adds. How one of these is read - that no file yet means nothing has happened rather than a fault, and that a half-written last line is passed over rather than losing the rest - is one reading shared by every log of this kind, and it is written where that is said.");
  let f_path = dev_error_log_path();
  let recent = await dev_log_recent(f_path, count);
  return recent;
}
