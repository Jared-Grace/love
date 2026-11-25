import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_calendar_guest } from "./app_calendar_guest.mjs";
import { app_calendar_share_link_draw } from "./app_calendar_share_link_draw.mjs";
import { app_calendar_meetings } from "./app_calendar_meetings.mjs";
import { each } from "./each.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_calendar_host } from "./app_calendar_host.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { firebase_sign_out } from "./firebase_sign_out.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { app_shared_footer } from "./app_shared_footer.mjs";
export async function app_calendar(context) {
  "the /calendar page. A guest opening a host's link (#host=<name>) sees that host's open hours and books one without signing in; a guest who has booked on this device, or opens their private link (#key=), sees their meetings. A host signs in at the bottom and sees their hours, their booking link and who is waiting for a code.";
  "Guests never sign in: a first booking hands back a private key, kept on this device. The host's key is kept apart from it, so the owner booking someone else's hours books as a guest.";
  app_shared_app_fn_set(context, app_calendar);
  let root = property_get(context, "root");
  app_shared_mobile_default_font_size(context);
  let hash = html_hash_object_get();
  let slug = hash.host ?? null;
  let guest_key = hash.key ?? storage_local_get(app_calendar, "guest_key");
  if (hash.key) {
    storage_local_set(app_calendar, "guest_key", hash.key);
  }
  let host_key = storage_local_get(app_calendar, "host_key");
  ("The guest's meetings sit above the booking screen, so a guest who has booked sees it first and cannot miss it (human: \"if booked, show the meetings at the top, not bottom? so they can't miss it?\").");
  let booked_area = html_div(root);
  let meetings_area = html_div(root);
  let guest_area = html_div(root);
  ('The share link has an area of its own: the booking screen redraws itself - a confirmed code, a switch of app - by clearing guest_area, which took a share box drawn inside it away (human, 2026-11-24: "opened new tab looks same page but share missing at bottom").');
  let share_area = html_div(root);
  let host_area = html_div(root);
  function lambda2(k) {
    guest_key = k;
    storage_local_set(app_calendar, "guest_key", k);
  }
  async function guest_show() {
    if (slug) {
      html_clear(guest_area);
      await app_calendar_guest(guest_area, slug, guest_key, lambda2, booked);
      ('The share link sits under the booking screen whenever this guest has a link of their own, so it is there on every later visit and not only just after a booking (human, 2026-11-24: "book a meeting.... But no share link?").');
      html_clear(share_area);
      if (guest_key) {
        app_calendar_share_link_draw(share_area, slug);
      }
    }
  }
  let show_meetings = async function lambda() {
    if (guest_key) {
      await app_calendar_meetings(meetings_area, guest_key, changed, false);
    }
  };
  await guest_show();
  async function changed() {
    'A change to the meetings - a cancel - takes the "Booked" box off the top too, since it may name the meeting just cancelled (human, 2026-11-24: "if book meeting and cancel then \\"Booked\\" at the top should go away?").';
    html_clear(booked_area);
    await guest_show();
  }
  async function booked(draw) {
    'A booking goes back to the home screen - what was booked and the guest\'s link on top, then their meetings, then the hours - and scrolls to the top so the booked line is the first thing seen (human, 2026-11-24: "when booked meeting should take back to home screen that says your meetings but the info should be at the top").';
    html_clear(booked_area);
    draw(booked_area);
    await show_meetings();
    await guest_show();
    window.scrollTo(0, 0);
  }
  await show_meetings();
  let host_open = async function lambda3() {
    "Signing in as host clears the booking screen and the guest's meetings above (human: the button \"doesn't remove top\"), so the host page stands alone.";
    'The guest\'s share link goes too (human, 2026-11-25: "host sign in has link for someone else at the top"): it is for a guest passing a host on, and the host page has its own link to share.';
    each(
      [host_area, guest_area, share_area, meetings_area, booked_area],
      html_clear,
    );
    ('2026-11-15: a line says it is loading while the host\'s settings and the sign-in are fetched; the page sat blank white meanwhile (human: "host sign in just blank white for a while - maybe should show loading?"). The host screen clears it once its settings arrive.');
    html_div_text(host_area, "Loading...");
    if (host_key) {
      let drawn = await app_calendar_host(host_area, host_key, host_sign_out);
      if (drawn) {
        return;
      }
      host_key = null;
      storage_local_set(app_calendar, "host_key", null);
    }
    html_clear(host_area);
    let user = await firebase_auth_ensure(host_area);
    html_clear(host_area);
    html_div_text(host_area, "Loading...");
    let id_token = await user.getIdToken();
    let login = await calendar_api_call(
      "POST",
      "login_firebase",
      {
        id_token,
      },
      null,
    );
    if (not(login.body.ok)) {
      html_clear(host_area);
      html_div_text(
        host_area,
        equal(login.body.reason, "host_only")
          ? "This account cannot host yet."
          : "Could not sign in. Try again later.",
      );
      return;
    }
    host_key = login.body.key;
    storage_local_set(app_calendar, "host_key", host_key);
    await app_calendar_host(host_area, host_key, host_sign_out);
  };
  async function host_sign_out() {
    "Signing out forgets the host key in this browser and signs it out of the site's account, then shows the sign-in button again. The session itself stays valid on the server until sessions can be ended there.";
    host_key = null;
    storage_local_set(app_calendar, "host_key", null);
    await firebase_sign_out();
    html_clear(host_area);
    ('Signing out draws the guest page again - booking screen, share link, meetings - as a fresh load would, since signing in had cleared it (human, 2026-11-25: "signing out of host just has the link for someone else at the top, but not the other content to book meeting").');
    await guest_show();
    await show_meetings();
    guest_rest_draw();
    app_shared_toast("Signed out.");
  }
  function guest_rest_draw() {
    if (not(slug) && not(guest_key)) {
      let hint = html_div_text(
        guest_area,
        "To book a meeting, open the booking link you were sent.",
      );
      app_shared_text_deemphasized(hint);
    }
    app_shared_button_uncolored(host_area, "Host sign in", host_open);
  }
  if (host_key && not(slug)) {
    await host_open();
  } else {
    guest_rest_draw();
  }
  app_shared_footer(root);
}
