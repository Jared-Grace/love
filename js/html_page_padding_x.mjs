import { html_style_padding_x } from "./html_style_padding_x.mjs";
export function html_page_padding_x(element) {
  ("a breath of space on the left and right so content near the screen edges stays easy to see and easy to tap on small screens");
  ("it asks the one function the whole repo asks how far content sits from the window edge. It used to answer that question a second time on its own, in its own units - five parts in a hundred of the width, capped at twenty pixels - and the two answers were three times apart on a phone. Which of them a screen got depended only on which of the two it happened to call, and a screen calling both got whichever ran last, so the wider one was already being overwritten in the search app without anybody choosing that");
  let gap = app_shared_content_edge_gap();
  html_style_padding_x(element, gap);
}
