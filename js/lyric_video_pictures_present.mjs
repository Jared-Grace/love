import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function lyric_video_pictures_present(pictures) {
  arguments_assert(arguments, 1);
  ("$plain pictures");
  ("The pictures a lyric video document asks for whose files are actually on this machine, and the names of the ones that are not.");
  ("★ ONE PICTURE THAT IS NOT ON THE DISK STOPS THE WHOLE VIDEO BEING MADE, AND THE WORDS ARE WHAT THE VIDEO IS FOR. Every picture asked for is opened as an input to the render, so a single absent file ends the run with a message about an input rather than about a psalm - and a psalm whose scenes have been written down but not yet drawn then has no video at all, which is the worst of the three possible answers. Leaving the absent ones out renders exactly the video this made before there were any pictures: the words in time over black, which was watched and corrected and is a finished thing rather than a broken one.");
  ("★ THE ONES LEFT OUT ARE HANDED BACK BY NAME RATHER THAN QUIETLY DROPPED. A picture missing from a video is silent - it plays, it is the right length, and the only way to notice is to have known what was meant to stand behind those lines. Naming them is what lets whatever asked for the video say out loud that it is a words-on-black one and which drawings it is still waiting for.");
  ("A picture is asked about by the path the document gives it, because that is the same path the render would open. Working the path out again from the picture's name would be a second spelling of it, and the way two spellings disagree here is a video that renders black where a drawing was sitting on the disk all along.");
  let present = [];
  let missing = [];
  for (let picture of pictures) {
    let there = await file_exists(picture.path);
    if (not(there)) {
      list_add(missing, picture.name);
      continue;
    }
    list_add(present, picture);
  }
  let r = {
    present,
    missing,
  };
  return r;
}
