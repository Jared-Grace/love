import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_object_to_expression } from "../../../love/public/src/js_object_to_expression.mjs";
import { sandbox } from "../../../love/public/src/sandbox.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function ebible_languages_add_item(bible_folder) {
  let f_name = ebible_languages.name;
  f_name = sandbox.name;
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
    const object = {
      bible_folder,
    };
    let expression = js_object_to_expression(object);
    list_add(list, item);
  }
  let output = await function_transform(f_name, lambda);
}
