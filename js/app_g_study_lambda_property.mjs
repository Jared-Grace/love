import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_study_lambda_c } from "./app_g_study_lambda_c.mjs";
import { app_g_study_lambda_div } from "./app_g_study_lambda_div.mjs";
import { property_get } from "./property_get.mjs";
export async function app_g_study_lambda_property(overlay, player, review) {
  arguments_assert(arguments, 3);
  let r3 = await app_g_study_lambda_c(overlay, player, review);
  let r4 = app_g_study_lambda_div(r3, overlay);
  let div = property_get(r4, "div");
  let r = property_get(r4, "r");
  let passages = property_get(r4, "passages");
  let passage = property_get(r4, "passage");
  let property = "sermon";
  let r2 = {
    div,
    r,
    passages,
    passage,
    property,
  };
  return r2;
}
