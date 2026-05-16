import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { me_email } from "../../../love/public/src/me_email.mjs";
export function me_calendar_path() {
  const email_address = me_email();
  let combined = text_combine(email_address, ".ics");
  return combined;
}
