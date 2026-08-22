import { html_width_full } from "./html_width_full.mjs";
import { html_style_min_width } from "./html_style_min_width.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { bible_dream_drawing_scale } from "./bible_dream_drawing_scale.mjs";
import { multiply } from "./multiply.mjs";
import { html_element_svg } from "./html_element_svg.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function bible_dream_scene_drawing_add(root, scene) {
  "Make the surface a dream is drawn on, sized so its shapes are big enough to be traced by a hand, and hand it back.";
  "★ IT ASKS FOR MORE WIDTH THAN THE WINDOW HAS, ON PURPOSE. A row of seven cows fitted to a window makes each cow about a finger wide, and a shape that small has nothing on it a hand can aim at. The page scrolls sideways instead, and that cost is real and is being paid knowingly; the other way out would be a separate strip per row, which is a different drawing from the one the passage describes.";
  "It refuses the browser's own touch gestures over itself, because a drag on a phone is a scroll everywhere else and here it is the whole game.";
  let drawing = html_element_svg(root, "svg");
  html_attribute_set(drawing, "viewBox", scene.view_box);
  html_width_full(drawing);
  let across = Number(scene.view_box.split(" ")[2]);
  let right = bible_dream_drawing_scale();
  let least_wide = multiply(across, right);
  html_style_min_width(drawing, least_wide + "px");
  html_style_margin_top(drawing, "10px");
  html_style_set(drawing, "touch-action", "none");
  return drawing;
}
