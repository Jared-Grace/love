export function urdu_allah_to_god(text) {
  const pattern =
    /ا\s*ل\s*ل[\u0650-\u065F\u0670\u064B-\u0652]*[ہه]|الل[\u0650-\u065F\u0670\u064B-\u0652]*ه/gu;
  let v = text.replace(pattern, "خدا");
  return v;
}
