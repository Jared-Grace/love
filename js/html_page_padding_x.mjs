import { html_style_padding_x } from "./html_style_padding_x.mjs";
export function html_page_padding_x(element) {
  ("a breath of space on the left and right so content near the screen edges stays easy to see and easy to tap on small screens; 5dvw scales the gap with the phone's width, and the min() caps it at the phone-ish value so it stops growing on tablets and desktop where the extra room isn't needed");
  html_style_padding_x(element, "min(5dvw, 20px)");
}
