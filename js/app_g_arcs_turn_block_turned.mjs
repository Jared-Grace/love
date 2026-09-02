import { each } from "./each.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { app_g_arcs_moved_color } from "./app_g_arcs_moved_color.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_arcs_turn_field } from "./app_g_arcs_turn_field.mjs";
import { app_g_arcs_field_shaped } from "./app_g_arcs_field_shaped.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function app_g_arcs_turn_block_turned({
  held_count,
  v,
  changed,
  moved_count,
  unechoed,
  block,
  bench,
  opener,
  moved,
  held,
  voice_color,
  before,
  reference,
  scripture,
  after,
  believes,
}) {
  arguments_assert(arguments, 1);
  let kept = not_equal(held_count, 0);
  let said = text_combine_multiple(["turn ", v]);
  if (changed) {
    let counted = String(moved_count);
    said = text_combine_multiple([said, "  ·  ", counted, " moved"]);
  }
  if (kept) {
    let counted_kept = String(held_count);
    said = text_combine_multiple([said, "  ·  ", counted_kept, " kept"]);
  }
  ("THE PASSAGE MARK IS SAID IN THE HEADING BESIDE THE OTHER TWO, because all three answer the one question a reviewer is asking of a turn before they read it - is there a reason to stop here. A mark of its own further down would be read after the line rather than before it, which is the wrong way round for something whose whole purpose is to save the reading.");
  if (unechoed) {
    said = text_combine_multiple([said, "  ·  nothing from the passage"]);
  }
  let heading = html_div_text(block, said);
  html_style_assign(heading, {
    "font-size": app_shared_font_size_label(),
    "font-weight": "bold",
    opacity: "0.6",
  });
  if (changed) {
    html_style_assign(heading, {
      color: app_g_arcs_moved_color(),
      opacity: "1",
    });
  }
  ("IT IS BROUGHT FORWARD BUT NOT COLOURED, because the colour on this heading already means one thing - that the line has moved since the reader last saw it - and a second meaning on the same colour would leave a reviewer unable to tell which of the two a heading is telling them. Full strength on a grey heading is enough to catch an eye running down a column of faded ones.");
  if (unechoed) {
    html_style_assign(heading, {
      opacity: "1",
    });
  }
  let marks = property_get(bench, "marks");
  each(
    [
      {
        name: "opener",
        value: opener,
        block,
        moved,
        held,
        voice_color,
        marks,
      },
      {
        name: "before",
        value: before,
        block,
        moved,
        held,
        voice_color,
        marks,
      },
      {
        name: "reference",
        value: reference,
        block,
        moved,
        held,
        voice_color,
        marks,
      },
    ],
    app_g_arcs_turn_field,
  );
  app_g_arcs_field_shaped(
    block,
    "scripture",
    scripture,
    "scripture",
    voice_color,
  );
  let reacted = text_empty_not_is(after);
  if (reacted) {
    app_g_arcs_turn_field({
      name: "after",
      value: after,
      block,
      moved,
      held,
      voice_color,
      marks,
    });
  }
  let turned = text_empty_not_is(believes);
  let r = {
    marks,
    turned,
  };
  return r;
}
