import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { object_copy } from "./object_copy.mjs";
import { object_merge } from "./object_merge.mjs";
import { list_add } from "./list_add.mjs";
export async function catch_error_text_collect_async(
  failed,
  described,
  lambda,
) {
  "Runs one piece of a long sweep, and if it breaks writes down which piece it was and what it said, onto a list the sweep raises at the end.";
  "THE POINT IS THAT THE ONES BEHIND IT ARE STILL REACHED. A sweep that stops at its first odd item costs its whole running time and buys one name, so the way to learn what else is wrong is to fix that one and pay the whole cost again. Failing alone turns however many runs into one: the list at the end is the whole queue.";
  "Nothing is swallowed. What went wrong is only held until saying it costs nothing - the sweep asks whether the list is empty when it is done, and raises everything on it.";
  "WHICH PIECE IT WAS IS PASSED IN RATHER THAN GUESSED AT, because only the caller knows what names its pieces - a bible folder here, a page there. It is copied before the reason is written beside it, so a caller handing over an object it is still using does not find a stranger's word added to it.";
  let said = await catch_error_text_or_null_async(lambda);
  let broke = null_not_is(said);
  if (broke) {
    let entry = object_copy(described);
    object_merge(entry, {
      said,
    });
    list_add(failed, entry);
  }
}
