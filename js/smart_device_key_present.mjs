import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { file_exists } from "./file_exists.mjs";
export async function smart_device_key_present(key) {
  arguments_assert(arguments, 1);
  ("Hands back the daemon's name for a drive if that drive is still plugged into this machine, and nothing at all if it is not.");
  ("One of the drives here is removable, and the configuration says so - which is the machine's own statement that the drive being absent is normal rather than a fault. A check that demanded evidence from every drive the daemon has ever watched would go red every time that drive was unplugged, and a gate that cries out about an ordinary act stops being read. So a drive that is no longer here is dropped before anything is demanded of it.");
  ("Asking the operating system whether the path is there, rather than asking the daemon, because the daemon writes down what it found when it started and nothing afterwards. A drive unplugged an hour ago is still in that record and will be until the daemon is restarted, so the record cannot answer the question being asked here.");
  ("The daemon's name for a drive can carry the bridge it is reached through, in brackets after the path. The first word of it is the path, and the rest is not something the operating system knows about.");
  let words = text_split_space(key);
  let node = list_first(words);
  let exists = await file_exists(node);
  let r = exists ? key : null;
  return r;
}
