export function urdu_allah_to_god(text) {
  let v = text.replace(/ا\s*ل\s*ل[\u0651\u0670]*[ہه]|الله/g, "خدا");
  return v;
}
