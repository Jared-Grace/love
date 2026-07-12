import { properties_normalize_if_exists_multiple } from "./properties_normalize_if_exists_multiple.mjs";
import { app_calendar_name_properties } from "./app_calendar_name_properties.mjs";
import { app_calendar_contacts_initialize } from "./app_calendar_contacts_initialize.mjs";
import { app_calendar_secret_transform } from "./app_calendar_secret_transform.mjs";
export async function app_calendar_contacts_names_normalize() {
  let name_properties = app_calendar_name_properties();
  function lambda(data) {
    let contacts = app_calendar_contacts_initialize(data);
    properties_normalize_if_exists_multiple(contacts, name_properties);
  }
  let r = await app_calendar_secret_transform(lambda);
  return r;
}
