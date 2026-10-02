import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_remove } from "./text_remove.mjs";
import { equal } from "./equal.mjs";
import { assert_message } from "./assert_message.mjs";
export function song_image_couplet_sung(n) {
  "$plain n";
  "The words couplet n sings, written the way a person reads them: one line, with the commas and the one semicolon the song is written with.";
  "THE HALVES STAY BARE AND THE PUNCTUATION LIVES HERE. The halves are compared word for word against Bible translations and drawn from, and a comma inside one is a mark nothing there wants. A reader is the other way about: 'HIS hands HIS feet nailed to the tree' reads as a run-on, and a description written out of the bare halves printed thirty-two lines like it under the song.";
  "EACH LINE IS CHECKED AGAINST ITS HALVES, so the two spellings of one couplet cannot drift. Take the marks out of the line and it must be the halves joined by a space, word for word; a couplet reworded in one place and not the other throws here instead of printing the old words beside the new.";
  arguments_assert(arguments, 1);
  let lines = [
    "falsely accused, unjustly tried",
    "though innocent, condemned to die",
    "reviled and mocked, beaten and scorned",
    "the KING of kings was crowned with thorns",
    "HIS hands, HIS feet nailed to the tree",
    "CHRIST crucified to pardon me",
    "the LOVE of GOD for all to see",
    "my debt HE paid through suffering",
    "my debt HE paid through suffering",
    "forsaken by almighty GOD",
    "the FATHER gave HIS only SON",
    "cursed on a cross, HE drank the cup",
    "in agony 'til all was done",
    "HE breathed HIS last, and then HE died",
    "the wrath of GOD was satisfied",
    "the curse of sin has been undone",
    "HE paid the price with HIS own blood",
    "HE paid the price with HIS own blood",
    "HIS body laid inside a tomb",
    "hewn in the rock, it was brand new",
    "a stone was rolled to seal the grave",
    "then pilate put the guard in place",
    "but on the third, near dawn's first light",
    "the SON of GOD was raised to life",
    "WHO conquered death, now glorified",
    "all glory to the risen CHRIST",
    "all glory to the risen CHRIST",
    "HE will return to judge the earth",
    "we will receive what we have earned",
    "we live our lives in godly fear",
    "HE's coming soon; the day draws near",
    "with no more sorrow, no more pain",
    "for every tear HE'll wipe away",
    "our GOD will reign in perfect LOVE",
    "the great I AM, the FATHER's SON",
    "the great I AM, the FATHER's SON",
  ];
  let left = Number(n);
  let index = subtract(left, 1);
  let line = list_get(lines, index);
  let couplets = song_image_couplets();
  let couplet = list_get(couplets, index);
  let halves = list_join_space([couplet.first, couplet.second]);
  let t = text_remove(line, ",");
  let bare = text_remove(t, ";");
  let same = equal(bare, halves);
  assert_message(
    same,
    "couplet " +
      n +
      " is sung as '" +
      line +
      "' but its halves say '" +
      halves +
      "'",
  );
  return line;
}
