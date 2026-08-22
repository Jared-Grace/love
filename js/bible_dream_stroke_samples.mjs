import { multiply_divide } from "./multiply_divide.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { list_add } from "./list_add.mjs";
export function bible_dream_stroke_samples(path_component, count) {
  "Walk a drawn path at even distances from its start to its end and hand back that many points along it, in the path's own coordinates.";
  "A traced stroke has to be checked against WHERE IT GOES NEXT and not only against where it passes, and a browser will hand over the point at any single distance along a path but will not hand over the whole run of them. So the run is taken once, when the stroke is first drawn, and every later comparison is against a list of numbers rather than against the drawing.";
  "Even distances, not even steps of the curve's own parameter, which is why the browser's own measurement is used rather than arithmetic on the path text. Two samples are then always the same distance apart wherever they fall, so a lookahead of so many samples means the same reach on a long stroke and a short one.";
  let element = html_component_element_get(path_component);
  let total = element.getTotalLength();
  let points = [];
  let index = 0;
  while (less_than_equal(index, count)) {
    let along = multiply_divide(total, index, count);
    let point = element.getPointAtLength(along);
    list_add(points, {
      x: point.x,
      y: point.y,
    });
    index = index + 1;
  }
  return points;
}
