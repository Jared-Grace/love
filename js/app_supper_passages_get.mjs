import { not } from "./not.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { equal_not } from "./equal_not.mjs";
import { number_text_equal_is } from "./number_text_equal_is.mjs";
import { list_add } from "./list_add.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function app_supper_passages_get(verses) {
  "Splits the one flat run of verses into the passages they were named as, one group for each reference the screen asks for.";
  "A PASSAGE ENDS WHERE THE VERSE NUMBERS STOP RUNNING ON, NOT ONLY WHERE THE CHAPTER CHANGES. The screen names nine references and two of them sit in the same chapter - John 6:27-35 and John 6:48-58 - so a chapter code alone merged that pair and handed back eight passages where the card beside the link promises nine. Worse than the count: the merged card ran verse thirty five straight into verse forty eight with the twelve verses between them absent and nothing marking the jump, in front of people reading it aloud at a table.";
  "What is read instead is the verse numbers the verses already carry: one that does not follow the one before it begins a new passage. Every reference names a run of consecutive verses and the runs arrive in the order the references were written, so a break in the numbers is exactly where one reference ended. Nothing about the file in storage changes - the boundary was always in the data and was simply not being asked for.";
  function lambda2(la) {
    let group = null;
    let previous = null;
    let previous_number = null;
    function flush() {
      let exists = null_not_is(group);
      if (exists) {
        la(group);
      }
    }
    function lambda(v) {
      let chapter_code = property_get(v, "chapter_code");
      let property_name = verse_number_key();
      let verse_number = property_get(v, property_name);
      let chapter_changed = equal_not(chapter_code, previous);
      let follows = number_text_equal_is(previous_number + 1, verse_number);
      let changed = chapter_changed || not(follows);
      if (changed) {
        flush();
        group = [];
      }
      list_add(group, v);
      previous = chapter_code;
      previous_number = number_from_text(verse_number);
    }
    each(verses, lambda);
    flush();
  }
  let passages = list_adder(lambda2);
  return passages;
}
