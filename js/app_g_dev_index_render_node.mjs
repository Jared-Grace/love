import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { app_g_dev_index_leaf_card } from "./app_g_dev_index_leaf_card.mjs";
import { app_g_dev_index_index_card } from "./app_g_dev_index_index_card.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { not } from "./not.mjs";
import { app_g_dev_index_open_persist } from "./app_g_dev_index_open_persist.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function app_g_dev_index_render_node(
  parent,
  path,
  label,
  node,
  open_paths,
) {
  arguments_assert(arguments, 5);
  let child_labels = object_property_names(node.children).sort();
  if (equal(child_labels.length, 0)) {
    app_g_dev_index_leaf_card(parent, label, node.hash);
    return;
  }
  let card = app_g_dev_index_index_card(parent);
  let header = html_div_text_bold(card, label + " ›");
  html_cursor_pointer(header);
  let body = html_div(card);
  let open = {
    on: open_paths.has(path),
  };
  if (open.on) {
    html_display_block(body);
  } else {
    html_display_none(body);
  }
  function toggle() {
    open.on = not(open.on);
    if (open.on) {
      html_display_block(body);
      open_paths.add(path);
    } else {
      html_display_none(body);
      open_paths.delete(path);
    }
    app_g_dev_index_open_persist(open_paths);
  }
  html_on_click(header, toggle);
  if (node.hash) {
    app_g_dev_index_leaf_card(body, "→ " + label, node.hash);
  }
  for (let cl of child_labels) {
    app_g_dev_index_render_node(
      body,
      path + "/" + cl,
      cl,
      node.children[cl],
      open_paths,
    );
  }
}
