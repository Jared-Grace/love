import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_equals } from "./property_equals.mjs";
import { text_words_content_echo } from "./text_words_content_echo.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export function bible_versions_english_choices_psalms_agreement_passage(
  passages,
  named_by_folder,
  lowest_by_folder,
) {
  arguments_assert(arguments, 3);
  for (let passage of passages) {
    let wordings = property_get(passage, "wordings");
    for (let wording of wordings) {
      let property_name = bible_folder_key();
      let bible_folder = property_get(wording, property_name);
      let text = property_get(wording, "text");
      let nearest = 0;
      for (let against of wordings) {
        let property_name2 = bible_folder_key();
        let itself = property_equals(against, property_name2, bible_folder);
        if (itself) {
          continue;
        }
        let other_text = property_get(against, "text");
        let echo = text_words_content_echo(text, other_text);
        let run = property_get(echo, "run");
        let longer = greater_than(run, nearest);
        if (longer) {
          nearest = run;
        }
      }
      named_by_folder[bible_folder] = property_get(wording, "name");
      let seen = lowest_by_folder[bible_folder];
      let first = equal(seen, undefined);
      let worse = less_than(nearest, seen);
      if (first || worse) {
        lowest_by_folder[bible_folder] = nearest;
      }
    }
  }
}
