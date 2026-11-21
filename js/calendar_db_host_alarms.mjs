import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { calendar_meeting_next_utc } from "./calendar_meeting_next_utc.mjs";
import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export async function calendar_db_host_alarms(db, slug, now_iso) {
  arguments_assert(arguments, 3);
  ("What the host whose booking link is slug needs their phone to ring for: {meetings}, soonest first, each with start_utc (when it starts, the next time for a weekly one), duration_minutes (how long it lasts) and ahead_minutes (how many minutes before the start an alarm rings, one alarm for each). Answers null when no host has that link.");
  ('ahead_minutes sits on EACH MEETING (human, 2026-11-21: "ahead minutes should be per meeting?" - yes), so one meeting can later ring earlier or more often than another without the phone app changing.');
  ('★ TIMES ONLY, AND SO IT IS PUBLIC (human, 2026-11-21: "should it just have times, and then I have to consult an app while logged in? this protects user data"). No name, number, profile or code leaves here. The hours that are booked could already be worked out from the public weekly hours and the free hours the booking page shows, so this tells a stranger nothing they could not learn already.');
  ("★ ONLY CONFIRMED MEETINGS RING. One still waiting for its code is not a meeting yet - unconfirmed ones are cancelled a day after booking - and an alarm for it would ring for nobody.");
  ("The time is given in UTC and the phone writes it in its own zone, so the alarm and its label stay right when the host travels or the clocks change.");
  ('ahead_minutes is the same for every meeting for now (human, 2026-11-21: "ring ahead like 5 min - meetings could have multiple advance alarms to be safer"); a host or meeting setting can replace the list without changing the shape.');
  let host = await db
    .prepare("SELECT uid FROM hosts WHERE slug = ?1")
    .bind(slug)
    .first();
  if (equal(host, null)) {
    return null;
  }
  let read = await db
    .prepare(
      `SELECT meetings.host_timezone, meetings.day, meetings.weekday, meetings.start_minute, meetings.weekly, hosts.meeting_minutes
FROM meetings JOIN hosts ON hosts.uid = meetings.host_uid
WHERE meetings.host_uid = ?1 AND meetings.cancelled_at IS NULL AND meetings.confirmed_at IS NOT NULL`,
    )
    .bind(host.uid)
    .all();
  let meetings = [];
  for (let meeting of read.results) {
    let start_utc = calendar_meeting_next_utc(meeting, now_iso);
    if (not_equal(start_utc, null)) {
      meetings.push({
        start_utc,
        duration_minutes: meeting.meeting_minutes,
        ahead_minutes: [15, 5],
      });
    }
  }
  function soonest(a, b) {
    let r2 = less_than(a.start_utc, b.start_utc)
      ? -1
      : greater_than(a.start_utc, b.start_utc)
        ? 1
        : 0;
    return r2;
  }
  meetings.sort(soonest);
  let r = {
    meetings,
  };
  return r;
}
