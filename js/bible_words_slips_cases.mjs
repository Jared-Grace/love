export function bible_words_slips_cases() {
  "A small translation and a handful of words to examine in it, written so that every reason the reading has for keeping a word and every reason it has for dropping one is exercised at least once.";
  "The counts are the whole of what is being tested, so they are set far apart or close together on purpose rather than taken from anywhere real. Kinabuhi is spelled two ways here because the reading is meant to add those together before it compares, and a corpus that spelled it once could not tell whether it did.";
  "Six words are examined and three come back. Kanabuhi and gisala come back because a word six hundred times commoner stands one letter away; ika-tulo comes back although the translation never writes it at all, which is the strongest sign of the three and the one an unseen word would lose if the reading only ever looked words up. Dito is dropped because pito is barely commoner, abraham because nothing stands near it, and mala because the only word near it is rare itself.";
  "Hinoon is deliberately absent from this corpus. It is the case that proves the reading judges nothing: in the real translation it comes back suspect and is a perfectly good word, so a corpus that quietly avoided such a pair would be claiming a precision the reading has never had.";
  let verse = {
    chapter_code: "JHN03",
    verse_number: "16",
    text: "usa ka linya",
  };
  function sighting(count) {
    let s = {
      chapter_code: verse.chapter_code,
      verse_number: verse.verse_number,
      text: verse.text,
      count,
    };
    return s;
  }
  let sightings = {
    Kinabuhi: sighting(100),
    kinabuhi: sighting(500),
    kanabuhi: sighting(1),
    gidala: sighting(500),
    gisala: sighting(1),
    ikatulo: sighting(100),
    pito: sighting(50),
    dito: sighting(40),
    abraham: sighting(30),
    mula: sighting(5),
  };
  let words = ["kanabuhi", "gisala", "ika-tulo", "dito", "abraham", "mala"];
  let times = 10;
  let expected = {
    vocabulary_size: 9,
    examined: 6,
    suspect: 3,
    rows: [
      {
        word: "kanabuhi",
        seen: 1,
        nearest: "kinabuhi",
        nearest_seen: 600,
        first_seen_is: true,
      },
      {
        word: "gisala",
        seen: 1,
        nearest: "gidala",
        nearest_seen: 500,
        first_seen_is: true,
      },
      {
        word: "ika-tulo",
        seen: 0,
        nearest: "ikatulo",
        nearest_seen: 100,
        first_seen_is: false,
      },
    ],
  };
  let c = {
    sightings,
    words,
    times,
    expected,
  };
  return c;
}
