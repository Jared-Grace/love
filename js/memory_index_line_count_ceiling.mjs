export function memory_index_line_count_ceiling() {
  "How many lines the whole memory index may be. Past the loader's own limit it stops part-way and warns nobody is watching for it - so this sits under that limit rather than at it. Bytes are the other half of the same budget and either one alone can truncate the index.";
  let lines = 192;
  return lines;
}
