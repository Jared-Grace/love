import { arguments_assert } from "./arguments_assert.mjs";
import { error_readable } from "./error_readable.mjs";
import { json_from_try } from "./json_from_try.mjs";
import { catch_null } from "./catch_null.mjs";
export function error_json_object_or_null(e) {
  "$plain e";
  "The record a failure was described by, read back out of the failure itself - or nothing at all where the failure was not described by one.";
  "A failure raised from a record keeps its words by writing the record down as the failure's own words, so reading them back is reading that writing again. Everything else that goes wrong says something that was never a record, and that is the whole of the test - the reading either comes back with one or it does not, and nothing has to be told in advance which kind of failure it is holding.";
  arguments_assert(arguments, 1);
  let words = error_readable(e);
  function get() {
    let o = json_from_try(words);
    return o;
  }
  let parsed = catch_null(get);
  return parsed;
}
