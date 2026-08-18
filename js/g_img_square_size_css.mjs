import { html_style_variable_or } from "./html_style_variable_or.mjs";
import { g_img_square_size_base } from "./g_img_square_size_base.mjs";
import { g_img_square_size_variable } from "./g_img_square_size_variable.mjs";
export function g_img_square_size_css() {
  "How large one map tile or character is drawn - the variable if a screen has set one, and";
  "the base size where nothing has.";
  "Written as a question rather than an answer so a second game on the same map can see a";
  "different amount of the world without either game learning the other exists. Nothing sets";
  "the variable in the gospel game, so it draws at the base size it always did.";
  "Asking through the style rather than through a value passed down is what keeps it to one";
  "change: this is read in seven places, deep inside sizing and positioning, and threading a";
  "size through all of them would have made every caller of every one of them carry it too.";
  let name = g_img_square_size_variable();
  let base = g_img_square_size_base();
  let v = html_style_variable_or(name, base);
  return v;
}
