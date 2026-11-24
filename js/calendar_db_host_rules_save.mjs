import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { calendar_meeting_minutes_choices } from "./calendar_meeting_minutes_choices.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { calendar_messenger_name_read } from "./calendar_messenger_name_read.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
export async function calendar_db_host_rules_save(
  db,
  uid,
  messenger_typed,
  max_typed,
  max_guest_typed,
  notice_typed,
  days_ahead_typed,
  meeting_typed,
  block_typed,
  now_iso,
) {
  arguments_assert(arguments, 10);
  ("meeting_typed is the meeting length, one of ",
    fn_name("calendar_meeting_minutes_choices"),
    '; block_typed is how often a meeting can start, every 30 or 60 minutes; the meeting must fit before the next can start, so meetings never overlap. Anything else is refused with reason minutes - so a page from before these were Rules, sending none, cannot save (human, 2026-11-24: "should these be in rules?", "should be able to pick 55 minutes").');
  let v = String(meeting_typed);
  let meeting_minutes = Number(v);
  let v2 = String(block_typed);
  let block_minutes = Number(v2);
  let list = calendar_meeting_minutes_choices();
  let minutes_fit =
    list_includes(list, meeting_minutes) &&
    list_includes([30, 60], block_minutes) &&
    less_than_equal(meeting_minutes, block_minutes);
  if (not(minutes_fit)) {
    let r9 = {
      ok: false,
      reason: "minutes",
    };
    return r9;
  }
  ('notice_typed is how many hours ahead the soonest bookable hour starts, 1 to 168 (a week); days_ahead_typed is how many days ahead a guest may book, 1 to 60. Neither may be blank - there is no "unlimited" notice or reach - and the notice must end before the reach does, or no hour could ever be offered. Reasons: notice, days_ahead, window.');
  ('A save stamps rules_saved_at with now_iso, so the host page can tell rules never saved from rules saved as the starting values, which leave the same row (human, 2026-11-22: "Rules should also be configured? and initially be unconfigured?").');
  ("Saves a host's booking rules as they typed them; answers {ok, reason}. messenger_typed is their Messenger name or link, blank for WhatsApp only. max_typed is the most meetings they take in one day, blank for no limit. max_guest_typed is the most upcoming meetings one guest may hold with them, a weekly one counting once, blank for no limit. Reasons: messenger, max and max_guest (1 to 24), no_host (save the booking link first).");
  let messenger = calendar_messenger_name_read(messenger_typed);
  if (equal(messenger, null)) {
    let r = {
      ok: false,
      reason: "messenger",
    };
    return r;
  }
  function cap_read(typed) {
    "A cap as typed: blank is no cap (null), 1 to 24 is that number, anything else is refused (undefined).";
    let text = String(typed).trim();
    if (equal(text, "")) {
      return null;
    }
    let n = Number(text);
    let b = /^[0-9]+$/.test(text);
    if (not(b) || less_than(n, 1) || greater_than(n, 24)) {
      return undefined;
    }
    return n;
  }
  let max_per_day = cap_read(max_typed);
  if (equal(max_per_day, undefined)) {
    let r2 = {
      ok: false,
      reason: "max",
    };
    return r2;
  }
  let max_per_guest = cap_read(max_guest_typed);
  if (equal(max_per_guest, undefined)) {
    let r5 = {
      ok: false,
      reason: "max_guest",
    };
    return r5;
  }
  function whole_read(typed, most) {
    "A whole number as typed from 1 to most, or null when it is blank or anything else.";
    let text = String(typed).trim();
    let n = Number(text);
    let b = /^[0-9]+$/.test(text);
    if (not(b) || less_than(n, 1) || greater_than(n, most)) {
      return null;
    }
    return n;
  }
  let notice_hours = whole_read(notice_typed, 168);
  if (equal(notice_hours, null)) {
    let r6 = {
      ok: false,
      reason: "notice",
    };
    return r6;
  }
  let days_ahead = whole_read(days_ahead_typed, 60);
  if (equal(days_ahead, null)) {
    let r7 = {
      ok: false,
      reason: "days_ahead",
    };
    return r7;
  }
  let b2 = multiply(days_ahead, 24);
  let b3 = less_than(notice_hours, b2);
  if (not(b3)) {
    let r8 = {
      ok: false,
      reason: "window",
    };
    return r8;
  }
  let written = await db
    .prepare(
      "UPDATE hosts SET messenger = ?1, max_per_day = ?2, max_per_guest = ?4, rules_saved_at = ?5, notice_hours = ?6, days_ahead = ?7, meeting_minutes = ?8, block_minutes = ?9 WHERE uid = ?3",
    )
    .bind(
      messenger,
      max_per_day,
      uid,
      max_per_guest,
      now_iso,
      notice_hours,
      days_ahead,
      meeting_minutes,
      block_minutes,
    )
    .run();
  if (equal(written.meta.changes, 0)) {
    let r3 = {
      ok: false,
      reason: "no_host",
    };
    return r3;
  }
  let r4 = {
    ok: true,
    reason: null,
  };
  return r4;
}
