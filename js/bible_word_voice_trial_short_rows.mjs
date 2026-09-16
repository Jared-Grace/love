export function bible_word_voice_trial_short_rows() {
  "The one-letter Greek word said five different ways, to hear which way makes the voice say the sound instead of naming the letter.";
  "A GREEK VOICE GIVEN ONE LONE LETTER DESCRIBES IT, saying omicron with an accent rather than the vowel, so a word of one letter cannot be recorded the way every other word is.";
  "Each of these has one voice and nothing to choose between, so the screen shows them to be heard and written about, not picked over.";
  let tried = [
    ["plain", "ο", "a lone letter, with the accent mark taken off"],
    ["dot", "ὃ.", "the word with a full stop after it"],
    ["twice", "ὃ ὃ", "the word said twice"],
    ["pair", "ὃ ἡ", "two one-letter words together"],
    ["phrase", "ὃ λόγος", "the word joined to the word after it"],
    ["article_phrase", "ὁ λόγος", "the plain article joined to its word"],
    ["plain_phrase", "ο λόγος", "the same, with the accent mark taken off"],
    ["plain_life", "η ζωή", "another article joined to its word"],
    ["cut_alone_dot", "ο.", "modern spelling, on its own, with a full stop"],
    ["cut_dot", "ο. λόγος", "modern, a full stop, then a word"],
    ["cut_life", "η. ζωή", "the other letter, the same way"],
    ["cut_thrice", "ο ο ο", "modern, said three times over"],
  ];
  function lambda([key, text, meta], index) {
    let r = {
      id: "test-" + key,
      number: index + 1,
      text,
      meta,
      voices: [
        {
          name: "el-GR-Wavenet-B",
          label: "WaveNet",
          pick: "wavenet",
          url: "/love/gitignore/bible_word_voice_trial/test/" + key + ".mp3",
        },
      ],
    };
    return r;
  }
  let rows = tried.map(lambda);
  return rows;
}
