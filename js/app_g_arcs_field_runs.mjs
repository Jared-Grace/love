import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_arcs_moved_color } from "./app_g_arcs_moved_color.mjs";
import { app_g_arcs_field_row } from "./app_g_arcs_field_row.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_arcs_mark_row_current_set } from "./app_g_arcs_mark_row_current_set.mjs";
import { equal } from "./equal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { each } from "./each.mjs";
export function app_g_arcs_field_runs(
  parent,
  name,
  runs,
  shape,
  voice_color,
  gone,
) {
  "$plain name";
  "$plain shape";
  "$plain voice_color";
  "$plain gone";
  "One half of a comparison drawn as a row: the stretches this line shares with the other one drawn exactly as an unchanged line would be, the stretches that moved marked in the mark colour and struck through where they are being taken away, and a bar down the whole row saying it is part of a pair.";
  "THE SHARED STRETCHES ARE GIVEN NO STYLING AT ALL, and that is the whole design rather than an omission. The row is already dressed in the shape of its field, so untouched words inherit it and come out identical on both lines of the pair - which means the two lines line up word for word to the eye, and everything that stands out is a real difference.";
  "WHAT IS LEAVING IS STRUCK THROUGH AND WHAT IS ARRIVING IS NOT, because the mark colour alone says only that a stretch is one of the two. Both lines of a pair carry marked stretches, they sit one directly above the other, and a reader glancing at either needs to know without counting which of them is the older.";
  "THE MARKED STRETCHES ARE BOLD AS WELL AS COLOURED, because a colour is the one mark some readers do not get. Anybody reading this page on a bad screen, or not seeing that particular orange, still has weight and a line through the words, so the comparison never rests on the colour by itself.";
  "THE BAR IS DRAWN HERE BECAUSE EVERY ROW DRAWN AS RUNS IS HALF OF A COMPARISON, so there is no case where one is wanted without it. Asked for separately afterwards it was forgotten on whichever row was added last, and a changed line with no bar on it is indistinguishable at a skim from the lines around it that never moved.";
  "QUOTATION MARKS SIT OUTSIDE THE COMPARISON. They are the page saying somebody is speaking, not anything anybody wrote, so marking them as moved would report a change that was never made - and dropping them from a spoken line that moved would make it the only spoken line on the page not shown as speech.";
  "THE WASH BEHIND THE ROW IS ASKED FOR RATHER THAN SPELLED, and asked for in its not-current state. A moved row is dressed a second way while the tour is standing on it, and the two shades have to be written beside each other or clearing the one restores a colour that has since moved on - so this says which state the row starts in and nothing about what either state looks like.";
  arguments_assert(arguments, 6);
  let mark_color = app_g_arcs_moved_color();
  let app_g_arcs_field_row_answer = app_g_arcs_field_row(
    parent,
    name,
    shape,
    voice_color,
    gone,
  );
  let row = property_get(app_g_arcs_field_row_answer, "row");
  let written = property_get(app_g_arcs_field_row_answer, "written");
  html_style_assign(row, {
    "border-left": text_combine_multiple(["4px solid ", mark_color]),
    "padding-left": "0.5rem",
    "margin-left": "-0.15rem",
  });
  app_g_arcs_mark_row_current_set(row, false);
  let spoken = equal(shape, "spoken");
  if (spoken) {
    html_span_text(written, "“");
  }
  function run_span(run) {
    let text = property_get(run, "text");
    let changed = property_get(run, "changed");
    let span = html_span_text(written, text);
    if (changed) {
      html_style_assign(span, {
        color: mark_color,
        "font-weight": "bold",
        "background-color": "rgba(180,83,10,0.16)",
        "border-radius": "0.15rem",
      });
    }
    let struck = changed && gone;
    if (struck) {
      html_style_assign(span, {
        "text-decoration": "line-through",
      });
    }
  }
  each(runs, run_span);
  if (spoken) {
    html_span_text(written, "”");
  }
  return row;
}
