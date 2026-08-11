export function html_offscreen_report() {
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "everything drawn on this page that has fallen off the screen and cannot be scrolled back to. runs inside the page itself, so it reads the sizes the browser actually settled on rather than the ones the code asked for - which is the only way to catch a size that was fine on a laptop and too big on a phone";
  "off the TOP and off the LEFT are always reported, because scrolling only ever moves forwards from nothing: there is no way to reach above the first line or left of the first column, so anything there is simply gone and nothing on the screen says so";
  "off the BOTTOM and off the RIGHT are reported only when nothing can be scrolled to reach them. content below the fold of a page that scrolls is not a fault, it is a page";
  let width = window.innerWidth;
  let height = window.innerHeight;
  let found = [];
  let selector =
    "body p, body span, body button, body h1, body h2, body h3, body li, body td";
  let all = document.querySelectorAll(selector);
  function scrollable(element, forward, along_y) {
    if (!forward) {
      return false;
    }
    let node = element;
    while (node) {
      let style = window.getComputedStyle(node);
      let flow = along_y ? style.overflowY : style.overflowX;
      let scrolls = flow === "auto" || flow === "scroll" || flow === "overlay";
      let inner = along_y ? node.scrollHeight : node.scrollWidth;
      let outer = along_y ? node.clientHeight : node.clientWidth;
      if (scrolls && inner > outer + 1) {
        return true;
      }
      node = node.parentElement;
    }
    let page = document.documentElement;
    let inner_page = along_y ? page.scrollHeight : page.scrollWidth;
    let outer_page = along_y ? page.clientHeight : page.clientWidth;
    return inner_page > outer_page + 1;
  }
  for (let element of all) {
    let rect = element.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) {
      continue;
    }
    let style = window.getComputedStyle(element);
    if (style.visibility === "hidden" || style.display === "none") {
      continue;
    }
    if (style.opacity === "0") {
      continue;
    }
    let text = element.textContent.trim();
    if (text.length < 1) {
      continue;
    }
    let edges = [];
    if (rect.top < -1) {
      edges.push("top");
    }
    if (rect.left < -1) {
      edges.push("left");
    }
    if (rect.bottom > height + 1 && !scrollable(element, true, true)) {
      edges.push("bottom");
    }
    if (rect.right > width + 1 && !scrollable(element, true, false)) {
      edges.push("right");
    }
    if (edges.length < 1) {
      continue;
    }
    found.push({
      tag: element.tagName.toLowerCase(),
      text: text.slice(0, 60),
      edges,
      top: Math.round(rect.top),
      left: Math.round(rect.left),
      bottom: Math.round(rect.bottom),
      right: Math.round(rect.right),
      width: Math.round(rect.width),
      height: Math.round(rect.height),
    });
  }
  return found;
}
