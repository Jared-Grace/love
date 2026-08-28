import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_versions_years_sorted } from "./bible_usfm_versions_years_sorted.mjs";
import { bible_usfm_versions } from "./bible_usfm_versions.mjs";
import { bible_versions_english_choices_withheld } from "./bible_versions_english_choices_withheld.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_get_or } from "./list_find_property_get_or.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function bible_usfm_versions_withheld_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: prove that every bible on the shelf which this repo holds back from readers actually says so when the shelf is read, so a warning cannot be written down in one place and handed over silently in another.");
  ("THIS IS THE FAULT ITSELF WRITTEN AS A CHECK, NOT A GUARD AGAINST AN IMAGINED ONE. The list of held-back translations was written first, about a bible nobody had unpacked; the shelf gained that bible later and nothing joined them up, so the repo held a warning about the Douay-Rheims and handed its psalms over anyway - the wrong psalm, in good English, with nothing said. Nothing went red, because every other check here asks whether words came back and words did come back.");
  ("It reaches the warning by a different road than the shelf does. The shelf asks one function for the reason; this walks the held-back list itself, finds the short word whose folder matches, and reads the row that came out. So the two agree only if the join is really live, and cutting the field out of the row fails here rather than passing on the strength of the very function that was cut out.");
  ("A held-back translation that is not on the shelf at all passes and is counted separately. Not having a bible is a perfectly good way of not offering it, and demanding a row for one would force the shelf to carry every translation anybody ever ruled out.");
  ("BOTH SIDES OF THE JOIN TRAVEL OUT WITH THE VERDICT, AND THE ANSWER IS A RECORD RATHER THAN A BARE NUMBER SO THAT A READER CAN SEE WHICH SIDE EACH ONE IS. This walks two lists against each other and either of them falling to nothing leaves the check green while it watches nobody - a shelf read a new way, or a held-back list moved - and one number could only ever have shown that about one of them. The offenders are not a reading of either: their count is nothing on every run that passes.");
  let rows = bible_usfm_versions_years_sorted();
  let versions = bible_usfm_versions();
  let withheld = bible_versions_english_choices_withheld();
  let words = object_property_names(versions);
  function shelf_row(word) {
    let folder = property_path_get_2(versions, word, "folder");
    let made = {
      word,
      folder,
    };
    return made;
  }
  let shelf_rows = list_map(words, shelf_row);
  function silent_or_null(entry) {
    let bible_folder = property_get(entry, "bible_folder");
    let word = list_find_property_get_or(
      shelf_rows,
      "folder",
      bible_folder,
      "word",
      null,
    );
    let absent = null_is(word);
    if (absent) {
      return null;
    }
    let why = property_get(entry, "why");
    let said = list_find_property_get_or(
      rows,
      "version",
      word,
      "withheld",
      null,
    );
    let told = equal(said, why);
    if (told) {
      return null;
    }
    let missed = {
      word,
      bible_folder,
      why,
      said,
    };
    return missed;
  }
  let silent = list_map_filter_null_not_is(withheld, silent_or_null);
  let none = list_empty_is(silent);
  assert_json(none, {
    silent,
    hint: "this bible is held back from readers and the shelf hands it over without saying why; the reason must reach the row rather than being left on the held-back list",
  });
  let checked = list_size(rows);
  let held_back = list_size(withheld);
  let walked = {
    checked,
    held_back,
  };
  return walked;
}
