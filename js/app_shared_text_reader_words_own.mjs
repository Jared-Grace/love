import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_prose_literal_nodes } from "./js_prose_literal_nodes.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_literal_text_letters_try } from "./js_literal_text_letters_try.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
export async function app_shared_text_reader_words_own(f_name) {
  "$plain f_name";
  arguments_assert(arguments, 1);
  ("The words one function writes out itself - every run of characters with a letter in it that is typed into its own body, with its explanations of itself left out.");
  ("It is asked of a function that hands words to a page, to tell the two kinds apart. A function that only dresses words handed to it - putting an arrow or a gear in front of whatever it was given - types out no words of its own, so it can be in perfect order while never asking anybody what language they read. A function that types words out is saying them itself, and then the language it says them in is a question that has an answer.");
  ("Only the body is read, never the whole file. The lines at the top of a file name the files it fetches from, and those names are runs of characters full of letters; counting them would make every function here look like it says something.");
  ("Its explanations are taken out by where they sit rather than by what they hold, because a comment and a value are the same kind of thing to a reader of the tree and only their place tells them apart.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let prose = js_prose_literal_nodes(declaration);
  let literals = js_list_type_nodes(declaration, "Literal");
  let words = [];
  for (let node of literals) {
    let explanation = list_includes(prose, node);
    if (explanation) {
      continue;
    }
    let letters = js_literal_text_letters_try(node);
    if (null_is(letters)) {
      continue;
    }
    list_add(words, letters);
  }
  return words;
}
