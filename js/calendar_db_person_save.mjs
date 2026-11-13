import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
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
  try {
    new Intl.DateTimeFormat("en", {
      timeZone: timezone,
    });
  } catch {
    let r2 = {
      ok: false,
      reason: "timezone",
    };
    return r2;
  }
  let v = String(name).trim();
  await db
    .prepare(
      `INSERT INTO people (uid, name, whatsapp, timezone, created_at) VALUES (?1, ?2, ?3, ?4, ?5)
ON CONFLICT (uid) DO UPDATE SET name = excluded.name, whatsapp = excluded.whatsapp, timezone = excluded.timezone`,
    )
    .bind(uid, v, whatsapp_trimmed, timezone, now_iso)
    .run();
  let r3 = {
    ok: true,
    reason: null,
  };
  return r3;
}
