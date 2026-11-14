import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_confirm_code_read } from "./calendar_confirm_code_read.mjs";
import { equal } from "./equal.mjs";
export async function calendar_db_confirm(
  db,
  host_uid,
  code,
  whatsapp,
  now_iso,
) {
  arguments_assert(arguments, 5);
  ("The host saw code arrive in their WhatsApp from the number whatsapp: confirms host_uid's waiting meetings holding that code and booked with that number; answers {ok, reason, confirmed}. Reasons: no_code (nothing waiting holds it), number (it is waiting, but was booked with another number).");
  ("★ A CODE CONFIRMS ONLY TOGETHER WITH THE NUMBER IT CAME FROM. The code is no secret - the guest's page shows it - so a code sent from some other phone proves nothing; numbers are compared by digits alone, as when booking.");
  ("Only a WhatsApp meeting is confirmed here; a Messenger one is confirmed with the sender's profile link instead.");
  let wanted = calendar_confirm_code_read(code);
  let digits = String(whatsapp).replace(/[^0-9]/g, "");
  let read = await db
    .prepare(
      `SELECT m.id, p.whatsapp FROM meetings m JOIN people p ON p.uid = m.guest_uid
WHERE m.host_uid = ?1 AND m.code = ?2 AND m.via = 'whatsapp' AND m.confirmed_at IS NULL AND m.cancelled_at IS NULL`,
    )
    .bind(host_uid, wanted)
    .all();
  if (equal(read.results.length, 0)) {
    let r = {
      ok: false,
      reason: "no_code",
      confirmed: 0,
    };
    return r;
  }
  function lambda(m) {
    let left = String(m.whatsapp).replace(/[^0-9]/g, "");
    let r2 = equal(left, digits);
    return r2;
  }
  let matching = read.results.filter(lambda);
  if (equal(matching.length, 0)) {
    let r3 = {
      ok: false,
      reason: "number",
      confirmed: 0,
    };
    return r3;
  }
  let confirmed = 0;
  for (let m of matching) {
    let written = await db
      .prepare(
        "UPDATE meetings SET confirmed_at = ?1 WHERE id = ?2 AND confirmed_at IS NULL AND cancelled_at IS NULL",
      )
      .bind(now_iso, m.id)
      .run();
    confirmed += written.meta.changes;
  }
  let r4 = {
    ok: true,
    reason: null,
    confirmed,
  };
  return r4;
}
