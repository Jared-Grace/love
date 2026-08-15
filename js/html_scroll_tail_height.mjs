export function html_scroll_tail_height() {
  "the space a scrolling page owes below its last line, as a CSS length - one line of breathing room plus the strip of browser bar that comes and goes, so the end of the page can always be scrolled clear of a bar sitting over it. on a desktop that strip is nothing, so this is the breathing room and no more";
  let v = "calc(1rem + 100lvh - 100svh)";
  return v;
}
