import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_db_dated_delete(db, uid, day, start_minute) {
  arguments_assert(arguments, 4);
  ("Takes back one change to host uid's hours on a date - the one starting at start_minute - so that day follows the weekly schedule again there; answers whether one was taken back.");
  let written = await db
    .prepare(
      "DELETE FROM openings_dated WHERE host_uid = ?1 AND day = ?2 AND start_minute = ?3",
    )
    .bind(uid, day, start_minute)
    .run();
  let eq = equal(written.meta.changes, 1);
  return eq;
}
