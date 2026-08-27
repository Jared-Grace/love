import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { harmony_segment_chord_score } from "./harmony_segment_chord_score.mjs";
export function midi_segments_chords(segments, chords) {
  "chooses one chord for each stretch of the song and says how strongly it was chosen over the nearest chord built on a different root";
  "the nearest rival is looked for on a different root on purpose because a plain chord and its seventh always score alike and that is not a choice a person needs to review";
  let chosen = [];
  let chord_before = null;
  for (let segment of segments) {
    let scored = [];
    for (let chord of chords) {
      scored.push({
        chord,
        score: harmony_segment_chord_score(segment, chord, chord_before),
      });
    }
    function scores_highest_first(one, two) {
      let difference = subtract(two.score, one.score);
      return difference;
    }
    scored.sort(scores_highest_first);
    let best = scored[0];
    let rival = null;
    for (let other of scored) {
      if (equal(rival, null) && not_equal(other.chord.root, best.chord.root)) {
        rival = other;
      }
    }
    let margin = equal(rival, null) ? 9 : subtract(best.score, rival.score);
    let settled = greater_than_equal(margin, 0.7);
    let instead = equal(rival, null) ? null : rival.chord.name;
    chosen.push({
      segment,
      chord: best.chord,
      score: best.score,
      margin,
      settled,
      instead,
    });
    chord_before = best.chord;
  }
  return chosen;
}
