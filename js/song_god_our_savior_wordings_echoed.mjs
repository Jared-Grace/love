import { arguments_assert } from "./arguments_assert.mjs";
import { song_god_our_savior_wordings } from "./song_god_our_savior_wordings.mjs";
import { property_get } from "./property_get.mjs";
import { song_god_our_savior_reference_lines } from "./song_god_our_savior_reference_lines.mjs";
import { text_words_content_echo } from "./text_words_content_echo.mjs";
import { numbers_larger } from "./numbers_larger.mjs";
import { text_words_content_echo_stemmed } from "./text_words_content_echo_stemmed.mjs";
import { list_map } from "./list_map.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
export async function song_god_our_savior_wordings_echoed() {
  arguments_assert(arguments, 0);
  ("Every passage this song rests on, each against the wordings really on offer for it, and each wording against how much of the sung lines resting there it says the same way - counted twice, once with the endings of words left on and once with them folded off, loudest first.");
  ("THIS IS THE READING THAT CHOSE THE TWENTY TWO TRANSLATIONS THE PAGE QUOTES, AND UNTIL NOW IT WAS NOT WRITTEN DOWN ANYWHERE. The passages and the wordings were gathered next door and committed; the counting that ranked them lived in a throwaway script, so the page recorded a hundred and one decisions the repo could not reproduce. Somebody asking later why Malachi three seventeen is quoted from the King James had the answer and no way to check it.");
  ("BOTH READINGS ARE REPORTED AND NEITHER IS COLLAPSED INTO THE OTHER. Leaving the endings on asks whether the line and the verse use the same word; folding them off asks whether they say the same thing, and the two disagree - a line singing wash all my sin scores nothing against a verse saying he washed us from our sins. Two of the twenty two were found only on the second reading, and a single number would have hidden which reading found them.");
  ("THE LOUDEST OF THE TWO READINGS ORDERS THE LIST AND THE PLAIN ONE BREAKS THE TIE. Folding endings can only join words that were already going to join, never separate them, so the folded count is never the smaller of the two and sorting by it puts the true winner on top whichever reading found it. Where two wordings are heard equally on both readings the order they were read in is kept, so the same question asked twice reads the same way twice.");
  ("IT RANKS AND DOES NOT CHOOSE. Where a wording wins by one scattered word the older sounding translation is preferred, and where that still does not separate them the plainer one is - judgements a person makes by reading, which is why they are made next door where they are written down one passage at a time rather than made here in silence.");
  let passages = await song_god_our_savior_wordings();
  function scored(passage) {
    let reference = property_get(passage, "reference");
    let distinct = property_get(passage, "distinct");
    let lines = song_god_our_savior_reference_lines(reference);
    function heard(wording) {
      let text = property_get(wording, "text");
      let run = 0;
      let shared = 0;
      let folded_run = 0;
      let folded_shared = 0;
      for (let line of lines) {
        let plain = text_words_content_echo(line, text);
        let plain_run = property_get(plain, "run");
        let plain_shared = property_get(plain, "shared");
        run = numbers_larger(run, plain_run);
        shared = numbers_larger(shared, plain_shared);
        let folded = text_words_content_echo_stemmed(line, text);
        let folded_run_one = property_get(folded, "run");
        let folded_shared_one = property_get(folded, "shared");
        folded_run = numbers_larger(folded_run, folded_run_one);
        folded_shared = numbers_larger(folded_shared, folded_shared_one);
      }
      let names = property_get(wording, "names");
      let bible_folders = property_get(wording, "bible_folders");
      let scored_wording = {
        folded_run,
        run,
        folded_shared,
        shared,
        names,
        bible_folders,
        text,
      };
      return scored_wording;
    }
    let wordings = list_map(distinct, heard);
    function ordered(one, other) {
      let left = property_get(other, "folded_run");
      let right = property_get(one, "folded_run");
      let runs = subtract(left, right);
      let tied = equal(runs, 0);
      if (tied) {
        let left2 = property_get(other, "run");
        let right2 = property_get(one, "run");
        let plain = subtract(left2, right2);
        return plain;
      }
      return runs;
    }
    wordings.sort(ordered);
    let v = {
      reference,
      lines,
      wordings,
    };
    return v;
  }
  let echoed = list_map(passages, scored);
  return echoed;
}
