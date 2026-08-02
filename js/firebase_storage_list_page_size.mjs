export function firebase_storage_list_page_size() {
  "How many names one listing request may ask a Firebase Storage bucket for.";
  "A thousand is the bucket's own ceiling - asking for more is refused outright rather than trimmed - so the number is theirs and not a choice made here.";
  let size = 1000;
  return size;
}
