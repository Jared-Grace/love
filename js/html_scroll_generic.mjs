import { html_scroll_generic_wait } from "./html_scroll_generic_wait.mjs";
export async function html_scroll_generic(component, behavior, block) {
  let el = await html_scroll_generic_wait(component);
  el.scrollIntoView({
    behavior,
    block: block,
    inline: "center",
  });
}
