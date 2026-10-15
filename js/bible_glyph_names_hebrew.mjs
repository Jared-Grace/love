export function bible_glyph_names_hebrew() {
  "Every Hebrew name the picture Bible explains, keyed by its Strong's number: the name as an English Bible spells it, what the name means, and who or what it names.";
  "A NAME MEANS SOMETHING AND A READER CANNOT SEE IT FROM THE NAME. Jonah is the Hebrew word for a dove, but a reader who meets only the name Jonah never learns that, so a tapped name says it outright.";
  "THE MEANINGS ARE AUTHORED, NOT READ OFF THE DICTIONARY. Strong's says what a name comes from in a line written for scholars, sometimes by pointing at another number and sometimes with a probably in front, and no rule reads that reliably. So each meaning is written here once, in plain words, from what Strong's says, and a guess stays marked as a guess.";
  "A MEANING NOBODY KNOWS IS NULL, not a guess dressed as an answer. A name taken from another language, such as Nineveh, is shown with who or what it names and nothing else.";
  "Names are added a book at a time, as each book of the picture Bible is finished.";
  let names = {
    3068: {
      name: "Yahweh (the LORD)",
      means: "he is; the one who always is",
      about: "God's own name. Many English Bibles print it as the LORD.",
    },
    3124: {
      name: "Jonah",
      means: "dove",
      about: "A prophet from Israel.",
    },
    573: {
      name: "Amittai",
      means: "truthful",
      about: "Jonah's father.",
    },
    5210: {
      name: "Nineveh",
      means: null,
      about: "The great capital city of Assyria, an enemy of Israel.",
    },
    8659: {
      name: "Tarshish",
      means: "probably a precious stone",
      about: "A far-off port across the sea, the opposite way from Nineveh.",
    },
    3305: {
      name: "Joppa",
      means: "beautiful",
      about: "A port town on the coast of Israel.",
    },
    5680: {
      name: "Hebrew",
      means: "one who comes from Eber",
      about:
        "A name for the people of Israel. Eber was one of their forefathers.",
    },
  };
  return names;
}
