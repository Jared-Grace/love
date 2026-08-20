export function app_shared_arrow_svg(degrees) {
  arguments_assert(arguments, 1);
  "an arrow DRAWN as inline SVG instead of typed as a glyph, so the head and the shaft are sized independently - a big triangular head on a short line, which no font character can give (scaling a glyph squashes the head and the shaft together). Filled SOLID so it reads bold. Fills with currentColor and has exact edges, so it needs none of the baseline nudging or negative margins a text arrow needed. Head is 16 of the 20 units tall; the shaft is a thick short stub";
  ("It is drawn once, pointing right, and TURNED to point anywhere else. A drawing that took");
  ("a while to get right is worth exactly one copy - four hand-drawn arrows would be four");
  ("chances for one of them to sit a pixel off, and a later improvement to the shape would");
  ("have to be made four times and would not be.");
  ("The turn is given in degrees clockwise from rightwards, so 0 is east, 90 is south, 180");
  ("is west and 270 is north - the same way round as a compass and as the grid, whose rows");
  ("grow downwards.");
  let r = `<svg viewBox="0 0 18 20" width="1.17em" height="1.3em" fill="currentColor" aria-hidden="true" style="display:block;transform:rotate(${degrees}deg)"><path d="M1 7.5 H9 V2 L17 10 L9 18 V12.5 H1 Z"/></svg>`;
  return r;
}
