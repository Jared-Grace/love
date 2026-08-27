export function midi_chords_held(chosen) {
  "joins a run of neighbouring stretches that all chose the same chord into one chord held across the lot";
  "a chord is chosen under every bass move, so a bass that walks about underneath one unchanging chord produces the same name four times over, and reading it four times is reading three things that were never decisions";
  "the doubt is kept rather than averaged away: the joined chord carries the narrowest margin of the run and is unsure if any part of the run was unsure, because a person reviewing needs to see the weakest ground the chord ever stood on";
  let held = [];
  for (let one of chosen) {
    let last = held[held.length - 1];
    if (last !== undefined && last.chord.name === one.chord.name) {
      last.segment.end = one.segment.end;
      last.segment.beats = last.segment.beats + one.segment.beats;
      if (one.margin < last.margin) {
        last.margin = one.margin;
        last.settled = one.settled;
        last.instead = one.instead;
      }
      continue;
    }
    held.push({
      segment: {
        start: one.segment.start,
        end: one.segment.end,
        bar: one.segment.bar,
        beat: one.segment.beat,
        downbeat: one.segment.downbeat,
        bass_pitch: one.segment.bass_pitch,
        beats: one.segment.beats,
        sounding: one.segment.sounding,
      },
      chord: one.chord,
      score: one.score,
      margin: one.margin,
      settled: one.settled,
      instead: one.instead,
    });
  }
  return held;
}
