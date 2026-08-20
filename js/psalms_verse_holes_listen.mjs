import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names_numbers_sorted } from "./object_property_names_numbers_sorted.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { psalms_chapters_verse_last } from "./psalms_chapters_verse_last.mjs";
import { psalms_chapters_video_order } from "./psalms_chapters_video_order.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { youtube_channel_uploads_playlist } from "./youtube_channel_uploads_playlist.mjs";
import { youtube_playlist_videos } from "./youtube_playlist_videos.mjs";
export async function psalms_verse_holes_listen(channel_id) {
  "Every verse a channel has left unsung in a chapter it has otherwise sung, and for each one the song just before it and the song just after it - the two a person would have to listen to in order to find out what the hole really is.";
  "A hole is not a finding, it is a place to listen. It means one of two things and they are opposite: either the verse was never sung, or it was sung and the song wears somebody else's title, in which case the verse the title claims is what is really missing. Only the words settle which, and the words are in the songs on either side, because a title that is wrong is wrong by a verse or two and not by a chapter.";
  "The words settle it except where two verses of the same psalm are the same words. Psalm 67 says let the peoples praise you, oh God, let all the peoples praise you at verse 3 and again, word for word, at verse 5, so the song titled verse 5 sings something that is equally verse 3 and nothing in it can say which was meant. A hole like that stays open however carefully somebody listens, and the only thing left to go on is the order the songs were put up in.";
  "The neighbours are named rather than the caller being left to find them. Looking one up costs a visit to the channel, and the whole reason for asking this at all is that visiting every song is too expensive - so the answer has to be the short list of visits worth making, or it has saved nothing.";
  arguments_assert(arguments, 1);
  let uploads_playlist = youtube_channel_uploads_playlist(channel_id);
  let uploads = await youtube_playlist_videos(uploads_playlist);
  let by_chapter = psalms_chapters_video_order(uploads);
  let chapters = object_property_names_numbers_sorted(by_chapter);
  let verse_last_by_chapter = await psalms_chapters_verse_last(chapters);
  let holes = [];
  for (let chapter of chapters) {
    let spans = [];
    for (let song of by_chapter[chapter]) {
      let passage = psalms_title_passage(song.title);
      spans.push({
        video_id: song.video_id,
        title: song.title,
        verse_first: passage.verse_first,
        verse_last: passage.verse_last,
      });
    }
    let verse_last = verse_last_by_chapter[chapter];
    let verse = 1;
    while (less_than_equal(verse, verse_last)) {
      let sung_is = false;
      let before = null;
      let after = null;
      for (let span of spans) {
        let covers_is =
          less_than_equal(span.verse_first, verse) &&
          less_than_equal(verse, span.verse_last);
        if (covers_is) {
          sung_is = true;
        }
        if (less_than(span.verse_last, verse)) {
          before = span;
        }
        if (greater_than(span.verse_first, verse) && equal(after, null)) {
          after = span;
        }
      }
      if (not(sung_is)) {
        holes.push({
          chapter: chapter,
          verse: verse,
          before: before,
          after: after,
        });
      }
      verse = verse + 1;
    }
  }
  return holes;
}
