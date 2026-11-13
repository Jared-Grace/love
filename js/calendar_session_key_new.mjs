import { arguments_assert } from "./arguments_assert.mjs";
import { uuid_browser } from "./uuid_browser.mjs";
export function calendar_session_key_new() {
  arguments_assert(arguments, 0);
  ("A fresh secret key for one calendar session. Whoever holds it is signed in as its person, so it must be unguessable: two random identifiers joined give 244 random bits from the platform's strong randomness, which a Cloudflare Worker, a browser and node all provide.");
  let key = uuid_browser() + uuid_browser();
  return key;
}
