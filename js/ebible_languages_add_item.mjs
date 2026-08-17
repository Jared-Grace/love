import { language_code_key } from "./language_code_key.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_languages_add_item_info } from "./ebible_languages_add_item_info.mjs";
import { list_add } from "./list_add.mjs";
import { js_object_to_expression } from "./js_object_to_expression.mjs";
import { js_array_expression_single_elements } from "./js_array_expression_single_elements.mjs";
import { function_transform } from "./function_transform.mjs";
export async function ebible_languages_add_item(bible_folder) {
  "Writes one more language into the hand-kept list, as an entry in the array that list is written as.";
  "The hand-kept list rather than the whole one, because the whole one is no longer written as an array - it joins the hand-kept list to a generated one, and a generated list is thrown away and written again from what is on disk, so anything added there would not survive the next writing.";
  let f_name = fn_name("ebible_languages_curated");
  let r = await ebible_languages_add_item_info(bible_folder);
  let property_name = language_code_key();
  let language_code = property_get(r, property_name);
  let name = property_get(r, "name");
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
    let object = {
      name,
      bible_folder,
      language_code,
    };
    let expression = js_object_to_expression(object);
    list_add(elements, expression);
  }
  await function_transform(f_name, lambda);
}
