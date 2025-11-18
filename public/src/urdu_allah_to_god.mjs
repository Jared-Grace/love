export function urdu_allah_to_god(text) {
  let v = text.replace(/الل[ّٰ]*ہ/g, "خدا");
  return v;
}
