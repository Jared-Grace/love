import { html_bounding_client_rect } from "../../../love/public/src/html_bounding_client_rect.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_html_bounding_client_rect(rights_cloned) {
  let mapped = list_map(rights_cloned, html_bounding_client_rect);
  return mapped;
}
