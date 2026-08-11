export function page_settle_ms() {
  "how long to leave a freshly opened page alone before measuring it - long enough for the first drawing to finish and for anything that fades in to have arrived, so a measurement reads the page as a person would see it rather than catching it half dressed";
  let v = 1500;
  return v;
}
