import { arguments_assert } from "./arguments_assert.mjs";
import { permission_auto_pin_path } from "./permission_auto_pin_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { file_read } from "./file_read.mjs";
import { json_from } from "./json_from.mjs";
import { property_get } from "./property_get.mjs";
import { permission_auto_checker_fingerprint } from "./permission_auto_checker_fingerprint.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
export async function permission_auto_pin_assert() {
  "Throws unless the auto check's code is exactly the code a person last pinned. Every way Claude grants itself asks this first, because Claude can edit the check without asking, and a check that had just been weakened would otherwise vouch for whatever it was weakened to let through.";
  arguments_assert(arguments, 0);
  let path = permission_auto_pin_path();
  let pinned_is = await file_exists(path);
  true_is_assert_json(pinned_is, {
    hint: text_combine_multiple([
      "no person has pinned the auto check yet - the human runs: node scripts/r.mjs ",
      fn_name("permission_auto_pin_write"),
    ]),
    path,
  });
  let json = await file_read(path);
  let pin = json_from(json);
  let pinned = property_get(pin, "fingerprint");
  let fingerprint = await permission_auto_checker_fingerprint();
  equal_assert_json(fingerprint, pinned, {
    hint: text_combine_multiple([
      "the auto check's code changed since a person pinned it, so it is not trusted to grant - the human reviews the change and runs: node scripts/r.mjs ",
      fn_name("permission_auto_pin_write"),
    ]),
  });
}
