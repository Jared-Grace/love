export async function bible_verse_holes_write() {
  "Measures every bible for verses it cannot answer with and writes the answer down.";
  "The measuring reaches the network and takes a while; the writing is what makes it worth doing once. Everything that checks this afterwards reads the file.";
  "It overwrites rather than refusing to, because a record of what is on a server is only worth having when it says what is there now. The change standing in the commit is how anybody sees what moved.";
  let measured = await bible_verse_holes_measure();
  let path = bible_verse_holes_path();
  await file_overwrite_json(path, measured);
  return measured;
}
