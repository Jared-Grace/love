import { arguments_assert } from "./arguments_assert.mjs";
export function giveaway_bible_verses_rendered_cases() {
  arguments_assert(arguments, 0);
  ("The written cases holding what each of the three given-away shapes of a psalm's words actually comes out as, spelled out letter for letter.");
  ("★ THE EXPECTED ANSWERS ARE SPELLED OUT RATHER THAN BUILT FROM THE SAME PIECES THE INPUT IS BUILT FROM, AND THAT IS THE WHOLE VALUE OF THE CASE. An expected answer assembled by joining the verses together would agree with any renderer that joined the verses together, however it joined them - it would pass a renderer that lost the numbers, one that ran the verses into one line, one that put them in the wrong order. Written out flat, the case disagrees with all three.");
  ("★ THE PSALM IS THE SHORTEST ONE THERE IS, WHICH IS WHY A WHOLE REAL PSALM COULD BE PUT IN HERE INSTEAD OF A MADE-UP VERSE. Psalm 117 is two verses, so the case is small enough to read and is still the thing being given away rather than a stand-in for it. The wording is the Berean's own, read off the store, so a case that passed on invented words and failed on real ones is not possible.");
  ("★ ONE CASE CARRIES A VERSE NUMBERED WITH A RANGE RATHER THAN A COUNT, BECAUSE THAT IS THE BRANCH NOTHING ON THIS SHELF EXERCISES. The Berean numbers every psalm one by one, so the real psalms would never notice a renderer that counted the lines instead of reading each verse's own number - and some translations run two verses together and carry them as one. The case holds that the number is taken as written.");
  ("★ THE JSON SHAPE IS HELD AS THE TEXT OF THE FILE AND NOT AS AN OBJECT, BECAUSE THE FILE IS WHAT IS GIVEN AWAY. Two spaces of indent and a line to a verse is what somebody opening it sees; comparing objects instead would pass a renderer that wrote the whole thing on one line of fifteen hundred characters, which is a file that cannot be looked at.");
  ("The shapes are asked for by the mark and the ending that name them in a file name, which is how the real caller asks, so the picking between the three is held here as well as the rendering.");
  function verse(verse_number, text) {
    let r = {
      verse_number: verse_number,
      text: text,
    };
    return r;
  }
  let nations = "Praise the LORD, all you nations! Extol Him, all you peoples!";
  let devotion =
    "For great is His loving devotion toward us, and the faithfulness of the LORD endures forever. Hallelujah!";
  let v = verse("1", nations);
  let v2 = verse("2", devotion);
  let psalm_ = [v, v2];
  let v3 = verse("2-3", devotion);
  let joined = [v3];
  let cases = [
    {
      verses: psalm_,
      mark: "words",
      ending: ".txt",
      rendered:
        "Praise the LORD, all you nations! Extol Him, all you peoples!\nFor great is His loving devotion toward us, and the faithfulness of the LORD endures forever. Hallelujah!",
      why: "The file somebody sings along from: nothing but the words, a verse to a line, no number anywhere and nothing added at the end.",
    },
    {
      verses: psalm_,
      mark: "numbered",
      ending: ".txt",
      rendered:
        "1 Praise the LORD, all you nations! Extol Him, all you peoples!\n2 For great is His loving devotion toward us, and the faithfulness of the LORD endures forever. Hallelujah!",
      why: "The file somebody looks a verse up in: the number bare at the start of the line, one space, then that verse's words. This is what joins a box to its own singing, since a psalm sung in parts is sung by verse range.",
    },
    {
      verses: psalm_,
      mark: "numbered",
      ending: ".json",
      rendered:
        '{\n  "1": "Praise the LORD, all you nations! Extol Him, all you peoples!",\n  "2": "For great is His loving devotion toward us, and the faithfulness of the LORD endures forever. Hallelujah!"\n}',
      why: "The file somebody writes a program over: the verse number as a key, the words as its value, indented two spaces so it can be opened and read as well as parsed.",
    },
    {
      verses: joined,
      mark: "numbered",
      ending: ".txt",
      rendered:
        "2-3 For great is His loving devotion toward us, and the faithfulness of the LORD endures forever. Hallelujah!",
      why: "A verse whose number is a range, as a translation that runs two verses together carries it. The range appears as it stands, which is what a renderer counting its own lines could not do.",
    },
  ];
  return cases;
}
