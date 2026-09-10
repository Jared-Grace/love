import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { path_extension } from "./path_extension.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_replace } from "./text_replace.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { add } from "./add.mjs";
export function songs_recordings_marked(recordings, key_of) {
  arguments_assert(arguments, 2);
  ("$plain recordings");
  ("$plain key_of");
  ("Gives each recording the short mark that tells it apart from every other recording of the same passage, which is nothing at all for the plain one and a few characters for each of the rest.");
  ("★ AN ADDRESS PER RECORDING IS THE WHOLE POINT, AND THE TAKE ON ITS OWN DOES NOT GIVE ONE. A browser numbers a repeated download by counting the names it has already seen, and it counted the sound files and the better-quality copies as two separate runs - so on this machine the first singing of Psalm 147:12-20 and its second are both unnumbered, one in each run, and the second singing is also present numbered one. Marking by the take alone put two different performances on one document and one video name, where the second render wiped the first and nothing anywhere went red.");
  ("★ THE PLAIN MARK IS KEPT BY ONE RECORDING OF EACH SET, WHICH IS WHAT LEAVES EVERY DOCUMENT ALREADY WRITTEN WHERE IT IS. Somebody has corrected the times of several of these by hand, and those documents are named after their passage; marking all of them would leave every one of those corrections in a file nothing reads again. So a set of one is unmarked, and in a larger set the best-quality copy keeps the plain name and the others say what they are.");
  ("★ WHAT SEPARATES THE REST IS THE FORMAT, BECAUSE THAT IS WHAT ACTUALLY DIFFERS AND IT DOES NOT MOVE. Every set on this machine that needs separating is one lossless copy beside one compressed one. A number counted out here would have been the alternative, and it would shift the moment another copy was downloaded, quietly handing one performance another one's times.");
  ("Where even the format is not enough to tell two apart, the place in the set is added on the end. That is the only mark here that can move when a file is added, and it is reached only by two recordings of one passage in one format, which is a pair nothing in the name can separate; a mark that can move is still better than two files sharing one name.");
  ("What counts as one passage is handed in rather than decided here, because a whole chapter and a part of one are said differently and neither is this function's business.");
  let counted = [];
  for (let recording of recordings) {
    let key_group = key_of(recording.read) + " take " + recording.read.take;
    list_add(counted, {
      read: recording.read,
      path_audio: recording.path_audio,
      key_group,
    });
  }
  function format_of(recording) {
    let ending = path_extension(recording.path_audio);
    let s = text_replace(ending, ".", "");
    let format = text_lower_to(s);
    return format;
  }
  function best_rank_of(recording) {
    let format = format_of(recording);
    let lossless = equal(format, "wav");
    let rank = lossless ? 0 : 1;
    return rank;
  }
  function recording_before(one, other) {
    let left = best_rank_of(one);
    let right = best_rank_of(other);
    let ranks = subtract(left, right);
    let same_rank = equal(ranks, 0);
    if (not(same_rank)) {
      return ranks;
    }
    let earlier = less_than(one.path_audio, other.path_audio);
    let paths = earlier ? -1 : 1;
    return paths;
  }
  function mark_joined(before, after) {
    let bare = equal(before, "");
    if (bare) {
      return after;
    }
    let joined = before + "_" + after;
    return joined;
  }
  function mark_base_of(recording) {
    let first = equal(recording.read.take, 0);
    if (first) {
      let bare = "";
      return bare;
    }
    let base = "take" + recording.read.take;
    return base;
  }
  let groups = list_group_by_property(counted, "key_group");
  let marked = [];
  for (let group of groups) {
    let members = group.items;
    members.sort(recording_before);
    let taken = [];
    for (let place = 0; less_than(place, members.length); place++) {
      let member = members[place];
      let base = mark_base_of(member);
      let plain = equal(place, 0);
      let v = format_of(member);
      let mark = plain ? base : mark_joined(base, v);
      let clashes = taken.includes(mark);
      if (clashes) {
        let sum = add(place, 1);
        let v2 = String(sum);
        mark = mark_joined(mark, v2);
      }
      list_add(taken, mark);
      list_add(marked, {
        read: member.read,
        path_audio: member.path_audio,
        mark,
      });
    }
  }
  return marked;
}
