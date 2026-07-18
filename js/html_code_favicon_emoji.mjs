// A favicon built from an emoji — no image file needed. The emoji is drawn as
// text inside an inline SVG data-URI, so the browser-tab icon is self-contained.
export function html_code_favicon_emoji(emoji) {
  let svg =
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>" +
    emoji +
    "</text></svg>";
  let href = "data:image/svg+xml," + svg;
  let r = '<link rel="icon" href="' + href + '">';
  return r;
}
