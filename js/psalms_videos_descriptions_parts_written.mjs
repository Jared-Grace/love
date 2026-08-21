import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_descriptions_parts_cut } from "./psalms_videos_descriptions_parts_cut.mjs";
import { psalms_videos_descriptions_payload_parts_path } from "./psalms_videos_descriptions_payload_parts_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export async function psalms_videos_descriptions_parts_written(
  videos,
  letters_most,
) {
  "$plain videos";
  "$plain letters_most";
  "Cuts the songs handed to it into pieces no longer than the letters asked for, writes the pieces down as the one list of them, and says what was written.";
  arguments_assert(arguments, 2);
  ("IT IS THE HALF THE TWO COMMANDS ALWAYS SHARED. One cuts every song there is and one cuts only the songs youtube still wants, and that difference is the whole of what separates them - the cutting, where the pieces go, and what is reported back were the same run of work written out twice.");
  ("THE PLACE THE PIECES GO IS DECIDED HERE AND NOWHERE ELSE, which is the point of collapsing it rather than the incidental benefit. There is exactly one list of pieces on purpose: a second list where one of them is stale is how a piece already pasted gets pasted again. Two callers each naming that path themselves is two chances for one of them to be pointed somewhere else, and nothing would go red the day it happened.");
  ("THE SIZES ARE COUNTED BECAUSE A PIECE COUNT ALONE CANNOT BE READ. Nine pieces says nothing about whether the sitting is an hour or an afternoon, and the same nine pieces can hold four songs or ninety. What a person about to sit down and paste actually wants to know is how much is in each one.");
  ("It reports the songs it was given rather than counting them itself from anywhere, so the number is about what was actually cut. A caller that filtered its list before handing it over is asking about the filtered list, and a count reached any other way would quietly answer about the wrong one.");
  let parts = psalms_videos_descriptions_parts_cut(videos, letters_most);
  let path = psalms_videos_descriptions_payload_parts_path();
  await file_overwrite_json(path, parts);
  let sizes = [];
  for (let one of parts) {
    let size = list_size(one);
    list_add(sizes, size);
  }
  let r = {
    path,
    parts: list_size(parts),
    videos: list_size(videos),
    videos_by_part: sizes,
  };
  return r;
}
