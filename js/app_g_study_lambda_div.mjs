import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_g_container_text } from "./app_g_container_text.mjs";
import { html_div } from "./html_div.mjs";
export function app_g_study_lambda_div(r3, overlay) {
  arguments_assert(arguments, 2);
  let c = property_get(r3, "c");
  let passage = property_get(r3, "passage");
  let passages = property_get(r3, "passages");
  let r = property_get(r3, "r");
  html_bold_mild(c);
  html_style_background_color_set(c, "#ffffffcd");
  app_g_container_text(
    overlay,
    "If you were preaching from this Bible passage, what would you say?",
  );
  let div = html_div(overlay);
  let r2 = {
    passage,
    passages,
    r,
    div,
  };
  return r2;
}
