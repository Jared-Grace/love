import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_db_person_write(
  db,
  uid,
  name,
  whatsapp,
  timezone,
  now_iso,
) {
  arguments_assert(arguments, 6);
  ("Writes who uid is - name, WhatsApp text and time zone - adding them the first time and changing them after; answers {ok, reason}. created_at keeps the first time. The number is written as given, unchecked, so a Messenger guest with no number can be written with empty text; the number's own check lives in the callers that require one.");
  ("A time zone the runtime cannot name is refused (reason timezone), since every hour shown to this person is turned into it.");
  try {
    new Intl.DateTimeFormat("en", {
      timeZone: timezone,
    });
  } catch {
    let r = {
      ok: false,
      reason: "timezone",
    };
    return r;
  }
  let v = String(name).trim();
  await db
    .prepare(
      `INSERT INTO people (uid, name, whatsapp, timezone, created_at) VALUES (?1, ?2, ?3, ?4, ?5)
ON CONFLICT (uid) DO UPDATE SET name = excluded.name, whatsapp = excluded.whatsapp, timezone = excluded.timezone`,
    )
    .bind(uid, v, whatsapp, timezone, now_iso)
    .run();
  let r2 = {
    ok: true,
    reason: null,
  };
  return r2;
}
