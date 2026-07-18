export function html_page_scrolls() {
  "true when the rendered content is taller than the viewport, so the page needs to scroll to see it all";
  let element = document.documentElement;
  let content_height = element.scrollHeight;
  let view_height = window.innerHeight;
  let scrolls = content_height > view_height;
  return scrolls;
}
