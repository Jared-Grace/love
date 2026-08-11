export function function_nested_lift_name_or_null(f_name, nested) {
  arguments_assert(arguments, 2);
  ("The name a function written inside another one should stand under once it is moved out, worked out from the two names it already has, and nothing at all when those two names cannot say it.");
  ("The name of the thing that holds it, then the name it already answers to. That is the rule this repo states for a wrapper - a name is its parts joined - and it is the whole choice, so the choice does not have to be made one cut at a time by somebody who has just read the file.");
  ("Joining the holder in is what keeps it a name. Three separate lessons each keep a piece inside them called the same short word, so the short word on its own would name three different functions, and the second one written would land on top of the first.");
  ("A word with a capital letter in it is refused rather than joined. Every name here is written in small letters, so a piece wearing a capital is one somebody wrote in another spelling, and turning it into a name of this repo means choosing new words for it - which is a reading, not a joining, and belongs to whoever does the reading.");
  let lower_is = text_lower_is(nested);
  if (not(lower_is)) {
    return null;
  }
  let f_name_new = text_combine_3(f_name, "_", nested);
  return f_name_new;
}
