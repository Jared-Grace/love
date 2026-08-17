import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { g_openai_split_property } from "./g_openai_split_property.mjs";
export function app_g_study_lambda_sermon_correct_list(r3) {
  arguments_assert(arguments, 1);
  let property = property_get(r3, "property");
  let passage = property_get(r3, "passage");
  let passages = property_get(r3, "passages");
  let r = property_get(r3, "r");
  let div = property_get(r3, "div");
  let sermon_correct_list = g_openai_split_property(passage, property);
  let r2 = {
    property,
    passage,
    passages,
    r,
    div,
    sermon_correct_list,
  };
  return r2;
}
