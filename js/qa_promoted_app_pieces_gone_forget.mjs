import { arguments_assert } from "./arguments_assert.mjs";
import { qa_promoted } from "./qa_promoted.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { qa_promoted_app_write } from "./qa_promoted_app_write.mjs";
export async function qa_promoted_app_pieces_gone_forget(app_name) {
  "$plain app_name";
  "Drops from one named app's note every piece it names that is no longer in the folder at all, and answers with the names it dropped";
  "ONE APP RATHER THAN ALL OF THEM, because whoever takes a piece away takes away one app's piece, and the change to the note belongs in that app's own commit. Its neighbour that sweeps every app is right for a clearing nobody owns, but called from inside one app's work it would carry other apps' note changes out under this app's name - and the log would then say this app forgot pieces it never had.";
  "It works out its own set within that app rather than being handed one. What was taken away is asked of the folder, so a name handed in for a file that is still standing cannot be used to make the note stop mentioning a file that is there - which would hide a piece whose contents had changed, and a changed piece is the whole disagreement the note exists to catch.";
  "A name is only ever taken away, and no short word is ever written for a file that is present, so this forgives a name for nothing and nothing else.";
  "An app the note says nothing about is left alone and answered as having lost nothing, because an app with no note is not waiting to go out and there is nothing there to put right.";
  "A note with nothing missing is left unwritten, so this can be asked again over a note it has already put right and change neither the file nor its answer.";
  arguments_assert(arguments, 1);
  let promoted = await qa_promoted();
  let note = property_get_or_null(promoted, app_name);
  let unnoted = null_is(note);
  if (unnoted) {
    let r = [];
    return r;
  }
  let hashes = property_get(note, "hashes");
  let piece_names = object_property_names(hashes);
  let folder = folder_public_absolute();
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
  }
  return gone;
}
