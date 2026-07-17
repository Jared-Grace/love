import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { list_find_property_exists } from "./list_find_property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_languages_add_item_info } from "./ebible_languages_add_item_info.mjs";
import { list_add } from "./list_add.mjs";
import { js_object_to_expression } from "./js_object_to_expression.mjs";
import { js_array_expression_single_elements } from "./js_array_expression_single_elements.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { function_transform } from "./function_transform.mjs";
export async function ebible_languages_add_item(bible_folder) {
  let f_name = ebible_languages.name;
  let exists = list_find_property_exists(
    ebible_languages(),
    "bible_folder",
    bible_folder,
  );
  false_is_assert_json(exists, {
    hint: "this bible folder is already in the languages list -- would you like to add a different bible folder, or was this language already added?",
    bible_folder,
  });
  let r = await ebible_languages_add_item_info(bible_folder);
  let language_code = property_get(r, "language_code");
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
  let output = await function_transform(f_name, lambda);
}
