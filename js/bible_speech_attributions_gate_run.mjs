import { arguments_assert } from "./arguments_assert.mjs";
import { bible_speech_attributions } from "./bible_speech_attributions.mjs";
import { ebible_folder_berean } from "./ebible_folder_berean.mjs";
import { bible_speech_unattributed_bible } from "./bible_speech_unattributed_bible.mjs";
import { bible_speech_attribution_hand } from "./bible_speech_attribution_hand.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function bible_speech_attributions_gate_run() {
  "Whether the hand rulings and the parser still describe the same set of quotations - that every ruling answers a quotation the rules really cannot reach, and that every quotation the rules cannot reach has a ruling.";
  "★ THIS IS THE WHOLE REASON THE RULINGS WERE STORED RATHER THAN WRITTEN IN A REPLY, AND IT FAILS IN BOTH DIRECTIONS ON PURPOSE. A ruling with no quotation under it is a row that has gone stale - the instrument improved and now attributes that verse itself, or the translation was re-downloaded and the words moved. A quotation with no ruling is new hand work that arrived without anybody noticing, which is the dangerous one: the cast would simply have no voice for that line and the generation would fall back to the book's default, silently and in the wrong voice.";
  "★ THE SET IS DERIVED RATHER THAN COUNTED, WHICH IS WHY THIS SAYS MORE THAN A NUMBER WOULD. Asserting that there are thirty passes just as happily when one ruling has gone stale and one new miss has appeared, because thirty minus one plus one is thirty. Comparing the two sets by identity catches that; comparing their sizes cannot, and the sizes are what anybody would reach for first.";
  "★ IT PARSES THE WHOLE BIBLE, SO IT IS SLOW AND IS WORTH IT. Nothing smaller answers the question - the misses are wherever they are, and a gate that checked one book would pass while another book quietly grew hand work. Everything it reads is on the local disk, so slow here means seconds rather than a network.";
  arguments_assert(arguments, 0);
  let attributions = bible_speech_attributions();
  let bible_folder = ebible_folder_berean();
  let report = await bible_speech_unattributed_bible(bible_folder);
  let unruled = [];
  function quotation_each(quotation) {
    let speaker = bible_speech_attribution_hand(quotation);
    if (equal(speaker, null)) {
      let unruled_row = {
        chapter_code: quotation.chapter_code,
        verse_number: quotation.verse_number,
        opening: quotation.text.slice(0, 60),
      };
      list_add(unruled, unruled_row);
    }
  }
  each(report.rows, quotation_each);
  let stale = [];
  function attribution_each(attribution) {
    function quotation_match(quotation) {
      let chapter_is = equal(attribution.chapter_code, quotation.chapter_code);
      if (not(chapter_is)) {
        return false;
      }
      let verse_is = equal(attribution.verse_number, quotation.verse_number);
      if (not(verse_is)) {
        return false;
      }
      let is = text_starts_with(quotation.text, attribution.opening);
      return is;
    }
    let found = list_find_or_null(report.rows, quotation_match);
    if (equal(found, null)) {
      list_add(stale, attribution);
    }
  }
  each(attributions, attribution_each);
  let unruled_empty = equal(unruled.length, 0);
  let stale_empty = equal(stale.length, 0);
  let ok = unruled_empty && stale_empty;
  let gate = {
    ok,
    quotations: report.rows.length,
    attributions: attributions.length,
    unruled,
    stale,
  };
  return gate;
}
