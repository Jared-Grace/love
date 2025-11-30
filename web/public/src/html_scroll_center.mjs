export function html_scroll_center(element2) {
  element2.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}
