import { properties_normalize_if_exists } from "./properties_normalize_if_exists.mjs";
import { app_calendar_name_properties } from "./app_calendar_name_properties.mjs";
export function app_calendar_contact_names_normalize(item) {
  let name_properties = app_calendar_name_properties();
  properties_normalize_if_exists(item, name_properties);
}
