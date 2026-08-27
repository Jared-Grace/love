export function harmony_pitch_names() {
  "the twelve pitch classes written the way a sharp key writes them and the way a flat key writes them";
  "which list to read is decided by the key because the same sounding note is spelled F sharp in one key and G flat in another";
  let sharp = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let flat = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  let r = {
    sharp,
    flat,
  };
  return r;
}
