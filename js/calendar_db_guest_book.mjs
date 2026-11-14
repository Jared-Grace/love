import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { calendar_db_guest_limit_read } from "./calendar_db_guest_limit_read.mjs";
import { calendar_db_person_write } from "./calendar_db_person_write.mjs";
import { calendar_db_person_save } from "./calendar_db_person_save.mjs";
import { not } from "./not.mjs";
import { calendar_db_book } from "./calendar_db_book.mjs";
import { calendar_db_person_delete } from "./calendar_db_person_delete.mjs";
export async function calendar_db_guest_book(
  db,
  uid,
  slug,
  name,
  whatsapp,
  timezone,
  day,
  start_minute,
  weekly,
  now_iso,
  id,
  via,
  profile_url,
) {
  arguments_assert(arguments, 13);
  ("via is whatsapp or messenger. ★ A MESSENGER BOOKING TAKES NO NUMBER AND KEEPS ANY NUMBER ALREADY GIVEN: whatsapp is ignored, a new guest is written with empty text, and a returning guest's number stays as it was, since their WhatsApp meetings are confirmed by it. profile_url is the Messenger guest's profile link, read already, and null for WhatsApp.");
  ("★ THE HOST'S LIMIT PER GUEST REACHES BOTH APPS: a WhatsApp booking is counted with the meetings booked from its number, a Messenger booking with the ones from its profile link, and either with the ones made from the same private link (reason limit; see ",
    fn_name("calendar_db_guest_limit_read"),
    ").");
  let messenger = equal(via, "messenger");
  ("A guest who has not signed in books with the host at slug: writes who they are under uid (new, or the one their private link already names), then books; answers {ok, reason, start_utc}. Reasons: whatsapp, timezone, limit, and the booking's own no_host, not_open, taken.");
  ("★ ONE GUEST HOLDS AT MOST THE HOST'S max_per_guest UPCOMING MEETINGS. Nobody proves a number or a link is theirs, so this is what keeps one person from filling a host's week.");
  ("★ A GUEST WHO WAS NOT THERE BEFORE IS REMOVED AGAIN WHEN THE BOOKING FAILS, so a refused booking leaves no name or number behind.");
  let held = await calendar_db_guest_limit_read(
    db,
    slug,
    uid,
    messenger ? "" : whatsapp,
    messenger ? profile_url : null,
    now_iso,
  );
  if (held.full) {
    let r2 = {
      ok: false,
      reason: "limit",
      start_utc: null,
    };
    return r2;
  }
  let before = await db
    .prepare("SELECT whatsapp FROM people WHERE uid = ?1")
    .bind(uid)
    .first();
  let saved = messenger
    ? await calendar_db_person_write(
        db,
        uid,
        name,
        equal(before, null) ? "" : before.whatsapp,
        timezone,
        now_iso,
      )
    : await calendar_db_person_save(db, uid, name, whatsapp, timezone, now_iso);
  if (not(saved.ok)) {
    let r3 = {
      ok: false,
      reason: saved.reason,
      start_utc: null,
    };
    return r3;
  }
  let booked = await calendar_db_book(
    db,
    slug,
    uid,
    day,
    start_minute,
    weekly,
    now_iso,
    id,
  );
  if (not(booked.ok) && equal(before, null)) {
    await calendar_db_person_delete(db, uid);
  }
  return booked;
}
