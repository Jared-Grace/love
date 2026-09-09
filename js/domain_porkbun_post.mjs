import { object_property_names } from "./object_property_names.mjs";
import { domain_porkbun_headers } from "./domain_porkbun_headers.mjs";
import { domain_porkbun_cookie_header } from "./domain_porkbun_cookie_header.mjs";
import { domain_fetch_retry } from "./domain_fetch_retry.mjs";
import { domain_porkbun_cookies_update } from "./domain_porkbun_cookies_update.mjs";
export async function domain_porkbun_post(session, path, fields) {
  "Asks Porkbun a question the way its own page asks it - a form, the cookies it gave us, and the security word echoed back - and remembers the cookies that come back, because the security word is one of them and it changes every time.";
  "A FORM, NEVER JSON. The same address answers a JSON body with 'Invalid request method.'";
  let form = new URLSearchParams();
  for (let name of object_property_names(fields)) {
    form.set(name, fields[name]);
  }
  form.set("csrf_pb", session.csrf);
  let headers = domain_porkbun_headers();
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  headers["Cookie"] = domain_porkbun_cookie_header(session);
  let response = await domain_fetch_retry("https://porkbun.com" + path, {
    method: "POST",
    headers,
    body: form.toString(),
  });
  domain_porkbun_cookies_update(session, response);
  let text = await response.text();
  return text;
}
