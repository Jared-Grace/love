// A bold downward arrow drawn as inline SVG (vector, crisp at any size). Fills
// with currentColor so the .arrow color rule tints it. Points down to sit
// between the vertically stacked before/after code blocks.
export function example_arrow_svg() {
  let r = `<svg viewBox="0 0 24 24" width="42" height="42" fill="currentColor" aria-hidden="true"><path d="M9 2 H15 V13 H20 L12 22 L4 13 H9 Z"/></svg>`;
  return r;
}
