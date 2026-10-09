import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
export function svg_side_by_side(svgs) {
  "$plain svgs";
  "the list holds whole SVG documents as text, each a square picture. They are pictures to place and nothing that runs.";
  "One square SVG drawing every picture in the list in a row, overlapping, so a set that draws one person can draw two or three standing together.";
  "EACH PICTURE KEEPS ITS OWN VIEWBOX by being nested as an inner svg element, so nothing inside it is rescaled by hand and any square picture works whatever its own size.";
  "IDS ARE MADE UNIQUE PER PICTURE, because the same picture placed twice would otherwise declare every gradient twice and the second would point at the first.";
  let count = svgs.length;
  let side = 32;
  let top2 = multiply(2, side);
  let size = divide(top2, count + 1);
  let top3 = subtract(side, size);
  let bottom = subtract(count, 1);
  let step = divide(top3, bottom);
  let top4 = subtract(side, size);
  let top = divide(top4, 2);
  let parts = [];
  for (let index = 0; less_than(index, count); index = index + 1) {
    let svg = svgs[index];
    let open_end = svg.indexOf(">");
    let open = svg.slice(0, open_end);
    let view_box = open.match(/viewBox="([^"]*)"/)[1];
    let v = svg.lastIndexOf("</svg>");
    let inner = svg.slice(open_end + 1, v);
    let prefix = "p" + index + "_";
    inner = inner.replace(/id="([^"]*)"/g, 'id="' + prefix + '$1"');
    inner = inner.replace(/url\(#([^)]*)\)/g, "url(#" + prefix + "$1)");
    inner = inner.replace(/href="#([^"]*)"/g, 'href="#' + prefix + '$1"');
    let x = multiply(step, index);
    parts.push(
      '<svg x="' +
        x +
        '" y="' +
        top +
        '" width="' +
        size +
        '" height="' +
        size +
        '" viewBox="' +
        view_box +
        '">' +
        inner +
        "</svg>",
    );
  }
  let composed =
    '<svg width="' +
    side +
    '" height="' +
    side +
    '" viewBox="0 0 ' +
    side +
    " " +
    side +
    '" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    parts.join("") +
    "</svg>";
  return composed;
}
