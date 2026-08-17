export function bible_glyph_roots() {
  "The seed table this picture Bible is written from: each Greek root, the words that grow out of it, and the glyph each of those words is drawn by.";
  "The table is keyed by ROOT and not by Strong's number, because a number-keyed table hides the very kinship the picture Bible exists to show. Love the noun, love the verb and beloved the adjective carry three different numbers and are one root, and a reader who sees one glyph across all three has been told something true that no English translation can tell them without a footnote.";
  "Each word inside a root still names its own glyph rather than inheriting the root's. That is deliberate: a root is a family and not a promise that every member means the same thing, so a word whose sense has travelled far from its relatives can be drawn differently without leaving the family. Where they agree, they simply repeat the same glyph, and the repetition is the statement.";
  "A Strong's number is a testament's own. Greek 3056 and Hebrew 3056 are different words wearing one key, so this table is Greek and any Hebrew table is a separate one.";
  "This is a SEED and not a finished mapping. It exists to be run through the survey, whose job is to report where two roots want one glyph and where one glyph is being asked to cover senses too far apart to share it. The mapping is data so that answering those reports costs an edit rather than a rewrite.";
  let roots = [
    {
      root: "agape",
      gloss: "love",
      words: [
        {
          strong: "26",
          glyph: "heart_red",
        },
        {
          strong: "25",
          glyph: "heart_red",
        },
        {
          strong: "27",
          glyph: "heart_red",
        },
      ],
    },
    {
      root: "philos",
      gloss: "friendly love",
      words: [
        {
          strong: "5384",
          glyph: "heart_orange",
        },
        {
          strong: "5368",
          glyph: "heart_orange",
        },
        {
          strong: "5373",
          glyph: "heart_orange",
        },
      ],
    },
    {
      root: "theos",
      gloss: "God",
      words: [
        {
          strong: "2316",
          glyph: "fire",
        },
      ],
    },
    {
      root: "iesous",
      gloss: "Jesus",
      words: [
        {
          strong: "2424",
          glyph: "cross",
        },
      ],
    },
    {
      root: "christos",
      gloss: "Christ",
      words: [
        {
          strong: "5547",
          glyph: "crown",
        },
      ],
    },
    {
      root: "kurios",
      gloss: "Lord",
      words: [
        {
          strong: "2962",
          glyph: "crown",
        },
      ],
    },
    {
      root: "pneuma",
      gloss: "wind, breath, spirit",
      words: [
        {
          strong: "4151",
          glyph: "wind",
        },
      ],
    },
    {
      root: "hagios",
      gloss: "holy",
      words: [
        {
          strong: "40",
          glyph: "sparkle",
        },
        {
          strong: "37",
          glyph: "sparkle",
        },
        {
          strong: "38",
          glyph: "sparkle",
        },
      ],
    },
    {
      root: "parakletos",
      gloss: "one called alongside",
      words: [
        {
          strong: "3875",
          glyph: "hug",
        },
      ],
    },
    {
      root: "pater",
      gloss: "father",
      words: [
        {
          strong: "3962",
          glyph: "father",
        },
      ],
    },
    {
      root: "huios",
      gloss: "son",
      words: [
        {
          strong: "5207",
          glyph: "son",
        },
      ],
    },
    {
      root: "adelphos",
      gloss: "brother",
      words: [
        {
          strong: "80",
          glyph: "brother",
        },
      ],
    },
    {
      root: "anthropos",
      gloss: "human being",
      words: [
        {
          strong: "444",
          glyph: "person",
        },
      ],
    },
    {
      root: "logos",
      gloss: "word",
      words: [
        {
          strong: "3056",
          glyph: "speech",
        },
      ],
    },
    {
      root: "hemera",
      gloss: "day",
      words: [
        {
          strong: "2250",
          glyph: "sun",
        },
      ],
    },
    {
      root: "ouranos",
      gloss: "heaven, sky",
      words: [
        {
          strong: "3772",
          glyph: "sky",
        },
      ],
    },
  ];
  return roots;
}
