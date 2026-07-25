import { html_loading_spinner_breath_halves } from "./html_loading_spinner_breath_halves.mjs";
import { numbers_up_to } from "./numbers_up_to.mjs";
import { integer_even_is } from "./integer_even_is.mjs";
import { html_loading_spinner_scale_random } from "./html_loading_spinner_scale_random.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { list_add } from "./list_add.mjs";
export function html_loading_spinner_breath_scales() {
  "one radius for every half-breath of a round, alternating expanded and collapsed, each drawn fresh so no two expansions in the round are the same size. the round then closes on the radius it opened with, so it can repeat forever without a jump";
  let halves = html_loading_spinner_breath_halves();
  let indices = numbers_up_to(halves);
  function draw(index) {
    let expanded = integer_even_is(index);
    let scale = html_loading_spinner_scale_random(expanded);
    return scale;
  }
  let scales = list_map(indices, draw);
  let first = list_first(scales);
  list_add(scales, first);
  return scales;
}
