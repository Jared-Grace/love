import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export function html_event_target_closest(e, selector) {
  const tile_e = e.target.closest(selector);
  let tile = html_component_wrap(tile_e);
  return tile;
}
