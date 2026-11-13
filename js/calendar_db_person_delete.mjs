import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
export async function calendar_db_person_delete(db, uid) {
  arguments_assert(arguments, 2);
  ("Removes everything the calendar keeps about uid: their name, WhatsApp number and time zone, their booking link and hours if they hosted, and every meeting they booked or were booked for. Answers whether there was a person to remove.");
  ("★ THIS IS THE ONE PLACE ROWS ARE REALLY DELETED. Everywhere else a cancelled meeting keeps its row; a person asking for their data to go is owed its going, the meetings with other people included, since each of those holds this person's details for the other side.");
  ("One batch, so a failure part way leaves everything rather than a person with no name still holding meetings. Children go before the rows they point at.");
  let v = db
    .prepare("DELETE FROM meetings WHERE guest_uid = ?1 OR host_uid = ?1")
    .bind(uid);
  let v2 = db
    .prepare("DELETE FROM openings_dated WHERE host_uid = ?1")
    .bind(uid);
  let v3 = db.prepare("DELETE FROM openings WHERE host_uid = ?1").bind(uid);
  let v4 = db.prepare("DELETE FROM hosts WHERE uid = ?1").bind(uid);
  let v5 = db.prepare("DELETE FROM people WHERE uid = ?1").bind(uid);
  let v6 = db.prepare("DELETE FROM sessions WHERE uid = ?1").bind(uid);
  let statements = [v6, v, v2, v3, v4, v5];
  let results = await db.batch(statements);
  let person_result = results[subtract(results.length, 1)];
  let eq = equal(person_result.meta.changes, 1);
  return eq;
}
