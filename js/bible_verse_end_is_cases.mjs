export function bible_verse_end_is_cases() {
  "Verse endings beside whether each one finishes a sentence, one case for each way the answer can be got wrong.";
  "What rests on this reading is a page that keeps asking for one more verse until a sentence finishes. Answer no where the answer is yes and the reader gets a run cut in half; answer yes where it is no and the reader gets twenty-five verses they did not ask for, with nothing anywhere saying why. Neither shows up as an error.";
  "The marks it knows were measured across every bible this repo ships rather than written from the one language it started in, and the record of that measurement sits beside it. These cases are the other half: the record says which bibles were read, and this says what reading them meant.";
  "The endings are what a verse actually ends on. What comes before is not looked at, so the stems here are short on purpose - a long one would only suggest this reads more than it does.";
  let cases = [
    {
      text: "and servants of the word.",
      ends: true,
      why: "the full stop of Latin script, which is where this reading began and the only mark it knew for a while",
    },
    {
      text: "have been fulfilled among us,",
      ends: false,
      why: "a comma is where a verse was divided and not where a sentence stopped - the ordinary case of a verse that needs the next one",
    },
    {
      text: "Where is he?",
      ends: true,
      why: "a question finishes a sentence as surely as a statement does",
    },
    {
      text: "Rejoice!",
      ends: true,
      why: "so does an exclamation",
    },
    {
      text: 'and he said, "Follow me."',
      ends: true,
      why: "a closing quotation mark stands after the full stop rather than in place of it, so it is trimmed away before the question is asked",
    },
    {
      text: "تھے۔",
      ends: true,
      why: "the full stop of Urdu, a small upright stroke rather than a dot. Reading Urdu under a folder name that did not exist once filed it as a language whose sentences never end, which would have given its readers every run at full length",
    },
    {
      text: "ہے،",
      ends: false,
      why: "the comma of Arabic script leans the other way from the Latin one and is easy to take for an ending; it divides a sentence rather than closing it",
    },
    {
      text: "।",
      ends: true,
      why: "the upright bar that Hindi, Bengali, Punjabi and Oriya all end a sentence on",
    },
    {
      text: "。",
      ends: true,
      why: "the round stop of Chinese, which is a different character from the Latin dot and would be missed by a set holding only that",
    },
    {
      text: "，",
      ends: false,
      why: "Chinese has its own wider comma too, so a set gathered by eye could easily have taken this for the stop above",
    },
    {
      text: "።",
      ends: true,
      why: "the two dots Amharic ends a sentence on",
    },
    {
      text: "፤",
      ends: false,
      why: "Amharic's own semicolon closes a clause; counting it would have cut nearly every Amharic sentence in half",
    },
    {
      text: "ที่ประเทศยูเดีย",
      ends: false,
      why: "Thai writes a space where other languages write a stop, so a verse of it ends on a letter and no set of marks could ever answer yes - which is why the bibles that cannot be read this way are named apart and never asked",
    },
    {
      text: "πραγμάτων",
      ends: false,
      why: "the interlinear is the Greek as it was written, without punctuation of any kind, and it is named apart for the same reason",
    },
  ];
  return cases;
}
