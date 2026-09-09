import { domain_porkbun_headers } from "./domain_porkbun_headers.mjs";
import { domain_porkbun_cookies_update } from "./domain_porkbun_cookies_update.mjs";
export async function domain_porkbun_session_new() {
  "A fresh conversation with Porkbun's search page: the cookies it hands out and the security word it wants echoed back, which is itself only one of those cookies.";
  "NO ACCOUNT AND NO API KEY IS NEEDED FOR PRICES. Asking is the same thing a visitor's browser does; buying is not, and is the human's to do.";
  let session = {
    cookies: {},
    csrf: "",
  };
  let response = await fetch("https://porkbun.com/checkout/search", {
    headers: domain_porkbun_headers(),
  });
  domain_porkbun_cookies_update(session, response);
  return session;
}
