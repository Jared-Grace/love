import { html_bounding_client_rect } from "../../../love/public/src/html_bounding_client_rect.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
export function list_skip_map(sbs, sum, mapper) {
  let skipped = list_skip(sbs, sum);
  let mapped2 = list_map(skipped, html_bounding_client_rect);
  return mapped2;
}
