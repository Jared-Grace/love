import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_calendar_guest } from "./app_calendar_guest.mjs";
import { app_calendar_meetings } from "./app_calendar_meetings.mjs";
import { each } from "./each.mjs";
import { app_calendar_host } from "./app_calendar_host.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { equal } from "./equal.mjs";
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
  let meetings_area = html_div(root);
  let guest_area = html_div(root);
  let host_area = html_div(root);
  function lambda2(k) {
    guest_key = k;
    storage_local_set(app_calendar, "guest_key", k);
  }
  async function guest_show() {
    if (slug) {
      html_clear(guest_area);
      await app_calendar_guest(guest_area, slug, guest_key, lambda2);
    }
  }
  let show_meetings = async function lambda() {
    if (guest_key) {
      await app_calendar_meetings(meetings_area, guest_key, guest_show, false);
    }
  };
  await guest_show();
  await show_meetings();
  let host_open = async function lambda3() {
    "Signing in as host clears the booking screen and the guest's meetings above (human: the button \"doesn't remove top\"), so the host page stands alone.";
    each([host_area, guest_area, meetings_area], html_clear);
    if (host_key) {
      let drawn = await app_calendar_host(host_area, host_key);
      if (drawn) {
        return;
      }
      host_key = null;
      storage_local_set(app_calendar, "host_key", null);
      html_clear(host_area);
    }
    let user = await firebase_auth_ensure(host_area);
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
    await app_calendar_host(host_area, host_key);
  };
  if (host_key && not(slug)) {
    await host_open();
  } else {
    if (not(slug) && not(guest_key)) {
      let hint = html_div_text(
        guest_area,
        "To book a meeting, open the booking link you were sent.",
      );
      app_shared_text_deemphasized(hint);
    }
    app_shared_button_uncolored(host_area, "Host sign in", host_open);
  }
  app_shared_footer(root);
}
