import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_language_codes } from "./app_shared_language_codes.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
export function app_shared_language_code_app(app_name) {
  "$plain app_name";
  arguments_assert(arguments, 1);
  ("Which language an app speaks to its reader in, asked by the app's short name.");
  ("The same answer the app itself says out loud as it starts, asked here from outside it. A page is built before any of the app is running, so anything written into that page - the notice a failed boot puts in front of a person - has no running app to ask and has to be told while it is being written.");
  ("English for every app that is not named here, which is what all of them did before any of this existed.");
  let codes = app_shared_language_codes();
  let found = property_or_null(codes, app_name);
  let missing = null_is(found);
  if (missing) {
    let en = ebible_language_en_code();
    return en;
  }
  return found;
}
