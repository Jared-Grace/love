import { modulo } from "./modulo.mjs";
import { html_element_svg } from "./html_element_svg.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { list_size } from "./list_size.mjs";
import { bible_dream_counter_colors } from "./bible_dream_counter_colors.mjs";
export function bible_dream_counter_draw(parent, drawn, waited, turn) {
  "Put one piece of ornament on the page so that it draws ITSELF in, a moment after being asked, in the next colour of the three.";
  "★ IT ARRIVES AS A STROKE AND NOT AS A PICTURE. Ornament that simply appeared would read as the machine finishing the player's work for them. Ornament that draws itself in, from one end to the other, at about the speed a hand moves, reads as somebody else writing - and that is the true account of what is happening, because the player did not make these lines and something else did.";
  "The waiting is what turns a set of flourishes into a hand at work. Given none, every counter on a shape would start in the same instant and the shape would flash rather than be written. Staggered, they run on for a second or two after the player has moved to the next stroke, so the two writings overlap and the second one is felt as concurrent rather than as a reward handed over at the end.";
  "The hiding and the showing are set as styles rather than as attributes on purpose, so that the browser's own transition carries one into the other. Written as attributes they would take effect at once and there would be no drawing, only an appearing - and nothing would go red to say so.";
  "The showing is asked for two frames later and not immediately. A style set and unset within one frame is one style as far as the browser is concerned, and the transition it was written for never runs.";
  let path = html_element_svg(parent, "path");
  html_attribute_set(path, "d", drawn);
  html_attribute_set(path, "fill", "none");
  let colors = bible_dream_counter_colors();
  let right = list_size(colors);
  html_attribute_set(path, "stroke", colors[modulo(turn, right)]);
  html_attribute_set(path, "stroke-width", "1.4");
  html_attribute_set(path, "stroke-linecap", "round");
  html_attribute_set(path, "opacity", "0.8");
  let element = html_component_element_get(path);
  let total = element.getTotalLength();
  let style_value = String(total);
  html_style_set(path, "stroke-dasharray", style_value);
  let style_value2 = String(total);
  html_style_set(path, "stroke-dashoffset", style_value2);
  html_style_set(path, "transition", "stroke-dashoffset 700ms ease-out");
  html_style_set(path, "transition-delay", waited + "ms");
  function paint() {
    html_style_set(path, "stroke-dashoffset", "0");
  }
  function settle() {
    window.requestAnimationFrame(paint);
  }
  window.requestAnimationFrame(settle);
}
