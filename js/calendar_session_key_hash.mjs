import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_session_key_hash(key) {
  arguments_assert(arguments, 1);
  ("The SHA-256 of a session key, as hex: what the sessions table stores in place of the key, so a copy of the database signs nobody in.");
  ("Web Crypto rather than node's own, because this runs inside a Cloudflare Worker, where crypto.subtle is the one that is always there.");
  let data = new TextEncoder().encode(key);
  let digest = await crypto.subtle.digest("SHA-256", data);
  function lambda(b) {
    let r = b.toString(16).padStart(2, "0");
    return r;
  }
  let hex = Array.from(new Uint8Array(digest), lambda).join("");
  return hex;
}
