import { app_calendar_secret_transform } from "../../../love/public/src/app_calendar_secret_transform.mjs";
export async function app_calendar_contacts_names_normalize(lambda$data) {
  return await app_calendar_secret_transform(lambda$data);
}
