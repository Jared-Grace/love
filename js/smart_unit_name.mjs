import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function smart_unit_name() {
  arguments_assert(arguments, 0);
  ("What the drive-watching daemon is called when the system is asked about it.");
  ("Spelled the long way and frozen. The daemon answers to a shorter alias too, and asking its log under that shorter name returns no entries at all - which reads exactly like a daemon that has never said anything. That mistake has been made here more than once, so the working name is written down rather than remembered.");
  ("It is a word this machine chose rather than one this repo chose, so nothing here is free to change it. Frozen for that reason, and shared for the same one: two places spelling a name out separately is two places that can come to disagree about it, and the one that goes quietly wrong is whichever is read less.");
  let name = text_frozen("smartmontools");
  return name;
}
