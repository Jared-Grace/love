export function g_night_curve() {
  "the NIGHT tone-curve control points (feComponentTransfer table, input 0→1 in equal steps). unlike brightness (dims everything, killing the lights) or contrast (crushes every dark tone to the SAME black), a curve does it all at once: it DARKENS the mid-tones, and blooms the top to full WHITE so a light stays a light. the BOTTOM is deliberately lifted well off 0 (floor .14) and ramps gently up to the mid (.28) so even the DARKEST darks read as a soft dark-blue, not near-black — an earlier steep/low bottom (.01…, then .06) crushed them too dark. day interpolates from the straight IDENTITY ramp toward this by `darkness` (g_phase_curve)";
  let curve = [0.14, 0.18, 0.22, 0.25, 0.28, 0.37, 0.49, 0.7, 1, 1];
  return curve;
}
