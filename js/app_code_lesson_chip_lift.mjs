import { html_style_set } from "./html_style_set.mjs";
export function app_code_lesson_chip_lift(chip) {
  "lift a colored number chip off a black code tile: a light inner ring hugs the chip, a dark outer ring sits just beyond it, so the chip reads as a distinct number embedded in the code";
  let rings = "0 0 0 0.1em rgb(178, 214, 255), 0 0 0 0.22em rgb(8, 12, 28)";
  html_style_set(chip, "box-shadow", rings);
}
