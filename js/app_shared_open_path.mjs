import { app_shared_contact_user_id } from "./app_shared_contact_user_id.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { text_split_dash } from "./text_split_dash.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { app_shared_open_prefix } from "./app_shared_open_prefix.mjs";
import { text_combine } from "./text_combine.mjs";
export async function app_shared_open_path(app_fn, day) {
  "where one device's open of one app on one day is kept: year, month, day, app, then the device";
  "The day comes first so that one listing answers which apps were opened on a day. The device is the same id the Contact screen and the error reports use, so an open, a message and a fault from one device can be read side by side.";
  let user_id = await app_shared_contact_user_id();
  let app = app_shared_name_prefix_without_fn(app_fn);
  let parts = text_split_dash(day);
  let rest = list_join_slash_forward([...parts, app, user_id]);
  let prefix = app_shared_open_prefix();
  let path = text_combine(prefix, rest);
  return path;
}
