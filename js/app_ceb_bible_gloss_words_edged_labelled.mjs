import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_offenders_findings_by_word } from "./gloss_offenders_findings_by_word.mjs";
import { gloss_entry_word_edged_is } from "./gloss_entry_word_edged_is.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { property_get } from "./property_get.mjs";
import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_map } from "./list_map.mjs";
export async function app_ceb_bible_gloss_words_edged_labelled(
  offenders,
  carried,
) {
  arguments_assert(arguments, 2);
  let rows = gloss_offenders_findings_by_word(
    offenders,
    gloss_entry_word_edged_is,
    carried,
  );
  let known = await binisaya_words_known();
  function row_kind(row) {
    let bare = property_get(row, "bare");
    let held = binisaya_words_known_get(known, bare);
    let never_asked = null_is(held);
    if (never_asked) {
      let never_heard = "unknown";
      return never_heard;
    }
    let analysed = property_get(held, "analysed");
    if (analysed) {
      let taken_apart = "broken_down";
      return taken_apart;
    }
    let said_no = "refused";
    return said_no;
  }
  function row_labelled(row) {
    let word = property_get(row, "word");
    let bare = property_get(row, "bare");
    let sightings = property_get(row, "sightings");
    let kind = row_kind(row);
    let answer = {
      word,
      bare,
      sightings,
      kind,
    };
    return answer;
  }
  let labelled = list_map(rows, row_labelled);
  return labelled;
}
