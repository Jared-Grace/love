import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_money_section_why_receive() {
  "The part of what this app does with money that answers why anything is received at all, when everything here is free.";
  let texts = {
    eng: {
      title: "Then why receive anything at all?",
      lines: [
        "Do not muzzle the ox while it treads out the grain (Deuteronomy 25:4, and Paul says it again of workers in 1 Timothy 5:18).",
        "The ox is fed so it can keep producing for others.",
        "Freely given gifts, never demanded ones, can provide for ministers of God.",
      ],
    },
    urd: {
      title: "تو پھر کچھ لیا ہی کیوں جاتا ہے؟",
      lines: [
        "دائیں چلتے ہوئے بیل کا منہ نہ باندھ (استثنا 25:4، اور پولوس یہی بات کام کرنے والوں کے بارے میں دوبارہ کہتا ہے، 1 تیمتھیس 5:18)۔",
        "بیل کو کھلایا جاتا ہے تاکہ وہ دوسروں کے لیے کام کرتا رہ سکے۔",
        "خوشی سے دیے ہوئے تحفے، کبھی مانگے ہوئے نہیں، خدا کے خادموں کی پرورش کر سکتے ہیں۔",
      ],
    },
    tgl: {
      title: "Kung gayon, bakit pa tumatanggap ng anuman?",
      lines: [
        "Huwag busalan ang baka habang gumigiik ito ng butil (Deuteronomio 25:4, at inulit ito ni Pablo tungkol sa mga manggagawa sa 1 Timoteo 5:18).",
        "Pinapakain ang baka para patuloy itong makapagbunga para sa iba.",
        "Ang mga kaloob na kusang ibinigay, hindi kailanman hiningi nang sapilitan, ay maaaring tumustos sa mga lingkod ng Diyos.",
      ],
    },
    spa: {
      title: "Entonces, ¿por qué recibir algo?",
      lines: [
        "No le pongas bozal al buey mientras trilla el grano (Deuteronomio 25:4, y Pablo lo repite sobre los obreros en 1 Timoteo 5:18).",
        "Al buey se le alimenta para que siga produciendo para otros.",
        "Las ofrendas dadas libremente, nunca exigidas, pueden sostener a los ministros de Dios.",
      ],
    },
    por: {
      title: "Então por que receber alguma coisa?",
      lines: [
        "Não amordace o boi enquanto ele debulha o grão (Deuteronômio 25:4, e Paulo repete isso sobre os trabalhadores em 1 Timóteo 5:18).",
        "O boi é alimentado para continuar produzindo para os outros.",
        "Ofertas dadas livremente, nunca exigidas, podem sustentar os ministros de Deus.",
      ],
    },
    ind: {
      title: "Lalu mengapa menerima apa pun?",
      lines: [
        "Jangan memberangus mulut lembu yang sedang mengirik (Ulangan 25:4, dan Paulus mengatakannya lagi tentang para pekerja dalam 1 Timotius 5:18).",
        "Lembu itu diberi makan agar dapat terus menghasilkan bagi orang lain.",
        "Persembahan yang diberikan dengan sukarela, tidak pernah dituntut, dapat memenuhi kebutuhan para pelayan Allah.",
      ],
    },
    fra: {
      title: "Alors pourquoi recevoir quoi que ce soit ?",
      lines: [
        "Tu n'emmuselleras pas le bœuf quand il foule le grain (Deutéronome 25.4, et Paul le redit au sujet des ouvriers en 1 Timothée 5.18).",
        "Le bœuf est nourri pour qu'il continue à produire pour les autres.",
        "Des dons faits librement, jamais exigés, peuvent pourvoir aux besoins des serviteurs de Dieu.",
      ],
    },
    translated_from: {
      urd: {
        title: "Then why receive anything at all?",
        lines: [
          "Do not muzzle the ox while it treads out the grain (Deuteronomy 25:4, and Paul says it again of workers in 1 Timothy 5:18).",
          "The ox is fed so it can keep producing for others.",
          "Freely given gifts, never demanded ones, can provide for ministers of God.",
        ],
      },
      tgl: {
        title: "Then why receive anything at all?",
        lines: [
          "Do not muzzle the ox while it treads out the grain (Deuteronomy 25:4, and Paul says it again of workers in 1 Timothy 5:18).",
          "The ox is fed so it can keep producing for others.",
          "Freely given gifts, never demanded ones, can provide for ministers of God.",
        ],
      },
      spa: {
        title: "Then why receive anything at all?",
        lines: [
          "Do not muzzle the ox while it treads out the grain (Deuteronomy 25:4, and Paul says it again of workers in 1 Timothy 5:18).",
          "The ox is fed so it can keep producing for others.",
          "Freely given gifts, never demanded ones, can provide for ministers of God.",
        ],
      },
      por: {
        title: "Then why receive anything at all?",
        lines: [
          "Do not muzzle the ox while it treads out the grain (Deuteronomy 25:4, and Paul says it again of workers in 1 Timothy 5:18).",
          "The ox is fed so it can keep producing for others.",
          "Freely given gifts, never demanded ones, can provide for ministers of God.",
        ],
      },
      ind: {
        title: "Then why receive anything at all?",
        lines: [
          "Do not muzzle the ox while it treads out the grain (Deuteronomy 25:4, and Paul says it again of workers in 1 Timothy 5:18).",
          "The ox is fed so it can keep producing for others.",
          "Freely given gifts, never demanded ones, can provide for ministers of God.",
        ],
      },
      fra: {
        title: "Then why receive anything at all?",
        lines: [
          "Do not muzzle the ox while it treads out the grain (Deuteronomy 25:4, and Paul says it again of workers in 1 Timothy 5:18).",
          "The ox is fed so it can keep producing for others.",
          "Freely given gifts, never demanded ones, can provide for ministers of God.",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  property_set(section, "verses", ["Deuteronomy 25:4", "1 Timothy 5:18"]);
  return section;
}
