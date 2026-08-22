import { arguments_assert } from "./arguments_assert.mjs";
import { catch_null } from "./catch_null.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
export function js_flo_body_or_null(ast) {
  "The statements of a file's exported function, or nothing at all where the file has no such function to read.";
  "A READING THAT SWEEPS THE HISTORY MEETS FILES THIS REPO WOULD NEVER WRITE TODAY - a file exporting a value rather than a function, or one written before the one-function-per-file rule was kept - and it wants the same thing from each of them: leave this one out and go on. Refusing instead would end a sweep of hundreds on the first old file it reached.";
  arguments_assert(arguments, 1);
  function read_lambda() {
    let body = js_flo_body(ast);
    return body;
  }
  let found = catch_null(read_lambda);
  return found;
}
