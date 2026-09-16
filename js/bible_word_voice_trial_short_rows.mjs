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
  ];
  let rows = tried.map(([key, text, meta], index) => ({
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
  }));
  return rows;
}
