import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function me_email() {
  let email_username = "christrosetolife";
  let email_domain = "gmail.com";
  let email_address = text_combine_multiple([
    email_username,
    "@",
    email_domain,
  ]);
  return email_address;
}
