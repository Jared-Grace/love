import { js_colors_written_screen } from "./js_colors_written_screen.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { colors_palette_outside_files } from "./colors_palette_outside_files.mjs";
import { color_palette_outside_baseline_path } from "./color_palette_outside_baseline_path.mjs";
import { baseline_names_gate_generic } from "./baseline_names_gate_generic.mjs";
import { fn_name } from "./fn_name.mjs";
export async function color_palette_outside_gate_run() {
  "QA gate for the palette rule: a screen colour is spelled in one of the app_shared_color_ functions and asked for everywhere else, with no exceptions. A colour spelled in place is a choice nobody else can see, so the next screen picks a shade beside it, and the near miss gate only notices after the fact. Game artwork is left out. Measured against the baseline file of files that already spelled their own colours, so the rule binds new code today; a file the baseline does not list fails, and a listed file that has moved onto the palette fails too, so the list can only shrink.";
  let files = await colors_palette_outside_files();
  let path = color_palette_outside_baseline_path();
  let name_write = fn_name("color_palette_outside_baseline_write");
  let result = await baseline_names_gate_generic(
    files,
    path,
    "these files spell a screen colour of their own — ask an app_shared_color_ function for it, adding one to the palette if none fits",
    name_write,
  );
  let written = await js_colors_written_screen();
  let spellings = object_property_names(written);
  let added = property_get(result, "added");
  let stale = property_get(result, "stale");
  let r = {
    spellings: list_size(spellings),
    added,
    stale,
  };
  return r;
}
