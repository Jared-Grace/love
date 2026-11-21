import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { youtube_channel_uploads_all } from "./youtube_channel_uploads_all.mjs";
import { not_equal } from "./not_equal.mjs";
import { psalms_lyric_video_title_passage } from "./psalms_lyric_video_title_passage.mjs";
import { equal } from "./equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { youtube_playlists_mine } from "./youtube_playlists_mine.mjs";
import { youtube_playlist_insert_public } from "./youtube_playlist_insert_public.mjs";
import { youtube_playlist_items } from "./youtube_playlist_items.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { youtube_playlist_item_append } from "./youtube_playlist_item_append.mjs";
import { less_than } from "./less_than.mjs";
import { youtube_playlist_item_position_write } from "./youtube_playlist_item_position_write.mjs";
export async function youtube_psalms_chapter_playlists_sync(channel_id) {
  "$plain channel_id";
  "Gives every Psalm chapter with a public lyric video its own public playlist named 'Psalms <chapter>', and puts each of that chapter's public videos into it, ordered by first verse, then last verse, then song number.";
  "★ CHAPTERS GO FROM THE HIGHEST DOWN, SO THE PLAYLISTS ARE MADE 150, 149, 148 ... IN THAT ORDER. The human asked for it so the channel's list of playlists reads in order.";
  "★ IT FINDS ITS OWN WORK AND CAN BE RUN AGAIN AT ANY TIME. A playlist that exists is reused and a video already in one is moved only if it is out of place, so a run after an approval adds only the new video. That is also what makes it safe to stop: YouTube allows about 10000 units a day and each playlist made, video added or video moved costs 50, so a run over the whole channel stops on the quota and the next day's run carries on.";
  "★ EVERY PLAYLIST MADE IS WRITTEN DOWN BY CHAPTER THE MOMENT IT EXISTS, AND THAT RECORD IS ASKED BEFORE YOUTUBE'S OWN LIST. Psalms 145 was made, held its videos and answered by its id, yet the next day both the owner's list of playlists and the public channel page left it out. A command trusting the list alone made it a second time.";
  "A missing video is put at the end and then moved to its place, rather than put straight in at a stated position. Putting each video at its end makes the order follow the asks one by one, so a position wrongly counted can no longer refuse an add. A playlist made by this run gets its videos in order already, so it needs no moves.";
  "A chapter that fails for any reason but the quota is noted with what YouTube said and the run goes on to the next, so one bad chapter does not leave all the lower ones undone. The quota stops the run, since every later ask would fail the same way.";
  "Only public videos go in. A private one is still waiting for review, and a public playlist holding it would show a stranger a gap.";
  arguments_assert(arguments, 1);
  let record_path = "data/found/findings/youtube_psalms_chapter_playlists.json";
  let record = await file_read_json(record_path);
  let uploads = await youtube_channel_uploads_all(channel_id);
  let chapters = {};
  ("★ THE CHANNEL'S UPLOAD LIST CAN NAME ONE VIDEO TWICE. Psalm 145:13b-21 came back twice, so it was wanted at two places: its second move undid its first, and the next asked for position 4 in a playlist of 4 ('Invalid playlist item position'). So each video is counted once.");
  let counted = [];
  for (let video of uploads) {
    if (counted.includes(video.video_id)) {
      continue;
    }
    counted.push(video.video_id);
    if (not_equal(video.privacy, "public")) {
      continue;
    }
    let passage = psalms_lyric_video_title_passage(video.title);
    if (equal(passage, null)) {
      continue;
    }
    if (equal(chapters[passage.chapter], undefined)) {
      chapters[passage.chapter] = [];
    }
    chapters[passage.chapter].push({
      video_id: video.video_id,
      verse_first: passage.verse_first,
      verse_last: passage.verse_last,
      song: passage.song,
    });
  }
  ("A title naming no verses is the whole chapter, which the title reader hands over as ending on verse 1000. Here it is given the last verse any other song of that chapter ends on, so the first upload of Psalm 150, titled without verses, sits with the 1-6 songs as song 1 instead of after them all. It is the last verse seen rather than the chapter's real last verse, because no verse count is at hand without going to the network; the two differ only if no part of the chapter reaches its end.");
  for (let chapter of object_property_names(chapters)) {
    let songs = chapters[chapter];
    let seen = 0;
    for (let song of songs) {
      if (
        not_equal(song.verse_last, 1000) &&
        greater_than(song.verse_last, seen)
      ) {
        seen = song.verse_last;
      }
    }
    if (equal(seen, 0)) {
      continue;
    }
    for (let song of songs) {
      if (equal(song.verse_last, 1000)) {
        song.verse_last = seen;
      }
    }
  }
  function order(one, other) {
    if (not_equal(one.verse_first, other.verse_first)) {
      let difference = subtract(one.verse_first, other.verse_first);
      return difference;
    }
    if (not_equal(one.verse_last, other.verse_last)) {
      let difference2 = subtract(one.verse_last, other.verse_last);
      return difference2;
    }
    let difference3 = subtract(one.song, other.song);
    return difference3;
  }
  let numbers = object_property_names(chapters).map(Number);
  function lambda(a, b) {
    let difference4 = subtract(b, a);
    return difference4;
  }
  numbers.sort(lambda);
  let playlists = await youtube_playlists_mine();
  let listed = {};
  for (let playlist of playlists) {
    listed[playlist.title] = playlist.playlist_id;
  }
  let done = [];
  for (let chapter of numbers) {
    let songs = chapters[chapter];
    songs.sort(order);
    function lambda2(song) {
      let r2 = song.video_id;
      return r2;
    }
    let wanted = songs.map(lambda2);
    let title = "Psalms " + chapter;
    let playlist_id = record[chapter];
    if (equal(playlist_id, undefined)) {
      playlist_id = listed[title];
    }
    let created = false;
    let added = 0;
    let moved = 0;
    let failed = null;
    try {
      let items = [];
      if (equal(playlist_id, undefined)) {
        playlist_id = await youtube_playlist_insert_public(title);
        created = true;
      } else {
        items = await youtube_playlist_items(playlist_id);
        function lambda3(one, other) {
          let difference5 = subtract(one.position, other.position);
          return difference5;
        }
        items.sort(lambda3);
      }
      if (not_equal(record[chapter], playlist_id)) {
        record[chapter] = playlist_id;
        await file_overwrite_json(record_path, record);
      }
      for (let video_id of wanted) {
        function lambda4(item) {
          let eq = equal(item.video_id, video_id);
          return eq;
        }
        let held = items.some(lambda4);
        if (held) {
          continue;
        }
        let item = await youtube_playlist_item_append(playlist_id, video_id);
        items.push(item);
        added = added + 1;
      }
      for (let k = 0; less_than(k, wanted.length); k++) {
        let video_id = wanted[k];
        function lambda5(item) {
          let eq2 = equal(item.video_id, video_id);
          return eq2;
        }
        let at = items.findIndex(lambda5);
        if (equal(at, k) || equal(at, -1)) {
          continue;
        }
        let item = items[at];
        await youtube_playlist_item_position_write(
          item.playlist_item_id,
          playlist_id,
          video_id,
          k,
        );
        items.splice(at, 1);
        items.splice(k, 0, item);
        moved = moved + 1;
      }
    } catch (e) {
      let said = String(e.message);
      failed = said;
      if (said.includes("quota")) {
        done.push({
          chapter,
          playlist_id,
          created,
          added,
          moved,
          videos: wanted.length,
          failed: "quota",
        });
        let stopped = {
          stopped: "quota",
          chapters: numbers.length,
          done,
        };
        return stopped;
      }
    }
    done.push({
      chapter,
      playlist_id,
      created,
      added,
      moved,
      videos: wanted.length,
      failed,
    });
  }
  let r = {
    stopped: null,
    chapters: numbers.length,
    done,
  };
  return r;
}
