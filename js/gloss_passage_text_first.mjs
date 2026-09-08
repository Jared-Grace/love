import { arguments_assert } from "./arguments_assert.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function gloss_passage_text_first(passage) {
  "A passage's wording in the first bible asked for, as one line of writing.";
  "A passage covers one verse or several, and the wording arrives a verse apiece, so the line is those verses joined by a space. Everything that reads a passage's English wants that same line - the screen shows it to a reader, and the word-by-word explanation underneath is cut from it - so it is made in one place and both ask for it here rather than each joining for itself.";
  "The joining is the whole of the work and it is still worth a name, because the way it goes wrong is silent. Handing the list of verses to something that wanted the line lets the language write the join, and the language writes a comma with no space after it. A passage covering a single verse is a list of one and reads correctly either way, so the fault shows only where two verses meet - which is how it stood unseen through a hundred chapters and three apps.";
  arguments_assert(arguments, 1);
  let lines = property_list_first(passage, "texts");
  let joined = list_join_space(lines);
  return joined;
}
