export function bible_songs_outside_psalter() {
  "Every passage outside the Psalter that Scripture itself calls a song or says was sung, with the verse that says so.";
  "★ THE TEST IS WHAT THE TEXT SAYS ABOUT THE PASSAGE, NEVER WHAT THE PASSAGE SOUNDS LIKE. Poetry is not song. Setting the WEB's own poetry marks as the test gives more than five thousand eight hundred poetic verses outside the Psalter, of which Job has nine hundred and ninety, Proverbs nine hundred and nine, Isaiah seven hundred and forty-one and Jeremiah four hundred and seventy-two - and nobody sings Proverbs. So each entry here carries the verse that warrants it, and a passage with no such verse is left out however song-like it reads.";
  "★ A CALL TO SING IS NOT A LABEL. Isaiah twelve and Isaiah forty-two both command singing inside themselves - Sing to the LORD, for he has done excellent things - and neither is anywhere called a song. They are left out for the same reason Proverbs is, and letting them in would let in every psalm-like passage in the prophets by the same door.";
  "★ TWO SONGS ARE PSALMS ALREADY AND SO ARE NOT HERE. Second Samuel twenty-two is Psalm eighteen, and First Chronicles sixteen verses eight to thirty-six is stitched from Psalms one hundred and five, ninety-six and one hundred and six. Eighty verses. They need a second address pointing at one recording rather than a second recording, and calling them new songs would have made the sung half look eighty verses larger than it is.";
  "The passages the church has sung for centuries without the text saying so are deliberately absent: Hannah, who prayed; Jonah, who prayed; Mary, who said; Zechariah, who prophesied; Simeon; Daniel; Lamentations, whose only use of the word is the poet complaining he has become their song; and the acclamations of Revelation four, seven, eleven, twelve and nineteen, every one of which says saying rather than singing. Those are a choice, and this list is a measurement, so they wait to be added by hand rather than being smuggled in under the same heading.";
  "Two hundred and seventy-four verses in all, against the Psalter's two thousand four hundred and sixty-one. The Psalms are the work; this is the remainder.";
  let songs = [
    {
      chapter_code: "EXO15",
      verse_first: 1,
      verse_last: 18,
      name: "Song of the Sea",
      warrant:
        "EXO15:1 - Then Moses and the children of Israel sang this song to the LORD",
    },
    {
      chapter_code: "EXO15",
      verse_first: 21,
      verse_last: 21,
      name: "Miriam's refrain",
      warrant:
        "EXO15:20 - took a tambourine in her hand; and all the women went out after her with tambourines and with dances",
    },
    {
      chapter_code: "NUM21",
      verse_first: 17,
      verse_last: 18,
      name: "Song of the Well",
      warrant: "NUM21:17 - Then Israel sang this song",
    },
    {
      chapter_code: "DEU32",
      verse_first: 1,
      verse_last: 43,
      name: "Song of Moses",
      warrant:
        "DEU31:19 - Now therefore write this song for yourselves, and teach it to the children of Israel",
    },
    {
      chapter_code: "JDG05",
      verse_first: 2,
      verse_last: 31,
      name: "Song of Deborah and Barak",
      warrant:
        "JDG05:1 - Then Deborah and Barak the son of Abinoam sang on that day",
    },
    {
      chapter_code: "2SA01",
      verse_first: 19,
      verse_last: 27,
      name: "Song of the Bow",
      warrant:
        "2SA01:18 - he commanded them to teach the children of Judah the song of the bow",
    },
    {
      chapter_code: "ISA26",
      verse_first: 1,
      verse_last: 19,
      name: "Song sung in the land of Judah",
      warrant:
        "ISA26:1 - In that day, this song will be sung in the land of Judah",
    },
    {
      chapter_code: "ISA38",
      verse_first: 10,
      verse_last: 20,
      name: "Writing of Hezekiah",
      warrant:
        "ISA38:20 - we will sing my songs with stringed instruments all the days of our life",
    },
    {
      chapter_code: "HAB03",
      verse_first: 1,
      verse_last: 19,
      name: "Prayer of Habakkuk",
      warrant: "HAB03:19 - For the music director, on my stringed instruments",
    },
    {
      chapter_code: "SNG",
      verse_first: 1,
      verse_last: 117,
      name: "Song of Songs, the whole book",
      warrant: "SNG01:1 - The Song of songs, which is Solomon's",
    },
    {
      chapter_code: "REV05",
      verse_first: 9,
      verse_last: 10,
      name: "New song before the throne",
      warrant: "REV05:9 - They sang a new song",
    },
    {
      chapter_code: "REV14",
      verse_first: 3,
      verse_last: 3,
      name: "New song of the hundred and forty-four thousand",
      warrant: "REV14:3 - They sing a new song before the throne",
    },
    {
      chapter_code: "REV15",
      verse_first: 3,
      verse_last: 4,
      name: "Song of Moses and of the Lamb",
      warrant:
        "REV15:3 - They sang the song of Moses, the servant of God, and the song of the Lamb",
    },
  ];
  return songs;
}
