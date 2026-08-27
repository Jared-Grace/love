export function midi_chords_recover_cases() {
  "short lines written as a melody and a bass together with the chords a musician would name under them";
  "these were authored rather than measured so they are what the chooser is held to and every one of them is a chord a person can check by eye";
  "the case where a fourth sits in the tune over a held bass note is recorded as the chord standing on that bass rather than as the chord the bass is the root of, because no third sounds anywhere in it, so the two notes that do sound are the whole of the evidence and naming the other one would be reading a note that is not there";
  "each case names the chord vocabulary it is written for, because the same two notes are harmonised differently by a chorale and by a modern worship song, so a case without one would be holding the chooser to whichever vocabulary happened to be the default";
  let r = [
    {
      title: "C major with the root of every chord in the bass",
      style: "hymn",
      melody: [64, 65, 62, 64, 69, 65, 71, 72],
      bass: [48, 41, 43, 48, 45, 50, 43, 48],
      want: ["C", "F", "G", "C", "Am", "Dm", "G", "C"],
    },
    {
      title: "C major with a chord standing on its third",
      style: "hymn",
      melody: [64, 67, 65, 64, 62, 65, 71, 72],
      bass: [48, 52, 41, 48, 43, 50, 43, 48],
      want: ["C", "C", "F", "C", "G", "Dm", "G", "C"],
    },
    {
      title: "G major with the root of every chord in the bass",
      style: "hymn",
      melody: [71, 72, 71, 71, 69, 71, 73, 74],
      bass: [43, 48, 40, 43, 45, 47, 38, 43],
      want: ["G", "C", "Em", "G", "Am", "Bm", "D", "G"],
    },
    {
      title: "A minor ending on its own chord with the raised leading note",
      style: "hymn",
      melody: [72, 71, 69, 68, 69, 72, 68, 69],
      bass: [45, 41, 43, 40, 45, 41, 40, 45],
      want: ["Am", "F", "G", "E", "Am", "F", "E", "Am"],
    },
    {
      title: "C major going round the four chords a worship song lives on",
      style: "pop",
      melody: [64, 62, 64, 65, 67, 71, 69, 72],
      bass: [48, 43, 45, 41, 48, 43, 45, 41],
      want: ["C", "G", "Am", "F", "C", "G", "Am", "F"],
    },
    {
      title: "C major where a fourth held in the tune over the bass is named as a chord standing on that bass",
      style: "pop",
      melody: [64, 72, 71, 72],
      bass: [48, 43, 43, 48],
      want: ["C", "C", "G", "C"],
    },
  ];
  return r;
}
