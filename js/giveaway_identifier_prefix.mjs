import { text_frozen } from "./text_frozen.mjs";
export function giveaway_identifier_prefix() {
  "The opening word of every archive.org box name this repo gives content away under - the one part of a published address that belongs to us rather than to whoever is hosting it.";
  "Authored here rather than built from anything else. An archive.org identifier cannot be changed once a file sits in it, and the same word is repeated in every download link, in the torrent, and in the address of every file the host derives for free - so it is the hardest-frozen value this repo holds, and a value that hard is typed by a person instead of derived from a name somebody may reword later.";
  "Chosen as the phrase already standing as this work's public identity in the two places nobody here picked casually - the author recorded on every commit, and the address letters are sent to.";
  "Rejected, and why each one is worse: a word naming the host, which lasts exactly as long as one account on one service; a word naming the content, such as sung psalms, which is wrong the first time something other than a psalm is given away; and a word naming one app, which would freeze the shelf as it happens to stand today.";
  let prefix = text_frozen("christrosetolife");
  return prefix;
}
