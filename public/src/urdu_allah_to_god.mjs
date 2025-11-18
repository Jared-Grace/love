export function urdu_allah_to_god(text) {
  let v = text.replace(/ال?ل[ّ]?ٰ?ہ|الله/g, "خدا");
  return v;
}
