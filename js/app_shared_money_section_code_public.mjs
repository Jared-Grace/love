import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_money_section_code_public() {
  "The part of what this app does with money that answers whether somebody else may take this and build it too.";
  "It belongs among the money answers rather than off on its own, because the one thing that would make the code worth keeping back is a wish to be paid for it.";
  let texts = {
    eng: {
      title: "The source code is public",
      lines: [
        "Anyone may take the source code and use it, including to build the same thing somewhere else. The source code is at https://github.com/Jared-Grace/love",
        "Paul told the church not to drag one another before secular judges (1 Corinthians 6:1-8). We are not going to use a government's copyright to sue a brother for sharing the Bible. If there is something to settle, it is settled before the church, not a secular government.",
      ],
    },
    urd: {
      title: "سورس کوڈ سب کے لیے کھلا ہے",
      lines: [
        "کوئی بھی سورس کوڈ لے کر استعمال کر سکتا ہے، یہاں تک کہ کہیں اور یہی چیز بنانے کے لیے بھی۔ سورس کوڈ یہاں ہے: https://github.com/Jared-Grace/love",
        "پولوس نے کلیسیا سے کہا کہ ایک دوسرے کو دنیاوی عدالتوں میں نہ گھسیٹیں (1 کرنتھیوں 6:1-8)۔ ہم کسی حکومت کے حقِ اشاعت کو لے کر کسی بھائی پر اِس لیے دعویٰ نہیں کریں گے کہ اُس نے بائبل بانٹی۔ اگر کچھ طے کرنا ہو تو وہ کلیسیا کے سامنے طے ہوتا ہے، کسی دنیاوی حکومت کے سامنے نہیں۔",
      ],
    },
    tgl: {
      title: "Pampubliko ang source code",
      lines: [
        "Maaaring kunin at gamitin ng sinuman ang source code, kasama na ang paggawa ng kaparehong bagay sa ibang lugar. Ang source code ay nasa https://github.com/Jared-Grace/love",
        "Sinabi ni Pablo sa iglesya na huwag dalhin ang isa't isa sa harap ng mga hukom na hindi mananampalataya (1 Corinto 6:1-8). Hindi namin gagamitin ang copyright ng isang pamahalaan para idemanda ang isang kapatid dahil sa pagbabahagi ng Biblia. Kung may kailangang ayusin, inaayos ito sa harap ng iglesya, hindi sa harap ng isang makamundong pamahalaan.",
      ],
    },
    spa: {
      title: "El código fuente es público",
      lines: [
        "Cualquiera puede tomar el código fuente y usarlo, incluso para construir lo mismo en otro lugar. El código fuente está en https://github.com/Jared-Grace/love",
        "Pablo le dijo a la iglesia que no se llevaran unos a otros ante jueces del mundo (1 Corintios 6:1-8). No vamos a usar los derechos de autor de un gobierno para demandar a un hermano por compartir la Biblia. Si hay algo que resolver, se resuelve ante la iglesia, no ante un gobierno del mundo.",
      ],
    },
    translated_from: {
      urd: {
        title: "The source code is public",
        lines: [
          "Anyone may take the source code and use it, including to build the same thing somewhere else. The source code is at https://github.com/Jared-Grace/love",
          "Paul told the church not to drag one another before secular judges (1 Corinthians 6:1-8). We are not going to use a government's copyright to sue a brother for sharing the Bible. If there is something to settle, it is settled before the church, not a secular government.",
        ],
      },
      tgl: {
        title: "The source code is public",
        lines: [
          "Anyone may take the source code and use it, including to build the same thing somewhere else. The source code is at https://github.com/Jared-Grace/love",
          "Paul told the church not to drag one another before secular judges (1 Corinthians 6:1-8). We are not going to use a government's copyright to sue a brother for sharing the Bible. If there is something to settle, it is settled before the church, not a secular government.",
        ],
      },
      spa: {
        title: "The source code is public",
        lines: [
          "Anyone may take the source code and use it, including to build the same thing somewhere else. The source code is at https://github.com/Jared-Grace/love",
          "Paul told the church not to drag one another before secular judges (1 Corinthians 6:1-8). We are not going to use a government's copyright to sue a brother for sharing the Bible. If there is something to settle, it is settled before the church, not a secular government.",
        ],
      },
    },
  };
  let section = app_shared_text_reader_language(texts);
  property_set(section, "verses", ["1 Corinthians 6:1-8"]);
  return section;
}
