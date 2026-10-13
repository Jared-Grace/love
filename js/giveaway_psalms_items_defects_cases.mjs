import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
export function giveaway_psalms_items_defects_cases() {
  arguments_assert(arguments, 0);
  ("The written cases proving that a file named the same as another file in its box is a fault the box check does name, and that two boxes sharing a name is not.");
  ("★ THE SHELF AS IT STANDS HAS NO COLLISION IN IT, SO RUNNING THE CHECK OVER IT PROVES ONLY THAT IT SAYS NOTHING - WHICH IS ALSO WHAT A CHECK THAT STOPPED WORKING SAYS. These cases are the only place the fault is ever actually seen. The clean cases are here for the same reason from the other side: a check that answered with a fault for every box would pass every case but those.");
  ("★ THE TWO COLLISIONS ARE THE TWO WAYS IT COULD REALLY HAPPEN, AND THEY COME FROM DIFFERENT DIRECTIONS. One is a recording whose given-away name lands on the name of a text file, which is possible because the two names are spelled by rules that have never met. The other is the three renderings of the words colliding among themselves: two of them are the same rendering under two endings, so making both endings the same would quietly turn three files into two.");
  ("★ THE CASE OF TWO BOXES SHARING A NAME IS THE ONE THAT HAS TO COME BACK CLEAN, AND IT IS WHY IT IS HERE. A check written one line differently would gather every name on the shelf and find that every psalm's files are named after their own psalm - except that a bare chapter and a chapter with a verse range are different names in different boxes, and nothing about a box forbids a name another box uses. Reported, it would be eighty-two red boxes nobody could clear.");
  ("The boxes are spelled out rather than read off the record. A case that read the record would change its own meaning every time a song was added, and the whole point of a case is that it says the same thing next year.");
  function box(identifier, names) {
    let files = [];
    for (let name of names) {
      let file = {
        kind: "song",
        path_in_item: name,
      };
      list_add(files, file);
    }
    let r = {
      identifier: identifier,
      files: files,
    };
    return r;
  }
  let words = "PSA147_engbsb_text_words.txt";
  let numbered = "PSA147_engbsb_text_numbered.txt";
  let numbered_json = "PSA147_engbsb_text_numbered.json";
  let sung = "PSA147_engbsb_song_take00.wav";
  let whole = box("JESUSrosetolife_psa147", [
    sung,
    words,
    numbered,
    numbered_json,
  ]);
  let singing_on_words = box("JESUSrosetolife_psa147", [
    words,
    words,
    numbered,
    numbered_json,
  ]);
  let renderings_collide = box("JESUSrosetolife_psa147", [
    sung,
    words,
    numbered,
    numbered,
  ]);
  let other = box("JESUSrosetolife_psa148", [sung, words]);
  let cases = [
    {
      items: [whole],
      faults: "",
      why: "A box as every box on the shelf is today: the singing of a psalm and that psalm's words in three renderings, no two named alike.",
    },
    {
      items: [singing_on_words],
      faults: "name_claimed_twice",
      why: "A recording whose given-away name lands on the name of a text file. The two names are spelled by different rules and neither rule can see the other, so nothing upstream of the box could have caught it - and the host would not refuse it, it would keep whichever arrived last and leave the box looking complete.",
    },
    {
      items: [renderings_collide],
      faults: "name_claimed_twice",
      why: "The words of the psalm colliding with themselves. Two of the three renderings are the same rendering under two endings, so a change that gave them one ending would hand the box two files under one name and lose a third of what the person asked for.",
    },
    {
      items: [whole, other],
      faults: "",
      why: "Two boxes holding a file named the same. Today's naming cannot produce this, since every name carries its own psalm's chapter - the case is built to pin where the check looks rather than to describe something on the shelf. It has to come back clean: a file's address is its box and then its name, so one box never hides another's file, and a shelf-wide check would instead have to report every box.",
    },
  ];
  return cases;
}
