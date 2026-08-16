export async function file_read_uncached(file_path) {
  "$plain file_path";
  "what a file holds right now, read straight off the disk without consulting or filling the store of contents the ordinary reader keeps";
  "for the one case the cached reader cannot serve: a file another Claude may have rewritten while this process was busy. The cache is right for everything else here - a run walks the whole repo several times, and reading each file once is most of why that is affordable - so this is the exception and says so rather than the cache being weakened for everybody.";
  "a page is deliberately not served. Its files live in the browser's own store, where nothing else is writing them, so there is no staleness for this to answer and a second reader of that store would only be a copy of the first.";
  let fs = await import("fs");
  let contents = await fs.promises.readFile(file_path, "utf-8");
  return contents;
}
