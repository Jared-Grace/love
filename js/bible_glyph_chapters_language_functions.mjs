import { repo_love_name } from "./repo_love_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { bible_glyph_language_written_mark } from "./bible_glyph_language_written_mark.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export async function bible_glyph_chapters_language_functions() {
  "Every reveal-language function this repo holds - the plain text of the picture chapters in one language a reader already speaks, one function per language.";
  "IT FINDS THEM AND IS NEVER TOLD THEM. The alternative is a hand-kept list of which languages have been written, which is the arrangement that already failed once here: the Rosetta bands were named in a list, twelve of them reached disk, the list still said three, and nothing threw. A list is a second place the truth has to be written down, and the second place is the one nobody updates.";
  "IT LOOKS FOR THE SENTENCE THE WRITER STAMPS IN rather than for a name shape. Half the functions in this family are named for chapters and are not language files at all - the survey, the coverage reading, the writer itself - so a name-prefix search would hand a caller four things that answer nothing and would still miss a language file somebody named differently. What the file says about itself is the honest test.";
  "AND THE ONE FALSE MATCH IS THE SENTENCE'S OWN KEEPER. It is left out by name, which is the only exclusion here and is checkable by reading one line. A second false match would mean somebody had spelled the sentence a third time, which is the thing keeping it in one function exists to prevent.";
  let repo_name = repo_love_name();
  let mark = bible_glyph_language_written_mark();
  let found = await repo_functions_names_code_includes(repo_name, mark);
  let keeper = fn_name("bible_glyph_language_written_mark");
  let names = [];
  for (let name of found) {
    let itself = equal(name, keeper);
    if (itself) {
      continue;
    }
    list_add(names, name);
  }
  return names;
}
