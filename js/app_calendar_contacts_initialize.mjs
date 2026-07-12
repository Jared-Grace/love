import { property_initialize } from "./property_initialize.mjs";
export function app_calendar_contacts_initialize(data) {
  let contacts = property_initialize(data, "contacts", []);
  return contacts;
}
