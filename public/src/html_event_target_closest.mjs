import { html_component_wrap } from "../../../love/public/src/html_component_wrap.mjs";
export function html_event_target_closest(e, c) {
  const tile_e = e.target.closest(c);
  let tile = html_component_wrap(tile_e);
  return tile;
}
