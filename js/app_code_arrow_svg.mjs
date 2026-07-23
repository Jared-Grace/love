export function app_code_arrow_svg() {
  "the derivation arrow DRAWN as inline SVG instead of typed as a glyph, so the head and the shaft are sized independently - a big head on a short line, which no font character can give (scaling a glyph squashes the head and the shaft together). Stroked rather than filled so it reads LIGHT, like a thin line arrow, while the open head still spans most of the height. Uses currentColor and has exact edges, so it needs none of the baseline nudging or negative margins a text arrow needed";
  let shaft = "M2 10 H10";
  let head = "M10 3.5 L16.5 10 L10 16.5";
  let d = `${shaft} ${head}`;
  let r = `<svg viewBox="0 0 18 20" width="1.17em" height="1.3em" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block"><path d="${d}"/></svg>`;
  return r;
}
