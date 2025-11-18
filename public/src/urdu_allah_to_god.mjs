export function urdu_allah_to_god(text) {
  let v = text.replace(/الل[ّٰ]*ہ|اللہ|الله/g, "خدا");
  return v;
}
