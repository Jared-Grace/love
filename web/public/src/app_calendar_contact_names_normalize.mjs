import { properties_normalize_if_exists } from "../../../love/public/src/properties_normalize_if_exists.mjs";
import { app_calendar_name_properties } from "../../../love/public/src/app_calendar_name_properties.mjs";
export function app_calendar_contact_names_normalize(item) {
  let name_properties = app_calendar_name_properties();
  properties_normalize_if_exists(item, name_properties);
}
