export function reply_phone_codes_lengths() {
  "Every country calling code, and how many digits may follow it, not counting a leading 0.";
  "★ WRITTEN FROM MEMORY, NOT COPIED FROM A SOURCE. A wrong row costs little: a real number gets no line, or a number of the wrong length gets one. Checking it against a published list is still open.";
  let rows = [
    {
      code: "1",
      lengths: [10],
    },
    {
      code: "7",
      lengths: [10],
    },
    {
      code: "20",
      lengths: [8, 9, 10],
    },
    {
      code: "27",
      lengths: [9],
    },
    {
      code: "30",
      lengths: [10],
    },
    {
      code: "31",
      lengths: [9],
    },
    {
      code: "32",
      lengths: [8, 9],
    },
    {
      code: "33",
      lengths: [9],
    },
    {
      code: "34",
      lengths: [9],
    },
    {
      code: "36",
      lengths: [8, 9],
    },
    {
      code: "39",
      lengths: [9, 10, 11],
    },
    {
      code: "40",
      lengths: [9],
    },
    {
      code: "41",
      lengths: [9],
    },
    {
      code: "43",
      lengths: [10, 11, 12, 13],
    },
    {
      code: "44",
      lengths: [9, 10],
    },
    {
      code: "45",
      lengths: [8],
    },
    {
      code: "46",
      lengths: [7, 8, 9, 10],
    },
    {
      code: "47",
      lengths: [8],
    },
    {
      code: "48",
      lengths: [9],
    },
    {
      code: "49",
      lengths: [7, 8, 9, 10, 11],
    },
    {
      code: "51",
      lengths: [8, 9],
    },
    {
      code: "52",
      lengths: [10],
    },
    {
      code: "53",
      lengths: [8],
    },
    {
      code: "54",
      lengths: [10, 11],
    },
    {
      code: "55",
      lengths: [10, 11],
    },
    {
      code: "56",
      lengths: [9],
    },
    {
      code: "57",
      lengths: [10],
    },
    {
      code: "58",
      lengths: [10],
    },
    {
      code: "60",
      lengths: [9, 10],
    },
    {
      code: "61",
      lengths: [9],
    },
    {
      code: "62",
      lengths: [9, 10, 11, 12],
    },
    {
      code: "63",
      lengths: [10],
    },
    {
      code: "64",
      lengths: [8, 9, 10],
    },
    {
      code: "65",
      lengths: [8],
    },
    {
      code: "66",
      lengths: [8, 9],
    },
    {
      code: "81",
      lengths: [9, 10],
    },
    {
      code: "82",
      lengths: [9, 10],
    },
    {
      code: "84",
      lengths: [9, 10],
    },
    {
      code: "86",
      lengths: [10, 11],
    },
    {
      code: "90",
      lengths: [10],
    },
    {
      code: "91",
      lengths: [10],
    },
    {
      code: "92",
      lengths: [9, 10],
    },
    {
      code: "93",
      lengths: [9],
    },
    {
      code: "94",
      lengths: [9],
    },
    {
      code: "95",
      lengths: [8, 9, 10],
    },
    {
      code: "98",
      lengths: [10],
    },
    {
      code: "211",
      lengths: [9],
    },
    {
      code: "212",
      lengths: [9],
    },
    {
      code: "213",
      lengths: [8, 9],
    },
    {
      code: "216",
      lengths: [8],
    },
    {
      code: "218",
      lengths: [9],
    },
    {
      code: "220",
      lengths: [7],
    },
    {
      code: "221",
      lengths: [9],
    },
    {
      code: "222",
      lengths: [8],
    },
    {
      code: "223",
      lengths: [8],
    },
    {
      code: "224",
      lengths: [8, 9],
    },
    {
      code: "225",
      lengths: [10],
    },
    {
      code: "226",
      lengths: [8],
    },
    {
      code: "227",
      lengths: [8],
    },
    {
      code: "228",
      lengths: [8],
    },
    {
      code: "229",
      lengths: [8, 10],
    },
    {
      code: "230",
      lengths: [7, 8],
    },
    {
      code: "231",
      lengths: [7, 8, 9],
    },
    {
      code: "232",
      lengths: [8],
    },
    {
      code: "233",
      lengths: [9],
    },
    {
      code: "234",
      lengths: [8, 10],
    },
    {
      code: "235",
      lengths: [8],
    },
    {
      code: "236",
      lengths: [8],
    },
    {
      code: "237",
      lengths: [9],
    },
    {
      code: "238",
      lengths: [7],
    },
    {
      code: "239",
      lengths: [7],
    },
    {
      code: "240",
      lengths: [9],
    },
    {
      code: "241",
      lengths: [7, 8],
    },
    {
      code: "242",
      lengths: [9],
    },
    {
      code: "243",
      lengths: [9],
    },
    {
      code: "244",
      lengths: [9],
    },
    {
      code: "245",
      lengths: [7, 9],
    },
    {
      code: "246",
      lengths: [7],
    },
    {
      code: "248",
      lengths: [7],
    },
    {
      code: "249",
      lengths: [9],
    },
    {
      code: "250",
      lengths: [9],
    },
    {
      code: "251",
      lengths: [9],
    },
    {
      code: "252",
      lengths: [7, 8, 9],
    },
    {
      code: "253",
      lengths: [8],
    },
    {
      code: "254",
      lengths: [9, 10],
    },
    {
      code: "255",
      lengths: [9],
    },
    {
      code: "256",
      lengths: [9],
    },
    {
      code: "257",
      lengths: [8],
    },
    {
      code: "258",
      lengths: [8, 9],
    },
    {
      code: "260",
      lengths: [9],
    },
    {
      code: "261",
      lengths: [9],
    },
    {
      code: "262",
      lengths: [9],
    },
    {
      code: "263",
      lengths: [9],
    },
    {
      code: "264",
      lengths: [8, 9],
    },
    {
      code: "265",
      lengths: [7, 9],
    },
    {
      code: "266",
      lengths: [8],
    },
    {
      code: "267",
      lengths: [7, 8],
    },
    {
      code: "268",
      lengths: [8],
    },
    {
      code: "269",
      lengths: [7],
    },
    {
      code: "290",
      lengths: [4, 5],
    },
    {
      code: "291",
      lengths: [7],
    },
    {
      code: "297",
      lengths: [7],
    },
    {
      code: "298",
      lengths: [6],
    },
    {
      code: "299",
      lengths: [6],
    },
    {
      code: "350",
      lengths: [8],
    },
    {
      code: "351",
      lengths: [9],
    },
    {
      code: "352",
      lengths: [8, 9],
    },
    {
      code: "353",
      lengths: [9],
    },
    {
      code: "354",
      lengths: [7, 9],
    },
    {
      code: "355",
      lengths: [8, 9],
    },
    {
      code: "356",
      lengths: [8],
    },
    {
      code: "357",
      lengths: [8],
    },
    {
      code: "358",
      lengths: [9, 10],
    },
    {
      code: "359",
      lengths: [8, 9],
    },
    {
      code: "370",
      lengths: [8],
    },
    {
      code: "371",
      lengths: [8],
    },
    {
      code: "372",
      lengths: [7, 8],
    },
    {
      code: "373",
      lengths: [8],
    },
    {
      code: "374",
      lengths: [8],
    },
    {
      code: "375",
      lengths: [9],
    },
    {
      code: "376",
      lengths: [6, 8, 9],
    },
    {
      code: "377",
      lengths: [8, 9],
    },
    {
      code: "378",
      lengths: [8, 10],
    },
    {
      code: "380",
      lengths: [9],
    },
    {
      code: "381",
      lengths: [8, 9],
    },
    {
      code: "382",
      lengths: [8],
    },
    {
      code: "383",
      lengths: [8],
    },
    {
      code: "385",
      lengths: [8, 9],
    },
    {
      code: "386",
      lengths: [8],
    },
    {
      code: "387",
      lengths: [8],
    },
    {
      code: "389",
      lengths: [8],
    },
    {
      code: "420",
      lengths: [9],
    },
    {
      code: "421",
      lengths: [9],
    },
    {
      code: "423",
      lengths: [7, 9],
    },
    {
      code: "500",
      lengths: [5],
    },
    {
      code: "501",
      lengths: [7],
    },
    {
      code: "502",
      lengths: [8],
    },
    {
      code: "503",
      lengths: [8],
    },
    {
      code: "504",
      lengths: [8],
    },
    {
      code: "505",
      lengths: [8],
    },
    {
      code: "506",
      lengths: [8],
    },
    {
      code: "507",
      lengths: [7, 8],
    },
    {
      code: "508",
      lengths: [6],
    },
    {
      code: "509",
      lengths: [8],
    },
    {
      code: "590",
      lengths: [9],
    },
    {
      code: "591",
      lengths: [8],
    },
    {
      code: "592",
      lengths: [7],
    },
    {
      code: "593",
      lengths: [8, 9],
    },
    {
      code: "594",
      lengths: [9],
    },
    {
      code: "595",
      lengths: [9],
    },
    {
      code: "596",
      lengths: [9],
    },
    {
      code: "597",
      lengths: [6, 7],
    },
    {
      code: "598",
      lengths: [8],
    },
    {
      code: "599",
      lengths: [7],
    },
    {
      code: "670",
      lengths: [7, 8],
    },
    {
      code: "672",
      lengths: [6],
    },
    {
      code: "673",
      lengths: [7],
    },
    {
      code: "674",
      lengths: [7],
    },
    {
      code: "675",
      lengths: [7, 8],
    },
    {
      code: "676",
      lengths: [5, 7],
    },
    {
      code: "677",
      lengths: [5, 7],
    },
    {
      code: "678",
      lengths: [5, 7],
    },
    {
      code: "679",
      lengths: [7],
    },
    {
      code: "680",
      lengths: [7],
    },
    {
      code: "681",
      lengths: [6],
    },
    {
      code: "682",
      lengths: [5],
    },
    {
      code: "683",
      lengths: [4, 5],
    },
    {
      code: "685",
      lengths: [5, 7],
    },
    {
      code: "686",
      lengths: [8],
    },
    {
      code: "687",
      lengths: [6],
    },
    {
      code: "688",
      lengths: [5, 6],
    },
    {
      code: "689",
      lengths: [8],
    },
    {
      code: "690",
      lengths: [4],
    },
    {
      code: "691",
      lengths: [7],
    },
    {
      code: "692",
      lengths: [7],
    },
    {
      code: "850",
      lengths: [8, 10],
    },
    {
      code: "852",
      lengths: [8],
    },
    {
      code: "853",
      lengths: [8],
    },
    {
      code: "855",
      lengths: [8, 9],
    },
    {
      code: "856",
      lengths: [9, 10],
    },
    {
      code: "880",
      lengths: [10],
    },
    {
      code: "886",
      lengths: [9],
    },
    {
      code: "960",
      lengths: [7],
    },
    {
      code: "961",
      lengths: [7, 8],
    },
    {
      code: "962",
      lengths: [9],
    },
    {
      code: "963",
      lengths: [9],
    },
    {
      code: "964",
      lengths: [10],
    },
    {
      code: "965",
      lengths: [8],
    },
    {
      code: "966",
      lengths: [9],
    },
    {
      code: "967",
      lengths: [9],
    },
    {
      code: "968",
      lengths: [8],
    },
    {
      code: "970",
      lengths: [9],
    },
    {
      code: "971",
      lengths: [9],
    },
    {
      code: "972",
      lengths: [9],
    },
    {
      code: "973",
      lengths: [8],
    },
    {
      code: "974",
      lengths: [8],
    },
    {
      code: "975",
      lengths: [8],
    },
    {
      code: "976",
      lengths: [8],
    },
    {
      code: "977",
      lengths: [10],
    },
    {
      code: "992",
      lengths: [9],
    },
    {
      code: "993",
      lengths: [8],
    },
    {
      code: "994",
      lengths: [9],
    },
    {
      code: "995",
      lengths: [9],
    },
    {
      code: "996",
      lengths: [9],
    },
    {
      code: "998",
      lengths: [9],
    },
  ];
  return rows;
}
