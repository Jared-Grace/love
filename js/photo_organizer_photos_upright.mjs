import { less_than_equal } from "./less_than_equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_bucket } from "./firebase_bucket.mjs";
import { photo_organizer_storage_path } from "./photo_organizer_storage_path.mjs";
import { jpeg_exif_orientation } from "./jpeg_exif_orientation.mjs";
import { jpeg_buffer_upright } from "./jpeg_buffer_upright.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function photo_organizer_photos_upright() {
  "Turns every photo the organizer keeps online whose camera note asks for a turn, for real, and stores it back under the same name with the note gone - so the file itself is upright, as it looks in the organizer, and a site that ignores the note shows it right too (human, 2026-11-28: the app on rotating should actually rotate the file). Photos asking for no turn are not touched. Answers with the names turned, so asking again answers nothing.";
  arguments_assert(arguments, 0);
  let bucket = await firebase_bucket();
  let [files] = await bucket.getFiles({
    prefix: photo_organizer_storage_path("photos", ""),
  });
  async function straighten(item) {
    let [bytes] = await item.download();
    let turn = jpeg_exif_orientation(bytes);
    if (less_than_equal(turn, 1)) {
      return null;
    }
    let upright = await jpeg_buffer_upright(bytes);
    await item.save(upright, {
      contentType: "image/jpeg",
    });
    let r = item.name;
    return r;
  }
  let turned = await list_map_unordered_async(files, straighten);
  function lambda(name) {
    let neq = not_equal(name, null);
    return neq;
  }
  let r2 = turned.filter(lambda);
  return r2;
}
