export function bible_glyph_names_hebrew() {
  "Every Hebrew name the picture Bible explains, keyed by its Strong's number: the name as an English Bible spells it, what the name means, and who or what it names.";
  "A NAME MEANS SOMETHING AND A READER CANNOT SEE IT FROM THE NAME. Jonah is the Hebrew word for a dove, but a reader who meets only the name Jonah never learns that, so a tapped name says it outright.";
  "THE MEANINGS ARE AUTHORED, NOT READ OFF THE DICTIONARY. Strong's says what a name comes from in a line written for scholars, sometimes by pointing at another number and sometimes with a probably in front, and no rule reads that reliably. So each meaning is written here once, in plain words, from what Strong's says, and a guess stays marked as a guess.";
  "A MEANING NOBODY KNOWS IS NULL, not a guess dressed as an answer. A name taken from another language, such as Nineveh, is shown with who or what it names and nothing else.";
  "Names are added a book at a time, as each book of the picture Bible is finished.";
  "WHERE THE BIBLE EXPLAINS A NAME ITSELF, ITS EXPLANATION WINS over Strong's. Strong's calls Israel he will rule as God, Esau rough and Elimelech God of the king; Genesis 32:28 says Israel because he struggled with God, Genesis 25:25 says Esau came out hairy, and my God is king is how the name reads in Hebrew, so those are written instead. The verse is named in the about line so a reader can check it.";
  "ONE NUMBER IS EVERY PERSON WHO HAS THAT NAME, so the about line is written for all of them, not just the one in the book being finished. Joshua is both Moses' helper and the high priest of Haggai; Tamar is three women and a place.";
  "MEANINGS LEFT NULL THOUGH STRONG'S OFFERS ONE: Jesse, which Strong's calls extant, and Nahshon, which it ties to enchanter; both are weaker than a guess should be to stand on screen. Boaz is often said to mean in him is strength, but Strong's calls its root of uncertain meaning, so it stays null too.";
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
    1035: {
      name: "Bethlehem",
      means: "house of bread",
      about:
        "A town in Judah, south of Jerusalem. David was born there, and later Jesus.",
    },
    3063: {
      name: "Judah",
      means: "praised",
      about: "A son of Jacob, and the tribe and land named after him.",
    },
    4124: {
      name: "Moab",
      means: "from father",
      about:
        "A nation east of the Dead Sea, descended from Lot's son Moab (Genesis 19:37).",
    },
    458: {
      name: "Elimelech",
      means: "my God is king",
      about: "Naomi's husband.",
    },
    5281: {
      name: "Naomi",
      means: "pleasant",
      about: "Elimelech's wife and Ruth's mother-in-law.",
    },
    4248: {
      name: "Mahlon",
      means: "sickly",
      about: "A son of Naomi; Ruth's first husband.",
    },
    3630: {
      name: "Chilion",
      means: "wasting away",
      about: "A son of Naomi; Orpah's first husband.",
    },
    6204: {
      name: "Orpah",
      means: "probably the back of the neck",
      about: "Naomi's daughter-in-law from Moab, who went back home.",
    },
    7327: {
      name: "Ruth",
      means: "probably friend",
      about:
        "A woman from Moab who stayed with Naomi and trusted Israel's God. She became King David's great-grandmother.",
    },
    4755: {
      name: "Mara",
      means: "bitter",
      about: "The name Naomi gave herself after her losses.",
    },
    1162: {
      name: "Boaz",
      means: null,
      about:
        "A rich relative of Elimelech who married Ruth. He was King David's great-grandfather. Also the name of a pillar at the temple.",
    },
    3478: {
      name: "Israel",
      means: "he struggles with God",
      about:
        "The name God gave Jacob (Genesis 32:28), and the people who came from him.",
    },
    7354: {
      name: "Rachel",
      means: "ewe (a female sheep)",
      about: "Jacob's wife, the mother of Joseph and Benjamin.",
    },
    3812: {
      name: "Leah",
      means: "weary",
      about: "Jacob's first wife, the mother of Levi and Judah.",
    },
    672: {
      name: "Ephrath",
      means: "fruitful",
      about: "Another name for Bethlehem and the land around it.",
    },
    6557: {
      name: "Perez",
      means: "breaking out",
      about:
        "A son of Judah and Tamar (Genesis 38:29); an ancestor of King David.",
    },
    8559: {
      name: "Tamar",
      means: "palm tree",
      about:
        "A name of three women and a place. In Ruth, Judah's daughter-in-law, the mother of Perez.",
    },
    5744: {
      name: "Obed",
      means: "serving",
      about: "The son of Ruth and Boaz; King David's grandfather.",
    },
    3448: {
      name: "Jesse",
      means: null,
      about: "King David's father.",
    },
    1732: {
      name: "David",
      means: "beloved",
      about: "Israel's great king, a shepherd boy from Bethlehem.",
    },
    2696: {
      name: "Hezron",
      means: "courtyard",
      about: "A grandson of Judah; an ancestor of King David.",
    },
    7410: {
      name: "Ram",
      means: "high",
      about: "An ancestor of King David.",
    },
    5992: {
      name: "Amminadab",
      means: "my people are generous",
      about: "An ancestor of King David; the father of Nahshon.",
    },
    5177: {
      name: "Nahshon",
      means: null,
      about:
        "A leader of the tribe of Judah in the time of Moses; an ancestor of King David.",
    },
    8009: {
      name: "Salmah",
      means: "clothing",
      about: "Boaz's father, also called Salmon; an ancestor of King David.",
    },
    8012: {
      name: "Salmon",
      means: "clothing",
      about: "Boaz's father, also called Salmah; an ancestor of King David.",
    },
    5662: {
      name: "Obadiah",
      means: "servant of the LORD",
      about:
        "A name of many men; one is the prophet who wrote the book of Obadiah.",
    },
    123: {
      name: "Edom",
      means: "red",
      about:
        "Esau's other name (Genesis 25:30), and the nation that came from him, south-east of the Dead Sea.",
    },
    6215: {
      name: "Esau",
      means: "hairy",
      about:
        "Jacob's twin brother (Genesis 25:25); the father of the Edomites.",
    },
    8487: {
      name: "Teman",
      means: "south",
      about: "A region of Edom, and the man it was named after.",
    },
    3290: {
      name: "Jacob",
      means: "he grabs the heel; he takes another's place",
      about:
        "Isaac's son, the father of Israel's twelve tribes (Genesis 25:26, 27:36).",
    },
    3389: {
      name: "Jerusalem",
      means: "probably founded in peace",
      about: "The capital city of Israel, where God's temple stood.",
    },
    6726: {
      name: "Zion",
      means: null,
      about:
        "A hill of Jerusalem. Often it means the whole city, or God's people.",
    },
    3130: {
      name: "Joseph",
      means: "may he add",
      about:
        "Jacob's son (Genesis 30:24). His name also stands for the northern tribes of Israel.",
    },
    669: {
      name: "Ephraim",
      means: "doubly fruitful",
      about:
        "Joseph's son (Genesis 41:52), and the tribe and land named after him.",
    },
    8111: {
      name: "Samaria",
      means: "watch place",
      about:
        "The capital city of the northern kingdom of Israel, and the hill country around it.",
    },
    1144: {
      name: "Benjamin",
      means: "son of the right hand",
      about:
        "Jacob's youngest son (Genesis 35:18), and the tribe named after him.",
    },
    1568: {
      name: "Gilead",
      means: "probably heap of witness",
      about: "Hill country east of the Jordan River (Genesis 31:47).",
    },
    6886: {
      name: "Zarephath",
      means: "melting place, where metal is refined",
      about: "A town on the coast near Sidon, north of Israel.",
    },
    5614: {
      name: "Sepharad",
      means: null,
      about:
        "A far-off place where people from Jerusalem were taken as captives. Where it was is not certain.",
    },
    1867: {
      name: "Darius",
      means: null,
      about:
        "A name of Persian kings. Haggai spoke in the second year of Darius the Great, 520 BC.",
    },
    2292: {
      name: "Haggai",
      means: "festive",
      about: "The prophet who wrote the book of Haggai.",
    },
    2216: {
      name: "Zerubbabel",
      means: "born in Babylon",
      about:
        "A grandson of King Jehoiachin. He led Jews home from Babylon and was governor of Judah.",
    },
    7597: {
      name: "Shealtiel",
      means: "I asked God",
      about: "Zerubbabel's father.",
    },
    3091: {
      name: "Joshua",
      means: "the LORD saves",
      about:
        "A name of several men: Moses' helper who led Israel into Canaan, and the high priest in the days of Haggai and Zechariah.",
    },
    3087: {
      name: "Jehozadak",
      means: "the LORD is righteous",
      about: "The father of Joshua the high priest.",
    },
    4714: {
      name: "Egypt",
      means: null,
      about: "The land of the Nile, where Israel was once slaves.",
    },
    4401: {
      name: "Malachi",
      means: "my messenger",
      about:
        "The prophet who wrote the book of Malachi. The name may be a title.",
    },
    3878: {
      name: "Levi",
      means: "joined",
      about:
        "Jacob's son (Genesis 29:34). His tribe served God as priests and helpers in His house.",
    },
    4872: {
      name: "Moses",
      means: "drawn out",
      about:
        "Drawn out of the water as a baby (Exodus 2:10). God used him to lead Israel out of Egypt and to give them His law.",
    },
    2722: {
      name: "Horeb",
      means: "dry place",
      about: "Another name for Mount Sinai, where God gave the law.",
    },
    452: {
      name: "Elijah",
      means: "my God is the LORD",
      about: "A prophet of Israel who was taken up to heaven without dying.",
    },
    2332: {
      name: "Eve",
      means: "life-giver",
      about: "The first woman, the mother of all the living (Genesis 3:20).",
    },
  };
  return names;
}
