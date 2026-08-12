import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
export function lock_waiting_folder(lock_folder) {
  "$plain lock_folder";
  arguments_assert(arguments, 1);
  ("Where those waiting for a lock leave word that they are waiting.");
  ("It sits inside the lock's own folder, beside the note saying who holds it, because everything about one lock belongs in one place and a lock nobody has ever taken then has nothing anywhere.");
  let waiting = path_join([lock_folder, "waiting"]);
  return waiting;
}
