import { arguments_assert } from "./arguments_assert.mjs";
import { folder_home } from "./folder_home.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { path_join } from "./path_join.mjs";
export function smart_alert_log_path() {
  arguments_assert(arguments, 0);
  ("Where a drive health warning gets written down on this machine, so that something other than a person watching a terminal can find out one happened.");
  ("A disk notices a sector going bad long before a person does, and the daemon that asks it will say so - but it says so by running a program, and the program it runs out of the box posts mail. Nobody reads a mailbox here, so the warning goes into a file instead, put where a person and a gate can both reach it without being root.");
  ("The last part is frozen because this is not the only place it is spelled. A handler installed under the system's own folder, owned by root and outside this repo, appends to this same file, and nothing in here can rename that copy. The gate that reads this file reads that handler too and checks the two still agree, which is the only thing keeping a value spelled twice from quietly becoming two values.");
  let home = folder_home();
  let name = text_frozen("SMART_ALERT.log");
  let joined = path_join([home, "a", name]);
  return joined;
}
