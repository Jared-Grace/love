export function browser_is() {
  let v =
    typeof window !== "undefined" && typeof window.document !== "undefined";
  return v;
}
