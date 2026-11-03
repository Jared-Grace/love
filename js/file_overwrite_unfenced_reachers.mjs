import { arguments_assert } from "./arguments_assert.mjs";
import { file_overwrite_unfenced_callers_extra } from "./file_overwrite_unfenced_callers_extra.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { functions_callers_closure } from "./functions_callers_closure.mjs";
export async function file_overwrite_unfenced_reachers() {
  "Every function that can reach the writer that refuses no path without going through one of the two callers built for it. Normally none, so a grant check asked about every standing grant pays for one search and no walk.";
  "The walk starts from the extra callers and never from the writer itself, because every ordinary file write reaches it through the fenced caller and that road is the safe one.";
  arguments_assert(arguments, 0);
  let extra = await file_overwrite_unfenced_callers_extra();
  let none = list_empty_is(extra);
  if (none) {
    let empty = [];
    return empty;
  }
  let extra_comma = list_join_comma(extra);
  let reachers = await functions_callers_closure(extra_comma);
  return reachers;
}
