import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_languages_add_item_info } from "../../../love/public/src/ebible_languages_add_item_info.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_object_to_expression } from "../../../love/public/src/js_object_to_expression.mjs";
import { sandbox } from "../../../love/public/src/sandbox.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function ebible_languages_add_item(bible_folder) {
  let f_name = ebible_languages.name;
  f_name = sandbox.name;
  let r = await ebible_languages_add_item_info(bible_folder);
  let language_code = property_get(r, "language_code");
  let name = property_get(r, "name");
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
    const object = {
      name,
      bible_folder,
      language_code,
    };
    let expression = js_object_to_expression(object);
    list_add(elements, expression);
  }
  let output = await function_transform(f_name, lambda);
}
