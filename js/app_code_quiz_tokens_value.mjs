import { catch_null } from "./catch_null.mjs";
import { list_join } from "./list_join.mjs";
export function app_code_quiz_tokens_value(token_list) {
  "What a row of tiles comes out as when it is run as a line - 11, -, 3 comes out as 8. Nothing rather than a value when the row is not a line at all, which most rearrangements of a row of tiles are not.";
  "Asked of every rearrangement of an unscramble, so failing has to be as ordinary as succeeding. A row that will not read is not a mistake anybody made; it is the usual answer, and the asking is what tells the few that read from the many that do not.";
  function run() {
    let source = list_join(token_list, " ");
    let value = eval(source);
    return value;
  }
  let r = catch_null(run);
  return r;
}
