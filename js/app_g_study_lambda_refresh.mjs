import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_study_lambda_refresh(r6, refresh) {
  arguments_assert(arguments, 2);
  let mistakes = property_get(r6, "mistakes");
  let sermon_correct_list = property_get(r6, "sermon_correct_list");
  let div = property_get(r6, "div");
  let r = property_get(r6, "r");
  let passages = property_get(r6, "passages");
  let passage = property_get(r6, "passage");
  let property = property_get(r6, "property");
  refresh();
  let r2 = {
    mistakes,
    sermon_correct_list,
    div,
    r,
    passages,
    passage,
    property,
  };
  return r2;
}
