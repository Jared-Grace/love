import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_language_functions } from "./bible_glyph_chapters_language_functions.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
export async function bible_glyph_chapters_language_functions_found() {
  "Every reveal-language function there is, refusing to answer at all rather than answering with none of them.";
  "IT REFUSES TO PASS ON AN EMPTY SET, which is how a gate built on this dies. Finding the languages is a search for a sentence, so a reworded sentence answers with nothing rather than with an error - and a gate that only checked what it found would go green the moment it lost the ability to find anything, and would stay green.";
  "THE REFUSAL IS SPELLED HERE RATHER THAN IN EACH GATE. Two gates carried this same guard word for word, and the sentence it complains with names the one place the search sentence is written; spelled twice, it is an agreement that can be half changed, after which one gate points a reader at a word the other no longer uses. A third gate built on these languages gets the guard by asking, rather than by somebody remembering.";
  "THE SENTENCE THIS IS FOUND BY IS NAMED INSIDE THE HINT AND NEVER BESIDE IT. A failed gate's words are read back afterwards for function names, and every name found is taken as an accusation - so a name in its own field of the complaint holds an innocent function's app out of its deployment. The hint is dropped before the names are read, which is what lets a person be told where to look without anybody being blamed for it.";
  arguments_assert(arguments, 0);
  let names = await bible_glyph_chapters_language_functions();
  let mark = fn_name("bible_glyph_language_written_mark");
  let hint_none = text_combine_multiple([
    "no reveal-language function was found at all, so this gate checked nothing and would have passed for that reason - has the sentence they are found by been reworded in one place and not the other? The sentence is spelled in ",
    mark,
  ]);
  list_empty_not_is_assert_json(names, {
    hint: hint_none,
  });
  return names;
}
