import { arguments_assert } from "./arguments_assert.mjs";
export function bible_words_slips_all_cases() {
  "A small translation and two askings of it, one with a least word length and one with almost none, written so that the length is the only thing that differs between them and so its whole effect can be read off the two answers.";
  "The counts are the whole of what is being tested and are set far apart or close together on purpose rather than taken from anywhere real. Kinabuhi is spelled two ways so that the counts have to be added together before anything is compared, and each word is first met in a different chapter so that carrying the wrong verse back would show.";
  "★ THE TWO ASKINGS ARE THE POINT. Asked from six letters up, five words are examined and two come back: kanabuhi beside kinabuhi and gisala beside gidala, each a word six hundred times commoner one letter away. Asked from two letters up, nine are examined and a third comes back - ka, beside sa, which is written eight hundred times. Ka is an ordinary word and the reading has no way of knowing that, which is exactly the noise a short word makes and exactly why a length is asked for.";
  "Kinabuhi itself is examined in both askings and comes back with nothing, though kanabuhi stands one letter from it. That is the rule refusing to work backwards: it asks for a neighbour many times commoner than the word, and a common word has none. Without that case a reading that simply returned every pair it found would pass.";
  "Gidala is dropped for the same reason, abraham because nothing at all stands near it, and pito and dito because neither is remotely commoner than the other - two spellings at similar counts are a translation using both.";
  arguments_assert(arguments, 0);
  function sighting(count, chapter_code) {
    let s = {
      chapter_code,
      verse_number: "16",
      text: "usa ka linya",
      count,
    };
    return s;
  }
  let sightings = {
    Kinabuhi: sighting(100, "GEN01"),
    kinabuhi: sighting(500, "JHN03"),
    kanabuhi: sighting(1, "MRK02"),
    gidala: sighting(500, "PSA023"),
    gisala: sighting(1, "LUK04"),
    pito: sighting(50, "REV01"),
    dito: sighting(40, "REV02"),
    abraham: sighting(30, "ROM04"),
    sa: sighting(800, "GEN02"),
    ka: sighting(1, "ACT05"),
  };
  let times = 10;
  let kanabuhi = {
    word: "kanabuhi",
    seen: 1,
    nearest: "kinabuhi",
    nearest_seen: 600,
    nearer_size: 1,
    first_chapter: "MRK02",
  };
  let gisala = {
    word: "gisala",
    seen: 1,
    nearest: "gidala",
    nearest_seen: 500,
    nearer_size: 1,
    first_chapter: "LUK04",
  };
  let ka = {
    word: "ka",
    seen: 1,
    nearest: "sa",
    nearest_seen: 800,
    nearer_size: 1,
    first_chapter: "ACT05",
  };
  let long_asking = {
    letters: 6,
    expected: {
      vocabulary_size: 9,
      examined: 5,
      suspect: 2,
      rows: [kanabuhi, gisala],
    },
  };
  let short_asking = {
    letters: 2,
    expected: {
      vocabulary_size: 9,
      examined: 9,
      suspect: 3,
      rows: [ka, kanabuhi, gisala],
    },
  };
  let askings = [long_asking, short_asking];
  let c = {
    sightings,
    times,
    askings,
  };
  return c;
}
