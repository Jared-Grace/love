import { arguments_assert } from "./arguments_assert.mjs";
import { text_ordinals_urdu } from "./text_ordinals_urdu.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split } from "./text_split.mjs";
import { equal } from "./equal.mjs";
import { text_words_punctuation_split } from "./text_words_punctuation_split.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { not } from "./not.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { each_index } from "./each_index.mjs";
import { gloss_passages_entries_collect_generic } from "./gloss_passages_entries_collect_generic.mjs";
export function gloss_passages_occurrence_claims_urdu(
  passages,
  text_index,
  word_keys_read,
) {
  "Every place an Urdu chapter tells a reader which time over one of its English words has come, with the number the sentence names and the number the chapter's own words give.";
  "$plain text_index";
  "the index says which of a passage's texts is the wording being explained, and it names a place in a list rather than anything that runs.";
  "THIS IS THE COMMONEST CLAIM THE URDU STORE MAKES AND NOTHING HAS EVER CHECKED IT. Four thousand six hundred and seventy-one sentences say a quoted English word has come for such-and-such a time in this chapter, measured on 2026-10-20, and every one of them is a plain matter of counting: the chapter holds its own words in order, so the count can be taken again. A wrong one teaches a student to count wrong.";
  "WHAT IS LOOKED FOR IS THE NARROWEST SENTENCE THAT CAN BE SETTLED, AND IT IS BUILT FROM THE WORD BEING EXPLAINED RATHER THAN SEARCHED FOR LOOSELY. The quoted word, then the chapter phrase, then one word, then the word for time over. A sentence that says the same thing about a Hebrew root, about a shape of parsing, or about a word of the original quoted in its own letters, is talking about something this reading cannot count, and none of those puts the English word in quotes in front of the phrase - so they are left alone by the shape of the thing looked for rather than by a list of exceptions.";
  "THE COUNT IS KEPT AS THE WALK GOES, SO IT DEPENDS ON THE WALK BEING IN CHAPTER ORDER. The reading beside this hands the explanations over passage by passage and word by word, in the order the chapter was written, which is the order a count has to be taken in. A tally raised one explanation at a time is therefore the count through this explanation and including it - which is exactly what the sentence claims.";
  "BOTH WAYS OF COUNTING ARE CARRIED, BECAUSE WHICH ONE IS RIGHT IS NOT THIS READING'S TO SETTLE. A chapter opening a sentence writes And and closing one writes and, and whether those are the same word is a question about what the store is teaching, not about arithmetic. So the count is taken twice, once on the spelling as written and once with the capitals folded away, and whoever reads these findings decides. A claim that agrees with neither count is wrong under either rule and needs nobody's decision.";
  "A SPELLING THE TABLE DOES NOT HOLD COMES BACK AS NOTHING RATHER THAN AS A WRONG NUMBER. The same slot carries ordinary counting words - once, twice, several times - and those are a different claim, about how often the word comes in the whole chapter rather than about which time this is. The claim is still handed over, with nothing where its number would be, so it can be counted and looked at instead of disappearing.";
  "Two shapes are known to be missed and are written down rather than left to be discovered. A word carrying its own apostrophe - there is one in the whole store - cannot be quoted the way this reading quotes it. And a handful of sentences put the quoted word after the chapter phrase instead of before it, which is the counting claim rather than this one.";
  arguments_assert(arguments, 3);
  let ordinals = text_ordinals_urdu();
  let times_word = "بار";
  let exact_counts = {};
  let folded_counts = {};
  function entry_claims(context) {
    let verses_key = property_get(context, "verses_key");
    let word = property_get(context, "word");
    let explain = property_get(context, "explain");
    let at = property_get(context, "at");
    let folded = text_lower_to(word);
    property_count_add(exact_counts, word, 1);
    property_count_add(folded_counts, folded, 1);
    let expected_exact = property_get(exact_counts, word);
    let expected_folded = property_get(folded_counts, folded);
    let needle = text_combine_multiple(["'", word, "' اِس قِصّے میں "]);
    let parts = text_split(explain, needle);
    let claims = [];
    function part_read(part, index) {
      let opening = equal(index, 0);
      if (opening) {
        return;
      }
      let tokens = text_words_punctuation_split(part);
      let spelled = list_get_or_null(tokens, 0);
      let behind = list_get_or_null(tokens, 1);
      let counting = equal(behind, times_word);
      if (not(counting)) {
        return;
      }
      let claimed = property_or_null(ordinals, spelled);
      let claim = {
        verses_key,
        word,
        at,
        spelled,
        claimed,
        expected_exact,
        expected_folded,
        explain,
      };
      list_add(claims, claim);
    }
    each_index(parts, part_read);
    return claims;
  }
  let found = gloss_passages_entries_collect_generic(
    passages,
    text_index,
    word_keys_read,
    entry_claims,
  );
  return found;
}
