import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_study_lambda_mistakes(r5) {
  arguments_assert(arguments, 1);
  let property = property_get(r5, "property");
  let passage = property_get(r5, "passage");
  let passages = property_get(r5, "passages");
  let r = property_get(r5, "r");
  let div = property_get(r5, "div");
  let sermon_correct_list = property_get(r5, "sermon_correct_list");
  let mistakes = false;
  let r2 = {
    property,
    passage,
    passages,
    r,
    div,
    sermon_correct_list,
    mistakes,
  };
  return r2;
}
