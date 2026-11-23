export function bible_glyph_verse_marks_sibling_misplaced(words, rows) {
  "Each mark in one drawn verse that its draft row asks to be its sibling instead - the eye where the draft says see, the plain ear where it says hear - with the position of the word in the verse.";
  "$plain words";
  "the verse's words as the parsed chapter holds them: a plain word is text, a drawn word is a list of parts. It is read and nothing about it runs.";
  "$plain rows";
  "the draft rows of the same verse, each with the English it glosses, its Strong's number and the mark the root table gives it. They are read and nothing about them runs.";
  "TWO MARKS THAT ONLY CHANGED PLACES LEAVE EVERY COUNT RIGHT, which is why the counting gates cannot see this. A verse that says my eyes have seen holds one eye and one seeing, and a page drawing them the other way round holds one of each too. Eighty nine verses stood like that when this was written, Genesis three six among them, with every gate green.";
  "A MARK IS TIED TO ITS ROW BY THE WORDS DRAWN JUST BEFORE IT. The row glosses a phrase whose last word is the one the mark replaced, so the rest of the phrase - in Your, they had, the outward - is what the page spells just before the mark. The longest such match wins, and two rows asking for different siblings that match equally well tie nothing, because guessing between them is exactly the error this exists to find.";
  "A MARK NOTHING TIES IS TIED BY ELIMINATION ONLY WHEN THAT IS FORCED. If every unused row of its kind asks for the same mark, there is only one thing it could be. Otherwise it is left unjudged rather than judged wrong, so about one mark in fourteen is never asked about - the price of never accusing a verse the draft does not convict.";
  let family = {
    eye: "eye",
    eyes: "eye",
    ear: "ear",
    "ear+loudspeaker": "ear",
  };
  let plain = (t) => t.toLowerCase().replace(/[^a-z']/g, "");
  let seated = rows.filter((row) => family[row.glyph] !== undefined);
  let found = [];
  if (seated.length === 0) {
    return found;
  }
  let used = new Set();
  let left = [];
  for (let index = 0; index < words.length; index++) {
    let word = words[index];
    if (typeof word === "string") {
      continue;
    }
    let marks = word.filter((part) => typeof part !== "string");
    if (marks.length !== 1) {
      continue;
    }
    let drew = marks[0].join("+");
    if (family[drew] === undefined) {
      continue;
    }
    let before = words
      .slice(Math.max(0, index - 4), index)
      .map((w) => (typeof w === "string" ? plain(w) : null));
    let best = null;
    let best_score = 0;
    let tie = false;
    seated.forEach((row, j) => {
      if (used.has(j) || family[row.glyph] !== family[drew]) {
        return;
      }
      let gloss = String(row.gloss || "")
        .split(/\s+/)
        .map(plain)
        .filter((t) => t !== "");
      gloss.pop();
      let score = 0;
      while (
        score < gloss.length &&
        score < before.length &&
        gloss[gloss.length - 1 - score] === before[before.length - 1 - score]
      ) {
        score++;
      }
      if (score > best_score) {
        best = j;
        best_score = score;
        tie = false;
      } else if (
        score === best_score &&
        score > 0 &&
        seated[best].glyph !== row.glyph
      ) {
        tie = true;
      }
    });
    if (best === null || tie) {
      left.push({
        index,
        drew,
      });
      continue;
    }
    used.add(best);
    let row = seated[best];
    if (row.glyph !== drew) {
      found.push({
        index,
        drew,
        wanted: row.glyph,
        gloss: row.gloss,
        strong: row.strong,
      });
    }
  }
  for (let { index, drew } of left) {
    let rest = seated.filter(
      (row, j) => !used.has(j) && family[row.glyph] === family[drew],
    );
    let glyphs = new Set(rest.map((row) => row.glyph));
    if (glyphs.size !== 1) {
      continue;
    }
    let row = rest[0];
    used.add(seated.indexOf(row));
    if (row.glyph !== drew) {
      found.push({
        index,
        drew,
        wanted: row.glyph,
        gloss: row.gloss,
        strong: row.strong,
      });
    }
  }
  return found;
}
