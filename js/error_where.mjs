import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { list_first } from "./list_first.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
export function error_where(e) {
  "Where a thrown thing came from, said in one line - the first place along its trail that names a file of code.";
  "The sibling of the reader that takes an error's words. Words say what went wrong and this says where, and the second one is the whole answer for a failure whose words name a thing rather than a place. A name that is not defined is exactly that shape: the words are the name, and every file that reads it says the same three words, so the words alone cannot pick out which file lost the line that brings it in.";
  "Measured 2026-08-03: the normalize pipeline reported a step failing on a name that was not defined, and the step it named had nothing to do with the broken file - it was simply the first step whose work happened to reach it. Three commands were spent finding the file. The trail had it on its first line the whole time.";
  "The trail's own lines that name no file are dropped, because those are the runtime's own machinery and a reader arriving here wants the code that was written here.";
  "Nothing here reads a file or asks anything else a question. A reader arrives because something has already gone wrong, so this is the last place that should be able to fail on its own account.";
  let trail = property_get_or_null(e, "stack");
  let told = null_not_is(trail);
  if (not(told)) {
    let r = "nothing was thrown that could say where it came from";
    return r;
  }
  let lines = text_lines_working(trail);
  let named = list_filter_text_includes(lines, ".mjs");
  let none = list_empty_is(named);
  if (none) {
    let r2 = "the trail names no file of code";
    return r2;
  }
  let first = list_first(named);
  return first;
}
