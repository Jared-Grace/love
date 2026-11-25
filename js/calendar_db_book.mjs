import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { calendar_db_host_free } from "./calendar_db_host_free.mjs";
import { equal } from "./equal.mjs";
import { calendar_weekly_series_plan } from "./calendar_weekly_series_plan.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { not } from "./not.mjs";
import { list_map } from "./list_map.mjs";
import { calendar_db_book_row } from "./calendar_db_book_row.mjs";
export async function calendar_db_book(
  db,
  slug,
  guest_uid,
  day,
  start_minute,
  weekly,
  now_iso,
  id,
  soon_minutes,
) {
  arguments_assert(arguments, 9);
  ("Books guest_uid with the host whose booking link is slug, on the host's own day and minute, once or every week from then on; answers {ok, reason, start_utc}. db is a Cloudflare D1 database, or anything answering the same prepare, bind, first, all and run.");
  ("The hour must be one the host still offers - inside their openings, from an hour short of their notice to their days ahead, not held - which is asked of the same list the guest was shown, so the page and the booking cannot disagree about what is open.");
  ("★ THE CLASH CHECK AND THE WRITE ARE ONE STATEMENT. Checking first and writing after lets two guests both pass the check; an INSERT that only writes when no clashing meeting exists cannot be split, and the unique indexes back it up. The clashes: the same day, an earlier weekly meeting reaching this day, or - for a weekly booking - any meeting on this weekday at or after its first day.");
  ("★ A BOOKING ACCEPTS AN HOUR ONE HOUR SOONER THAN THE PAGE SHOWS - 23 hours ahead for a host asking 24 hours' notice. A guest who opens the page, takes a while to choose, then presses Book would otherwise be told the hour they were shown is gone. The hour of grace is the time to choose; 23.5 was rejected as too little for someone slow or on a weak connection, and anything under about 20 starts letting a guest book closer than the host was promised.");
  ("★ THE HOST'S max_per_day IS CHECKED IN THE SAME STATEMENT TOO, so two guests booking the last free place of a day at once cannot both get it; a full day answers taken. A weekly booking is counted on its first day only.");
  ("The test Worker's extra time (soon: true, from ",
    fn_name("calendar_soon_slots"),
    ') skips max_per_day here as it does in the list (human, 2026-11-23: "says someone booked that time / but it\'s me from a few minutes ago") - a test booked earlier that day had filled it, so the time was shown and then refused.');
  ('The grace stays one hour whatever notice the host sets: it is the guest\'s time to choose, not a choice of the host\'s (human, 2026-11-22, asking for both "minimum hours from now for being able to choose a time" and "for server accepting a time"; one setting with the hour worked out was picked, since two set far apart would only surprise guests).');
  let free = await calendar_db_host_free(db, slug, now_iso, 1, soon_minutes);
  let host_row = free.host;
  if (equal(host_row, null)) {
    let r = {
      ok: false,
      reason: "no_host",
      start_utc: null,
    };
    return r;
  }
  let host_uid = host_row.uid;
  let slots = free.slots;
  function lambda(s) {
    let r2 = equal(s.day, day) && equal(s.start_minute, start_minute);
    return r2;
  }
  let chosen = slots.find(lambda);
  if (equal(chosen, undefined)) {
    let r3 = {
      ok: false,
      reason: "not_open",
      start_utc: null,
    };
    return r3;
  }
  ('★ AN EVERY-WEEK BOOKING STEPS AROUND THE WEEKS ALREADY TAKEN (human, 2026-11-25: "These mondays will be scheduled: ... And then every week beginning on ..."): it is written as a one-time meeting for each free week before the last taken one, then a repeating meeting from the week after, by the same plan the page drew (',
    fn_name("calendar_weekly_series_plan"),
    "). A repeating meeting already there from a later week still answers taken.");
  ("The pieces are written one by one, each by the same guarded statement; if any is refused - someone took a week in between - the pieces already written are deleted and the whole answers taken, so nobody is left holding half of what they chose. The first piece keeps id and the host's max_per_day check; the others take id with -2, -3 and so on.");
  let rows = [
    {
      day,
      weekly: weekly ? 1 : 0,
    },
  ];
  if (weekly) {
    let clashes = property_get_or(chosen, "weekly_clashes", []);
    let plan = calendar_weekly_series_plan(day, clashes);
    if (not(plan.open)) {
      let r_shut = {
        ok: false,
        reason: "taken",
        start_utc: null,
        ids: [],
      };
      return r_shut;
    }
    function single_row(d) {
      let r_single = {
        day: d,
        weekly: 0,
      };
      return r_single;
    }
    rows = [
      ...list_map(plan.singles, single_row),
      {
        day: plan.weekly_from,
        weekly: 1,
      },
    ];
  }
  let ids = [];
  for (let row of rows) {
    let row_id = equal(ids.length, 0) ? id : id + "-" + (ids.length + 1);
    let row_max =
      equal(ids.length, 0) && not(equal(chosen.soon, true))
        ? host_row.max_per_day
        : null;
    let landed = await calendar_db_book_row(
      db,
      row_id,
      host_uid,
      guest_uid,
      host_row.timezone,
      row.day,
      start_minute,
      row.weekly,
      now_iso,
      row_max,
    );
    if (not(landed)) {
      for (let written_id of ids) {
        await db
          .prepare("DELETE FROM meetings WHERE id = ?1")
          .bind(written_id)
          .run();
      }
      let r4 = {
        ok: false,
        reason: "taken",
        start_utc: null,
        ids: [],
      };
      return r4;
    }
    ids.push(row_id);
  }
  ("ids lists every row written, so a caller stamping how the meeting is held stamps each piece.");
  let r5 = {
    ok: true,
    reason: null,
    start_utc: chosen.start_utc,
    ids,
  };
  return r5;
}
