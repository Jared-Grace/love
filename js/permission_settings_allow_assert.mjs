import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { list_first } from "./list_first.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { permission_allow_generated } from "./permission_allow_generated.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { and } from "./and.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function permission_settings_allow_assert() {
  "QA gate: the allow rules on disk are exactly the ones the JS list generates";
  "compared as two sets rather than two sequences, because the order of an allow list means nothing and sorting it would be a diff nobody asked for";
  "the local settings file beside the shared one is per-machine and outside version control, so it is not read here and nothing generated may reach it";
  let paths = permission_settings_paths();
  let path = list_first(paths);
  let settings = await file_read_json(path);
  let permissions = property_get(settings, "permissions");
  let allow = property_get(permissions, "allow");
  let expected = permission_allow_generated();
  let missing = list_without_multiple(expected, allow);
  let extra = list_without_multiple(allow, expected);
  let counts = {
    on_disk: allow.length,
    generated: expected.length,
    missing: missing.length,
    extra: extra.length,
  };
  let left = list_empty_is(missing);
  let right = list_empty_is(extra);
  let clean = and(left, right);
  if (clean) {
    return counts;
  }
  let json = json_format_to({
    missing,
    extra,
  });
  console.log(json);
  let message = text_combine_multiple([
    "permission settings gate: the allow rules on disk differ from the ones the JS list generates - ",
    missing.length,
    " missing, ",
    extra.length,
    " unaccounted for. A rule is added by naming the function in the JS list and writing the file out again, never by editing the file directly.",
  ]);
  throw new Error(message);
}
