import { json_to } from "../../../love/public/src/json_to.mjs";
import { sandbox } from "../../../love/public/src/sandbox.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function ebible_languages_add_item(bible_folder) {
  let f_name = ebible_languages.name;
  f_name = sandbox.name;
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
    let json = json_to({
      bible_folder,
    });
    jp;
  }
  let output = await function_transform(f_name, lambda);
}
