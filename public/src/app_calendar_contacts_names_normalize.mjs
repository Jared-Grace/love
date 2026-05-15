import { app_calendar_secret_transform } from "../../../love/public/src/app_calendar_secret_transform.mjs";
export async function app_calendar_contacts_names_normalize() {
  function lambda() {}
  let r = await app_calendar_secret_transform(lambda);
  return r;
}
