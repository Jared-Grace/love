import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_db_cancel(db, uid, id, now_iso) {
  arguments_assert(arguments, 4);
  ("Cancels meeting id for uid, who must be its guest or its host; answers whether a meeting was cancelled. A weekly meeting is cancelled from now on, every week of it.");
  ("The row stays, stamped with now_iso; stamping it takes it out of both taken-hour indexes, so the hour opens again for anyone.");
  let written = await db
    .prepare(
      "UPDATE meetings SET cancelled_at = ?1 WHERE id = ?2 AND cancelled_at IS NULL AND (guest_uid = ?3 OR host_uid = ?3)",
    )
    .bind(now_iso, id, uid)
    .run();
  let eq = equal(written.meta.changes, 1);
  return eq;
}
