import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function firebase_id_token_keys() {
  arguments_assert(arguments, 0);
  ("Google's published public keys that sign Firebase sign-in tickets, as a list of JWKs for ",
    fn_name("firebase_id_token_verify"),
    ". Google rotates them; asking each time a ticket is checked means a rotation never strands a sign-in.");
  let answer = await fetch(
    "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com",
  );
  let read = await answer.json();
  let r = read.keys;
  return r;
}
