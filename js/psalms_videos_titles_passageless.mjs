import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_playlist_videos } from "./youtube_playlist_videos.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function psalms_videos_titles_passageless(channel_id) {
  "$plain channel_id";
  "The songs on a channel whose names say no passage of the Psalms at all, each with the address it can be watched at.";
  "These are the only songs on the channel that nothing here can write words for. Every other one has its verses read off its own name; these name a hymn, or a person, or a thing that happened, and no reading of the name reaches a verse. What belongs under them is a judgement about what the singing is of, which means listening to it, which means a person.";
  "THE ADDRESS IS CARRIED ALONGSIDE THE NAME, which the pairing itself does not do because a song it cannot read is a song it has nothing to pair. A list of bare names cannot be acted on - the whole of what has to be done next is watch this one and decide - so the thing that makes it watchable travels with it.";
  "It reads the channel and changes nothing, so it can be run at any time and by anybody, including while a run of writing is going on.";
  arguments_assert(arguments, 1);
  let uploads_playlist = youtube_channel_uploads_playlist(channel_id);
  let uploads = await youtube_playlist_videos(uploads_playlist);
  let passageless = [];
  for (let video of uploads) {
    let passage = psalms_title_passage(video.title);
    if (equal(passage, null)) {
      list_add(passageless, {
        video_id: video.video_id,
        title: video.title,
        url: "https://www.youtube.com/watch?v=" + video.video_id,
      });
    }
  }
  let r = {
    uploads: uploads.length,
    passageless: passageless.length,
    videos: passageless,
  };
  return r;
}
