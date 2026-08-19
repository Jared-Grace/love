import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { list_take } from "./list_take.mjs";
import { list_add } from "./list_add.mjs";
import { list_tally } from "./list_tally.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapters_affix_letters_wrong } from "./gloss_chapters_affix_letters_wrong.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_list_size } from "./property_list_size.mjs";
export async function app_ceb_bible_gloss_affix_letters_wrong_count() {
  "How many Cebuano explanations across the whole store quote letters for a piece of their word which the dictionary gives no piece of that kind holding, and how many chapters they are spread over.";
  "This counts the faults the check on kind names cannot see. That one passes any word the dictionary does build with a piece of the kind named, however wrong the letters quoted for it are, so its number is a floor and not a total. Read the two together or neither says anything.";
  "The number of words consulted comes back beside it, because two counts taken from the same store only compare when the dictionary behind them was the same size both times.";
  "The findings themselves are not carried back, save a handful of the ones standing apart. A count is what the question was, and whoever wants to read the prose asks a single chapter for it. Those few come back because a number nobody has seen an instance of cannot be trusted - a check reporting a hundred faults is as likely to be miscounting as to be right, and one look at what it caught settles which.";
  "How the disagreeing letters stand to one another is counted beside the total, and it is the reading that decides what to do. Letters sitting inside the dictionary's are a disagreement about where a word ends and its piece begins, which tells a reader nothing false; letters apart from them were got from nowhere. One number covering both would send a repair after prose that is already true.";
  let known = await binisaya_words_known();
  let list = object_property_names(known);
  let consulted = list_size(list);
  let offenders = await gloss_chapters_affix_letters_wrong(
    app_ceb_bible_gloss_generate,
    known,
  );
  let chapters = list_size(offenders);
  function chapter_count(chapter) {
    let size = property_list_size(chapter, "found");
    return size;
  }
  let count = list_map_sum(offenders, chapter_count);
  let relations = [];
  let standing = [];
  function chapter_read(chapter) {
    let found = property_get(chapter, "found");
    function finding_read(finding) {
      let said = property_get(finding, "said");
      let word = property_get(finding, "word");
      function claim_read(claim) {
        let relation = property_get(claim, "relation");
        list_add(relations, relation);
        let standing_apart = equal(relation, "apart");
        if (standing_apart) {
          let sighting = {
            chapter_code: property_get(chapter, "chapter_code"),
            word,
            root: property_get(finding, "root"),
            affixes: property_get(finding, "affixes"),
            kind: property_get(claim, "kind"),
            quoted: property_get(claim, "quoted"),
            given: property_get(claim, "given"),
          };
          list_add(standing, sighting);
        }
      }
      each(said, claim_read);
    }
    each(found, finding_read);
  }
  each(offenders, chapter_read);
  let by_relation = list_tally(relations);
  let apart = list_take(standing, 8);
  let r = {
    consulted,
    chapters,
    count,
    by_relation,
    apart,
  };
  return r;
}
