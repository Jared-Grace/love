import { file_read } from "./file_read.mjs";
import { html_code } from "./html_code.mjs";
import { html_code_is } from "./html_code_is.mjs";
import { html_code_parse } from "./html_code_parse.mjs";
import { html_regenerate_frozen_is } from "./html_regenerate_frozen_is.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function html_regenerate_stable_page(file_path) {
  "$plain file_path";
  "Whether writing this one page out again would settle: parse it, build it, parse that, and ask whether the second answer is the first.";
  "Nothing at all comes back for a page there is no question to ask of - a kept copy from a dated release, a page that was never generated, or one saying by its shape that it was written by hand. Those three are answered the same way because they are the same answer: this page is not one this is about.";
  let frozen = html_regenerate_frozen_is(file_path);
  if (frozen) {
    return null;
  }
  let contents = await file_read(file_path);
  let generated = html_code_is(contents);
  if (not(generated)) {
    return null;
  }
  let parts = html_code_parse(contents);
  let body = property_get(parts, "body");
  let refused = null_is(body);
  if (refused) {
    return null;
  }
  let name = property_get(parts, "name");
  let code = html_code(name, body);
  let parts_again = html_code_parse(code);
  let name_again = property_get(parts_again, "name");
  let body_again = property_get(parts_again, "body");
  let name_same = equal(name_again, name);
  let body_same = equal(body_again, body);
  let settled = name_same;
  if (name_same) {
    settled = body_same;
  }
  let judged = {
    file_path,
    name,
    name_again,
    body_same,
    settled,
  };
  return judged;
}
