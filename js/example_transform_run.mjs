import { example_transform_difference_print } from "./example_transform_difference_print.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { example_command_lambda } from "./example_command_lambda.mjs";
import { example_transform_before } from "./example_transform_before.mjs";
import { file_temp } from "./file_temp.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { file_read } from "./file_read.mjs";
import { js_format_trim } from "./js_format_trim.mjs";
export async function example_transform_run(e) {
  let lambda = example_command_lambda(e.fn, e.args, e);
  if (not(lambda)) {
    let r = "skip";
    return r;
  }
  let before = example_transform_before(e.fn, e);
  async function sandbox(p) {
    await file_overwrite(p, before);
    await file_js_transform(p, lambda);
    let r2 = await file_read(p);
    return r2;
  }
  let out = await file_temp(sandbox);
  let got = await js_format_trim(out);
  let want = await js_format_trim(e.after);
  let same_is = equal(got, want);
  if (same_is) {
    let r3 = "pass";
    return r3;
  }
  example_transform_difference_print(e.title, got, want);
  let r4 = "fail";
  return r4;
}
