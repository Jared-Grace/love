export function g_day_clock(fraction) {
  "the wall-clock hour (6 .. 19) a DAY fraction maps to: 0 = 6 AM, 1 = 7 PM — one hour past the 18:00 sunset anchor, into dusk, so the workday spills a little into evening. clamped to [0, 1]. the SINGLE source for the day's fraction -> clock, read by g_day_sky_phase (clock -> colour) and the #day_conversation toast (clock -> label) so the tint and the time can never disagree. BESPOKE (arithmetic) — do NOT auto-canonicalize";
  let f = fraction;
  if (f < 0) {
    f = 0;
  }
  if (f > 1) {
    f = 1;
  }
  const clock = 6 + f * 13;
  return clock;
}
