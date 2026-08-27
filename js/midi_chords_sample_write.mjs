import { midi_chords_recover_cases } from "./midi_chords_recover_cases.mjs";
import { file_write_buffer } from "./file_write_buffer.mjs";
import { midi_case_bytes } from "./midi_case_bytes.mjs";
export async function midi_chords_sample_write(file_path_out) {
  "writes one of the written out chorale cases as a real midi file so the chord chooser has something known to be run against";
  "the chords this case wants are written down beside the notes so whoever runs the chooser over it can see straight away whether the answer is the expected one";
  let one = midi_chords_recover_cases()[0];
  let contents = midi_case_bytes(one);
  await file_write_buffer(file_path_out, contents);
  let r = {
    file_path_out,
    title: one.title,
    want: one.want,
  };
  return r;
}
