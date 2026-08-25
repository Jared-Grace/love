import { list_single_property } from "./list_single_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_versions_english_choices_references } from "./bible_versions_english_choices_references.mjs";
export async function bible_versions_english_choices_reference(reference) {
  "$plain reference";
  "One passage, written the way a person writes one - 'Malachi 3:17' - read out of every English translation this repo may lawfully put in front of a reader, from either of the two shelves it fetches from, as each translation against the words it uses there.";
  "IT IS FOR CHOOSING WORDING, WHICH IS A COMPARISON AND NOT A LOOKUP. A line of a song rests on a passage, and the several translations of that passage differ in exactly the way the choice turns on - one says jewels where another says treasured possession. Read one at a time the differences are invisible, because nothing is beside anything.";
  "IT IS THE LIST OF PASSAGES ASKED FOR ONE PASSAGE, rather than its own reading. Everything that makes this answer worth trusting - which translations may lawfully be shown, that both shelves are asked and not only eBible, that a translation missing the passage drops out instead of ending the comparison - is said once next door and cannot be said differently here.";
  "It stays a name of its own because asking about one passage is what a person does at a keyboard, and a name that has to be handed a list of one to answer about one is a name that makes its reader do arithmetic before they may ask their question.";
  arguments_assert(arguments, 1);
  let passages = await bible_versions_english_choices_references([reference]);
  let wordings = list_single_property(passages, "wordings");
  return wordings;
}
