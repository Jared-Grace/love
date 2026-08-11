import { file_name_js } from "./file_name_js.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { text_dot } from "./text_dot.mjs";
import { text_ends_with_not } from "./text_ends_with_not.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
export function file_name_app_chunk_is(file_name, app_name) {
  "$plain file_name";
  "$plain app_name";
  "True when this is one of the extra script files a build cut out of one app - the app's own name with a number in front of it.";
  "A build is free to cut a piece of an app out into a file of its own, and it names that file after the app it came from with a number in front. Nothing writes those names down anywhere, so the only way to know one when you see it is to recognise the shape.";
  "The number is checked rather than skipped over, so a page of an app named for another app - one whose name happens to end in the same word - is not mistaken for a piece of this one.";
  let suffix = text_combine(text_dot(), file_name_js(app_name));
  let other = text_ends_with_not(file_name, suffix);
  if (other) {
    return false;
  }
  let front = text_suffix_without(file_name, suffix);
  let numbered = text_digits_is(front);
  return numbered;
}
