import { each_async } from "./each_async.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists_assert } from "./function_exists_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { function_exists_not_assert } from "./function_exists_not_assert.mjs";
import { function_read } from "./function_read.mjs";
import { function_functionize } from "./function_functionize.mjs";
import { js_codes_function_work_same_discarding_is } from "./js_codes_function_work_same_discarding_is.mjs";
import { not } from "./not.mjs";
import { function_source_overwrite } from "./function_source_overwrite.mjs";
import { function_delete } from "./function_delete.mjs";
import { function_identifier_replace } from "./function_identifier_replace.mjs";
import { function_auto_checked } from "./function_auto_checked.mjs";
export async function function_span_call_existing(
  f_name,
  address_from,
  address_to,
  f_name_call,
) {
  "$plain f_name";
  "$plain address_from";
  "$plain address_to";
  "$plain f_name_call";
  arguments_assert(arguments, 4);
  ("Points a run of lines inside one function at a function that already writes those lines out, leaving the run as a call to it, and puts everything back untouched if the two are not the same work.");
  ("The repo could already cut a run out into a new function and could already retire one whole function in favour of another, and neither of those is this. A run of lines duplicating a function that exists is the commonest way a duplicate is born - somebody wrote the lines rather than finding the name - and until now the only way back was to cut the run out under a new name and then retire that name, which leaves the scratch name standing as an alias forever. The refusal the cutter prints asks this very question and cannot act on it.");
  ("It is decided by cutting first and reading afterwards, for the same reason the cutter next door gives: whether a run really is the same work as a named function cannot be told from the two lines addressing it. What can be told is whether the piece that came out matches, and that is a whole function held against a whole function.");
  ("The checks the named function makes are counted as no difference. A run living inside a longer function was checked once at the top of that function and never again, so the piece that comes out carries no checks and would differ from every function worth calling. A check cannot change what comes back, so allowing it cannot change what the holder does. A value the run never kept is no difference either, in that one direction only.");
  ("The scratch name is made from the holder's own name and is refused if anything already answers to it, so no existing function can be written over; it is taken away again whichever way the reading goes. What is left behind is the call and nothing else - no alias, no second name for work that already had one.");
  ("Put back from the text rather than by cutting backwards, so not one character of the holder differs when the answer is no.");
  await each_async([f_name, f_name_call], function_exists_assert);
  let f_name_new = text_combine(f_name, "_span_scratch");
  await function_exists_not_assert(f_name_new);
  let before = await function_read(f_name);
  await function_functionize(f_name, address_from, address_to, f_name_new);
  let cut = await function_read(f_name_new);
  let existing = await function_read(f_name_call);
  let same = js_codes_function_work_same_discarding_is(cut, existing);
  let different = not(same);
  if (different) {
    await function_source_overwrite(f_name, before);
    await function_delete(f_name_new);
    let undone = {
      f_name,
      f_name_call,
      called_is: false,
      why: "the run came out as a function that does different work from the one it was to be pointed at, so nothing was changed. Would you like to look at the piece the two addresses actually cut, or name a different function for it to call?",
      cut,
    };
    return undone;
  }
  await function_identifier_replace(f_name, f_name_new, f_name_call);
  await function_auto_checked(f_name);
  await function_delete(f_name_new);
  let called = {
    f_name,
    f_name_call,
    called_is: true,
  };
  return called;
}
