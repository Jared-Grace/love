export function bible_canticles_outside_psalter() {
  "The passages outside the Psalter that the historic daily office sings as canticles though the text never calls them songs, each named by the office name it is sung under.";
  "★ THIS LIST RESTS ON CHURCH USE AND THE OTHER ONE RESTS ON THE TEXT, AND THAT IS WHY THEY ARE TWO FUNCTIONS RATHER THAN A FLAG ON ONE. Its companion is a measurement: every entry there carries the verse saying the passage was sung. Every entry here is contradicted by its own introduction - Hannah and Jonah prayed, Mary said, Zechariah prophesied, and the elders of Revelation are saying rather than singing. Merging them would make a choice look like a finding, and a later reader would have no way to tell which entries could be checked against the text and which could not.";
  "★ THE OLDEST CANTICLE OF ALL IS NOT HERE, AND THE FOLDER IS THE REASON. The Benedicite - the Song of the Three Children, sung at morning prayer for fifteen centuries - stands in Daniel three of the ecumenical printings and nowhere in the sixty-six book protocanon this repo reads. So choosing the smaller book set silently dropped a canticle rather than only dropping books nobody planned to record, and that is the price of the choice rather than an oversight in this list.";
  "Two hundred and nineteen verses, of which Lamentations is a hundred and fifty-four, against the two hundred and seventy-four the text itself calls sung and the Psalter's two thousand four hundred and sixty-one.";
  "Lamentations is deliberately still absent. It is sung at Tenebrae, so it has as good a claim as anything here, but it is a hundred and fifty-four verses - more than twice this whole list - and a decision that size should be made on its own rather than carried in on the back of the canticles.";
  let canticles = [
    {
      chapter_code: "1SA02",
      verse_first: 1,
      verse_last: 10,
      name: "Canticle of Hannah",
      office: "sung as a canticle though 1SA02:1 says Hannah prayed",
    },
    {
      chapter_code: "ISA12",
      verse_first: 2,
      verse_last: 6,
      name: "Ecce Deus, the First Song of Isaiah",
      office:
        "sung at morning prayer; the passage calls for singing but is never called a song",
    },
    {
      chapter_code: "ISA42",
      verse_first: 10,
      verse_last: 12,
      name: "Cantate Domino",
      office:
        "sung as a canticle; the passage commands a new song rather than being one",
    },
    {
      chapter_code: "JON02",
      verse_first: 2,
      verse_last: 9,
      name: "Canticle of Jonah",
      office: "sung as a canticle though JON02:1 says Jonah prayed",
    },
    {
      chapter_code: "LUK01",
      verse_first: 46,
      verse_last: 55,
      name: "Magnificat",
      office: "sung at evening prayer though LUK01:46 says Mary said",
    },
    {
      chapter_code: "LUK01",
      verse_first: 68,
      verse_last: 79,
      name: "Benedictus",
      office:
        "sung at morning prayer though LUK01:67 says Zechariah prophesied",
    },
    {
      chapter_code: "LUK02",
      verse_first: 14,
      verse_last: 14,
      name: "Gloria in excelsis",
      office: "the angels' words, sung at the eucharist",
    },
    {
      chapter_code: "LUK02",
      verse_first: 29,
      verse_last: 32,
      name: "Nunc Dimittis",
      office:
        "sung at night prayer though LUK02:28 says Simeon blessed God and said",
    },
    {
      chapter_code: "REV04",
      verse_first: 11,
      verse_last: 11,
      name: "Dignus es, the elders before the throne",
      office: "sung as a canticle though REV04:10 says saying",
    },
    {
      chapter_code: "REV05",
      verse_first: 12,
      verse_last: 13,
      name: "Worthy is the Lamb",
      office:
        "sung with Dignus es; the sung part of this chapter is in the companion list",
    },
    {
      chapter_code: "REV11",
      verse_first: 17,
      verse_last: 18,
      name: "Thanksgiving of the twenty-four elders",
      office: "sung as a canticle though REV11:17 says saying",
    },
    {
      chapter_code: "REV19",
      verse_first: 1,
      verse_last: 7,
      name: "Hymnus, the Hallelujah of the great multitude",
      office: "sung as a canticle though REV19:1 says saying",
    },
  ];
  return canticles;
}
