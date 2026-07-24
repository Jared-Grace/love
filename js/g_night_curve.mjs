export function g_night_curve() {
  "the NIGHT tone-curve control points (feComponentTransfer table, input 0→1 in equal steps). unlike brightness (dims everything, killing the lights) or contrast (crushes every dark tone to the SAME black), a curve does it all at once: it DARKENS the mid-tones, and blooms the top to full WHITE so a light stays a light. the BOTTOM is deliberately lifted off 0 (floor .06) and EVENLY spaced (.06 .1 .15 .21 …) so the darks are a spread of dark blues, not one flat near-black — an earlier steep bottom (.01 .04 .09) crushed them to indistinct black. day interpolates from the straight IDENTITY ramp toward this by `darkness` (g_phase_curve)";
  let curve = [0.06, 0.1, 0.15, 0.21, 0.28, 0.37, 0.49, 0.7, 1, 1];
  return curve;
}
