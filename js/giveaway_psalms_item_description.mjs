import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_file_kinds } from "./giveaway_file_kinds.mjs";
import { giveaway_file_kind_phrase } from "./giveaway_file_kind_phrase.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is_assert } from "./list_empty_not_is_assert.mjs";
import { list_join_comma_space_and } from "./list_join_comma_space_and.mjs";
import { text_number_ordinal_suffixed } from "./text_number_ordinal_suffixed.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function giveaway_psalms_item_description(item) {
  arguments_assert(arguments, 1);
  ("$plain item");
  ("The paragraph under one box of sung psalms on its download page: which psalm it is, and what is actually inside it.");
  ("★ WHAT THE BOX HOLDS IS COUNTED OFF THE FILES IN IT, NEVER TAKEN FROM A LIST OF WHAT A BOX USUALLY HOLDS. The asking for this sentence carried its own rule, written in brackets - say it if true. Every box is at a different stage: some psalms have been sung five times and never pictured, some have a video and some have nothing but singing. A sentence copied from a template would claim videos for a box of bare audio, and because a description is published the claim would then be out in the world being read by somebody who downloaded the box and found no video.");
  ("★ SO A KIND WITH NOTHING OF IT IN THE BOX IS NOT MENTIONED AT ALL, RATHER THAN MENTIONED WITH A ZERO. Nought AI-generated videos is a true sentence that reads as a broken one, and the reader of a download page is deciding whether to spend bandwidth, not auditing a record.");
  ("★ THE BSB TEXT THE ASKING NAMED IS DELIBERATELY ABSENT FROM THIS SENTENCE, BECAUSE NO BOX OF A PSALM HOLDS ANY BIBLE TEXT TODAY. The translations are given away whole, one box to a translation, because a search needs the whole book and one chapter answers nothing. So a sentence here promising the text of the Bible would send somebody looking inside this box for a file that is in a different box. Whether a psalm's box should also carry that psalm's own text - which would make one download enough to read along with the singing - is a question for the person giving it away, not something this sentence may decide by printing it.");
  ("The kinds are said in the order the repo lists them rather than the order the files happen to come in, so that two boxes read alike and a reader comparing them is not also decoding a new sentence shape each time.");
  ("A box with no files at all stops this rather than producing a sentence that trails off after the word includes. Such a box has no reason to exist, so meeting one means something upstream is wrong and saying so here is cheaper than publishing the evidence.");
  let kinds = giveaway_file_kinds();
  let phrases = [];
  for (let kind of kinds) {
    let count = 0;
    for (let file of item.files) {
      if (equal(file.kind, kind)) {
        count = count + 1;
      }
    }
    if (greater_than(count, 0)) {
      let phrase = giveaway_file_kind_phrase(kind, count);
      list_add(phrases, phrase);
    }
  }
  list_empty_not_is_assert(phrases);
  let holds = list_join_comma_space_and(phrases);
  let ordinal = text_number_ordinal_suffixed(item.chapter);
  let description = text_combine_multiple([
    "The ",
    ordinal,
    " chapter of the book of Psalms in the Bible. Includes ",
    holds,
    ".",
  ]);
  return description;
}
