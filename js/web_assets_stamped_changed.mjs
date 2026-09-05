import { arguments_assert } from "./arguments_assert.mjs";
import { web_assets_stamped_path } from "./web_assets_stamped_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { web_assets_sizes } from "./web_assets_sizes.mjs";
import { list_difference } from "./list_difference.mjs";
import { web_assets_version } from "./web_assets_version.mjs";
export async function web_assets_stamped_changed() {
  "What is different between the assets on the disk now and the assets as they stood when the version stamp was last set - the lines that appeared, the lines that went, and both stamps.";
  "A file that was drawn again shows up in both lists at once, once at its old length and once at its new one, which is the honest reading: the record does not know what a redraw is, only that this file is not the file that was written down.";
  "NO RECORD AT ALL READS AS AN EMPTY ONE rather than as a refusal, so that the first writing of it works like every later one. Refused instead, the record could only be made by hand, and a record made by hand is not the one the writer would have written.";
  arguments_assert(arguments, 0);
  let path = web_assets_stamped_path();
  let record = {
    stamp: null,
    lines: [],
  };
  let there = await file_exists(path);
  if (there) {
    record = await file_read_json(path);
  }
  let stamped = property_get(record, "stamp");
  let lines_stamped = property_get(record, "lines");
  let lines = await web_assets_sizes();
  let added = list_difference(lines, lines_stamped);
  let gone = list_difference(lines_stamped, lines);
  let stamp = web_assets_version();
  let r = {
    stamp,
    stamped,
    added,
    gone,
  };
  return r;
}
