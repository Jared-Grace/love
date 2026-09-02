import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { text_between } from "./text_between.mjs";
export function smart_device_key_from_line(line) {
  arguments_assert(arguments, 1);
  ("The name the drive-watching daemon calls one drive by, taken out of a line it wrote about that drive.");
  ("Every line the daemon writes about a particular drive opens the same way, with the word Device followed by the name and then a comma. That name is not always the plain path: a drive reached over a USB bridge is written as the path and the bridge's name in brackets, and the daemon uses that longer form in every later line about it too. So the whole of it up to the comma is what to keep - shortening it to the path would stop it matching the lines it needs to be matched against.");
  let left = text_frozen("Device: ");
  let right = text_frozen(",");
  let key = text_between(line, left, right);
  return key;
}
