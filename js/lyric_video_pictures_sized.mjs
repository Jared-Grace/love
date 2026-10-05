import { arguments_assert } from "./arguments_assert.mjs";
import { picture_size } from "./picture_size.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function lyric_video_pictures_sized(pictures) {
  arguments_assert(arguments, 1);
  ("$plain pictures");
  ("The pictures of a lyric video, each one answered back with how many pixels across and down it is, so the instruction that moves it knows where the picture ends and its see-through margin begins.");
  ("★ THE SIZE IS ASKED OF THE FILE AT RENDER TIME AND NEVER WRITTEN INTO THE DOCUMENT. A picture is redrawn, sharpened and recut long after its scene is written down, and a size stored beside it would go on describing the picture it replaced.");
  ("Each picture comes back as a new object with everything it had plus its size, so the list handed in is left as it was.");
  async function sized(picture) {
    let size = await picture_size(picture.path);
    let r = {
      ...picture,
      size,
    };
    return r;
  }
  let answered = await list_map_async(pictures, sized);
  return answered;
}
