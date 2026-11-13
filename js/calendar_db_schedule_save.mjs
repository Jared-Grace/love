import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_db_schedule_save(db, uid, from_day, openings) {
  arguments_assert(arguments, 4);
  ("Saves host uid's weekly schedule in force from from_day on: openings is a list of {weekday, start_minute, end_minute}, weekday 0 for Sunday. An empty list is a real schedule - no weekly hours from that day.");
  ("Saving again with the same from_day replaces that one schedule whole; schedules from other days are left as they were, so the days they cover keep their hours.");
  ("The removal and the new rows go in one batch, which D1 runs as one transaction: a bad row leaves the old schedule standing rather than half of each.");
  let v = db
    .prepare("DELETE FROM openings WHERE host_uid = ?1 AND from_day = ?2")
    .bind(uid, from_day);
  let statements = [v];
  for (let o of openings) {
    let v2 = db
      .prepare(
        "INSERT INTO openings (host_uid, from_day, weekday, start_minute, end_minute) VALUES (?1, ?2, ?3, ?4, ?5)",
      )
      .bind(uid, from_day, o.weekday, o.start_minute, o.end_minute);
    statements.push(v2);
  }
  try {
    await db.batch(statements);
  } catch (e) {
    let message = String(e.message);
    if (message.includes("CHECK") || message.includes("UNIQUE")) {
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
