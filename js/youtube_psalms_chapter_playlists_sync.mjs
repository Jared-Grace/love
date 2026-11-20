import { object_property_names } from "./object_property_names.mjs";
import { not_equal } from "./not_equal.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_channel_uploads_all } from "./youtube_channel_uploads_all.mjs";
import { psalms_lyric_video_title_passage } from "./psalms_lyric_video_title_passage.mjs";
import { youtube_playlists_mine } from "./youtube_playlists_mine.mjs";
import { youtube_playlist_insert_public } from "./youtube_playlist_insert_public.mjs";
import { youtube_playlist_items } from "./youtube_playlist_items.mjs";
import { youtube_playlist_item_add } from "./youtube_playlist_item_add.mjs";
export async function youtube_psalms_chapter_playlists_sync(channel_id) {
  "$plain channel_id";
  "Gives every Psalm chapter with a public lyric video its own public playlist named 'Psalms <chapter>', and puts each of that chapter's public videos into it, ordered by first verse, then last verse, then song number.";
  "★ CHAPTERS GO FROM THE HIGHEST DOWN, SO THE PLAYLISTS ARE MADE 150, 149, 148 ... IN THAT ORDER. The human asked for it so the channel's list of playlists reads in order.";
  "★ IT FINDS ITS OWN WORK AND CAN BE RUN AGAIN AT ANY TIME. A playlist that exists is reused and a video already in one is left where it is, so a run after an approval adds only the new video. That is also what makes it safe to stop: YouTube allows about 10000 units a day and each playlist or video added costs 50, so the first run over the whole channel stops on the quota and the next day's run carries on.";
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
