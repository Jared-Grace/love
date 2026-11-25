import { fn_name } from "./fn_name.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { url_host } from "./url_host.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function calendar_profile_path_ok(full) {
  arguments_assert(arguments, 1);
  ('Whether the https link full, already known to be on a Facebook or Messenger address, names one person - their profile or a chat with them - rather than Facebook itself, a feed, a page of Facebook\'s own, a post or a group (human, 2026-11-25: "I was able to enter facebook.com/ for URL - should require proper profile link ... and not some other facebook url like their feed url").');
  ("The shapes kept: facebook.com/<username> (five or more letters, digits or dots, as Facebook allows, and none of Facebook's own words), facebook.com/profile.php?id=<digits>, facebook.com/people/<name>/<digits>, facebook.com/share/<code> (what Share on a profile copies on a phone - the lettered kinds, share/p, r, v and g, are posts, reels, videos and groups), m.me/<username>, and a chat: messenger.com/t/<id> or facebook.com/messages/t/<id>, with e2ee/ before t/ allowed.");
  ("Rejected: asking Facebook whether the link is a person (a request per guest to a site that answers robots with a login wall); taking any path at all (what let facebook.com/ through).");
  ("The link is cut into host, path and query by hand, the host through ",
    fn_name("url_host"),
    ": a function that parses with the browser's own address reader is one a person has to look at, and these three pieces are all this needs.");
  let host = url_host(full).toLowerCase();
  let address = full.replace(/^https?:\/\//i, "").split("#")[0];
  let pieces = address.split("?");
  let query = greater_than(pieces.length, 1) ? pieces[1] : "";
  let parts = pieces[0].split("/").slice(1).filter(Boolean);
  let chat = /^[A-Za-z0-9._-]+$/;
  function chat_ok(rest) {
    let after = equal(rest[0], "e2ee") ? rest.slice(1) : rest;
    let r =
      equal(after.length, 2) && equal(after[0], "t") && chat.test(after[1]);
    return r;
  }
  if (/(^|\.)messenger\.com$/.test(host)) {
    let r7 = chat_ok(parts);
    return r7;
  }
  let username = /^[A-Za-z0-9.]{5,}$/;
  if (/(^|\.)m\.me$/.test(host)) {
    let r2 = equal(parts.length, 1) && username.test(parts[0]);
    return r2;
  }
  let first = String(parts[0] || "").toLowerCase();
  if (equal(first, "profile.php")) {
    let r3 = equal(parts.length, 1) && /(^|&)id=\d+(&|$)/.test(query);
    return r3;
  }
  if (equal(first, "people")) {
    let r4 = equal(parts.length, 3) && /^\d+$/.test(parts[2]);
    return r4;
  }
  if (equal(first, "messages")) {
    let v = parts.slice(1);
    let r8 = chat_ok(v);
    return r8;
  }
  if (equal(first, "share")) {
    let r5 = equal(parts.length, 2) && /^[A-Za-z0-9]+$/.test(parts[1]);
    return r5;
  }
  let facebook_own = [
    "home.php",
    "feed",
    "watch",
    "groups",
    "pages",
    "events",
    "marketplace",
    "gaming",
    "reel",
    "reels",
    "stories",
    "story.php",
    "photo",
    "photo.php",
    "photos",
    "videos",
    "notifications",
    "friends",
    "settings",
    "login",
    "login.php",
    "search",
    "hashtag",
    "help",
    "policies",
    "privacy",
    "bookmarks",
    "saved",
    "memories",
    "permalink.php",
    "fundraisers",
    "games",
    "live",
    "ads",
    "business",
    "pg",
  ];
  let r6 =
    equal(parts.length, 1) &&
    username.test(parts[0]) &&
    not(facebook_own.includes(first)) &&
    not(first.endsWith(".php"));
  return r6;
}
