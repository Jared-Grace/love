import { js_colors_written_screen } from "./js_colors_written_screen.mjs";
import { list_all } from "./list_all.mjs";
import { js_file_color_palette_is } from "./js_file_color_palette_is.mjs";
import { and } from "./and.mjs";
import { not } from "./not.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { less_than } from "./less_than.mjs";
import { color_parse } from "./color_parse.mjs";
import { colors_near_miss_is } from "./colors_near_miss_is.mjs";
export async function colors_near_miss_findings() {
  "every pair of screen colours in js that read as the same colour without being it — two palette colours are left alone, since the palette is where such a choice is made on purpose, and game artwork is left out — each finding naming both spellings, how far apart they are, and the files on each side. Sorted so the answer is the same on every run, which is what lets a ratchet compare today's list against yesterday's.";
  let written = await js_colors_written_screen();
  let spellings = object_property_names(written).sort();
  let readable = [];
  for (let spelling of spellings) {
    let parsed = color_parse(spelling);
    if (parsed) {
      readable.push({
        spelling,
        parsed,
      });
    }
  }
  let findings = [];
  for (let i = 0; less_than(i, readable.length); i++) {
    for (let j = i + 1; less_than(j, readable.length); j++) {
      let left = readable[i];
      let right = readable[j];
      let near = colors_near_miss_is(left.parsed, right.parsed);
      let palette_left = list_all(
        written[left.spelling],
        js_file_color_palette_is,
      );
      let palette_right = list_all(
        written[right.spelling],
        js_file_color_palette_is,
      );
      let palette_both = and(palette_left, palette_right);
      let right2 = not(palette_both);
      if (and(near, right2)) {
        findings.push({
          pair: left.spelling + " ~ " + right.spelling,
          files: written[left.spelling],
          files_other: written[right.spelling],
        });
      }
    }
  }
  return findings;
}
