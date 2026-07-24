export function g_night_curve() {
  "the NIGHT tone-curve control points (feComponentTransfer table, input 0→1 in equal steps). unlike brightness (dims everything, killing the lights) or contrast (crushes every dark tone to the SAME black), a curve does it all at once: it DARKENS the mid-tones (mid ~.22, a proper dark night), keeps the darks a gentle spread (not one flat black), and blooms the top to full WHITE so a light stays a light. this only darkens the GROUND now — the tint is split (app_g_time_tint) so characters sit ABOVE the darkening veil and keep full brightness, so the ground can be truly dark WITHOUT hiding dark-skinned/dark-clothed NPCs (they pop against it). day interpolates from the straight IDENTITY ramp toward this by `darkness` (g_phase_curve)";
  let curve = [0.04, 0.07, 0.11, 0.16, 0.22, 0.31, 0.44, 0.66, 1, 1];
  return curve;
}
