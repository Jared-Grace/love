import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { qa_promoted_app_write } from "./qa_promoted_app_write.mjs";
export async function qa_promoted_pieces_gone_forget() {
  "Drops from the note of waiting apps every piece it names that is no longer in the folder at all, and says which apps lost which names";
  "A note of what an app came out as is checked against what is standing there, so a name in it for a file that has since been taken away makes the app unable to account for itself - and one app that cannot account for itself refuses the sending of every app waiting beside it. Measured on the day this was written: a peer's clearing of leftover script files took pieces out of sixteen apps' notes at once, and the refusal that followed named all sixteen and not the one clearing that caused it";
  "It only ever takes a name away, and never writes a short word for a file that is there. So a piece whose contents have changed goes on disagreeing with what was written down and goes on holding up the sending, which is the disagreement that matters - the whole of what this forgives is a name for nothing";
  "It finds its own set. Which apps a clearing touched is not something anybody remembers, and a list handed in would be a reading of the folder from a moment earlier, by which time another build has written into it";
  "A note with nothing missing is left alone, so this can be run again over a note it has already put right and change nothing";
  "The pieces of a path are handed over as one list. The first writing of this handed them over side by side instead, which is a second argument nothing reads: what got joined then was the letters of the folder one at a time, so every question about a file was asked of a place that is not there and came back no. Nothing complained, and the whole note was emptied of names for files that were sitting right there. So a path here is built from a list, and the proof that it is the right path is a file known to be present answering yes";
  arguments_assert(arguments, 0);
  let promoted = await qa_promoted();
  let app_names = object_property_names(promoted);
  let folder = folder_public_absolute();
  let forgotten = [];
  for (let app_name of app_names) {
    let note = property_get(promoted, app_name);
    let hashes = property_get(note, "hashes");
    let piece_names = object_property_names(hashes);
    let gone = [];
    let kept = {};
    for (let piece_name of piece_names) {
      let f_path = path_join([folder, piece_name]);
      let present = await file_exists(f_path);
      if (present) {
        let hash = property_get(hashes, piece_name);
        property_set(kept, piece_name, hash);
      } else {
        list_add(gone, piece_name);
      }
    }
    let empty = list_empty_is(gone);
    if (not(empty)) {
      let commit = property_get(note, "commit");
      await qa_promoted_app_write(app_name, commit, kept);
      list_add(forgotten, {
        app: app_name,
        gone,
      });
    }
  }
  return forgotten;
}
