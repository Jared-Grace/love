import { ffmpeg_gamma_saturation_write } from "./ffmpeg_gamma_saturation_write.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_brighter_swaps_name } from "./song_image_brighter_swaps_name.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { folder_gitignore_name } from "./folder_gitignore_name.mjs";
import { path_join } from "./path_join.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { song_image_kept_asset_path } from "./song_image_kept_asset_path.mjs";
import { web_assets_folder_name } from "./web_assets_folder_name.mjs";
import { lyric_video_song_swaps_path } from "./lyric_video_song_swaps_path.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
export async function song_image_brighter_add(n, gamma, saturation, label) {
  "$plain n";
  "$plain gamma";
  "$plain saturation";
  "$plain label";
  "Offers one more brightened copy of a couplet's published picture on the sandbox page at song_image_brighter, beside the ones already offered, drawn at its own gamma and shown under the label given.";
  "IT EXISTS BECAUSE ONE STRENGTH DOES NOT SUIT EVERY PICTURE. The couplet of the blood on the doorposts came back as should be lighter at the strength that suited the rest: most of it is a black doorway, which a curve fixed at black cannot lift, so the panes around it have to be lifted further than elsewhere before the whole looks lighter. Asking for a second strength for the one couplet leaves the other twelve as they were.";
  "OFFERING THE SAME LABEL AGAIN REDRAWS IT rather than adding a second column of the same name, so it can be run again after a change of mind.";
  "A SATURATION OF ONE KEEPS THE COLOURS AS THE LIFT LEFT THEM; over one strengthens them, which is what a picture lifted hard needs so it does not come out pale.";
  arguments_assert(arguments, 4);
  let name = song_image_brighter_swaps_name();
  let repo = folder_repo_love();
  let r = folder_gitignore_name();
  let folder_after = path_join([r, "song_images_brighter"]);
  let n2 = Number(n);
  let key = song_image_couplet_key(n2);
  let v = String(key);
  let v2 = String(gamma);
  let v3 = String(saturation);
  let after_name = text_combine_multiple([v, "_", v2, "_", v3, ".png"]);
  let after_path = path_join([folder_after, after_name]);
  let n3 = Number(n);
  let asset_path = song_image_kept_asset_path(n3);
  let folder_name = web_assets_folder_name();
  let before = path_join([folder_name, asset_path]);
  let path_from = path_join([repo, before]);
  let path_to = path_join([repo, after_path]);
  await ffmpeg_gamma_saturation_write(path_from, gamma, saturation, path_to);
  let path = lyric_video_song_swaps_path(name);
  let after = null;
  function song_image_brighter_add_offer(data) {
    let swaps = property_get(data, "swaps");
    let swap = list_find_property(swaps, "before", before);
    after = property_get(swap, "after");
    let same = list_find_property_or_null(after, "label", label);
    if (null_is(same)) {
      list_add(after, {
        label,
        path: after_path,
      });
      return;
    }
    same.path = after_path;
  }
  await file_json_transform(path, song_image_brighter_add_offer);
  return after;
}
