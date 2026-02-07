import { html_scroll_center_generic_wait } from "../../../love/public/src/html_scroll_center_generic_wait.mjs";
export async function html_scroll_center_generic(component, behavior) {
  const block = "center";
  let el = await html_scroll_center_generic_wait(component);
  el.scrollIntoView({
    behavior,
    block: block,
    inline: "center",
  });
}
