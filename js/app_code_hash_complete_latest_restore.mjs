import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_hash_complete_key } from "./app_code_hash_complete_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_code_hash_complete_latest_word } from "./app_code_hash_complete_latest_word.mjs";
import { equal } from "./equal.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_progress_ids_complete_mark } from "./app_code_progress_ids_complete_mark.mjs";
export async function app_code_hash_complete_latest_restore(context, hash) {
  arguments_assert(arguments, 2);
  ("If the link says complete=latest, ask the machine serving this page which lessons latest has, and mark them finished before anything is drawn.");
  ("It asks the serving machine because only that machine holds latest's build; a page cannot read another page's storage, so what the reader finished on latest itself is out of reach and what latest has is the nearest thing. It is awaited before the first drawing, unlike the other link fields, because the answer comes back over the network. On a page with no such machine behind it, the public site, the asking fails and says so.");
  let key = app_code_hash_complete_key();
  let said = property_get_or_null(hash, key);
  let latest = app_code_hash_complete_latest_word();
  let asked = equal(said, latest);
  if (asked) {
    let ids = await app_shared_api({
      f_name: fn_name("app_code_lessons_latest_ids"),
      args: [],
    });
    app_code_progress_ids_complete_mark(context, ids);
  }
}
