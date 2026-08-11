import { text_letters_is } from "./text_letters_is.mjs";
import { text_capitals_apart_is } from "./text_capitals_apart_is.mjs";
import { text_capitals_underscore_lower } from "./text_capitals_underscore_lower.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_is } from "./text_lower_is.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { not } from "./not.mjs";
export function function_nested_lift_name_or_null(f_name, nested) {
  arguments_assert(arguments, 2);
  ("The name a function written inside another one should stand under once it is moved out, worked out from the two names it already has, and nothing at all when those two names cannot say it.");
  ("The name of the thing that holds it, then the name it already answers to. That is the rule this repo states for a wrapper - a name is its parts joined - and it is the whole choice, so the choice does not have to be made one cut at a time by somebody who has just read the file.");
  ("Joining the holder in is what keeps it a name. Three separate lessons each keep a piece inside them called the same short word, so the short word on its own would name three different functions, and the second one written would land on top of the first.");
  ("A word with a capital letter in it is turned over into this repo's spelling first, when the capitals are able to say where the parts are. A capital stands at the start of a part, so it becomes an underscore and a small letter, and a word somebody wrote elsewhere becomes a word of this repo by a rule rather than by anybody deciding anything.");
  ("Two things stop that turning, and each one hands the piece back for a person to name. A word carrying anything that is not a letter, because the parts are then marked by something other than capitals and this rule cannot see them. And a word with two capitals side by side, because those letters are one short word between them and the rule would pull it apart into a letter each.");
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
  let f_name_new = text_combine_3(f_name, "_", nested_named);
  return f_name_new;
}
