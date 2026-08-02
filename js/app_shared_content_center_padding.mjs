import { app_shared_content_center_padding_gap } from "./app_shared_content_center_padding_gap.mjs";
import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
export function app_shared_content_center_padding(component, column) {
  "keep a component FULL WIDTH (so its band, borders, and any scrollbar span the whole window) while pushing its content into a centered column of the given width: horizontal padding grows to (viewport - column)/2 on a wide screen and shrinks to the normal gap on a narrow one. So the box is full width, but the text and buttons inside line up in one column. Viewport-based so a width:100% button inside lands exactly at the column width";
  let gap = app_shared_content_edge_gap();
  app_shared_content_center_padding_gap(component, column, gap);
}
