export function g_day_sky_phase(fraction) {
  "the sky's continuous phase for a #day_unbelievers DAY that runs SUNRISE→SUNSET, from the day fraction (0 = dawn start, 1 = day done). anchored to CLOCK times, NOT equal phase-spacing: sunrise 6:00, morning 9:00, noon 12:00, afternoon 15:00, sunset 18:00. fraction → clock (6..18) → phase by piecewise-linear interpolation over the anchors, so retiming an anchor (e.g. noon later) bends the sky WITHOUT touching the slice code. phases are the g_times ring UNWRAPPED across the day: sunrise 5 → morning 6(≡0) → noon 7(≡1) → afternoon 8(≡2) → sunset 9(≡3). BESPOKE (arrays / loop) — do NOT auto-canonicalize";
  let f = fraction;
  if (f < 0) {
    f = 0;
  }
  if (f > 1) {
    f = 1;
  }
  const clock = 6 + f * 12;
  const anchors = [
    [6, 5],
    [9, 6],
    [12, 7],
    [15, 8],
    [18, 9],
  ];
  let phase = 9;
  for (let i = 0; i < anchors.length - 1; i++) {
    const c0 = anchors[i][0];
    const p0 = anchors[i][1];
    const c1 = anchors[i + 1][0];
    const p1 = anchors[i + 1][1];
    if (clock >= c0 && clock <= c1) {
      const t = (clock - c0) / (c1 - c0);
      phase = p0 + t * (p1 - p0);
      break;
    }
  }
  return phase;
}
