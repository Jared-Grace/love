import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { availability_editor_add_button } from "./availability_editor_add_button.mjs";
export function availability_editor_preview_heading(r2, parent, choose) {
  arguments_assert(arguments, 3);
  let grid_holder = property_get(r2, "grid_holder");
  let jump = property_get(r2, "jump");
  let week_label = property_get(r2, "week_label");
  let button_records = property_get(r2, "button_records");
  let week_start = property_get(r2, "week_start");
  let chosen = property_get(r2, "chosen");
  let panel = app_shared_container_blue(parent);
  html_div_text(panel, "Repeat these times");
  availability_editor_add_button(
    "daily",
    "Daily",
    choose,
    panel,
    button_records,
  );
  availability_editor_add_button(
    "weekly",
    "Weekly",
    choose,
    panel,
    button_records,
  );
  availability_editor_add_button(
    "monthly",
    "Monthly",
    choose,
    panel,
    button_records,
  );
  availability_editor_add_button(
    "once",
    "One time",
    choose,
    panel,
    button_records,
  );
  let preview_heading = html_div_text(parent, "Busy times you'll add");
  let r = {
    grid_holder,
    jump,
    week_label,
    button_records,
    week_start,
    chosen,
    preview_heading,
  };
  return r;
}
