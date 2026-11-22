import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { sql_statements_join } from "./sql_statements_join.mjs";
import { list_map } from "./list_map.mjs";
import { calendar_db_tables } from "./calendar_db_tables.mjs";
import { sql_table_create } from "./sql_table_create.mjs";
import { calendar_db_indexes } from "./calendar_db_indexes.mjs";
export function calendar_db_schema() {
  arguments_assert(arguments, 0);
  ("The tables the calendar keeps in its Cloudflare D1 database: the people who sign in, the ones among them who take bookings, the hours each of those is free, and the meetings booked with them.");
  ("★ ANYBODY CAN BE BOOKED, NOT ONLY THE OWNER. A host is a person who has turned bookings on; every meeting names its host, and an hour taken with one host is still open with every other.");
  ("★ A TAKEN HOUR IS REFUSED BY THE DATABASE ITSELF, NOT BY A CHECK BEFORE THE WRITE. Two people pressing book on the same hour at the same moment both pass any check made first; a unique index lets exactly one of them in.");
  ("Times are kept as the host's own date and minute of the day, in the host's time zone written on the meeting, because the host's day is what fills up and what their alarms ring on. Each guest sees them turned into their own time zone. The minute rather than the hour, so that moving to 30 minute blocks later changes no table.");
  ("A weekly meeting is one row holding its first day; the second index keeps two weekly meetings off the same host, weekday and minute. A one-time meeting landing on a weekly one's later week is refused where it is written, since an index sees only one row at a time.");
  ("★ A WEEKLY SCHEDULE STARTS ON A DATE AND IS NEVER EDITED IN PLACE. All the openings rows sharing a from_day are one schedule; a day keeps the schedule with the latest from_day not after it. Changing the weeks from some date on adds a schedule from that date, so the days before it keep the hours they had.");
  ("A host's free hours are their weekly openings changed on single dates: an openings_dated row with open 0 takes a stretch of that day away (an appointment), with open 1 adds one (an extra free morning).");
  ("★ A SESSION STORES ONLY THE KEY'S HASH. A guest's private link and a host's Facebook sign-in both end in a random key held by the person; the table keeps its SHA-256, so a copy of the database opens nobody's meetings. It names no person row on purpose: a host signed in with Facebook has a session before they have given a WhatsApp number.");
  ("★ A BOOKING WAITS UNTIL ITS CODE ARRIVES. code is what the guest sends the host from their WhatsApp; confirmed_at is stamped when the host sees it come from the number booked with. A meeting with no confirmed_at is waiting, and is cancelled 24 hours after created_at.");
  ("A meeting is held on WhatsApp or Messenger (via). A Messenger guest gives no number - their people row holds empty text - and the host keeps the profile link of whoever sent the code (profile_url). A host offers Messenger once their messenger name is set, and max_per_day, when set, is the most meetings they take in one of their days. max_per_guest, when set, is the most upcoming meetings one guest may hold with them, a weekly meeting counting once; it starts at 2, the limit every host had before it could be set.");
  ("★ A GUEST IS PROVEN BEFORE THEY BOOK (human, 2026-11-20). A proofs row is one guest with one host: the app (via), the number or the profile link they gave (profile_given), and the code they send. confirmed_at is stamped when the host sees the code arrive from that number or profile - on Messenger, profile_url is the sender's profile the host confirmed from. Only a proven guest books, and their meetings are confirmed as they are written. Meetings with a code and no confirmed_at are from before proofs, and still expire after 24 hours.");
  ("Nothing is deleted: a cancelled meeting keeps its row with the time it was cancelled, and leaves both indexes, so the hour opens again.");
  ("Built from ",
    fn_name("calendar_db_tables"),
    " and ",
    fn_name("calendar_db_indexes"),
    ", where each table, column and index is written once: every table, then every index, since an index names columns.");
  let list = calendar_db_tables();
  let sql = sql_statements_join([
    ...list_map(list, sql_table_create),
    ...calendar_db_indexes(),
  ]);
  return sql;
}
