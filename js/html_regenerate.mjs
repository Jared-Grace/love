import { file_read } from "./file_read.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { html_code } from "./html_code.mjs";
import { html_code_is } from "./html_code_is.mjs";
import { html_code_parse } from "./html_code_parse.mjs";
import { property_get } from "./property_get.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { html_regenerate_frozen_is } from "./html_regenerate_frozen_is.mjs";
export async function html_regenerate(file_path) {
  let frozen = html_regenerate_frozen_is(file_path);
  false_is_assert_json(frozen, {
    hint: "this page belongs to a frozen app (its prod copy must not change and it has its own build) — regenerate a different page, or take it off apps_frozen() first",
    file_path,
  });
  let contents = await file_read(file_path);
  let generated = html_code_is(contents);
  true_is_assert_json(generated, {
    hint: "only pages written by html_code can be regenerated — is this one hand-written, and would you rather edit it directly?",
    file_path,
  });
  let parts = html_code_parse(contents);
  let name = property_get(parts, "name");
  let body = property_get(parts, "body");
  let code = html_code(name, body);
  await file_overwrite(file_path, code);
  return file_path;
}
