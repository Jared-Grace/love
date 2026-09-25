import { arguments_assert } from "./arguments_assert.mjs";
import { list_slice_count } from "./list_slice_count.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_join } from "./list_join.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { each_range_from } from "./each_range_from.mjs";
export function text_tokens_number_run_or_null(
  tokens,
  index,
  longest,
  written_numbers,
) {
  "The number written at one place in a sentence, with how many words it took to write it, or nothing if no number starts there.";
  "$plain tokens";
  "$plain written_numbers";
  "A NUMBER DOES NOT ALWAYS FIT IN ONE WORD, AND A READING THAT LOOKS AT ONE WORD AT A TIME CAN ONLY EVER FIND THE ONES THAT DO. English writes every number up to ninety-nine as a single word, hyphen and all, and then writes one hundred and seven as three. So a sentence naming a bigger number was passed over in silence, and silence is the same word this reading uses for a sentence that named nothing.";
  "IT IS HANDED THE SPELLINGS IT IS LOOKING FOR RATHER THAN WORKING THEM OUT. Whoever asks already knows which numbers could honestly be meant - the verses a chapter has, the pages a book has - and spells each one forward with the speller its language already owns. Working backward from the words instead would want a second table saying what the first one says, free from that day on to come to disagree with it, and it would also let a sentence name a number that does not exist in the thing being read.";
  "The longest writing that fits is the one taken. One hundred and two has to come back as one hundred and then two where both are wanted, and as one hundred and two where that is wanted instead, and trying the short one first would settle it the wrong way round every time.";
  "Every length is tried rather than stopping at the first that fits, and each one that fits overwrites the last, which leaves the longest. Trying them the other way round would want a way to stop early, and there is none here that does not cost more to read than it saves.";
  "A run reaching past the end of the sentence is not one. Asking for more words than are left hands back fewer, and fewer words spell a different number or none at all, so the length is checked against what came back.";
  arguments_assert(arguments, 4);
  let found = null;
  function size_try(size) {
    let run = list_slice_count(tokens, index, size);
    let run_size = list_size(run);
    let whole = equal(run_size, size);
    if (not(whole)) {
      return;
    }
    let joined = list_join(run, " ");
    let number = property_get_or_null(written_numbers, joined);
    if (null_is(number)) {
      return;
    }
    found = {
      number,
      size,
    };
  }
  each_range_from(1, longest, size_try);
  return found;
}
