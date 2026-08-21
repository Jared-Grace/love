export async function song_image_couplets_videos_description_write(channel_id) {
  "$plain channel_id";
  "Puts the hymn's own words, and under them the passages those words rest on, beneath every song of the hymn on a channel - and says which songs it had to change and which were already carrying it.";
  "IT FINDS ITS OWN SONGS. Every other song on this channel says a psalm in its name and is answered out of that name; this hymn is not Scripture set to music, so there is no verse to derive and the only thing that can truly be said under it is what it sings. Which songs those are is read off the names, so a cut uploaded tomorrow is covered by running this again rather than by somebody adding an address to a list.";
  "A song already carrying these words is left alone and counted apart, so running it twice does not spend the day's allowance rewriting each song to the value it already holds - and the report tells that apart from having mended them all.";
  "It reports names rather than addresses because the name is the thing a person can check: a line saying the widescreen cut was changed can be read, and a line of eleven letters cannot.";
  arguments_assert(arguments, 1);
  let uploads_playlist = youtube_channel_uploads_playlist(channel_id);
  let uploads = await youtube_playlist_videos(uploads_playlist);
  let written = [];
  let already = [];
  for (let video of uploads) {
    let verse = song_image_couplets_title_verse(video.title);
    let other = equal(verse, null);
    if (other) {
      continue;
    }
    let description = song_image_couplets_description(verse);
    let record = await youtube_video_record(video.video_id);
    let snippet = property_get(record, "snippet");
    let description_now = property_get(snippet, "description");
    let same = equal(description_now, description);
    if (same) {
      list_add(already, video.title);
      continue;
    }
    await youtube_video_description_write(video.video_id, description);
    list_add(written, video.title);
  }
  let r = { written: written, already: already };
  return r;
}
