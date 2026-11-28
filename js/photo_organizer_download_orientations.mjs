import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_private_path } from "./folder_private_path.mjs";
import { folder_read_paths_async } from "./folder_read_paths_async.mjs";
import { file_read_buffer } from "./file_read_buffer.mjs";
import { jpeg_exif_orientation } from "./jpeg_exif_orientation.mjs";
export async function photo_organizer_download_orientations() {
  ("For each photo $fn ",
    fn_name("photo_organizer_download_all"),
    " wrote, the turn its camera note asks for (see $fn ",
    fn_name("jpeg_exif_orientation"),
    "): answers {counts, sideways}, counts keyed by the number and sideways the names whose note asks for any turn - the photos a site ignoring the note would show turned wrong (human, 2026-11-28: some went up to a claims site sideways).");
  arguments_assert(arguments, 0);
  let folder = folder_private_path("photo_organizer");
  let names = (await folder_read_paths_async(folder)).sort();
  let counts = {};
  let sideways = [];
  for (let name of names) {
    let buffer = await file_read_buffer(name);
    let turn = jpeg_exif_orientation(buffer);
    counts[turn] = (counts[turn] || 0) + 1;
    if (greater_than(turn, 1)) {
      sideways.push(turn + " " + name);
    }
  }
  let r = {
    counts,
    sideways,
  };
  return r;
}
