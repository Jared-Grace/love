import { arguments_assert } from "./arguments_assert.mjs";
import { regex_em_dash_spaced } from "./regex_em_dash_spaced.mjs";
export function em_dashes_closed(text) {
  arguments_assert(arguments, 1);
  ("$plain text");
  ("Text with the spaces around every em dash taken out, so the dash touches the words on both sides of it.");
  ("This is a house style and not a truth about the mark. English sets an em dash closed and French sets it open, so nothing may do this to a translation without first knowing whose text it is.");
  let r = regex_em_dash_spaced();
  let closed = text.replace(r, "—");
  return closed;
}
