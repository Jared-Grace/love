export function color_written_regex() {
  "every way this repo spells a colour in source: a hex literal of three to eight digits, or an rgb or rgba call of plain numbers. Spelled once here because the finder, the report and the gate all have to agree on what counts as a colour, and a regex copied three times is three chances to disagree.";
  let r = /#[0-9a-fA-F]{3,8}\b|rgba?\([0-9, .]+\)/g;
  return r;
}
