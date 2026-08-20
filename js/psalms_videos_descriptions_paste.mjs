import { youtube_video_descriptions_paste } from "./youtube_video_descriptions_paste.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { psalms_videos_descriptions_payload_part } from "./psalms_videos_descriptions_payload_part.mjs";
export async function psalms_videos_descriptions_paste(part_number) {
  "Everything one piece of the work needs, as a single run of text to be pasted into a signed-in studio page: the helpers, the songs of that piece with their words, and the one line that sets them going.";
  "It is one paste rather than three because a person doing this eight times over will one day paste two of three and believe it is running. Handing over a whole piece means the only way to do it wrong is not to do it.";
  "Only the address of a song and the words to go under it are carried across. The title is what the words were worked out from and is not needed again, and sending it would have studio told a name it is not being asked to change.";
  "What the paste is made of lives next door, because a single song wanted on its own as a first careful try needs the same text around it and differs only in the list.";
  arguments_assert(arguments, 1);
  let part = await psalms_videos_descriptions_payload_part(part_number);
  let songs = [];
  for (let one of part) {
    songs.push({
      video_id: one.video_id,
      description: one.description,
    });
  }
  let paste = youtube_video_descriptions_paste(songs);
  return paste;
}
