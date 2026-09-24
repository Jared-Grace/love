import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_brighter_swaps_name } from "./song_image_brighter_swaps_name.mjs";
import { song_image_brighter_gamma } from "./song_image_brighter_gamma.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { path_join } from "./path_join.mjs";
import { folder_gitignore_name } from "./folder_gitignore_name.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { lyric_video_song_swaps_read } from "./lyric_video_song_swaps_read.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { song_image_kept_asset_path } from "./song_image_kept_asset_path.mjs";
import { web_assets_folder_name } from "./web_assets_folder_name.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { text_combine } from "./text_combine.mjs";
import { ffmpeg_gamma_write } from "./ffmpeg_gamma_write.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_add } from "./list_add.mjs";
import { lyric_video_song_swaps_path } from "./lyric_video_song_swaps_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function song_image_brighter_write(numbers_comma) {
  "$plain numbers_comma";
  "Draws a brighter copy of each named couplet's published picture, and writes the list that sets every one beside its brighter copy on the sandbox page at song_image_brighter, keeping whatever was already accepted there.";
  "THE COPY STARTS FROM THE PUBLISHED PICTURE AND NOT FROM THE ATTEMPT IT WAS CUT FROM, because the published one is what a reader sees and so is what the brighter one has to be judged against. Brightened from the full-colour attempt instead, the two would differ in their colours as well as their brightness, and a reader choosing between them would be choosing between two changes at once.";
  "THE COPIES ARE KEPT OUT OF THE REPO, in the ignored folder beside the attempts. Nothing is published by this; a brighter picture reaches a reader only once it has been accepted and put in the published one's place.";
  "THE LIST IS THE SAME SHAPE AS A SONG'S PICTURES ON OFFER AND LIVES BESIDE THEM, so the page choosing among them is the one that already chooses a song's backgrounds, and a press means the same thing on both. What was accepted is carried over from the list already there, so drawing again after a change of brightness never throws away an answer somebody gave.";
  "THE COUPLETS ARE NAMED BY THE CALLER, because which pictures were too dark is a judgment made by looking at them, not something this can read off the disk.";
  arguments_assert(arguments, 1);
  let name = song_image_brighter_swaps_name();
  let gamma = song_image_brighter_gamma();
  let repo = folder_repo_love();
  let r = folder_gitignore_name();
  let folder_after = path_join([r, "song_images_brighter"]);
  let dir = path_join([repo, folder_after]);
  await folder_exists_ensure(dir);
  let existing = await lyric_video_song_swaps_read(name);
  let swaps_before = null_is(existing) ? [] : property_get(existing, "swaps");
  let numbers = text_split_comma(numbers_comma);
  let swaps = [];
  for (let number of numbers) {
    let n = Number(number);
    let asset_path = song_image_kept_asset_path(n);
    let folder_name = web_assets_folder_name();
    let before = path_join([folder_name, asset_path]);
    let key = song_image_couplet_key(n);
    let left = String(key);
    let after_name = text_combine(left, ".png");
    let after_path = path_join([folder_after, after_name]);
    let path_from = path_join([repo, before]);
    let path_to = path_join([repo, after_path]);
    await ffmpeg_gamma_write(path_from, gamma, path_to);
    let swap_before = list_find_property_or_null(
      swaps_before,
      "before",
      before,
    );
    let chosen = null_is(swap_before)
      ? []
      : property_get_or(swap_before, "chosen", []);
    list_add(swaps, {
      n,
      before,
      after: [
        {
          label: "brighter",
          path: after_path,
        },
      ],
      chosen,
    });
  }
  let path = lyric_video_song_swaps_path(name);
  await file_overwrite_json(path, {
    swaps,
  });
  return swaps;
}
