export function html_scroll_center(player_img_c) {
    let element2 = html_component_element_get(player_img_c);
  element2.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "center",
  });
}
