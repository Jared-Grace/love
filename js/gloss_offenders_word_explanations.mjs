import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_word_folded } from "./gloss_word_folded.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { object_values } from "./object_values.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function gloss_offenders_word_explanations(offenders, word) {
  "Everything the app has ever said about one word, gathered by the wording rather than by the chapter: each explanation once, what root it claimed, and which chapters it stands in.";
  "A word explained two ways is a fault somebody has to settle, and settling it means reading the two explanations side by side. The findings say which roots were claimed and where, and they leave out the only thing a person actually decides on, which is the sentence the reader sees. This puts the sentences back.";
  "One wording repeated across a hundred chapters is one decision, not a hundred, so identical wordings are gathered into one row with the chapters listed beside it. Without that a common word buries its own disagreement under its own repetition.";
  "The word is matched by the folded spelling, so panulundon and panulondon are one word here exactly as they are one word in the queue this is read beside. What comes back is the word as each chapter spells it, because a folded word is not how anybody writes it.";
  "$plain offenders";
  "$plain word";
  "the first names gathered findings, the second the word to gather. Neither names anything that runs.";
  arguments_assert(arguments, 2);
  let wanted = gloss_word_folded(word);
  let by_wording = {};
  function offender_read(offender) {
    let chapter_code = property_get(offender, "chapter_code");
    let found = property_get(offender, "found");
    function found_read(row) {
      let spelled = property_get(row, "word");
      let key = gloss_word_folded(spelled);
      let mine = equal(key, wanted);
      if (mine) {
        let explain = property_get(row, "explain");
        let held = property_get_or_null(by_wording, explain);
        let fresh = null_is(held);
        if (fresh) {
          let claimed = property_get(row, "claimed");
          let root = property_get(row, "root");
          let kind = property_get(row, "kind");
          let started = {
            explain,
            claimed,
            root,
            kind,
            count: 0,
            spellings: [],
            chapters: [],
          };
          property_set(by_wording, explain, started);
          held = started;
        }
        let count = property_get(held, "count");
        let more = add(count, 1);
        property_set(held, "count", more);
        let spellings = property_get(held, "spellings");
        let unspelled = list_includes_not(spellings, spelled);
        if (unspelled) {
          list_add(spellings, spelled);
        }
        let chapters = property_get(held, "chapters");
        let unlisted = list_includes_not(chapters, chapter_code);
        if (unlisted) {
          list_add(chapters, chapter_code);
        }
      }
    }
    each(found, found_read);
  }
  each(offenders, offender_read);
  let rows = object_values(by_wording);
  function row_count(row) {
    let count = property_get(row, "count");
    return count;
  }
  let ranked = list_sort_number_mapper_reverse(rows, row_count);
  return ranked;
}
