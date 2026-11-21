import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_uploads_all } from "./youtube_channel_uploads_all.mjs";
import { not_equal } from "./not_equal.mjs";
import { psalms_lyric_video_title_passage } from "./psalms_lyric_video_title_passage.mjs";
import { equal } from "./equal.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { subtract } from "./subtract.mjs";
import { youtube_playlists_mine } from "./youtube_playlists_mine.mjs";
import { youtube_playlist_insert_public } from "./youtube_playlist_insert_public.mjs";
import { youtube_playlist_items } from "./youtube_playlist_items.mjs";
import { less_than } from "./less_than.mjs";
import { youtube_playlist_item_add } from "./youtube_playlist_item_add.mjs";
import { not } from "./not.mjs";
import { youtube_playlist_item_position_write } from "./youtube_playlist_item_position_write.mjs";
export async function youtube_psalms_chapter_playlists_sync(channel_id) {
  "$plain channel_id";
  "Gives every Psalm chapter with a public lyric video its own public playlist named 'Psalms <chapter>', and puts each of that chapter's public videos into it, ordered by first verse, then last verse, then song number.";
  "★ CHAPTERS GO FROM THE HIGHEST DOWN, SO THE PLAYLISTS ARE MADE 150, 149, 148 ... IN THAT ORDER. The human asked for it so the channel's list of playlists reads in order.";
  "★ IT FINDS ITS OWN WORK AND CAN BE RUN AGAIN AT ANY TIME. A playlist that exists is reused and a video already in one is moved only if it is out of place, so a run after an approval adds only the new video. That is also what makes it safe to stop: YouTube allows about 10000 units a day and each playlist or video added costs 50, so the first run over the whole channel stops on the quota and the next day's run carries on.";
  "A missing video goes in at the place it belongs among the ones already there, rather than at the end and then moved, because a move costs another 50 units for every video it shifts.";
  "Only public videos go in. A private one is still waiting for review, and a public playlist holding it would show a stranger a gap.";
  arguments_assert(arguments, 1);
  let uploads = await youtube_channel_uploads_all(channel_id);
  let chapters = {};
  for (let video of uploads) {
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
  let ids = {};
  for (let playlist of playlists) {
    ids[playlist.title] = playlist.playlist_id;
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
    let playlist_id = ids[title];
    let created = false;
    let current = [];
    let added = 0;
    let moved = 0;
    try {
      if (equal(playlist_id, undefined)) {
        playlist_id = await youtube_playlist_insert_public(title);
        created = true;
      } else {
        let items = await youtube_playlist_items(playlist_id);
        function lambda3(item) {
          let r3 = item.video_id;
          return r3;
        }
        current = items.map(lambda3);
      }
      for (let k = 0; less_than(k, wanted.length); k++) {
        let video_id = wanted[k];
        if (current.includes(video_id)) {
          continue;
        }
        let before = wanted.slice(0, k);
        let position = 0;
        for (let i = 0; less_than(i, current.length); i++) {
          if (before.includes(current[i])) {
            position = i + 1;
          }
        }
        await youtube_playlist_item_add(playlist_id, video_id, position);
        current.splice(position, 0, video_id);
        added = added + 1;
      }
      ("A playlist made by an earlier run may hold its videos in an order since judged wrong, as Psalms 150 did before a whole-chapter title was read as song 1. So a playlist that already existed is read back and each video moved to where it belongs. A move costs 50 units, but only a video out of place is moved, so a playlist already in order costs one read.");
      if (not(created)) {
        let items = await youtube_playlist_items(playlist_id);
        function lambda4(one, other) {
          let difference5 = subtract(one.position, other.position);
          return difference5;
        }
        items.sort(lambda4);
        for (let k = 0; less_than(k, wanted.length); k++) {
          let video_id = wanted[k];
          function lambda5(item) {
            let eq = equal(item.video_id, video_id);
            return eq;
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
      }
    } catch (e) {
      let quota = String(e.message).includes("quota");
      if (not(quota)) {
        throw e;
      }
      done.push({
        chapter,
        playlist_id,
        created,
        added,
        moved,
        videos: wanted.length,
      });
      let stopped = {
        stopped: "quota",
        chapters: numbers.length,
        done,
      };
      return stopped;
    }
    done.push({
      chapter,
      playlist_id,
      created,
      added,
      moved,
      videos: wanted.length,
    });
  }
  let r = {
    stopped: null,
    chapters: numbers.length,
    done,
  };
  return r;
}
