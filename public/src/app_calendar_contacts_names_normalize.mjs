import { properties_normalize_if_exists_curried_right } from "../../../love/public/src/properties_normalize_if_exists_curried_right.mjs";
import { properties_normalize_if_exists } from "../../../love/public/src/properties_normalize_if_exists.mjs";
import { app_calendar_name_properties } from "../../../love/public/src/app_calendar_name_properties.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { app_calendar_secret_transform } from "../../../love/public/src/app_calendar_secret_transform.mjs";
export async function app_calendar_contacts_names_normalize() {
  let name_properties = app_calendar_name_properties();
  function lambda(data) {
    let contacts = app_calendar_contacts_initialize(data);
    let lambda2 = properties_normalize_if_exists_curried_right(name_properties);
    each(contacts, lambda2);
  }
  let r = await app_calendar_secret_transform(lambda);
  return;
  return r;
}
