import { arguments_assert } from "./arguments_assert.mjs";
import { reply_property_bible_references } from "./reply_property_bible_references.mjs";
import { property_initialize_list } from "./property_initialize_list.mjs";
import { list_add } from "./list_add.mjs";
import { reply_on_match } from "./reply_on_match.mjs";
export function reply_on_match_bible_reference(
  rule,
  chapter_code,
  verse_number,
  quote,
) {
  arguments_assert(arguments, 4);
  ("A rule that reads what the given rule reads and notes one verse the sender said. The words of the verse are not here: they are fetched when the reply is closed.");
  ("One verse at a time on purpose. Joining neighbours into 4:7-10 needs the chapter's own verse list, so it waits for the step that has downloaded it.");
  ("Quote says whether the sender only said part of the verse, so the whole of it should be said back.");
  let name = reply_property_bible_references();
  function each_reading(possibilities) {
    for (let possibility of possibilities) {
      let references = property_initialize_list(possibility, name);
      list_add(references, {
        chapter_code,
        verse_number,
        quote,
      });
    }
  }
  let noted = reply_on_match(rule, [each_reading]);
  return noted;
}
