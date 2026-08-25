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
  "A page there is no question to ask of comes back saying so, and saying WHICH of the reasons it was: a kept copy from a dated release, a page that was never generated, or one whose body cannot be found in the shape a generated page has. It used to come back as nothing at all, on the reasoning that all three mean the same thing - this page is not one this is about.";
  "That reasoning was wrong, and wrong in the one direction that matters. A page walked past silently is indistinguishable from a page that passed, so the count of pages the check covers drifts down as pages go out of shape and nothing anywhere says so. Measured 2026-08-24: fourteen of sixty-four were being walked past, ten of them built copies two weeks old, and the check reported a clean pass over the fifty it could still read.";
  "The reason is named rather than merely counted, because the three want different things done about them. A dated copy is meant to be walked past for good. A page never generated is not this system's business. A body that cannot be found is a page that has fallen behind what building one produces now, and that one is the only one anybody can act on.";
  let frozen = html_regenerate_frozen_is(file_path);
  if (frozen) {
    let kept = {
      file_path,
      settled: null,
      skipped: "frozen",
    };
    return kept;
  }
  let contents = await file_read(file_path);
  let generated = html_code_is(contents);
  if (not(generated)) {
    let unwritten = {
      file_path,
      settled: null,
      skipped: "not_generated",
    };
    return unwritten;
  }
  let parts = html_code_parse(contents);
  let body = property_get(parts, "body");
  let unfound = null_is(body);
  if (unfound) {
    let refused = {
      file_path,
      settled: null,
      skipped: "refused",
    };
    return refused;
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
    skipped: null,
  };
  return judged;
}
