import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_shared_color_green_deep } from "./app_shared_color_green_deep.mjs";
import { html_descendants_all } from "./html_descendants_all.mjs";
import { html_style_background_color_get } from "./html_style_background_color_get.mjs";
import { equal } from "./equal.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { each } from "./each.mjs";
export function app_shared_button_screen_green_code_repaint(component) {
  "turn any code surface sitting inside a button green along with the button, so a right answer that happens to be written as code goes green all the way through";
  "A code surface is painted near-black on purpose, and a button painted green around it leaves the green showing only through the few pixels of padding at the edge - which reads as a green outline drawn around a black chip rather than as this one is right. So the chip is repainted too, in the deep green that keeps white monospace as readable as the black did.";
  "Only surfaces actually painted the code colour are touched. Repainting whatever happens to be in there would flatten anything deliberately given its own colour, and the button has no way of knowing what that was for.";
  arguments_assert(arguments, 1);
  let dark = app_shared_color_code_background();
  let green = app_shared_color_green_deep();
  let insides = html_descendants_all(component);
  function lambda(inside) {
    let color = html_style_background_color_get(inside);
    let code_is = equal(color, dark);
    if (code_is) {
      html_style_background_color_set(inside, green);
    }
  }
  each(insides, lambda);
}
