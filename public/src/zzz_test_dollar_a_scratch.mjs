import { promise_catch_ignore } from "../../../love/public/src/promise_catch_ignore.mjs";
export async function zzz_test_dollar_a_scratch(temp_path) {
  let fs = await import("fs");
  $a
  let promise = fs.promises.unlink(temp_path);
  await promise_catch_ignore(promise);
}
