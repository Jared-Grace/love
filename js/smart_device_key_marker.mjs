import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function smart_device_key_marker() {
  arguments_assert(arguments, 0);
  ("The word the drive-watching daemon puts in front of a drive's name, in every line it writes about that drive.");
  ("It is what tells a line about a drive apart from a line about something else. The daemon's log holds lines that are not about any drive at all - the system writes a boot separator into it whenever the machine restarts, and that line has no drive in it and no comma to stop at. A reader that assumes every line names a drive throws on the first one of those, which is what happened.");
  ("A word this machine's daemon chose rather than one this repo chose, so nothing here is free to change it, and frozen for that reason. Shared for a second reason: the reader that cuts the name out of a line and the test that decides a line has a name in it must look for the very same word, and two places spelling it separately is two places that can come to disagree.");
  let word = text_frozen("Device: ");
  return word;
}
