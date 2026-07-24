export function g_night_curve() {
  "the NIGHT tone-curve control points (feComponentTransfer table, input 0→1 in equal steps). unlike brightness (dims everything, killing the lights) or contrast (crushes every dark tone to the SAME black), a curve does all three at once: it DARKENS the mid-tones, keeps the darks DISTINGUISHABLE (they map to spread-apart low values, not one flat black), and blooms the top to full WHITE so a light stays a light. day interpolates from the straight IDENTITY ramp toward this by `darkness` (g_phase_curve)";
  let curve = [0, 0.01, 0.04, 0.09, 0.17, 0.28, 0.45, 0.68, 1, 1];
  return curve;
}
