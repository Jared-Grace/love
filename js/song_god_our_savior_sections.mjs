import { arguments_assert } from "./arguments_assert.mjs";
export function song_god_our_savior_sections() {
  "The words of this song, in the order they are first sung, gathered under the name of the part each belongs to.";
  "EACH PART IS WRITTEN DOWN ONCE. The chorus is sung four times and the tag twice, and writing them out again where they recur would say to a reader that the second one is a different thing to look at - it is not, and a page that listed it twice would offer the same scripture twice and teach nothing by the second offer. The singing repeats; the words on the page do not need to.";
  "The lines are kept exactly as they were written, punctuation and all, because they are somebody else's words and tidying them would be an edit nobody asked for. Where the original used curled quotation marks the plain ones stand in their place, since those are what every part of this repo can spell.";
  "The parts carry their own names rather than being numbered from their position, because one of them is both the third verse and the bridge, and a number would have to choose.";
  arguments_assert(arguments, 0);
  let sections = [
    {
      name: "Verse 1",
      lines: [
        "The loving Father, sent His Son",
        "Who came to earth from heaven's throne",
        "The Gospel told to Abraham",
        "The promised Seed to rescue man",
        "The Word made flesh, of virgin's womb",
        "True God and Man, all things renewed",
        "Behold, the Lamb of God was slain",
        "Behold, the King, His saving grace",
      ],
    },
    {
      name: "Chorus",
      lines: [
        "Forever, we will sing of Your goodness",
        "Father, Son, and Holy Spirit",
        "In Your kindness, God, You saved us",
        "Father, Son, and Holy Spirit: You alone we worship!",
      ],
    },
    {
      name: "Verse 2",
      lines: [
        "To bear the curse and wrath of God",
        "My sin on Him, nailed to the cross",
        "From all hell's anguish I'm set free,",
        "My Savior bore my penalty",
        "For \"It is finished!\" was His cry",
        "The Son of God laid down His life",
        "And may the water and the blood",
        "Wash all my sin, O fount of love",
      ],
    },
    {
      name: "Verse 3 / Bridge",
      lines: [
        "His body laid inside the grave,",
        "The Son of Man, death He did taste",
        "The Holy One, in linen clothed",
        "The pow'r of God removed the stone!",
        "O glorious day, the third at dawn",
        "Christ raised to life, the vict'ry won!",
        "His righteousness is counted mine",
        "We're raised with Christ, from death to life!",
      ],
    },
    {
      name: "Verse 4",
      lines: [
        "He holds me fast, He'll never lose",
        "Inside His grasp like hidden jewels,",
        "Upon His chest and beating heart",
        "Unending love shown from the start",
        "His precious blood He shed for me",
        "Availing while He intercedes",
        "By Spirit sealed, now clean and pure",
        "We'll sing His praise forevermore",
      ],
    },
    {
      name: "Tag",
      lines: ["We'll sing His praise forevermore"],
    },
  ];
  return sections;
}
