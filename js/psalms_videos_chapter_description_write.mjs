import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { psalms_chapters_verse_last } from "./psalms_chapters_verse_last.mjs";
import { property_get } from "./property_get.mjs";
import { psalms_passage_description } from "./psalms_passage_description.mjs";
import { youtube_video_record } from "./youtube_video_record.mjs";
import { youtube_video_description_write } from "./youtube_video_description_write.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export async function psalms_videos_chapter_description_write(
  video_ids_comma,
  chapter_number,
) {
  "$plain video_ids_comma";
  "$plain chapter_number";
  "Puts the whole of one Psalm under each of a named set of songs, and says which of them it had to change.";
  "IT IS TOLD WHICH SONGS RATHER THAN FINDING THEM. Every other song on the channel says its passage in its own name, and is answered from that name alone; these are the ones whose names say a hymn, or a person, or nothing at all. Which psalm such a song is of cannot be read off anything - it is a judgement about what is being sung, made by somebody who has listened, and the whole of this command is carrying that judgement out.";
  "The whole psalm goes under each of them, first verse to last, because a name that does not say a verse does not say which verses either. A song of a psalm in parts is still of that psalm, and the whole of it under each part is true of every part, where a guess at which part sings which verse would be true of at most one.";
  "A song already carrying these words is left alone and counted apart. Otherwise running this twice would spend the day's allowance rewriting every song to the value it already held, and the report would not tell that apart from having mended them all.";
  "Naming no songs at all means no songs, and comes back with the words it would have written and nothing changed. That is the way to look at the words before letting them out - and it is what the empty run has to mean anyway, since the alternative was reading it as one song whose name is nothing and failing three calls deep on a name youtube could not have.";
  arguments_assert(arguments, 2);
  let video_ids = text_split_comma_or_empty(video_ids_comma);
  let chapter = Number(chapter_number);
  let verse_last_by_chapter = await psalms_chapters_verse_last([chapter]);
  let verse_last = property_get(verse_last_by_chapter, chapter);
  let passage = {
    chapter: chapter,
    verse_first: 1,
    verse_last: verse_last,
    mark: "",
  };
  let description = await psalms_passage_description(passage);
  let written = [];
  let already = [];
  for (let video_id of video_ids) {
    let record = await youtube_video_record(video_id);
    let snippet = property_get(record, "snippet");
    let description_now = property_get(snippet, "description");
    let same = equal(description_now, description);
    if (same) {
      list_add(already, video_id);
      continue;
    }
    let done = await youtube_video_description_write(video_id, description);
    let item = property_get(done, "video_id");
    list_add(written, item);
  }
  let r = {
    chapter: chapter,
    verse_last: verse_last,
    description: description,
    written: written,
    already: already,
  };
  return r;
}
