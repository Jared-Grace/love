import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_videos_paths } from "./giveaway_psalms_videos_paths.mjs";
import { object_values } from "./object_values.mjs";
import { path_basename } from "./path_basename.mjs";
import { lyric_video_video_name_read_or_null } from "./lyric_video_video_name_read_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { lyric_video_videos_unclaimed } from "./lyric_video_videos_unclaimed.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_videos_unclaimed_reckoned(folder_audio) {
  arguments_assert(arguments, 1);
  ("$plain folder_audio");
  ("Every lyric video in a folder of downloaded songs that no recording claims, sorted into what each one is: a render left over from the naming scheme that came before this one, a singing already given away under another file, a different singing of a psalm the giveaway does hand out, a psalm the giveaway hands out no video of at all, and the files this rule has nothing to say about.");
  ("★ IT SORTS BY THE NAME AND NEVER BY THE SOUND, AND THAT IS A MEASURED CHOICE RATHER THAN A SHORTCUT. Comparing the loudness of every spare against every recording does work and was proved to work, but it costs hours of decoding and answers with a likelihood somebody then has to judge. The names already hold the passage and the singing's mark, because the thing that rendered these wrote them there - so the question of which psalm a spare is of needs no decoding at all, and the far smaller question of which singing is left to the sound, pointed at the few files where the name genuinely cannot say.");
  ("★ THE KINDS WANT DIFFERENT THINGS DONE, WHICH IS THE WHOLE REASON FOR SORTING THEM. A spare whose exact singing is already given away is a leftover and may simply be deleted. A spare of a psalm given away under other singings is almost always the render of a recording somebody edited, whose mark moved underneath it - that one is worth joining back by its sound, and it is the small set that makes the sound worth asking. A spare of a psalm the giveaway holds no video of is a loss: the render exists and the download does not offer it. And a file this rule cannot read is not judged at all, only named.");
  ("★ THE OLD NAMING SCHEME IS TAKEN OUT FIRST, BECAUSE WITHOUT IT THE LOSS COLUMN IS WRONG BY A FACTOR OF TEN. Measured on 2026-10-19, fifty-five spares were of psalms the giveaway hands no video of - and fifty of those fifty-five were simply the previous generation of renders, sitting on the disk beside their replacements. Read as losses they would have sent somebody hunting for fifty videos that were never lost at all.");
  ("★ AND THE SCHEME IS TOLD APART BY SOMETHING THE CURRENT RULE CANNOT PRODUCE, NOT BY A GUESS AT WHAT LOOKS OLD. The name builder writes the passage out of the timing document and turns its colon into an underscore, which is the only underscore it can ever write - so an underscore right after the word Psalm, where a colon could not stand, is a name no version of the current rule could have made. That is a proof rather than a resemblance, which is what makes it safe to drop a whole column on.");
  ("★ HOW MANY OF THE GIVEN-AWAY VIDEOS COULD NOT BE READ IS HANDED BACK, BECAUSE THAT NUMBER BOUNDS HOW FAR THE LOSS COLUMN CAN BE TRUSTED. A video found through the note its render left is named whatever its renderer called it, which may be nothing like this rule - and every such video is a psalm that is being given away while this reading cannot see it. So a spare called a loss might be a leftover of one of those. The other kinds do not depend on it, and a reader who knows the number knows which column to doubt.");
  ("Both sides are read with one rule and in one direction, so a spare and a given-away video that are of the same psalm cannot be spelled differently here however they are spelled on the disk.");
  ("The count of spares read and the count whose names this rule understood come back together, because a run pointed at a folder holding none of these songs would otherwise look exactly like a folder with nothing wrong in it.");
  let walk = await giveaway_psalms_videos_paths(folder_audio);
  let claimed = object_values(walk.paths);
  let passages_given = [];
  let singings_given = [];
  let claimed_unreadable = 0;
  for (let path_video of claimed) {
    let name_claimed = await path_basename(path_video);
    let read_claimed = lyric_video_video_name_read_or_null(name_claimed);
    if (null_is(read_claimed)) {
      claimed_unreadable = add(claimed_unreadable, 1);
      continue;
    }
    list_add(passages_given, read_claimed.passage);
    let item = text_combine_multiple([
      read_claimed.passage,
      " (",
      read_claimed.mark,
      ")",
    ]);
    list_add(singings_given, item);
  }
  let spares = await lyric_video_videos_unclaimed(folder_audio);
  let naming_old = [];
  let superseded = [];
  let alternative = [];
  let passage_unclaimed = [];
  let unreadable = [];
  for (let path_spare of spares) {
    let name_spare = await path_basename(path_spare);
    let read_spare = lyric_video_video_name_read_or_null(name_spare);
    if (null_is(read_spare)) {
      list_add(unreadable, name_spare);
      continue;
    }
    let row = {
      name: name_spare,
      passage: read_spare.passage,
      mark: read_spare.mark,
    };
    let scheme_old_is = text_starts_with(read_spare.passage, "Psalm_");
    if (scheme_old_is) {
      list_add(naming_old, row);
      continue;
    }
    let singing = text_combine_multiple([
      read_spare.passage,
      " (",
      read_spare.mark,
      ")",
    ]);
    let same_singing_is = list_includes(singings_given, singing);
    if (same_singing_is) {
      list_add(superseded, row);
      continue;
    }
    let same_passage_is = list_includes(passages_given, read_spare.passage);
    if (same_passage_is) {
      list_add(alternative, row);
      continue;
    }
    list_add(passage_unclaimed, row);
  }
  let answer = {
    folder: folder_audio,
    spares: list_size(spares),
    claimed: list_size(claimed),
    claimed_unreadable: claimed_unreadable,
    naming_old: naming_old,
    superseded: superseded,
    alternative: alternative,
    passage_unclaimed: passage_unclaimed,
    unreadable: unreadable,
  };
  return answer;
}
