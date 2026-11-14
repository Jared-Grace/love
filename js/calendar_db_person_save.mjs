import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { calendar_db_person_write } from "./calendar_db_person_write.mjs";
export async function calendar_db_person_save(
  db,
  uid,
  name,
  whatsapp,
  timezone,
  now_iso,
) {
  arguments_assert(arguments, 6);
  ("Writes who uid is - their name, WhatsApp number and time zone - adding them the first time and changing them after; answers {ok, reason}. created_at keeps the first time.");
  ("A time zone the runtime cannot name is refused, since every hour shown to this person is turned into it; a WhatsApp number must be digits, with an optional leading +, and spaces, dashes or brackets between.");
  let whatsapp_trimmed = String(whatsapp).trim();
  let b = /^\+?[0-9][0-9 ()-]{5,24}$/.test(whatsapp_trimmed);
  if (not(b)) {
    let r = {
      ok: false,
      reason: "whatsapp",
    };
    return r;
  }
  let written = await calendar_db_person_write(
    db,
    uid,
    name,
    whatsapp_trimmed,
    timezone,
    now_iso,
  );
  return written;
}
