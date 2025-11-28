import { bible_names_text_parse } from "../../../love/public/src/bible_names_text_parse.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function bible_names_women() {
  marker("1");
  let text = `A
Abi
Abia or Abiah
Abigail
Abigail No. 2
Abihail
Abihail No. 1
Abihail No. 2
Abihail No. 3
Abijah
Abishag
Abital
Achsah
Adah No. 1
Adah No. 2
Agar (see Hagar)
Ahinoam No. 1
Ahinoam No. 2
Ahlai No. 1
Ahlai No. 2
Anah
Anna
Apphia
Asenath
Atarah
Athaliah
Azubah No. 1
Azubah No. 2
B
Baara
Bashemath, Basemeth, Basmath
Bashemath No. 1
Bashemath No. 2
Bashemath No. 3
Bathsheba
Bernice
Bilhah
Bithiah
C
Candace
Chloe
Claudia
Cozbi
D
Damaris
Deborah No. 1
Deborah No. 2
Delilah
Dinah
Dorcas
Drusilla
E
Eglah
Elisabeth
Elisheba
Ephah
Ephrath
Esther
Eunice
Euodias
Eve
G
Gomer
H
Hadassah
Hagar
Haggith
Hammoleketh, Hammolecheth
Hamutal
Hannah
Hazelelponi, Zelelponi
Helah
Hephzibah
Herodias
Hodesh
Hodiah
Hoglah
Huldah
Hushim
I
Iscah
J
Jael
Jecholiah, Jecoliah (RV)
Jedidah, Jedida
Jehoaddan
Jehosheba, Jehoshabeath
Jehodijah (see also Hodiah)
Jemima
Jerioth
Jerusha, Jerushah
Jezebel No. 1
Jezebel No. 2
Joanna
Jochebed
Judah
Judith
Julia
K
Keren-Happuch
Keturah
Kezia
L
Leah
Lois
Lo-Ruhamah
Lydia
M
Maachah
Mahalah, Mahlah
Mara
Martha
Mary
Mary Magdalene
Mary of Bethany
Mary, the Mother of James and Joses
Mary, Mother of John Mark
Mary of Rome
Matred
Mehetabel
Merab
Meshullemeth
Michaiah
Michal
Milcah No. 1
Milcah No. 2
Miriam No. 1
Miriam No. 2
N
Naamah No. 1
Naamah No. 2
Naarah
Naomi
Nehushta
Noadiah
Noah
O
Oholibamah (see Aholibamah)
Orpah
P
Peninnah
Persis
Phanuel
Phebe, Phoebe
Prisca (See Priscilla)
Priscilla
Puah
R
Rachel
Rahab
Rebekah, Rebecca
Reumah
Rhoda
Rizpah
Ruth
S
Salome No. 1
Salome No. 2
Sapphira
Sarah, Sarai, Sara
Serah
Shelomith
Shelomith No. 1
Shelomith No. 2
Shelomith No. 3
Sherah, Sheerah
Shimeath
Shimrith (Compare Shomer)
Shiphrah
Shomer
Shua
Susanna
Syntyche
T
Tabitha (See Dorcas)
Tahpenes
Tamar
Tamar No. 1
Tamar No. 2
Tamar No. 3
Taphath
Thamar (See Tamar)
Timna
Tirzah
Tryphena and Tryphosa
V
Vashti
Z
Zebudah, Zebidah
Zeresh
Zeruah
Zeruiah
Zibiah (Tsibiah)
Zillah
Zilpah
Zipporah`;
  let names_women = bible_names_text_parse(text);
  return names_women;
}
