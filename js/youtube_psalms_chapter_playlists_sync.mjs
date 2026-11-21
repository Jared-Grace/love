import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { youtube_channel_uploads_all } from "./youtube_channel_uploads_all.mjs";
import { psalms_lyric_video_title_passage } from "./psalms_lyric_video_title_passage.mjs";
import { youtube_playlists_mine } from "./youtube_playlists_mine.mjs";
import { youtube_playlist_insert_public } from "./youtube_playlist_insert_public.mjs";
import { youtube_playlist_items } from "./youtube_playlist_items.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { youtube_playlist_item_append } from "./youtube_playlist_item_append.mjs";
import { youtube_playlist_item_position_write } from "./youtube_playlist_item_position_write.mjs";
export async function youtube_psalms_chapter_playlists_sync(channel_id) {
  "$plain channel_id";
  "Gives every Psalm chapter with a public lyric video its own public playlist named 'Psalms <chapter>', and puts each of that chapter's public videos into it, ordered by first verse, then last verse, then song number.";
  "★ CHAPTERS GO FROM THE HIGHEST DOWN, SO THE PLAYLISTS ARE MADE 150, 149, 148 ... IN THAT ORDER. The human asked for it so the channel's list of playlists reads in order.";
  "★ IT FINDS ITS OWN WORK AND CAN BE RUN AGAIN AT ANY TIME. A playlist that exists is reused and a video already in one is moved only if it is out of place, so a run after an approval adds only the new video. That is also what makes it safe to stop: YouTube allows about 10000 units a day and each playlist made, video added or video moved costs 50, so a run over the whole channel stops on the quota and the next day's run carries on.";
  "★ EVERY PLAYLIST MADE IS WRITTEN DOWN BY CHAPTER THE MOMENT IT EXISTS, AND THAT RECORD IS ASKED BEFORE YOUTUBE'S OWN LIST. Psalms 145 was made, held its videos and answered by its id, yet the next day both the owner's list of playlists and the public channel page left it out. A command trusting the list alone made it a second time.";
  "A missing video is put at the end and then moved to its place, rather than put straight in at a stated position. A playlist made a moment ago refused a stated position it should have taken, and in another two videos put at positions 2 and 3 came out the wrong way round. A playlist made by this run gets its videos in order already, so it needs no moves.";
  "A chapter that fails for any reason but the quota is noted with what YouTube said and the run goes on to the next, so one bad chapter does not leave all the lower ones undone. The quota stops the run, since every later ask would fail the same way.";
  "Only public videos go in. A private one is still waiting for review, and a public playlist holding it would show a stranger a gap.";
  arguments_assert(arguments, 1);
  let record_path = "data/found/findings/youtube_psalms_chapter_playlists.json";
  let record = await file_read_json(record_path);
  let uploads = await youtube_channel_uploads_all(channel_id);
  let chapters = {};
  for (let video of uploads) {
    if (video.privacy !== "public") {
      continue;
    }
    let passage = psalms_lyric_video_title_passage(video.title);
    if (passage === null) {
      continue;
    }
    if (chapters[passage.chapter] === undefined) {
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
  for (let chapter of Object.keys(chapters)) {
    let songs = chapters[chapter];
    let seen = 0;
    for (let song of songs) {
      if (song.verse_last !== 1000 && song.verse_last > seen) {
        seen = song.verse_last;
      }
    }
    if (seen === 0) {
      continue;
    }
    for (let song of songs) {
      if (song.verse_last === 1000) {
        song.verse_last = seen;
      }
    }
  }
  function order(one, other) {
    if (one.verse_first !== other.verse_first) {
      return one.verse_first - other.verse_first;
    }
    if (one.verse_last !== other.verse_last) {
      return one.verse_last - other.verse_last;
    }
    return one.song - other.song;
  }
  let numbers = Object.keys(chapters).map(Number);
  numbers.sort(function lambda(a, b) {
    return b - a;
  });
  let playlists = await youtube_playlists_mine();
  let listed = {};
  for (let playlist of playlists) {
    listed[playlist.title] = playlist.playlist_id;
  }
  let done = [];
  for (let chapter of numbers) {
    let songs = chapters[chapter];
    songs.sort(order);
    let wanted = songs.map(function lambda2(song) {
      return song.video_id;
    });
    let title = "Psalms " + chapter;
    let playlist_id = record[chapter];
    if (playlist_id === undefined) {
      playlist_id = listed[title];
    }
    let created = false;
    let added = 0;
    let moved = 0;
    let failed = null;
    try {
      let items = [];
      if (playlist_id === undefined) {
        playlist_id = await youtube_playlist_insert_public(title);
        created = true;
      } else {
        items = await youtube_playlist_items(playlist_id);
        items.sort(function lambda3(one, other) {
          return one.position - other.position;
        });
      }
      if (record[chapter] !== playlist_id) {
        record[chapter] = playlist_id;
        await file_overwrite_json(record_path, record);
      }
      for (let video_id of wanted) {
        let held = items.some(function lambda4(item) {
          return item.video_id === video_id;
        });
        if (held) {
          continue;
        }
        let item = await youtube_playlist_item_append(playlist_id, video_id);
        items.push(item);
        added = added + 1;
      }
      for (let k = 0; k < wanted.length; k++) {
        let video_id = wanted[k];
        let at = items.findIndex(function lambda5(item) {
          return item.video_id === video_id;
        });
        if (at === k || at === -1) {
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
