import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { youtube_videos_descriptions } from "./youtube_videos_descriptions.mjs";

export async function youtube_records_videos_descriptions(records) {
  "Ask youtube what every video named by a list of records is carrying, where each record names its video in a field called video_id.";
  "IT TAKES THE RECORDS RATHER THAN THE IDS, because every caller has records and none of them has a bare list. Pulling the ids out is one line, and one line written at two call sites is two chances to pull the wrong field - which does not fail, it asks about nothing and reads back silence, and silence is indistinguishable from a video carrying nothing.";
  "IT HANDS BACK WHAT THE ASK ANSWERED AND SORTS NOTHING. One caller wants only what was heard and another needs the unheard kept apart from the empty, so any sorting done here would be undone by one of them. What must not be undone is the separation itself, and that comes from the ask underneath.";
  arguments_assert(arguments, 1);
  let video_ids = list_map_property(records, "video_id");
  let answered = await youtube_videos_descriptions(video_ids);
  return answered;
}
