import { arguments_assert } from "./arguments_assert.mjs";
import { import_install } from "./import_install.mjs";
import { lock_options } from "./lock_options.mjs";
import { lock_turn_mine_is } from "./lock_turn_mine_is.mjs";
import { lock_waiting_print } from "./lock_waiting_print.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { sleep } from "./sleep.mjs";
export async function lock_release_acquire(
  lock_folder,
  ticket_path,
  owner_path,
  wait,
) {
  "$plain lock_folder";
  "$plain ticket_path";
  "$plain owner_path";
  "$plain wait";
  arguments_assert(arguments, 4);
  ("Gets hold of a lock, and hands back the one thing that gives it up again - or nothing at all, when it was told not to wait and somebody else had it.");
  ("Two things stand between arriving and holding it, and they are asked in that order every time round: whether it is this one's turn among those waiting, and then whether the lock is free. The turn comes first because asking for a lock that is not yours to ask for is how a waiter gets walked past, which is the whole reason there is a line.");
  ("It is said once that this is not going ahead, however many times round it goes. The waiting itself is silent after that, because a line of print every fifth of a second buries whatever the run had already said.");
  ("Giving it back is left entirely to whoever called. This gets hold of the thing and no more, so the one piece of code that must run whatever happens - the giving back - sits in one place next to everything else that must, rather than being split across a returning and a throwing.");
  let lockfile = await import_install("proper-lockfile");
  let notified = false;
  async function once_print() {
    if (not(notified)) {
      await lock_waiting_print(owner_path, lock_folder, wait);
      notified = true;
    }
  }
  do {
    if (wait) {
      let mine = await lock_turn_mine_is(ticket_path);
      if (not(mine)) {
        await once_print();
        await sleep(200);
        continue;
      }
    }
    try {
      let options = lock_options();
      let release = await lockfile.lock(lock_folder, options);
      return release;
    } catch (e) {
      if (not_equal(e.code, "ELOCKED")) {
        throw e;
      }
      await once_print();
      if (wait) {
        await sleep(200);
      }
    }
  } while (wait);
  let unheld = null;
  return unheld;
}
