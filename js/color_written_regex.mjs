import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function color_written_regex() {
  ("every way this repo spells a colour in source: a hex literal of three to eight digits, an rgb or rgba call of plain numbers, or a ",
    fn_name("color_oklch"),
    " call of plain numbers. Spelled once here because the finder, the report and the gate all have to agree on what counts as a colour, and a regex copied three times is three chances to disagree.");
  ("THE OKLCH CALL WAS ADDED 2026-09-20 AND UNTIL THEN EVERY COLOUR WRITTEN THAT WAY WAS INVISIBLE TO EVERY COLOUR RULE. Measured that day, not one oklch colour reached the near miss gate, because a colour built by a call is not a colour spelled as text and nothing here was looking for one. The gate was green the whole time and had never seen either of the two palettes the code app tells things apart with - one of which holds a pair 0.043 apart, which is exactly what the rule forbids. A gate is only ever as wide as what collects for it, and a collector that matches none of the subject agrees with everything.");
  (text_combine_multiple([
    "A call whose arguments are not plain numbers is deliberately not matched. ",
    fn_name("color_oklch"),
    "(lightness, chroma, hue) builds a different colour on every call and there is nothing fixed to compare; only a call written out in digits is a colour somebody chose and typed. What this yields for such a call is still the call text, so whoever reads it has to put it through ",
  ]),
    fn_name("color_written_css"),
    " before parsing it - handing the raw call to a colour parser does not fail, it quietly answers with a near-black, and that is the whole reason that function exists.");
  let r = /#[0-9a-fA-F]{3,8}\b|rgba?\([0-9, .]+\)|color_oklch\([0-9, .]+\)/g;
  return r;
}
