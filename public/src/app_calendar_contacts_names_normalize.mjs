import { properties_normalize_if_exists } from "../../../love/public/src/properties_normalize_if_exists.mjs";
import { app_calendar_name_properties } from "../../../love/public/src/app_calendar_name_properties.mjs";
import { object_pick_try_single_value } from "../../../love/public/src/object_pick_try_single_value.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { app_calendar_secret_transform } from "../../../love/public/src/app_calendar_secret_transform.mjs";
export async function app_calendar_contacts_names_normalize() {
  let name_properties = app_calendar_name_properties();
  function lambda(data) {
    let contacts = app_calendar_contacts_initialize(data);
    function lambda2(c) {
      properties_normalize_if_exists(name_properties);
      let value = object_pick_try_single_value(c, name_properties);
      log(app_calendar_contacts_names_normalize.name, {
        value,
      });
    }
    each(contacts, lambda2);
  }
  let r = await app_calendar_secret_transform(lambda);
  return;
  return r;
}
