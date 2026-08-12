import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
import { property_get } from "./property_get.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
import { owner_is } from "./owner_is.mjs";
import { app_calendar_availability } from "./app_calendar_availability.mjs";
import { app_calendar_booking } from "./app_calendar_booking.mjs";
export async function app_calendar(context) {
  "the /calendar page: after sign-in, the site owner sees the weekly availability editor to choose when they can preach, and everyone else sees the booking form to request a preaching visit";
  app_shared_app_fn_set(context, app_calendar);
  let root = property_get(context, "root");
  app_shared_mobile_default_font_size(context);
  let user = await firebase_auth_ensure(root);
  let is_owner = owner_is(user);
  if (is_owner) {
    await app_calendar_availability(root, user);
  } else {
    app_calendar_booking(root, user);
  }
  app_shared_contact_button(root, app_calendar);
}
