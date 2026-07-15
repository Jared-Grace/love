export async function html_scroll_settled(element) {
  let settle = element.scroll_animation_settle;
  let exists = settle !== undefined;
  if (exists) {
    await settle;
  }
}
