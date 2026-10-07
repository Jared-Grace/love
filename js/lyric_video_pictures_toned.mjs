import { fn_name } from "./fn_name.mjs";
import { lyric_video_picture_tone_strength } from "./lyric_video_picture_tone_strength.mjs";
import { path_join } from "./path_join.mjs";
import { folder_gitignore_name } from "./folder_gitignore_name.mjs";
import { path_stale_is } from "./path_stale_is.mjs";
import { image_tone_toward_full_write } from "./image_tone_toward_full_write.mjs";
export async function lyric_video_pictures_toned(pictures) {
  "The pictures of a lyric video as they should be drawn behind the words: each the same picture with its path moved to a copy toned toward the whole range of dark, light and colour, the copy made first if it is missing or older than the picture it came from.";
  "★ THE PICTURE THE DOCUMENT NAMES IS NEVER CHANGED. The copy sits in its own folder named after the strength, so a different strength, or none, is had by changing one number, and the original is always there to judge the copy against.";
  "★ A COPY IS REMADE BY DATE, the same way a video is: a picture replaced under the same name is newer than its copy, and the copy is made again rather than the old picture going on being shown.";
  "Everything else about each picture - when it starts and ends, which line it sits on - is kept as it was, so the video is timed exactly as it would have been without the toning.";
  let strength = lyric_video_picture_tone_strength();
  let toned = [];
  for (let picture of pictures) {
    let r = folder_gitignore_name();
    let v = String(strength);
    let path_toned = path_join([
      r,
      fn_name("lyric_video_pictures_toned"),
      v,
      picture.path,
    ]);
    let stale = await path_stale_is(path_toned, [picture.path]);
    if (stale) {
      await image_tone_toward_full_write(picture.path, strength, path_toned);
    }
    let copy = {
      ...picture,
      path: path_toned,
    };
    toned.push(copy);
  }
  return toned;
}
