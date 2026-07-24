export function app_code_arrow_svg() {
  "the derivation arrow DRAWN as inline SVG instead of typed as a glyph, so the head and the shaft are sized independently - a big triangular head on a short line, which no font character can give (scaling a glyph squashes the head and the shaft together). Filled SOLID so it reads bold and black. Fills with currentColor and has exact edges, so it needs none of the baseline nudging or negative margins a text arrow needed. Head is 16 of the 20 units tall; the shaft is a thick short stub";
  let r = `<svg viewBox="0 0 18 20" width="1.17em" height="1.3em" fill="currentColor" aria-hidden="true" style="display:block"><path d="M1 7.5 H9 V2 L17 10 L9 18 V12.5 H1 Z"/></svg>`;
  return r;
}
