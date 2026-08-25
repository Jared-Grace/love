import { bible_folder_key } from "./bible_folder_key.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_source } from "./bible_folder_source.mjs";
import { bible_versions_english_choices_references } from "./bible_versions_english_choices_references.mjs";
import { bible_versions_english_choices_usable } from "./bible_versions_english_choices_usable.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { property_in_list_not } from "./property_in_list_not.mjs";
export async function bible_versions_english_choices_words_none_everywhere_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every English translation this repo offers a reader hands over words somewhere, rather than being offered and then reading as nothing wherever it is asked.");
  ("THE GATE NEXT DOOR ASKS THE SAME QUESTION OF THE PLACES AND NOT OF THE TRANSLATIONS, WHICH IS COARSER THAN THE FAULT. Both places kept answering while four translations inside them read as nothing at every passage, because the other nineteen answered for the place. A comparison that offers nineteen wordings where twenty-three were promised looks exactly like a comparison of twenty-three, and the four that were never on offer are invisible in it - there is no gap where a wording is not.");
  ("THIS ALREADY HAPPENED FOUR TIMES OVER, EACH FOR A DIFFERENT REASON, WHICH IS WHY IT IS ASKED OF EACH TRANSLATION. One spelled a book so that what was left over after the name was the letter s, and raised on it; one wrote its book names in capitals and one wrote them in Hebrew, so no line written in ordinary English reached either; and one had simply never had its chapters sent up. Nothing anywhere went red for any of them.");
  ("SEVERAL PASSAGES, AND READING AS NOTHING AT ONE OF THEM IS NOT A FAULT. A translation published a book at a time carries fifty-six of the sixty-six, so it holds this passage and not that one, and that is a decision somebody made rather than something broken - the report next door is where a single silent passage is looked at, deliberately without a gate over it. Carrying not one of a handful of passages spread across the law, the psalms, the gospels and the letters is not that. No published English bible is missing all four.");
  ("The passages are asked for together rather than one gate run per passage, because the slow half of reading any of them is fetching each translation's list of books, and asked together they are fetched once.");
  let references = ["Genesis 1:1", "Psalms 23:1", "John 3:16", "Romans 8:1"];
  let usable = await bible_versions_english_choices_usable();
  let passages = await bible_versions_english_choices_references(references);
  let wordings_lists = list_map_property(passages, "wordings");
  let wordings = list_concat_multiple(wordings_lists);
  let heard = list_map_property(wordings, bible_folder_key());
  function silent_is(record) {
    let wordless = property_in_list_not(record, bible_folder_key(), heard);
    return wordless;
  }
  let silent = list_filter(usable, silent_is);
  function named(record) {
    let bible_folder = property_get(record, "bible_folder");
    let name = property_get(record, "name");
    let source = bible_folder_source(bible_folder);
    let v = {
      bible_folder,
      name,
      source,
    };
    return v;
  }
  let reported = list_map(silent, named);
  list_empty_is_assert_json(reported, {
    references,
    hint: "each of these translations is offered to a reader and reads as nothing at every one of these passages - so a comparison silently offers fewer wordings than it says it does, and nothing else notices",
  });
  ("Says how much it heard, because a gate that answers nothing cannot be told apart from one that did nothing.");
  let r = {
    references: list_size(references),
    versions: list_size(usable),
    wordings: list_size(wordings),
  };
  return r;
}
