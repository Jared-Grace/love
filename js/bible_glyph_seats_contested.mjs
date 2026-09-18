export function bible_glyph_seats_contested() {
  "Every word this picture Bible draws whose picture was a judgement call rather than a reading, given with the pictures that were considered and rejected and the case for each.";
  "A PICKED SEAT AND A SETTLED SEAT LOOK IDENTICAL IN A ROOT TABLE, and that is the whole reason this exists. A table row says a number is drawn by a picture. It cannot say whether that was the only honest answer or one of four, and a reader who disagrees with the picture has no way to find out whether anybody had already thought about it. So the argument goes here, once, beside the row rather than inside it.";
  "IT EXISTS SO THAT PROGRESS DOES NOT COST THE ARGUMENT. Waiting for certainty on a contested word stops the work; drawing it and saying nothing loses the reasoning the moment the row is written. Recording the alternatives is what makes picking one safe - the decision stays reversible because everything needed to reverse it is written down next to it, and it stays cheap because reversing it is an edit to one field.";
  "THE REJECTED PICTURES ARE THE POINT AND NOT THE CHOSEN ONE. Anybody can read the chosen picture off the table. What nobody can recover afterwards is the road not taken - which readings were on the table, what each one rested on, and why it lost. A person who objects a year from now starts from the alternatives rather than from scratch, and may well find the case for one of them has got stronger.";
  "A BLANK PICTURE ON AN ALTERNATIVE IS A READING NOBODY DREW, kept rather than dropped. A reading can be real and have no picture yet - the case for it is still worth a future reader seeing, and inventing a picture merely so the row looks complete would put a made-up option beside the real ones. The gate beside this checks the pictures that are named and passes over the blanks on purpose.";
  "IT IS MEANT TO BE READ BY SOMEBODY WHO IS NOT HERE. The release plan is that readers meet the pictures and say what they think of them, so the questions that were genuinely close are the ones that will draw objections - and an objection arriving with the alternatives already listed is a conversation, while the same objection arriving at a bare table is an argument from nothing.";
  let rows = [
    {
      strong: "7706",
      testament_chapter: "GEN01",
      word: "Shaddai",
      seated: "might",
      chose:
        "The received reading, less the all that only the Greek adds. Every translation from the Septuagint onward says Almighty, so might is the reading the whole transmission agrees on; and no proposed root has ever contained an all, so the whole of that half belongs to the translators rather than to the Hebrew. What is left that every candidate can live with is one mighty God.",
      alternatives: [
        {
          glyph: "all+might",
          reading: "Almighty, exactly as the Septuagint rendered it",
          against:
            "It is what the Greek translators made of the word and not what the Hebrew says, and this Bible is drawn from the original. It would also draw Shaddai and pantokrator with one picture, and those are two different words in two different languages.",
        },
        {
          glyph: "mountain",
          reading:
            "The God of the mountain, from the Akkadian shadu, a mountain",
          against:
            "It is the strongest case on comparative grounds and the weakest on the page. A reader meeting a mountain where the text says Shaddai learns nothing they can use, and every English Bible in their hands says Almighty.",
        },
        {
          glyph: "mother",
          reading:
            "The one who nourishes, from shad, the breast, and read that way in the blessing of Genesis forty nine where breasts and womb stand in the same line",
          against:
            "The verse that supports it is the one verse that supports it, and a single line cannot carry a word used forty eight times. It is a real reading and it is kept here because it may yet be the right one.",
        },
        {
          glyph: "",
          reading:
            "The one who is enough, read by the rabbis as she plus dai, the one who said to his world enough",
          against:
            "It is a reading of the letters rather than of a root, and nobody has drawn a picture for enough. It is listed because it is old and widely known, not because it was close.",
        },
      ],
    },
  ];
  return rows;
}
