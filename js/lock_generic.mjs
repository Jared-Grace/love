import { lock_release_acquire } from "./lock_release_acquire.mjs";
import { lock_ticket_ensure } from "./lock_ticket_ensure.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { lock_folder_path } from "./lock_folder_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { path_join } from "./path_join.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function lock_generic(lock_name, wait, lambda, who) {
  let result = lock_folder_path(lock_name);
  await folder_exists_ensure(result);
  let owner_path = path_join([result, "owner"]);
  ("Those who mean to wait get in line, in the order they arrived. Whoever looks in the moment after the lock is given back would otherwise take it, so a waiter can be walked past for ever - measured with ten of us running, one wait sat through two different holders and was no nearer the front for it. Nobody who is not going to wait joins the line, because they are gone before their turn could come and their word would only stand in somebody else's way");
  let ticket_path = await lock_ticket_ensure(result, wait, who);
  let release = null;
  let r = null;
  try {
    ("Getting hold of it is one idea and lives under its own name. What is left here is the pair of promises this makes to everybody else: that the work only runs while the lock is held, and that both the place in the line and the lock itself are given back however this ends");
    release = await lock_release_acquire(result, ticket_path, owner_path, wait);
    if (release) {
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
