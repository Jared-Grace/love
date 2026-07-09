import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function me_email() {
  const email_username = "christrosetolife";
  const email_domain = "gmail.com";
  const email_address = text_combine_multiple([
    email_username,
    "@",
    email_domain,
  ]);
  return email_address;
}
