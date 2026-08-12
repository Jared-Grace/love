import { arguments_assert } from "./arguments_assert.mjs";
import { text_occurrences_count } from "./text_occurrences_count.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { text_replace } from "./text_replace.mjs";
export function text_replace_once(t, from, to) {
  "Puts one run of text in place of another, having first made sure the run being replaced appears exactly once";
  "The plain replacing next door puts the new text everywhere the old one appears, and says nothing about how many places that was. Two of the ways that goes wrong are quiet. A run that appears nowhere - a letter mistyped, or text that has already been changed once - replaces nothing and hands back the text unaltered, so the file is written again with what it already held and every check downstream passes. A run that appears in more places than the caller had in mind changes all of them, and the extra changes sit in parts of the file nobody was looking at.";
  "Asking for exactly one is what makes a replacement provable rather than hoped for. Where more than one place really is meant, that is a different question with a different answer - count them first, and say the number out loud.";
  "This is the same promise the editing tool makes, which is why it can stand in for it: name a run of text unique enough to identify the one place, and either that place changes or nothing does and you are told why.";
  arguments_assert(arguments, 3);
  let count = text_occurrences_count(t, from);
  equal_assert_json(count, 1, {
    from,
    count,
    hint: "a replacement of one place asks for text that appears exactly once. None at all usually means the text has already been changed, or a character differs - a stray space, a different kind of quote. More than one means the text is not yet unique, and taking in a little more of the line around it is usually enough to tell the places apart",
  });
  let replaced = text_replace(t, from, to);
  return replaced;
}
