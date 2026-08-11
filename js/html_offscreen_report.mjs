export function html_offscreen_report() {
  "BROWSER-SERIALIZED - do NOT auto-canonicalize";
  "everything drawn on this page that has fallen off the screen and cannot be scrolled back to. runs inside the page itself, so it reads the sizes the browser actually settled on rather than the ones the code asked for - which is the only way to catch a size that was fine on a laptop and too big on a phone";
  "off the TOP and off the LEFT are always reported, because scrolling only ever moves forwards from nothing: there is no way to reach above the first line or left of the first column, so anything there is simply gone and nothing on the screen says so";
  "off the BOTTOM and off the RIGHT are reported only when nothing can be scrolled to reach them. content below the fold of a page that scrolls is not a fault, it is a page";
  "every comparison here is written the plain way on purpose. this whole function is sent to a browser as text, where none of this repo's names exist, so the canonicalizing pass turning a less-than into a call to a function named less_than would leave code that throws the moment it lands - and it would throw over there, where no gate is reading";
  let width = window.innerWidth;
  let height = window.innerHeight;
  let found = [];
  let selector =
    "body p, body span, body button, body h1, body h2, body h3, body li, body td";
  let all = document.querySelectorAll(selector);
  function scrollable(element, along_y) {
    let node = element;
    while (node) {
      let style = window.getComputedStyle(node);
      let flow = along_y ? style.overflowY : style.overflowX;
      let scrolls = flow == "auto" || flow == "scroll" || flow == "overlay";
      let inner = along_y ? node.scrollHeight : node.scrollWidth;
      let outer = along_y ? node.clientHeight : node.clientWidth;
      if (scrolls && inner - outer > 1) {
        return true;
      }
      node = node.parentElement;
    }
    let page = document.documentElement;
    let inner_page = along_y ? page.scrollHeight : page.scrollWidth;
    let outer_page = along_y ? page.clientHeight : page.clientWidth;
    let scrolls_page = inner_page - outer_page > 1;
    return scrolls_page;
  }
  for (let element of all) {
    let rect = element.getBoundingClientRect();
    let too_small = rect.width < 1 || rect.height < 1;
    if (too_small) {
      continue;
    }
    let style = window.getComputedStyle(element);
    let unseen =
      style.visibility == "hidden" ||
      style.display == "none" ||
      style.opacity == "0";
    if (unseen) {
      continue;
    }
    let text = element.textContent.trim();
    let wordless = text.length < 1;
    if (wordless) {
      continue;
    }
    let edges = [];
    if (rect.top < -1) {
      edges.push("top");
    }
    if (rect.left < -1) {
      edges.push("left");
    }
    if (rect.bottom - height > 1 && !scrollable(element, true)) {
      edges.push("bottom");
    }
    if (rect.right - width > 1 && !scrollable(element, false)) {
      edges.push("right");
    }
    let inside = edges.length < 1;
    if (inside) {
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
