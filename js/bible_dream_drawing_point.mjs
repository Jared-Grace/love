import { html_component_element_get } from "./html_component_element_get.mjs";
export function bible_dream_drawing_point(drawing, event) {
  "Where a pointer event happened, said in the drawing's own coordinates rather than the screen's.";
  "It has to be asked of the browser and cannot be worked out from the drawing's size, because a drawing scaled to fit a window sits at whatever ratio that window happens to give it, and that ratio changes when the window changes, when the page is zoomed, and on a phone when the address bar slides away. The browser is the only thing that knows all three at once.";
  "The answer still needs a stroke's own offset taken off it before it means anything to that stroke, because each stroke is placed by being moved. Moving is all that is ever done to them, so taking the offset off again is exact rather than an approximation.";
  let element = html_component_element_get(drawing);
  let screen_matrix = element.getScreenCTM();
  let inverse = screen_matrix.inverse();
  let held = new DOMPoint(event.clientX, event.clientY);
  let local = held.matrixTransform(inverse);
  let point = { x: local.x, y: local.y };
  return point;
}
