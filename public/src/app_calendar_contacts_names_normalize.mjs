import { each } from "../../../love/public/src/each.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_calendar_contacts_initialize } from "../../../love/public/src/app_calendar_contacts_initialize.mjs";
import { app_calendar_secret_transform } from "../../../love/public/src/app_calendar_secret_transform.mjs";
export async function app_calendar_contacts_names_normalize() {
  function lambda(data) {
    let contacts = app_calendar_contacts_initialize(data);
    log(app_calendar_contacts_names_normalize.name, {
      contacts,
    });
    function lambda2(c) {}
    each(contacts, lambda2);
  }
  let r = await app_calendar_secret_transform(lambda);
  return r;
}
