import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_meeting_next_utc } from "./calendar_meeting_next_utc.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { calendar_send_url } from "./calendar_send_url.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export async function calendar_db_upcoming(db, uid, now_iso) {
  arguments_assert(arguments, 3);
  ("The meetings uid has not cancelled and that have not all passed, both the ones uid booked and the ones booked with uid as host, soonest first. Each names the other person - name, WhatsApp, time zone - since that is who to call, and says when it next starts in UTC. waiting is true until the host has confirmed the guest's code; code is shown to both, so the guest can send it again.");
  ("via says which app the meeting is held on; send_url opens that app to the host with the code typed, and profile_url is the Messenger profile the host confirmed it from.");
  let read = await db
    .prepare(
      `SELECT meetings.id, meetings.host_uid, meetings.guest_uid, meetings.host_timezone, meetings.day, meetings.weekday, meetings.start_minute, meetings.weekly, meetings.code, meetings.confirmed_at, meetings.via, meetings.profile_url,
  other.uid AS other_uid, other.name AS other_name, other.whatsapp AS other_whatsapp, other.timezone AS other_timezone,
  h.messenger AS host_messenger, hp.whatsapp AS host_whatsapp
FROM meetings JOIN people AS other
  ON other.uid = CASE WHEN meetings.host_uid = ?1 THEN meetings.guest_uid ELSE meetings.host_uid END
LEFT JOIN hosts AS h ON h.uid = meetings.host_uid
LEFT JOIN people AS hp ON hp.uid = meetings.host_uid
WHERE meetings.cancelled_at IS NULL AND (meetings.host_uid = ?1 OR meetings.guest_uid = ?1)`,
    )
    .bind(uid)
    .all();
  let upcoming = [];
  for (let meeting of read.results) {
    let next_utc = calendar_meeting_next_utc(meeting, now_iso);
    if (not_equal(next_utc, null)) {
      upcoming.push({
        id: meeting.id,
        hosting: equal(meeting.host_uid, uid),
        weekly: equal(meeting.weekly, 1),
        waiting: equal(meeting.confirmed_at, null),
        code: meeting.code,
        via: meeting.via,
        profile_url: meeting.profile_url,
        send_url: equal(meeting.code, null)
          ? null
          : calendar_send_url(
              meeting.via,
              meeting.host_whatsapp,
              meeting.host_messenger,
              meeting.code,
            ),
        next_utc,
        other: {
          uid: meeting.other_uid,
          name: meeting.other_name,
          whatsapp: meeting.other_whatsapp,
          timezone: meeting.other_timezone,
        },
      });
    }
  }
  function lambda(a, b) {
    let r = less_than(a.next_utc, b.next_utc)
      ? -1
      : greater_than(a.next_utc, b.next_utc)
        ? 1
        : 0;
    return r;
  }
  upcoming.sort(lambda);
  return upcoming;
}
