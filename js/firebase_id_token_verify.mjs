import { json_from } from "./json_from.mjs";
import { not_equal } from "./not_equal.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function firebase_id_token_verify(
  token,
  project_id,
  jwks,
  now_seconds,
) {
  arguments_assert(arguments, 4);
  ("Checks a Firebase sign-in ticket (ID token) the way Firebase's own docs require, and answers its claims, or null if any check fails: RS256, signed by one of Google's published keys (jwks, the keys list from firebase_id_token_keys), for this project (aud and iss), not expired, not issued in the future, with a subject. No secret is involved — only Google's public keys.");
  ("Allows 5 minutes of clock difference on the issue time, never on expiry.");
  let parts = String(token).split(".");
  if (not_equal(parts.length, 3)) {
    return null;
  }
  let decode = function lambda(part) {
    let text = part.replace(/-/g, "+").replace(/_/g, "/");
    let remainder = modulo(text.length + 3, 4);
    let padded = text + "===".slice(remainder);
    let binary = atob(padded);
    function lambda2(c) {
      let r = c.charCodeAt(0);
      return r;
    }
    let bytes = Uint8Array.from(binary, lambda2);
    return bytes;
  };
  let header = null;
  let claims = null;
  let signature = null;
  try {
    let v = decode(parts[0]);
    let json = new TextDecoder().decode(v);
    header = json_from(json);
    let v2 = decode(parts[1]);
    let json2 = new TextDecoder().decode(v2);
    claims = json_from(json2);
    signature = decode(parts[2]);
  } catch {
    return null;
  }
  if (not_equal(header.alg, "RS256")) {
    return null;
  }
  function lambda3(k) {
    let eq = equal(k.kid, header.kid);
    return eq;
  }
  let jwk = jwks.find(lambda3);
  if (equal(jwk, undefined)) {
    return null;
  }
  let key = await crypto.subtle.importKey(
    "jwk",
    {
      kty: jwk.kty,
      n: jwk.n,
      e: jwk.e,
      alg: "RS256",
      ext: true,
    },
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false,
    ["verify"],
  );
  let signed = new TextEncoder().encode(parts[0] + "." + parts[1]);
  let good = await crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    key,
    signature,
    signed,
  );
  if (not(good)) {
    return null;
  }
  let skew = 300;
  let fine =
    equal(claims.aud, project_id) &&
    equal(claims.iss, "https://securetoken.google.com/" + project_id) &&
    equal(typeof claims.sub, "string") &&
    not_equal(claims.sub, "") &&
    equal(typeof claims.exp, "number") &&
    greater_than(claims.exp, now_seconds) &&
    equal(typeof claims.iat, "number") &&
    less_than_equal(claims.iat, now_seconds + skew) &&
    (equal(claims.auth_time, undefined) ||
      less_than_equal(claims.auth_time, now_seconds + skew));
  if (not(fine)) {
    return null;
  }
  return claims;
}
