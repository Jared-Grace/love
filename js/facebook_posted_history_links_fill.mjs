import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { sleep } from "./sleep.mjs";
import { floor } from "./floor.mjs";
import { equal } from "./equal.mjs";
import { facebook_posted_history_read } from "./facebook_posted_history_read.mjs";
import { facebook_posted_history_add } from "./facebook_posted_history_add.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
import { facebook_reels_tab_urls_all } from "./facebook_reels_tab_urls_all.mjs";
import { less_than } from "./less_than.mjs";
import { facebook_reel_line_find } from "./facebook_reel_line_find.mjs";
import { facebook_bible_chapter_post_text } from "./facebook_bible_chapter_post_text.mjs";
import { facebook_bible_sermon_after } from "./facebook_bible_sermon_after.mjs";
import { facebook_bible_sermon_post_text } from "./facebook_bible_sermon_post_text.mjs";
import { facebook_post_url_find } from "./facebook_post_url_find.mjs";
export async function facebook_posted_history_links_fill() {
  arguments_assert(arguments, 0);
  ("Finds on facebook the link of every post in the history that has none, and adds for each one found a new line: the same post, now with its link, marked link_filled. Nothing already written is changed. Answers what it filled and, for the rest, why not.");
  ("★ A PSALM IS FOUND BY ITS CAPTION AND ITS PLACE, BECAUSE EVERY SONG OF ONE PASSAGE HAS THE SAME CAPTION. The reels tab is read whole, each reel whose link the history does not already hold is opened for its caption's passage, and the reels of one passage, oldest first, are paired with that passage's posts, oldest first. The pairing is kept only when the counts agree and every link already known sits exactly where the pairing puts it; otherwise the whole passage is left unfilled and named, because one extra or missing reel would shift every song after it onto its neighbour's link.");
  ("★ A TEXT POST IS FOUND BY ITS OWN FIRST LINE, the same way the link comment finds it, so it can only miss, never pick the wrong post.");
  ("★ IT OPENS ONE PAGE AT A TIME AND WAITS HALF A MINUTE OR SO BETWEEN THEM, at a person's pace; it should be run when no scheduled facebook run is due.");
  async function pause() {
    let left = Math.random();
    let p = multiply(left, 20000);
    await sleep(20000 + floor(p));
  }
  function identity(line) {
    if (equal(line.kind, "psalm")) {
      let r = "psalm " + line.title;
      return r;
    }
    if (equal(line.kind, "chapter")) {
      let r2 = "chapter " + line.chapter_code;
      return r2;
    }
    let r3 = "sermon " + line.chapter_code + " " + line.verses_key;
    return r3;
  }
  let history = await facebook_posted_history_read();
  let latest = {};
  for (let line of history) {
    latest[identity(line)] = line;
  }
  let posts = Object.values(latest);
  let filled = [];
  let unfilled = [];
  async function fill(line, url, found_by) {
    let copy = {
      ...line,
    };
    delete copy.written_at;
    delete copy.url_doubtful;
    let added = await facebook_posted_history_add({
      ...copy,
      url,
      link_filled: true,
      link_found_by: found_by,
    });
    filled.push({
      post: identity(line),
      url,
      error: added.error,
    });
  }
  function passage_of_title(title) {
    let r4 = title.split(" (BSB)")[0];
    return r4;
  }
  function lambda(line) {
    let eq = equal(line.kind, "psalm");
    return eq;
  }
  let psalms = posts.filter(lambda);
  function lambda2(line) {
    let eq2 = equal(line.url, null);
    return eq2;
  }
  let psalms_missing = psalms.filter(lambda2);
  if (greater_than(psalms_missing.length, 0)) {
    let title_by_url = {};
    for (let line of psalms) {
      if (not_equal(line.url, null)) {
        title_by_url[line.url] = line.title;
      }
    }
    let tab = await facebook_reels_tab_urls_all();
    let oldest_first = tab.slice().reverse();
    let reels = [];
    for (let url of oldest_first) {
      let known = title_by_url[url] ?? null;
      let passage = null;
      if (not_equal(known, null)) {
        passage = passage_of_title(known);
      } else {
        ("★ A REEL THAT WILL NOT OPEN IS TRIED ONCE MORE, THEN READ AS NO CAPTION. Measured 2026-11-10: the very first reel opened timed out at two minutes and, thrown, ended the whole run with nothing filled. Read as no caption, its passage simply comes out one reel short and is named as unfilled, which is the honest answer.");
        let caption = null;
        for (let attempt = 0; less_than(attempt, 2); attempt++) {
          await pause();
          try {
            caption = await facebook_reel_line_find(
              url,
              " put to music using AI",
            );
            break;
          } catch (e) {
            caption = null;
          }
        }
        passage = equal(caption, null)
          ? null
          : caption.split(" put to music")[0];
      }
      reels.push({
        url,
        known,
        passage,
      });
    }
    function lambda3(line) {
      let r5 = passage_of_title(line.title);
      return r5;
    }
    let v = psalms_missing.map(lambda3);
    let passages = [...new Set(v)];
    for (let passage of passages) {
      function lambda4(line) {
        let left2 = passage_of_title(line.title);
        let eq3 = equal(left2, passage);
        return eq3;
      }
      function lambda5(a, b) {
        let r6 = less_than(a.posted_at, b.posted_at)
          ? -1
          : greater_than(a.posted_at, b.posted_at)
            ? 1
            : 0;
        return r6;
      }
      let posted = psalms.filter(lambda4).sort(lambda5);
      function lambda6(reel) {
        let eq4 = equal(reel.passage, passage);
        return eq4;
      }
      let shown = reels.filter(lambda6);
      let why = null;
      if (not_equal(shown.length, posted.length)) {
        why =
          posted.length +
          " posted but " +
          shown.length +
          " reels with that caption";
      } else {
        for (let i = 0; less_than(i, posted.length); i++) {
          let a = posted[i];
          let b = shown[i];
          if (
            (not_equal(b.known, null) && not_equal(b.known, a.title)) ||
            (not_equal(a.url, null) && not_equal(a.url, b.url))
          ) {
            why = "a known link sits out of order at place " + (i + 1);
          }
        }
      }
      for (let i = 0; less_than(i, posted.length); i++) {
        let line = posted[i];
        if (not_equal(line.url, null)) {
          continue;
        }
        if (not_equal(why, null)) {
          unfilled.push({
            post: identity(line),
            why: passage + ": " + why,
          });
          continue;
        }
        await fill(line, shown[i].url, "caption and order on the reels tab");
      }
    }
  }
  for (let line of posts) {
    if (not_equal(line.url, null) || equal(line.kind, "psalm")) {
      continue;
    }
    let text = null;
    if (equal(line.kind, "chapter")) {
      text = await facebook_bible_chapter_post_text(line.chapter_code);
    } else {
      let c = null;
      let k = null;
      let next = await facebook_bible_sermon_after(c, k);
      while (not_equal(next, null)) {
        let key = next.passage.verse_numbers.join(",");
        if (
          equal(next.chapter_code, line.chapter_code) &&
          equal(key, line.verses_key)
        ) {
          text = await facebook_bible_sermon_post_text(
            next.chapter_code,
            next.passage,
          );
          break;
        }
        c = next.chapter_code;
        k = key;
        next = await facebook_bible_sermon_after(c, k);
      }
    }
    if (equal(text, null)) {
      unfilled.push({
        post: identity(line),
        why: "its words could not be rebuilt",
      });
      continue;
    }
    await pause();
    let url = await facebook_post_url_find(text.split("\n")[0]);
    if (equal(url, null)) {
      unfilled.push({
        post: identity(line),
        why: "not found near the top of the profile",
      });
      continue;
    }
    await fill(line, url, "its first line on the profile");
  }
  let r7 = {
    filled,
    unfilled,
  };
  return r7;
}
