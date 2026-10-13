export function html_scroll_window_top_get() {
  "How far down the whole page has been scrolled, for a page that scrolls as a whole rather than inside a box of its own.";
  let scroll_top = window.scrollY;
  return scroll_top;
}
