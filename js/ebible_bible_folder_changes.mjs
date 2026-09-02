import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { equal } from "./equal.mjs";
import { urdu_glued_words_decided } from "./urdu_glued_words_decided.mjs";
import { property_get } from "./property_get.mjs";
import { object_values_map_list } from "./object_values_map_list.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function ebible_bible_folder_changes(bible_folder) {
  "$plain bible_folder";
  "What this app has altered in one publisher's bible, in words a reader is owed, or nothing at all for a bible carried exactly as it arrived.";
  "The licence on the one bible this repo repairs asks for two things that a credit block alone does not give. It asks that the changes be listed where people can see them, and it asks that the change be indicated in a way making clear the original licensor is not necessarily endorsing it. Both are about the reader in front of the text, not about a file in a repository, so both are answered here where the reader is credited.";
  "A publisher's registered name sits on the card above this. That name was given to travel with their words; the words below it are no longer only theirs. Saying so is what keeps the name honest, and it is the whole reason this cannot be left to a commit message.";
  "The count is derived from the ruling table rather than written down beside it. A number typed into a sentence about a table is a second copy of the table's size, and the two go apart the first time somebody rules on one more word - silently, because a stale number reads exactly like a fresh one.";
  "The link goes to the ruling table itself rather than to a page describing it. The table is the list of changes the licence asks for: every spelling this app alters, its before, and its after, in one file that cannot drift from what actually runs because it is what actually runs.";
  "Every other bible is answered with nothing, which is the truth about them - they are shown exactly as their publishers wrote them, and a change notice on a text nobody changed would be a false statement about somebody else's scripture.";
  arguments_assert(arguments, 1);
  let urdu = ebible_folder_urdu();
  let same = equal(bible_folder, urdu);
  if (not(same)) {
    return null;
  }
  let decided = urdu_glued_words_decided();
  let split = property_get(decided, "split");
  function word_of(spaced, word) {
    return word;
  }
  let words = object_values_map_list(split, word_of);
  let count = list_size(words);
  let changed = list_join_space([
    "This app does not show this translation exactly as its publisher wrote it.",
    "The file it was published in had spaces missing inside",
    count,
    "words, welding two words into one, and this app puts those spaces back before you read them.",
  ]);
  let endorsement = list_join_space([
    "The publisher did not make these changes and does not necessarily endorse them.",
    "The original Work by its copyright holders is available for free at www.biblica.com and open.bible.",
  ]);
  let url = text_combine_multiple([
    "https://github.com/Jared-Grace/love/blob/main/js/",
    fn_name("urdu_glued_words_decided_two"),
    ".mjs",
  ]);
  let r = {
    lines: [changed, endorsement],
    url,
  };
  return r;
}
