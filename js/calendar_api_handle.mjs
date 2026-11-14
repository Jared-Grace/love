import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { calendar_db_waiting_expire } from "./calendar_db_waiting_expire.mjs";
import { calendar_db_session_uid } from "./calendar_db_session_uid.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { calendar_db_host_free } from "./calendar_db_host_free.mjs";
import { calendar_db_guest_limit_read } from "./calendar_db_guest_limit_read.mjs";
import { not } from "./not.mjs";
import { calendar_db_waiting_book } from "./calendar_db_waiting_book.mjs";
import { calendar_db_session_create } from "./calendar_db_session_create.mjs";
import { owner_email } from "./owner_email.mjs";
import { calendar_db_upcoming } from "./calendar_db_upcoming.mjs";
import { calendar_db_cancel } from "./calendar_db_cancel.mjs";
import { calendar_db_person_delete } from "./calendar_db_person_delete.mjs";
import { calendar_db_settings } from "./calendar_db_settings.mjs";
import { calendar_db_confirm_messenger } from "./calendar_db_confirm_messenger.mjs";
import { calendar_db_confirm } from "./calendar_db_confirm.mjs";
import { calendar_db_host_rules_save } from "./calendar_db_host_rules_save.mjs";
import { calendar_db_person_save } from "./calendar_db_person_save.mjs";
import { calendar_db_host_save } from "./calendar_db_host_save.mjs";
import { calendar_db_schedule_save } from "./calendar_db_schedule_save.mjs";
import { calendar_db_dated_save } from "./calendar_db_dated_save.mjs";
import { calendar_db_dated_delete } from "./calendar_db_dated_delete.mjs";
export async function calendar_api_handle(
  db,
  outside,
  method,
  route,
  body,
  key,
  now_iso,
) {
  arguments_assert(arguments, 7);
  ("Answers one calendar request as {status, body}, with no web objects in it, so the whole of what the Worker decides can be run and checked in node. route is the part after /calendar/api/; body is the query (GET) or the JSON sent (POST); key is the session key the page holds, or null.");
  ("outside holds what reaches past the database, so a test can stand in for it: rate_ok() (the Worker's rate limiter for this caller), turnstile_ok(token) (Cloudflare's are-you-a-person check), uid_new() (a fresh guest uid), firebase_claims(id_token) (a checked Firebase sign-in ticket's claims, or null).");
  ("★ GUESTS NEVER SIGN IN. A first booking makes the guest and answers a session key, which the page keeps and offers as a private link; a later booking or cancel sends that key. HOSTS sign in — with the site's Firebase account (login_firebase, owner only, for now) or with Facebook (",
    fn_name("calendar_facebook_login"),
    ", built for other hosts later) — and each sign-in ends in a key the same way, so there is one kind of session.");
  ("★ ONLY A SIGNED-IN HOST MAY HOST: a session whose uid starts fb_ or firebase_. A guest key never reaches the host routes. firebase_ sessions are made only for ",
    fn_name("owner_email"),
    ", so another Firebase account cannot host. To move off Firebase, replace login_firebase; nothing else here depends on it.");
  ("★ A BOOKING WAITS FOR ITS CODE. book answers a code and a link that opens WhatsApp to the host with it typed; the host, seeing it arrive, sends confirm with the code and the number it came from. Every request first cancels bookings left waiting 24 hours, so no answer counts an hour nobody proved.");
  ("A host who has set a Messenger name also takes Messenger bookings (via messenger): the code is sent from Messenger, and confirm then takes the sender's profile link in place of a number.");
  let reply = function lambda(status, value) {
    let r = {
      status,
      body: value,
    };
    return r;
  };
  await calendar_db_waiting_expire(db, now_iso);
  let uid = key ? await calendar_db_session_uid(db, key) : null;
  let wanted_post = [
    "book",
    "confirm",
    "cancel",
    "delete_me",
    "person_save",
    "host_save",
    "host_rules_save",
    "schedule_save",
    "dated_save",
    "dated_delete",
    "login_firebase",
  ];
  let wanted_get = ["free", "upcoming", "settings"];
  let known = wanted_post.includes(route)
    ? "POST"
    : wanted_get.includes(route)
      ? "GET"
      : null;
  if (equal(known, null)) {
    let r2 = reply(404, {
      ok: false,
      reason: "route",
    });
    return r2;
  }
  if (not_equal(known, method)) {
    let r3 = reply(405, {
      ok: false,
      reason: "method",
    });
    return r3;
  }
  if (equal(route, "free")) {
    let slug2 = String(body.host);
    let free = await calendar_db_host_free(db, slug2, now_iso, 24);
    if (equal(free.host, null)) {
      let r4 = reply(404, {
        ok: false,
        reason: "no_host",
      });
      return r4;
    }
    let host = {
      name: free.host.name,
      timezone: free.host.timezone,
      meeting_minutes: free.host.meeting_minutes,
      messenger: not_equal(free.host.messenger, ""),
    };
    ('A guest who sends their key is told how many meetings they hold with this host and the most allowed (guest), so a guest already at the limit sees their meetings rather than hours they cannot book (human: "so that you only see existing meeting, and you can cancel to schedule a new one"). Without a key, guest is null.');
    let me = equal(uid, null)
      ? null
      : await db
          .prepare("SELECT whatsapp FROM people WHERE uid = ?1")
          .bind(uid)
          .first();
    let guest = equal(uid, null)
      ? null
      : await calendar_db_guest_limit_read(
          db,
          slug2,
          uid,
          equal(me, null) ? "" : me.whatsapp,
          null,
          now_iso,
        );
    let r5 = reply(200, {
      ok: true,
      host,
      slots: free.slots,
      guest,
    });
    return r5;
  }
  if (equal(route, "book")) {
    let b = await outside.rate_ok();
    if (not(b)) {
      let r6 = reply(429, {
        ok: false,
        reason: "rate",
      });
      return r6;
    }
    let v = String(body.turnstile);
    let b2 = await outside.turnstile_ok(v);
    if (not(b2)) {
      let r7 = reply(403, {
        ok: false,
        reason: "turnstile",
      });
      return r7;
    }
    let guest_uid = equal(uid, null) ? outside.uid_new() : uid;
    let slug3 = String(body.host);
    let name2 = String(body.name);
    let whatsapp2 = String(body.whatsapp);
    let timezone2 = String(body.timezone);
    let day2 = String(body.day);
    let start_minute2 = Number(body.start_minute);
    let weekly2 = equal(body.weekly, true);
    let id2 = outside.uid_new();
    let via2 = String(body.via);
    let profile_typed = String(body.profile);
    let booked = await calendar_db_waiting_book(
      db,
      guest_uid,
      slug3,
      name2,
      whatsapp2,
      timezone2,
      day2,
      start_minute2,
      weekly2,
      now_iso,
      id2,
      via2,
      profile_typed,
    );
    if (not(booked.ok)) {
      let r8 = reply(409, booked);
      return r8;
    }
    let key_given = equal(uid, null)
      ? await calendar_db_session_create(db, guest_uid, now_iso)
      : null;
    let r9 = reply(200, {
      ok: true,
      reason: null,
      start_utc: booked.start_utc,
      code: booked.code,
      send_url: booked.send_url,
      expires_utc: booked.expires_utc,
      key: key_given,
    });
    return r9;
  }
  if (equal(route, "login_firebase")) {
    let v2 = String(body.id_token);
    let claims = await outside.firebase_claims(v2);
    if (equal(claims, null)) {
      let r17 = reply(401, {
        ok: false,
        reason: "token",
      });
      return r17;
    }
    let right = owner_email();
    if (not_equal(claims.email, right)) {
      let r18 = reply(403, {
        ok: false,
        reason: "host_only",
      });
      return r18;
    }
    let host_key = await calendar_db_session_create(
      db,
      "firebase_" + claims.sub,
      now_iso,
    );
    let r19 = reply(200, {
      ok: true,
      key: host_key,
    });
    return r19;
  }
  if (equal(uid, null)) {
    let r10 = reply(401, {
      ok: false,
      reason: "key",
    });
    return r10;
  }
  if (equal(route, "upcoming")) {
    let meetings = await calendar_db_upcoming(db, uid, now_iso);
    let r11 = reply(200, {
      ok: true,
      meetings,
    });
    return r11;
  }
  if (equal(route, "cancel")) {
    let id3 = String(body.id);
    let cancelled = await calendar_db_cancel(db, uid, id3, now_iso);
    let r12 = reply(cancelled ? 200 : 404, {
      ok: cancelled,
    });
    return r12;
  }
  if (equal(route, "delete_me")) {
    await calendar_db_person_delete(db, uid);
    let r13 = reply(200, {
      ok: true,
    });
    return r13;
  }
  let b3 = uid.startsWith("fb_") || uid.startsWith("firebase_");
  if (not(b3)) {
    let r14 = reply(403, {
      ok: false,
      reason: "host_only",
    });
    return r14;
  }
  if (equal(route, "settings")) {
    let settings = await calendar_db_settings(db, uid);
    let r15 = reply(200, {
      ok: true,
      settings,
    });
    return r15;
  }
  let saved = null;
  if (equal(route, "confirm")) {
    let code2 = String(body.code);
    if (equal(body.via, "messenger")) {
      let profile = String(body.profile);
      saved = await calendar_db_confirm_messenger(
        db,
        uid,
        code2,
        profile,
        now_iso,
      );
    } else {
      let whatsapp4 = String(body.whatsapp);
      saved = await calendar_db_confirm(db, uid, code2, whatsapp4, now_iso);
    }
  }
  if (equal(route, "host_rules_save")) {
    let messenger_typed = String(body.messenger);
    let max_typed = String(body.max);
    ('A page from before max_guest sends none, and "undefined" is refused rather than read as blank, so an old page cannot silently lift the limit.');
    let max_guest_typed = String(body.max_guest);
    saved = await calendar_db_host_rules_save(
      db,
      uid,
      messenger_typed,
      max_typed,
      max_guest_typed,
    );
  }
  if (equal(route, "person_save")) {
    let name3 = String(body.name);
    let whatsapp3 = String(body.whatsapp);
    let timezone3 = String(body.timezone);
    saved = await calendar_db_person_save(
      db,
      uid,
      name3,
      whatsapp3,
      timezone3,
      now_iso,
    );
  }
  if (equal(route, "host_save")) {
    let slug4 = String(body.slug);
    let block_minutes2 = Number(body.block_minutes);
    let meeting_minutes2 = Number(body.meeting_minutes);
    saved = await calendar_db_host_save(
      db,
      uid,
      slug4,
      block_minutes2,
      meeting_minutes2,
      now_iso,
    );
  }
  if (equal(route, "schedule_save")) {
    let from_day2 = String(body.from_day);
    saved = await calendar_db_schedule_save(db, uid, from_day2, body.openings);
  }
  if (equal(route, "dated_save")) {
    let day3 = String(body.day);
    let start_minute3 = Number(body.start_minute);
    let end_minute2 = Number(body.end_minute);
    let open2 = equal(body.open, true);
    saved = await calendar_db_dated_save(
      db,
      uid,
      day3,
      start_minute3,
      end_minute2,
      open2,
    );
  }
  if (equal(route, "dated_delete")) {
    let day4 = String(body.day);
    let start_minute4 = Number(body.start_minute);
    let deleted = await calendar_db_dated_delete(db, uid, day4, start_minute4);
    saved = {
      ok: deleted,
    };
  }
  let r16 = reply(saved.ok ? 200 : 400, saved);
  return r16;
}
