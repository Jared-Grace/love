import { example_command_tokens } from "./example_command_tokens.mjs";
import { example_command_lambda } from "./example_command_lambda.mjs";
import { example_transform_before } from "./example_transform_before.mjs";
import { file_temp } from "./file_temp.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { file_read } from "./file_read.mjs";
import { js_format_trim } from "./js_format_trim.mjs";
export async function example_transform_run(e) {
  let t = example_command_tokens(e.command);
  let lambda = example_command_lambda(t);
  if (!lambda) {
    return "skip";
  }
  let before = example_transform_before(t, e);
  async function sandbox(p) {
    await file_overwrite(p, before);
    await file_js_transform(p, lambda);
    return await file_read(p);
  }
  let out = await file_temp(sandbox);
  let got = await js_format_trim(out);
  let want = await js_format_trim(e.after);
  return got === want ? "pass" : "fail";
}
