import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_session_key_hash } from "./calendar_session_key_hash.mjs";
export async function calendar_db_session_uid(db, key) {
  arguments_assert(arguments, 2);
  ("Who a session key signs in as: the uid, or null when the key is unknown (never made, or removed with its person's data).");
  let key_hash = await calendar_session_key_hash(key);
  let row = await db
    .prepare("SELECT uid FROM sessions WHERE key_hash = ?1")
    .bind(key_hash)
    .first();
  if (equal(row, null)) {
    return null;
  }
  let r = row.uid;
  return r;
}
