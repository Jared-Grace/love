import { properties_normalize_if_exists_multiple } from "../../../love/public/src/properties_normalize_if_exists_multiple.mjs";
import { app_calendar_name_properties } from "../../../love/public/src/app_calendar_name_properties.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { app_calendar_secret_transform } from "../../../love/public/src/app_calendar_secret_transform.mjs";
export async function app_calendar_contacts_names_normalize() {
  let name_properties = app_calendar_name_properties();
  function lambda(data) {
    let contacts = app_calendar_contacts_initialize(data);
    properties_normalize_if_exists_multiple(contacts, name_properties);
  }
  let r = await app_calendar_secret_transform(lambda);
  return r;
}
