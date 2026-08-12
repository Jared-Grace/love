import { lock_waiting_folder } from "./lock_waiting_folder.mjs";
import { lock_ticket_name } from "./lock_ticket_name.mjs";
import { lock_turn_mine_is } from "./lock_turn_mine_is.mjs";
import { lock_waiting_print } from "./lock_waiting_print.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { lock_options } from "./lock_options.mjs";
import { lock_folder_path } from "./lock_folder_path.mjs";
import { not_equal } from "./not_equal.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { not } from "./not.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { path_join } from "./path_join.mjs";
import { sleep } from "./sleep.mjs";
import { import_install } from "./import_install.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function lock_generic(lock_name, wait, lambda, who) {
  let lockfile = await import_install("proper-lockfile");
  let result = lock_folder_path(lock_name);
  await folder_exists_ensure(result);
  let owner_path = path_join([result, "owner"]);
  ("Those who mean to wait get in line, in the order they arrived. Whoever looks in the moment after the lock is given back would otherwise take it, so a waiter can be walked past for ever - measured with ten of us running, one wait sat through two different holders and was no nearer the front for it. Nobody who is not going to wait joins the line, because they are gone before their turn could come and their word would only stand in somebody else's way");
  let waiting = lock_waiting_folder(result);
  let arrival = date_now_milliseconds();
  let ticket = lock_ticket_name(arrival, who ? who : "unknown");
  let ticket_path = path_join([waiting, ticket]);
  if (wait) {
    await folder_exists_ensure(waiting);
  }
  let release = null;
  let r = null;
  try {
    let locked = false;
    let notified = false;
    do {
      if (wait) {
        let mine = await lock_turn_mine_is(waiting, ticket);
        if (not(mine)) {
          if (not(notified)) {
            await lock_waiting_print(owner_path, result, wait);
            notified = true;
          }
          await sleep(200);
          continue;
        }
      }
      try {
        let r3 = lock_options();
        release = await lockfile.lock(result, r3);
        locked = true;
        break;
      } catch (e) {
        if (not_equal(e.code, "ELOCKED")) {
          throw e;
        }
        if (not(notified)) {
          await lock_waiting_print(owner_path, result, wait);
          notified = true;
        }
        if (wait) {
          await sleep(200);
        }
      }
    } while (wait);
    if (locked) {
      await file_overwrite(owner_path, who ? who : "unknown");
      r = await lambda();
    }
  } finally {
    ("The word left in the line is taken back however this ends. While the work runs there is nothing to wait for, so a word still standing would make everybody behind spend a few seconds walking past it before they could go on - and if the run is killed outright there would be nobody left to take it back at all");
    await file_delete_if_exists(ticket_path);
    if (release) {
      ("Giving the lock back is allowed to fail quietly, and only for one reason: if the lock was already declared lost while the work was running, handing it back is refused, and that refusal would be thrown from here - out of a finally, on top of whatever the work itself was returning or complaining about. The work is the thing worth hearing. A lock nobody holds any more needs no giving back");
      async function lambda_release() {
        let r2 = await release();
        return r2;
      }
      await catch_null_async(lambda_release);
    }
  }
  return r;
}
