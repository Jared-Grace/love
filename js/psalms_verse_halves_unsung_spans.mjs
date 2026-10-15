import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { psalms_verse_halves_span_word } from "./psalms_verse_halves_span_word.mjs";
export function psalms_verse_halves_unsung_spans(halves_sung, verse_last) {
  arguments_assert(arguments, 2);
  ("$plain halves_sung");
  ("$plain verse_last");
  ("The parts of a chapter that none of the handed-in singing covers, said as the runs they form, in the order they come in the chapter.");
  ("★ THE RUNS ARE WHAT MAKES THIS ANSWER READABLE, AND READABLE IS THE WHOLE POINT OF IT. A psalm with nothing sung in it has three hundred missing halves, and a list of three hundred words tells the person holding the microphone nothing they can act on. Joined into runs it says 1-14 and 18-21, which is the next two recordings named for them.");
  ("The chapter's length is handed in, as everywhere else on this record, because it is the one fact that is in the text of the psalm rather than in the names of the files, and a judging that fetched it could neither be run from a written case nor be run at all without a network.");
  ("An empty answer means every half of the chapter is covered. It is not the same as an empty answer from a chapter nobody has sung, which cannot arise here because this is told a length and a chapter with no singing hands back the whole chapter as one run.");
  let letters = ["a", "b"];
  let spans = [];
  let run_first = null;
  let run_last = null;
  for (let verse = 1; less_than_equal(verse, verse_last); verse = verse + 1) {
    for (let letter of letters) {
      let half = {
        verse: verse,
        half: letter,
      };
      let token = String(verse) + letter;
      let sung_is = list_includes(halves_sung, token);
      if (sung_is) {
        let b = equal(run_first, null);
        let run_open_is = not(b);
        if (run_open_is) {
          let item = psalms_verse_halves_span_word(run_first, run_last);
          list_add(spans, item);
          run_first = null;
        }
        continue;
      }
      let run_shut_is = equal(run_first, null);
      if (run_shut_is) {
        run_first = half;
      }
      run_last = half;
    }
  }
  let b2 = equal(run_first, null);
  let run_left_open_is = not(b2);
  if (run_left_open_is) {
    let item2 = psalms_verse_halves_span_word(run_first, run_last);
    list_add(spans, item2);
  }
  return spans;
}
