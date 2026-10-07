import { arguments_assert } from "./arguments_assert.mjs";
export function song_agape_sections() {
  "The words of this song, in the order they are sung, gathered four lines to a part.";
  "THE PARTS ARE FOURS BECAUSE THE SONG IS. It has no chorus and nothing it sings twice: the twenty eight lines run straight through from the trial to the return, and each four rhyme and turn together - the mocking, the price, the cup, the death, the tomb, the rising, the life after. The names are numbers because the song gave none.";
  "The lines are kept exactly as they are sung and shown on the film, capitals and all. The capitals are the writer's own way of honouring every name of God, and tidying them would be an edit nobody asked for.";
  arguments_assert(arguments, 0);
  let sections = [
    {
      name: "Verse 1",
      lines: [
        "perfectly righteous, yet sentenced to die",
        "there's no greater LOVE than JESUS laying down HIS life",
        "LOVE beyond all measure, now displayed through our CHRIST",
        "sinners were ransomed through our GOD crucified",
      ],
    },
    {
      name: "Verse 2",
      lines: [
        "KING, yet was mocked with a crown made of thorns",
        "scoffers reviled HIM, condemning their LORD",
        "scourges left stripes as HIS wounds freely bled",
        "but with great kindness and mercy, HE blessed",
      ],
    },
    {
      name: "Verse 3",
      lines: [
        "justice demanded atonement by blood",
        "sinners, unworthy, were each one of us",
        "sacrificed LAMB, yet great high PRIEST on the cross",
        "sealing our pardon, HIS blood was the cost",
      ],
    },
    {
      name: "Verse 4",
      lines: [
        "crucified SAVIOR, WHO bled to redeem",
        "bearing every curse as HE hung on the tree",
        "drinking the cup of GOD's wrath to its dregs",
        "suff'ring hell and torture to forgive us our sins",
      ],
    },
    {
      name: "Verse 5",
      lines: [
        "it is now finished; HE paid all our debt",
        "yielding HIS SPIRIT, JESUS breathed HIS last breath",
        "WORD, WHO gave life to all living, was dead",
        "laid in a tomb while HIS followers wept",
      ],
    },
    {
      name: "Verse 6",
      lines: [
        "early the third day, near sunday's sunrise",
        "breath entered JESUS, clothed in radiant light",
        "risen forever, O KING, lifted high",
        "one with GOD almighty, one day too shall we arise",
      ],
    },
    {
      name: "Verse 7",
      lines: [
        "taking our crosses, we suffer with CHRIST",
        "coming in glory, HE will marry HIS bride",
        "risen with scars on HIS hands and HIS feet",
        "until HE returns, we will follow our KING",
      ],
    },
  ];
  return sections;
}
