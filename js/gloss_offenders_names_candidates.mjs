import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { words_capitalised_always } from "./words_capitalised_always.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { gloss_explain_name_said } from "./gloss_explain_name_said.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
export function gloss_offenders_names_candidates(offenders) {
  "The words in the findings that are written with a capital every time they appear, each with the root the dictionary handed back and whether the app's own sentence calls the word a name: the sheet a person marks the proper names off once.";
  "A proper name has no Cebuano root, so every finding against one is the dictionary answering a question it was never asked - Cefas fetching sipa, Zenas fetching sina, Gideon fetching dili, which means not. Those findings can never be settled by reading the app's explanation, because the explanation is right. They are settled by somebody saying once that the word is a name, and that decision has to be authored and stored rather than guessed at each run.";
  "Two columns say how strong the case is and they are not the same strength. Declared is proof: the app's own sentence says the word is a name, and it says which word, so nothing else can have been meant. Capitalised-every-time is only evidence, in the exact sense the words it is read from carry - a word that opens every line it appears in comes back looking the same. So read declared as settled and the rest as a list to look at.";
  "The capitals are counted over the spellings the findings hold and not over the whole bible, because that is what a findings dump contains. A word the app explained only where it stood capitalised, and that the bible elsewhere writes in small letters, is therefore listed here and should not be. That is the direction the error runs: this over-lists, never under-lists.";
  "$plain offenders";
  "names the gathered findings to read. It names nothing that runs.";
  arguments_assert(arguments, 1);
  let spelled_all = [];
  function offender_spellings(offender) {
    let found = property_get(offender, "found");
    function row_spelling(row) {
      let spelled = property_get(row, "word");
      list_add(spelled_all, spelled);
    }
    each(found, row_spelling);
  }
  each(offenders, offender_spellings);
  let capitalised = words_capitalised_always(spelled_all);
  let by_word = {};
  function offender_read(offender) {
    let chapter_code = property_get(offender, "chapter_code");
    let found = property_get(offender, "found");
    function found_read(row) {
      let spelled = property_get(row, "word");
      let key = text_lower_to(spelled);
      let always = property_exists(capitalised, key);
      if (always) {
        let held = property_get_or_null(by_word, key);
        let fresh = null_is(held);
        if (fresh) {
          let root = property_get(row, "root");
          let opening = property_get(row, "explain");
          let started = {
            word: key,
            sightings: 0,
            silent: 0,
            declared: false,
            root,
            spellings: [],
            chapters: [],
            explain: opening,
          };
          property_set(by_word, key, started);
          held = started;
        }
        let sightings = property_get(held, "sightings");
        let seen_more = add(sightings, 1);
        property_set(held, "sightings", seen_more);
        let kind = property_get(row, "kind");
        let quiet = equal(kind, "silent");
        if (quiet) {
          let silent = property_get(held, "silent");
          let silent_more = add(silent, 1);
          property_set(held, "silent", silent_more);
        }
        let explain = property_get(row, "explain");
        let said = gloss_explain_name_said(explain, spelled);
        if (said) {
          property_set(held, "declared", true);
          property_set(held, "explain", explain);
        }
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
  let names = object_property_names(by_word);
  function name_row(key) {
    let row = property_get(by_word, key);
    return row;
  }
  let rows = list_map(names, name_row);
  function row_sightings(row) {
    let sightings = property_get(row, "sightings");
    return sightings;
  }
  let ranked = list_sort_number_mapper_reverse(rows, row_sightings);
  return ranked;
}
