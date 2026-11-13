import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_session_key_new } from "./calendar_session_key_new.mjs";
import { calendar_session_key_hash } from "./calendar_session_key_hash.mjs";
export async function calendar_db_session_create(db, uid, now_iso) {
  arguments_assert(arguments, 3);
  ("Starts a session for uid and answers its secret key. The key goes to the person (in a guest's private link, or a host's sign-in cookie) and only its hash is kept.");
  let key = calendar_session_key_new();
  let key_hash = await calendar_session_key_hash(key);
  await db
    .prepare(
      "INSERT INTO sessions (key_hash, uid, created_at) VALUES (?1, ?2, ?3)",
    )
    .bind(key_hash, uid, now_iso)
    .run();
  return key;
}
