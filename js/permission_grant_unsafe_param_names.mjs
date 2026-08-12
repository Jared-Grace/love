import { list_add } from "./list_add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { object_values } from "./object_values.mjs";
import { permission_grant_words_unsafe } from "./permission_grant_words_unsafe.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { function_params_get } from "./function_params_get.mjs";
import { function_params_plain } from "./function_params_plain.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { null_is } from "./null_is.mjs";
import { text_includes } from "./text_includes.mjs";
export async function permission_grant_unsafe_param_names() {
  "every parameter name in the repo that a grant check refuses over a word spelled inside it, gathered under the name rather than under the function, with the functions it holds back listed against it";
  "the check reads a parameter name for one of nine words by asking whether the word appears anywhere in it, so a compound name inherits the refusal of any word it happens to spell. A bible identifier called bible_folder reads as a folder because it spells one, and a chapter address called chapter_code reads as code. The word is a guess about what the parameter holds, and the guess is wrong often enough that it has to be answerable.";
  "gathered under the parameter because that is the shape of the judgment. What a name holds does not vary between the functions spelling it - either bible_folder is an identifier everywhere or it is a path everywhere - so one reading settles every function at once, where reading function by function settles one and leaves the rest to be met again in the next batch.";
  "a parameter already declared ordinary data in a function is left out of that function's count, so what is listed is only what nobody has weighed yet.";
  "this writes nothing. Declaring a name to be ordinary data is a judgment, and the place for it is the function it applies to, where a reader meets it beside the code and can argue with it. A sweep that marked them would be that judgment taken for every function at once by somebody who read none of them.";
  let words = permission_grant_words_unsafe();
  let names = await repo_functions_names("love");
  let found = {};
  for (let name of names) {
    let params = await function_params_get(name);
    let plain = await function_params_plain(name);
    for (let param of params) {
      let named_is = js_identifier_is(param);
      if (!named_is) {
        continue;
      }
      let p_name = property_get(param, "name");
      let declared = list_includes(plain, p_name);
      if (declared) {
        continue;
      }
      for (let word of words) {
        let matches = text_includes(p_name, word);
        if (matches) {
          let entry = property_get_or_null(found, p_name);
          let missing = null_is(entry);
          if (missing) {
            entry = {
              param: p_name,
              words: [],
              functions: [],
            };
            property_set(found, p_name, entry);
          }
          list_add_if_not_includes(property_get(entry, "words"), word);
          list_add_if_not_includes(property_get(entry, "functions"), name);
        }
      }
    }
  }
  let entries = object_values(found);
  function functions_count(entry) {
    let functions = property_get(entry, "functions");
    return functions.length;
  }
  let sorted = list_sort_number_mapper_reverse(entries, functions_count);
  let report = [];
  for (let entry of sorted) {
    list_add(report, entry);
  }
  return report;
}
