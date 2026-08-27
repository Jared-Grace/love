export function midi_chords_recover_cases() {
  "short chorale lines written as a melody and a bass together with the chords a musician would name under them";
  "these were authored rather than measured so they are what the chooser is held to and every one of them is a chord a person can check by eye";
  let r = [
    {
      title: "C major with the root of every chord in the bass",
      melody: [64, 65, 62, 64, 69, 65, 71, 72],
      bass: [48, 41, 43, 48, 45, 50, 43, 48],
      want: ["C", "F", "G", "C", "Am", "Dm", "G", "C"],
    },
    {
      title: "C major with a chord standing on its third",
      melody: [64, 67, 65, 64, 62, 65, 71, 72],
      bass: [48, 52, 41, 48, 43, 50, 43, 48],
      want: ["C", "C", "F", "C", "G", "Dm", "G", "C"],
    },
    {
      title: "G major with the root of every chord in the bass",
      melody: [71, 72, 71, 71, 69, 71, 73, 74],
      bass: [43, 48, 40, 43, 45, 47, 38, 43],
      want: ["G", "C", "Em", "G", "Am", "Bm", "D", "G"],
    },
    {
      title: "A minor ending on its own chord with the raised leading note",
      melody: [72, 71, 69, 68, 69, 72, 68, 69],
      bass: [45, 41, 43, 40, 45, 41, 40, 45],
      want: ["Am", "F", "G", "E", "Am", "F", "E", "Am"],
    },
  ];
  return r;
}
