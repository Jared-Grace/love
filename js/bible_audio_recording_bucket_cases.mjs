export function bible_audio_recording_bucket_cases() {
  "Which of the five things each written-down recording is, and why - the corpus the reader of a recording's note is held against.";
  "★ THE ORDER OF THE QUESTIONS IS WHAT THIS PINS, AND ORDER CANNOT BE CHECKED BY RUNNING THE SWEEP. The sweep reads a disk that changes under it and takes a quarter of an hour, and every one of its counts adds up to the total whatever the order is, so a swapped question would go on adding up while hundreds of recordings were called the wrong thing. Written down here the two rows that catch the swap take a millisecond.";
  "★ THE EMPTY FOLDER IS THE CASE THIS WAS BUILT FOR. Zero pieces against zero verses lines up and has no differences, so a folder with no sound in it answered clean, and sixteen were sitting inside a count that was being read as evidence that recordings were right. That row fails the moment nothing-recorded is asked after the words instead of before them.";
  "★ THE ROW NOBODY COULD JUDGE CARRIES THE SAME ZEROS AS THE EMPTY FOLDER, WHICH IS THE OTHER SWAP. It is written down here answering could-not-be-asked while saying no pieces, so a reader that asked about the sound first would call a chapter it never looked at an empty folder and stop reporting that anything was unanswerable.";
  "★ THE ROWS ANSWERING THE ORDINARY THINGS CARRY AS MUCH WEIGHT AS THE FAULTS. A reader that called everything empty would pass a corpus of empty folders alone, so cut-another-way, words-changed and clean are each written twice, once at the edge and once in the middle.";
  let cases = [
    {
      note: "a chapter whose text could not be found, which reports no pieces and no verses",
      judged: false,
      chunks: 0,
      units: 0,
      aligned: false,
      unmatched: 0,
      bucket: "unjudged",
      why: "nothing about the numbers means anything when the question threw, so whether it was judged has to be asked before any of them",
    },
    {
      note: "a folder holding no sound, against a chapter whose text was not found either",
      judged: true,
      chunks: 0,
      units: 0,
      aligned: true,
      unmatched: 0,
      bucket: "empty",
      why: "the fault itself: no pieces against no verses lines up and has no differences, so this row answers clean unless the sound is asked about first",
    },
    {
      note: "a folder holding no sound, against a chapter of six verses",
      judged: true,
      chunks: 0,
      units: 6,
      aligned: false,
      unmatched: 0,
      bucket: "empty",
      why: "nothing recorded is the truer thing to say than cut another way, because there is no cutting to disagree with",
    },
    {
      note: "a recording cut into more pieces than the chapter has verses",
      judged: true,
      chunks: 51,
      units: 49,
      aligned: false,
      unmatched: 0,
      bucket: "recut",
      why: "piece three of a recording cut somewhere else holds no particular verse, so the count of differing words is not a number about anything",
    },
    {
      note: "a recording cut another way, whose differing pieces were counted anyway",
      judged: true,
      chunks: 51,
      units: 49,
      aligned: false,
      unmatched: 12,
      bucket: "recut",
      why: "the same row with a differences count filled in still has to answer cut another way, or a count nobody can read would decide it",
    },
    {
      note: "a recording of fourteen pieces where thirteen no longer say what the chapter says",
      judged: true,
      chunks: 14,
      units: 14,
      aligned: true,
      unmatched: 13,
      bucket: "stale",
      why: "the pieces correspond, so the words can be compared, and almost all of them changed",
    },
    {
      note: "a recording of fourteen pieces where one no longer says what the chapter says",
      judged: true,
      chunks: 14,
      units: 14,
      aligned: true,
      unmatched: 1,
      bucket: "stale",
      why: "one changed word is as much a reason to record the chapter again as thirteen, so the edge next to clean has to answer the same as the middle",
    },
    {
      note: "a recording whose pieces correspond and whose words all still match",
      judged: true,
      chunks: 14,
      units: 14,
      aligned: true,
      unmatched: 0,
      bucket: "clean",
      why: "the only row that means the recording can be shipped, and the one every other answer is defined against",
    },
  ];
  return cases;
}
