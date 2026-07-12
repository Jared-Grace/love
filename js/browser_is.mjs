export function browser_is() {
  let b =
    typeof window !== "undefined" && typeof window.document !== "undefined";
  return b;
}
