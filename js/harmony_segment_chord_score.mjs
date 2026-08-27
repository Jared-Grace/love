import { subtract } from "./subtract.mjs";
import { harmony_bass_place_score } from "./harmony_bass_place_score.mjs";
import { harmony_sounding_score } from "./harmony_sounding_score.mjs";
import { harmony_root_move_score } from "./harmony_root_move_score.mjs";
export function harmony_segment_chord_score(segment, chord, chord_before) {
  "scores one chord against one stretch of the song by adding what the bass says what the melody says and what the chord before this one says";
  "the chord being far outside the plain key counts against it so an ordinary chord wins unless the notes really do insist on the odd one";
  let bass = harmony_bass_place_score(chord, segment.bass_pitch);
  let sounding = harmony_sounding_score(segment.sounding, chord);
  let move = harmony_root_move_score(chord, chord_before);
  let difference = subtract(bass + sounding + move, chord.distance);
  return difference;
}
