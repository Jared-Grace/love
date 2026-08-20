import { app_shared_text_reader_language_ast_objects } from "./app_shared_text_reader_language_ast_objects.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_literal_value_deep_try } from "./js_literal_value_deep_try.mjs";
import { js_object_expression_value_set } from "./js_object_expression_value_set.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_text_reader_language_sayings_change(
  f_name,
  lambda$saying,
) {
  "$plain f_name";
  "Hands every saying written out in one function to somebody who may change it, and puts back onto the page whatever comes back.";
  "The saying arrives as a plain record of words rather than as a piece of the program, because what wants changing is what the button says and not how it is spelled out. Anything working on the spelling would have to know how a word is written down before it could read one, and every such thing would have to know it again.";
  "Nothing back means leave this one alone, and it is the ordinary answer. Most sayings in a function being worked on are not the one being worked on, and a change that had to hand every saying back would be one mistake away from rewriting the ones it was asked to leave.";
  "A saying that cannot be read off the page is passed over rather than complained about. What to do about one is a question for the count that walks the whole folder, and answering it twice in two places is how the two come to disagree.";
  arguments_assert(arguments, 2);
  async function lambda(ast) {
    let picked = app_shared_text_reader_language_ast_objects(ast);
    for (let one of picked) {
      let object = property_get(one, "object");
      let unwritten = null_is(object);
      if (unwritten) {
        continue;
      }
      let saying = js_literal_value_deep_try(object);
      let unreadable = null_is(saying);
      if (unreadable) {
        continue;
      }
      let changed = await lambda$saying(saying);
      let unchanged = null_is(changed);
      if (unchanged) {
        continue;
      }
      js_object_expression_value_set(object, changed);
    }
  }
  let output = await function_transform(f_name, lambda);
  return output;
}
