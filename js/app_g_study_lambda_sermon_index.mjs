import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_study_lambda_sermon_index(r4) {
  arguments_assert(arguments, 1);
  let sermon_correct_list = property_get(r4, "sermon_correct_list");
  let div = property_get(r4, "div");
  let r = property_get(r4, "r");
  let passages = property_get(r4, "passages");
  let passage = property_get(r4, "passage");
  let property = property_get(r4, "property");
  let sermon_index = 0;
  return {
    sermon_correct_list,
    div,
    r,
    passages,
    passage,
    property,
    sermon_index,
  };
}
