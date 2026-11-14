import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { calendar_db_guest_book } from "./calendar_db_guest_book.mjs";
import { calendar_confirm_code } from "./calendar_confirm_code.mjs";
import { calendar_send_url } from "./calendar_send_url.mjs";
import { multiply } from "./multiply.mjs";
export async function calendar_db_waiting_book(
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
) {
  arguments_assert(arguments, 12);
  ("via is whatsapp or messenger: send_url opens that app to the host, and a Messenger booking is refused (reason messenger) when the host has not set a Messenger name.");
  ("Books like ",
    fn_name("calendar_db_guest_book"),
    ", but the meeting waits for its code: answers {ok, reason, start_utc, code, send_url, expires_utc}. send_url opens WhatsApp to the host with the code already typed; the guest only presses send.");
  ("★ A BOOKING HOLDS ITS HOUR BUT IS NOT YET A MEETING. Anyone can type any number; the code arriving from that number in the host's WhatsApp is what proves it. Until the host confirms it, the meeting is waiting, and 24 hours after booking an unconfirmed one is cancelled.");
  ("The code is written after the booking, in a second statement: a booking that loses its code in between is still waiting, so it expires like any other rather than counting as confirmed.");
  let host = await db
    .prepare(
      "SELECT p.whatsapp, h.messenger FROM hosts h JOIN people p ON p.uid = h.uid WHERE h.slug = ?1",
    )
    .bind(slug)
    .first();
  let messenger = equal(via, "messenger");
  if (not(messenger) && not(equal(via, "whatsapp"))) {
    via = "whatsapp";
  }
  if (messenger && not(equal(host, null)) && equal(host.messenger, "")) {
    let r0 = {
      ok: false,
      reason: "messenger",
      start_utc: null,
      code: null,
      send_url: null,
      expires_utc: null,
    };
    return r0;
  }
  let booked = await calendar_db_guest_book(
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
  );
  if (not(booked.ok)) {
    let r = {
      ...booked,
      code: null,
      send_url: null,
      expires_utc: null,
    };
    return r;
  }
  let code = calendar_confirm_code(id);
  await db
    .prepare("UPDATE meetings SET code = ?1, via = ?3 WHERE id = ?2")
    .bind(code, id, via)
    .run();
  let send_url = calendar_send_url(via, host.whatsapp, host.messenger, code);
  let left = multiply(24, 60);
  let left2 = multiply(left, 60);
  let expires_utc = new Date(
    Date.parse(now_iso) + multiply(left2, 1000),
  ).toISOString();
  let r2 = {
    ok: true,
    reason: null,
    start_utc: booked.start_utc,
    code,
    send_url,
    expires_utc,
  };
  return r2;
}
