export function bible_glyph_roots_hebrew() {
  "The seed table the Old Testament is drawn from: each Hebrew root, the words that grow out of it, and the glyph each of those words is drawn by.";
  "It is a SEPARATE table from the Greek one and not an extension of it, because a Strong's number belongs to a testament. Hebrew 3068 is the LORD's own name and Greek 3068 is a word for washing, and nothing about the number says which is meant - so a single table would silently draw one testament with the other's pictures.";
  "The GLYPHS are deliberately the same ones. Two tables of numbers, one vocabulary of pictures: the Hebrew word for God and the Greek word for God are both drawn as the fire, so a reader who learned the pictures in first John can open Genesis and read. That is the whole reason the pictures were keyed to roots rather than to a translation, and it is the one thing the Old Testament table must not get wrong.";
  "Where the two testaments genuinely differ, the picture differs with them. The covenant name is not the Greek word for God with Hebrew letters, so it is not drawn as the fire - it gets its own glyph, because a reader meeting it should see that they have met something the New Testament does not say in the same way.";
  "This is a SEED and not a finished mapping, exactly as the Greek table is. It exists to be run through the survey, which reports what is still undrawn in order of how often a reader would meet it, so the next words to author are measured rather than guessed at.";
  let roots = [
    {
      root: "yhwh",
      gloss: "the LORD, the covenant name",
      words: [
        {
          strong: "3068",
          glyph: "name_tag",
        },
      ],
    },
    {
      root: "elohim",
      gloss: "God",
      words: [
        {
          strong: "430",
          glyph: "fire",
        },
        {
          strong: "410",
          glyph: "fire",
        },
      ],
    },
    {
      root: "ab",
      gloss: "father",
      words: [
        {
          strong: "1",
          glyph: "father",
        },
      ],
    },
    {
      root: "ben",
      gloss: "son",
      words: [
        {
          strong: "1121",
          glyph: "son",
        },
      ],
    },
    {
      root: "bath",
      gloss: "daughter",
      words: [
        {
          strong: "1323",
          glyph: "woman",
        },
      ],
    },
    {
      root: "ach",
      gloss: "brother",
      words: [
        {
          strong: "251",
          glyph: "brother",
        },
      ],
    },
    {
      root: "ish",
      gloss: "man, husband",
      words: [
        {
          strong: "376",
          glyph: "man_beard",
        },
      ],
    },
    {
      root: "ishshah",
      gloss: "woman, wife",
      words: [
        {
          strong: "802",
          glyph: "woman",
        },
      ],
    },
    {
      root: "adam",
      gloss: "human being, mankind",
      words: [
        {
          strong: "120",
          glyph: "person",
        },
      ],
    },
    {
      root: "am",
      gloss: "a people",
      words: [
        {
          strong: "5971",
          glyph: "family",
        },
      ],
    },
    {
      root: "goy",
      gloss: "nation, the nations",
      words: [
        {
          strong: "1471",
          glyph: "map",
        },
      ],
    },
    {
      root: "melek",
      gloss: "king, reign, kingdom",
      words: [
        {
          strong: "4428",
          glyph: "king",
        },
        {
          strong: "4427",
          glyph: "castle",
        },
        {
          strong: "4467",
          glyph: "castle",
        },
      ],
    },
    {
      root: "ebed",
      gloss: "servant, serve",
      words: [
        {
          strong: "5650",
          glyph: "kneeling",
        },
        {
          strong: "5647",
          glyph: "kneeling",
        },
      ],
    },
    {
      root: "erets",
      gloss: "earth, land",
      words: [
        {
          strong: "776",
          glyph: "earth",
        },
      ],
    },
    {
      root: "shamayim",
      gloss: "heaven, sky",
      words: [
        {
          strong: "8064",
          glyph: "sky",
        },
      ],
    },
    {
      root: "yom",
      gloss: "day",
      words: [
        {
          strong: "3117",
          glyph: "sun",
        },
      ],
    },
    {
      root: "olam",
      gloss: "age, forever",
      words: [
        {
          strong: "5769",
          glyph: "hourglass",
        },
      ],
    },
    {
      root: "bayith",
      gloss: "house, household",
      words: [
        {
          strong: "1004",
          glyph: "house",
        },
      ],
    },
    {
      root: "ir",
      gloss: "city, town",
      words: [
        {
          strong: "5892",
          glyph: "city",
        },
      ],
    },
    {
      root: "derek",
      gloss: "way, road",
      words: [
        {
          strong: "1870",
          glyph: "road",
        },
      ],
    },
    {
      root: "halak",
      gloss: "go, walk",
      words: [
        {
          strong: "1980",
          glyph: "walking",
        },
      ],
    },
    {
      root: "bo",
      gloss: "come, go in",
      words: [
        {
          strong: "935",
          glyph: "footprints",
        },
      ],
    },
    {
      root: "amar",
      gloss: "say, said",
      words: [
        {
          strong: "559",
          glyph: "speech",
        },
      ],
    },
    {
      root: "dabar",
      gloss: "word, speak",
      words: [
        {
          strong: "1697",
          glyph: "speech",
        },
        {
          strong: "1696",
          glyph: "mouth",
        },
      ],
    },
    {
      root: "qol",
      gloss: "voice, sound",
      words: [
        {
          strong: "6963",
          glyph: "voice",
        },
      ],
    },
    {
      root: "shama",
      gloss: "hear, listen",
      words: [
        {
          strong: "8085",
          glyph: "ear",
        },
      ],
    },
    {
      root: "raah",
      gloss: "see, look",
      words: [
        {
          strong: "7200",
          glyph: "eye",
        },
      ],
    },
    {
      root: "ayin",
      gloss: "eye",
      words: [
        {
          strong: "5869",
          glyph: "eyes",
        },
      ],
    },
    {
      root: "yada",
      gloss: "know",
      words: [
        {
          strong: "3045",
          glyph: "lightbulb",
        },
      ],
    },
    {
      root: "yad",
      gloss: "hand",
      words: [
        {
          strong: "3027",
          glyph: "hand",
        },
      ],
    },
    {
      root: "nathan",
      gloss: "give",
      words: [
        {
          strong: "5414",
          glyph: "hands_giving",
        },
      ],
    },
    {
      root: "laqach",
      gloss: "receive, take",
      words: [
        {
          strong: "3947",
          glyph: "hand_receiving",
        },
      ],
    },
    {
      root: "asah",
      gloss: "do, make",
      words: [
        {
          strong: "6213",
          glyph: "hammer",
        },
      ],
    },
    {
      root: "melakah",
      gloss: "work, workmanship",
      words: [
        {
          strong: "4399",
          glyph: "tools",
        },
      ],
    },
    {
      root: "leb",
      gloss: "heart",
      words: [
        {
          strong: "3820",
          glyph: "heart_organ",
        },
        {
          strong: "3824",
          glyph: "heart_organ",
        },
      ],
    },
    {
      root: "ahab",
      gloss: "love",
      words: [
        {
          strong: "157",
          glyph: "heart_red",
        },
        {
          strong: "160",
          glyph: "heart_red",
        },
      ],
    },
    {
      root: "chesed",
      gloss: "steadfast love, mercy",
      words: [
        {
          strong: "2617",
          glyph: "gift",
        },
      ],
    },
    {
      root: "emeth",
      gloss: "truth, faithfulness",
      words: [
        {
          strong: "571",
          glyph: "check",
        },
      ],
    },
    {
      root: "aman",
      gloss: "believe, be faithful, amen",
      words: [
        {
          strong: "539",
          glyph: "anchor",
        },
        {
          strong: "543",
          glyph: "hands_praying",
        },
      ],
    },
    {
      root: "chata",
      gloss: "miss the mark, sin",
      words: [
        {
          strong: "2398",
          glyph: "bow",
        },
        {
          strong: "2403",
          glyph: "bow",
        },
      ],
    },
    {
      root: "qadash",
      gloss: "holy, set apart",
      words: [
        {
          strong: "6944",
          glyph: "sparkle",
        },
        {
          strong: "6918",
          glyph: "sparkle",
        },
        {
          strong: "6942",
          glyph: "sparkle",
        },
      ],
    },
    {
      root: "ruach",
      gloss: "wind, breath, spirit",
      words: [
        {
          strong: "7307",
          glyph: "wind",
        },
      ],
    },
    {
      root: "nephesh",
      gloss: "soul, life, self",
      words: [
        {
          strong: "5315",
          glyph: "person_other",
        },
      ],
    },
    {
      root: "chayah",
      gloss: "live, life",
      words: [
        {
          strong: "2416",
          glyph: "sprout",
        },
        {
          strong: "2421",
          glyph: "sprout",
        },
      ],
    },
    {
      root: "muth",
      gloss: "die, death",
      words: [
        {
          strong: "4191",
          glyph: "skull",
        },
        {
          strong: "4194",
          glyph: "skull",
        },
      ],
    },
    {
      root: "basar",
      gloss: "flesh",
      words: [
        {
          strong: "1320",
          glyph: "meat",
        },
      ],
    },
    {
      root: "shem",
      gloss: "name",
      words: [
        {
          strong: "8034",
          glyph: "name_tag",
        },
      ],
    },
    {
      root: "torah",
      gloss: "law, instruction",
      words: [
        {
          strong: "8451",
          glyph: "scroll",
        },
      ],
    },
    {
      root: "mitsvah",
      gloss: "commandment",
      words: [
        {
          strong: "4687",
          glyph: "scroll",
        },
      ],
    },
    {
      root: "kabod",
      gloss: "glory",
      words: [
        {
          strong: "3519",
          glyph: "star",
        },
      ],
    },
    {
      root: "koach",
      gloss: "power, strength",
      words: [
        {
          strong: "3581",
          glyph: "lightning",
        },
      ],
    },
    {
      root: "malak",
      gloss: "messenger, angel",
      words: [
        {
          strong: "4397",
          glyph: "angel",
        },
      ],
    },
    {
      root: "nabi",
      gloss: "prophet",
      words: [
        {
          strong: "5030",
          glyph: "megaphone",
        },
      ],
    },
    {
      root: "yehudi",
      gloss: "Jew, Judah",
      words: [
        {
          strong: "3064",
          glyph: "menorah",
        },
      ],
    },
    {
      root: "qahal",
      gloss: "assembly, congregation",
      words: [
        {
          strong: "6951",
          glyph: "church",
        },
      ],
    },
    {
      root: "tob",
      gloss: "good",
      words: [
        {
          strong: "2896",
          glyph: "thumbs_up",
        },
      ],
    },
    {
      root: "adon",
      gloss: "lord, master",
      words: [
        {
          strong: "113",
          glyph: "crown",
        },
        {
          strong: "136",
          glyph: "crown",
        },
      ],
    },
    {
      root: "mashiach",
      gloss: "anointed one",
      words: [
        {
          strong: "4899",
          glyph: "oil",
        },
        {
          strong: "4886",
          glyph: "oil",
        },
      ],
    },
  ];
  return roots;
}
