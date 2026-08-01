import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_map } from "./list_map.mjs";
import { add } from "./add.mjs";
export function function_params_declared(fn) {
  arguments_assert(arguments, 1);
  ("The names of the parameters a live function declares, read off its own source");
  ("text. A count alone says a call was short without saying short of what, which");
  ("leaves the reader to open the file - so the names are what turn a refusal into");
  ("the end of the question rather than the start of a lookup.");
  ("Asked only where a call is already being refused, so the cost of reading a");
  ("function's source sits on the failing path and never on the working one.");
  ("Every function here declares plain names - no default, no destructuring, no");
  ("rest - so the first bracket pair is the whole parameter list.");
  ("A signature written over several lines carries a comma after its last name, and");
  ("splitting on commas turns that into a fourth parameter with no name at all. The");
  ("blanks are dropped rather than counted, so a three-name signature says three");
  ("however it happens to be laid out.");
  let source = fn.toString();
  let open = source.indexOf("(");
  let close = source.indexOf(")", open);
  let past = add(open, 1);
  let inner = source.slice(past, close);
  let trimmed = text_trim(inner);
  let empty = text_empty_is(trimmed);
  if (empty) {
    let none = [];
    return none;
  }
  let parts = text_split_comma(trimmed);
  let names = list_map(parts, text_trim);
  function named_is(name) {
    let b = text_empty_not_is(name);
    return b;
  }
  let declared = list_filter(names, named_is);
  return declared;
}
