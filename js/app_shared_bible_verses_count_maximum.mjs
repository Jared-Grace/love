export function app_shared_bible_verses_count_maximum() {
  "The most verses a link may ask a bible page for at once.";
  "A number in a link is typed by hand, and a page asked for a thousand verses fetches a thousand verses before it draws anything - which does not look like too large a number, it looks like a page that never arrives. This page has already been fixed twice for exactly that, so the ceiling is here rather than the hang.";
  "Two hundred, which is past the longest chapter in the bible, so asking for a whole chapter is never the thing that gets cut.";
  let v = 200;
  return v;
}
