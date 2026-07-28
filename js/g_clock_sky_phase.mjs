export function g_clock_sky_phase(clock) {
  "the sky's continuous phase (an UNWRAPPED index into g_times) for any wall-clock HOUR 0..24 — the full-day core that g_day_sky_phase wraps. anchored to CLOCK times across the whole ring: night 0:00 → phase 4, sunrise 6:00 → 5, morning 9:00 → 6, noon 12:00 → 7, afternoon 15:00 → 8, sunset 18:00 → 9, night 24:00 → 10 (≡ 4 next day). the DAYTIME (6→18) is evenly spaced — the sun visibly moving = rich light change. but NIGHT is a fast ramp then a long plateau, matching reality (brief twilight, then hours of near-constant dark): after sunset it drops to ~90% dark by 6:45 PM (18.75 → 9.9) then only creeps to full night by midnight; symmetrically it stays deep-dark until 5:15 AM (5.25 → 4.1) then lightens fast to sunrise. so `evening` and `pre-dawn` barely change, unlike a linear sunset→midnight→sunrise ramp. g_times order is morning0 noon1 afternoon2 sunset3 night4 sunrise5, so these phases are that ring unwrapped from midnight. BESPOKE (arrays / loop) — do NOT auto-canonicalize";
  let c = clock;
  if (c < 0) {
    c = 0;
  }
  if (c > 24) {
    c = 24;
  }
  const anchors = [
    [0, 4],
    [5.25, 4.1],
    [6, 5],
    [9, 6],
    [12, 7],
    [15, 8],
    [18, 9],
    [18.75, 9.9],
    [24, 10],
  ];
  let phase = 10;
  for (let i = 0; i < anchors.length - 1; i++) {
    const c0 = anchors[i][0];
    const p0 = anchors[i][1];
    const c1 = anchors[i + 1][0];
    const p1 = anchors[i + 1][1];
    if (c >= c0 && c <= c1) {
      const t = (c - c0) / (c1 - c0);
      phase = p0 + t * (p1 - p0);
      break;
    }
  }
  return phase;
}
