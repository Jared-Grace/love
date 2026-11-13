import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_db_dated_save(
  db,
  uid,
  day,
  start_minute,
  end_minute,
  open,
) {
  arguments_assert(arguments, 6);
  ("Changes host uid's hours on one date: open false marks start_minute to end_minute busy (an appointment), open true adds them as free. A change starting at the same minute on the same day is replaced.");
  ("Meetings already booked in a stretch marked busy stay booked; this only stops new ones.");
  try {
    await db
      .prepare(
        `INSERT INTO openings_dated (host_uid, day, start_minute, end_minute, open) VALUES (?1, ?2, ?3, ?4, ?5)
ON CONFLICT (host_uid, day, start_minute) DO UPDATE SET end_minute = excluded.end_minute, open = excluded.open`,
      )
      .bind(uid, day, start_minute, end_minute, open ? 1 : 0)
      .run();
  } catch (e) {
    let message = String(e.message);
    if (message.includes("CHECK")) {
      let r = {
        ok: false,
        reason: "hours",
      };
      return r;
    }
    if (message.includes("FOREIGN KEY")) {
      let r2 = {
        ok: false,
        reason: "no_host",
      };
      return r2;
    }
    throw e;
  }
  let r3 = {
    ok: true,
    reason: null,
  };
  return r3;
}
