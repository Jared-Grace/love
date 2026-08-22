import { text_combine } from "./text_combine.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { js_name_lambda_is } from "./js_name_lambda_is.mjs";
import { text_letters_is } from "./text_letters_is.mjs";
import { text_capitals_apart_is } from "./text_capitals_apart_is.mjs";
import { text_capitals_underscore_lower } from "./text_capitals_underscore_lower.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { not } from "./not.mjs";
export function function_part_name_or_null(f_name, nested) {
  arguments_assert(arguments, 2);
  ("The name a function written inside another one should stand under once it is moved out, worked out from the two names it already has, and nothing at all when those two names cannot say it.");
  ("The name of the thing that holds it, then the name it already answers to. That is the rule this repo states for a wrapper - a name is its parts joined - and it is the whole choice, so the choice does not have to be made one cut at a time by somebody who has just read the file.");
  ("Joining the holder in is what keeps it a name. Three separate lessons each keep a piece inside them called the same short word, so the short word on its own would name three different functions, and the second one written would land on top of the first.");
  ("A word with a capital letter in it is turned over into this repo's spelling first, when the capitals are able to say where the parts are. A capital stands at the start of a part, so it becomes an underscore and a small letter, and a word somebody wrote elsewhere becomes a word of this repo by a rule rather than by anybody deciding anything.");
  ("Two things stop that turning, and each one hands the piece back for a person to name. A word carrying anything that is not a letter, because the parts are then marked by something other than capitals and this rule cannot see them. And a word with two capitals side by side, because those letters are one short word between them and the rule would pull it apart into a letter each.");
  ("A third thing stops it, and it stops it before anything else is looked at. A name a pass handed out to a function written without one says nothing about what the function does, and the number on the end is only which one it was in the file that day - move a piece out from above it and the same function is called something else. Joined to the holder's name it would read as a name somebody chose, and it would be the one name in the repo that no search for what a function does could ever reach. So that piece is handed back for a person to name, exactly as the two below are.");
  ("A fourth thing stops the joining, and it does not hand the piece back - it simply leaves the name alone. Somebody writing a piece inside a long function often spells the holder's whole name into it, and joining the holder in again would then say it twice. Three of those were written in one sitting before anybody noticed, each one longer than the line it stood on and each one renamed by hand afterwards, and nothing anywhere went red.");
  let handed_is = js_name_lambda_is(nested);
  if (handed_is) {
    return null;
  }
  let nested_named = nested;
  let lower_is = text_lower_is(nested);
  if (not(lower_is)) {
    let letters_is = text_letters_is(nested);
    if (not(letters_is)) {
      return null;
    }
    let apart_is = text_capitals_apart_is(nested);
    if (not(apart_is)) {
      return null;
    }
    nested_named = text_capitals_underscore_lower(nested);
  }
  let held = text_combine(f_name, "_");
  let carried_is = text_starts_with(nested_named, held);
  if (carried_is) {
    return nested_named;
  }
  let f_name_new = text_combine_3(f_name, "_", nested_named);
  return f_name_new;
}
