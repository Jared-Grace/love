import { arguments_assert } from "./arguments_assert.mjs";
import { color_palette_outside_baseline_path } from "./color_palette_outside_baseline_path.mjs";
import { colors_palette_outside_files } from "./colors_palette_outside_files.mjs";
import { baseline_names_change } from "./baseline_names_change.mjs";
import { property_get } from "./property_get.mjs";
import { js_colors_written_screen } from "./js_colors_written_screen.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { js_file_color_palette_is } from "./js_file_color_palette_is.mjs";
import { text_without_ending } from "./text_without_ending.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { function_literal_route } from "./function_literal_route.mjs";
import { each_async } from "./each_async.mjs";
export async function colors_palette_outside_repair() {
  "Every file that newly breaks the palette rule pointed at the palette function that already holds the colour it spells, one commit per file and colour, answered for by what was routed, what had nobody to route it to, and what the gate still complains about afterwards.";
  "★ IT FINDS ITS OWN SET FROM THE GATE'S OWN TWO READINGS, so it cannot drift from what is actually red. The files are the sweep the gate runs, and which of them count as new is the ratchet's own comparison against the same baseline file - not a list typed in here. A list typed in here would be a second opinion about what is broken, and the two would disagree the first time somebody added a colour.";
  "A file the baseline already records is passed over on purpose. Those are allowed their own spellings until somebody moves them, and routing them would be a sweep of hundreds of files - including files other people are editing right now - to answer a complaint the gate is not making.";
  "A colour no palette function spells is reported rather than guessed at. Which name a new colour should carry, and whether it is really a new colour or a shade beside one already named, is a judgment about colour and belongs to a person; what comes back names the spelling and the files waiting on it, which is exactly what authoring one needs.";
  "A colour two palette functions both spell is reported too, and for the same reason: picking which of the two a file meant is reading the file, not reading the colour.";
  "Each file and colour is committed as its own route the moment it lands, because this rewrites many files and a run that commits at the end loses its name to whichever peer sweeps the folder first.";
  "The gate's readings are asked again at the end rather than trusted, so what comes back says whether the repair actually worked instead of saying what it attempted.";
  arguments_assert(arguments, 0);
  let path = color_palette_outside_baseline_path();
  let files = await colors_palette_outside_files();
  let change = await baseline_names_change(files, path);
  let added = property_get(change, "added");
  let written = await js_colors_written_screen();
  let spellings = object_property_names(written);
  let jobs = [];
  let unowned = [];
  let shared = [];
  function spelling_read(spelling) {
    let names = property_get(written, spelling);
    let owners = [];
    let offenders = [];
    function name_read(name) {
      let palette_is = js_file_color_palette_is(name);
      let f_name = text_without_ending(name, ".mjs");
      if (palette_is) {
        list_add(owners, f_name);
        return;
      }
      let newly = list_includes(added, name);
      if (not(newly)) {
        return;
      }
      list_add(offenders, f_name);
    }
    each(names, name_read);
    let none = list_empty_is(offenders);
    if (none) {
      return;
    }
    let count = list_size(owners);
    let one = equal(count, 1);
    if (not(one)) {
      let zero = equal(count, 0);
      let where = zero ? unowned : shared;
      list_add(where, {
        spelling,
        owners,
        files: offenders,
      });
      return;
    }
    let getter_f_name = list_first(owners);
    function offender_note(f_name) {
      list_add(jobs, {
        f_name,
        getter_f_name,
        spelling,
      });
    }
    each(offenders, offender_note);
  }
  each(spellings, spelling_read);
  await ai_git_noted();
  let routed = [];
  async function job_run(job) {
    let f_name = property_get(job, "f_name");
    let getter_f_name = property_get(job, "getter_f_name");
    let done = await function_call_commit(function_literal_route, [
      f_name,
      getter_f_name,
    ]);
    list_add(routed, done);
  }
  await each_async(jobs, job_run);
  let files_after = await colors_palette_outside_files();
  let change_after = await baseline_names_change(files_after, path);
  let left = property_get(change_after, "added");
  let r = {
    routed,
    unowned,
    shared,
    left,
  };
  return r;
}
