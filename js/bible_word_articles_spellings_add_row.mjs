import { arguments_assert } from "./arguments_assert.mjs";
export function bible_word_articles_spellings_add_row(table, others, cased) {
  arguments_assert(arguments, 3);
  let r = [...table];
  for (let row of table) {
    let names = [row[0]];
    for (let part of row[0].match(/\p{L}+/gu) ?? []) {
      let v = part.toLowerCase();
      let swaps = others.get(v) ?? [];
      let next = [];
      for (let name of names) {
        for (let swap of swaps) {
          let v3 = cased(part, swap);
          let v4 = name.replace(
            new RegExp("(?<!\\p{L})" + part + "(?!\\p{L})", "u"),
            v3,
          );
          next.push(v4);
        }
      }
      names = [...names, ...next];
    }
    for (let name of names.slice(1)) {
      r.push([name, ...row.slice(1)]);
    }
  }
  return r;
}
