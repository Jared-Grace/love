import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_source } from "./bible_folder_source.mjs";
import { bible_versions_english_choices_reference } from "./bible_versions_english_choices_reference.mjs";
import { bible_versions_english_choices_usable } from "./bible_versions_english_choices_usable.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { property_get } from "./property_get.mjs";
export async function bible_versions_english_choices_words_none(reference) {
  arguments_assert(arguments, 1);
  ("$plain reference");
  ("The English translations this repo offers a reader that hand over no words at all for a named passage - each against what it calls itself and which of the two places it comes from.");
  ("BEING OFFERED AND BEING READABLE ARE TWO SEPARATE THINGS, AND NOTHING ELSE SAYS WHICH. A comparison leaves out a translation it cannot read, on purpose, so the reader sees the options that are really there; but that means a translation nobody can read looks exactly like one that was read and passed over. Named here, it is a thing somebody can go and fix.");
  ("IT IS A REPORT AND DELIBERATELY NOT A GATE. A translation reads as nothing for reasons that are somebody's decision rather than a fault - its chapters were never sent up, or it is published a book at a time and does not carry this one - and a gate cannot tell those apart from a break. The place a translation comes from going silent altogether is the part that is always wrong, and that is gated on its own.");
  ("The passage is asked for rather than fixed, because a translation that holds fifty-six books of the sixty-six answers for one passage and not another, and which one was asked is the whole of why.");
  let usable = await bible_versions_english_choices_usable();
  let wordings = await bible_versions_english_choices_reference(reference);
  let heard = list_map_property(wordings, "bible_folder");
  function silent_is(record) {
    let bible_folder = property_get(record, "bible_folder");
    let silent = list_includes_not(heard, bible_folder);
    return silent;
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
  return reported;
}
