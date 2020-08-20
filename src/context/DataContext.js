import React, { createContext } from "react";
import ServicesImg from "assets/images/dentysta.jpg";
import ServicesImg2 from "assets/images/dentysta2.jpg";
import ServicesImg3 from "assets/images/dentysta3.jpg";
import ServicesImg4 from "assets/images/dentysta4.jpg";

const data = [
  {
    id: 1,
    name: "STOMATOLOGIA ZACHOWAWCZA",
    shortDesc: `Stomatologia zachowawcza to dział stomatologii zajmujący się profilaktyką próchnicy zębów oraz skutecznym leczeniem zaatakowanych próchnicą tkanek twardych zęba.
    Dzięki tej dyscyplinie Twoje zęby zachowują swoją żywotność na dłużej!`,
    longDesc: `Próchnica zębów jest to choroba przewlekła, spowodowana działaniem bakterii gromadzących się w płytce nazębnej. Bakteriom tym, niezbędne do życia są cukry, które poprzez demineralizację (rozpuszczanie) szkliwa doprowadzają do powstania ubytku.
    Oczywiście, zanim zgłosisz się do mojego gabinetu, musisz pamiętać o stosowaniu odpowiedniej diety oraz pielęgnowaniu jamy ustnej. Ogranicz cukry oraz staraj się myć i płukać jamę ustną po każdym posiłku!

    Jeśli to nie pomoże, zgłoś się do nas!

    1)	W gabinecie wykonamy przegląd stomatologiczny.

    2)	Oczyścimy zmianę, a jeśli będzie konieczność założymy specjalny podkład biologiczny.

    3)	Wypełnimy ubytek odpowiednio dobranym materiałem stomatologicznym.

    Pamiętaj!

    Aby definitywnie zakończyć proces choroby, należy wyleczyć każdy ząb z próchnicy.
    Nawet po zakończeniu leczenia, nie zaniedbuj pielęgnacji jamy ustnej. Pozwoli to skutecznie zapobiec szybkiemu powrotowi próchnicy.
    `,
    img: ServicesImg
  },
  {
    id: 2,
    name: "STOMATOLOGIA PROFILAKTYCZNA",
    shortDesc: `Profilaktyka odgrywa istotną rolę w stomatologii. Jej zadaniem jest przede wszystkim zapobieganie próchnicy, chorobom przyzębia, zębów oraz jamy ustnej.`,
    longDesc: `Właściwa higiena
    - eliminacja przykrego zapachu
    - uczucie świeżości
    - zmniejszenie przebarwień (spowodowanych paleniem papierosów, piciem kawy czy herbaty, itd.)
    - zachowanie żywotności własnych zębów
    - PIĘKNY UŚMIECH!

    Profesjonalne usługi profilaktyczne w naszym gabinecie:
    1.	Przegląd stomatologiczny
    Przegląd stanu jamy ustnej umożliwia diagnozę zmian w obszarze uzębienia, dziąseł i błony śluzowej oraz ocenę higieny jamy ustnej. Ponadto pozwala na dobór odpowiednich, zależnych od indywidualnych potrzeb pacjenta technik oczyszczania zębów oraz past i szczoteczek.

    2.	Skaling (Usuwanie kamienia i osadu nazębnego i poddziąsłowego)
    Kamień nazębny tworzy się w wyniku zawartych w ślinie związków mineralnych. Zawiera dużą ilość bakterii, które są odpowiedzialne m.in. za przykry zapach z ust.

    Po dokładnym oczyszczeniu zębów, następuje staranne wypolerowanie, dzięki czemu pacjent może cieszyć się uczuciem gładkości.

    3.	Lakowanie (uszczelnianie bruzd i zagłębień w zębach stałych)
    Bruzdy i zagłębienia zębów są miejscami trudno dostępnymi dla tradycyjnych szczoteczek do zębów. Nieodpowiednie i niedokładne czyszczenie sprzyja rozwojowi bakterii i w następstwie prowadzi do próchnicy.
    Warto zadbać przede wszystkim o uszczelnienie zębów trzonowych i przedtrzonowych.

    `,
    img: ServicesImg2
  },
  {
    id: 3,
    name: "ENDODONCJA",
    shortDesc: `Jest to dział, należący do stomatologii zachowawczej. Zajmuje się rozpoznaniem i leczeniem chorób miazgi zęba oraz chorób tkanek okołowierzchołkowych. Podstawą tej dziedziny stomatologii jest leczenie kanałowe. Bardzo często pozwala ono nam na uniknięcie ekstrakcji i zachowanie własnego zęba. `,
    longDesc: `Leczenie kanałowe w naszym gabinecie:

    W moim gabinecie najpierw wykonamy Ci zdjęcie RTG, by móc zaklasyfikować zmianę. Następnie lekarz stomatolog otworzy koronę zęba, by móc usunąć pacjentowi martwą bądź zainfekowaną miazgę z komory zęba. Zabieg jest wykonywany w silnym i skutecznym znieczuleniu lub następuje po zatruciu ujść kanałów.  Kolejnym krokiem jest poszerzenie kanału/ ów (w zależności od numeru zęba) oraz oczyszczenie ich z bakterii. Dodatkowo stosowane są antybiotyki, zarówno bezpośrednio do zęba, jak i doustnie, jeśli zmiana okołowierzchołkowa jest rozległa.
    Po zastosowaniu antybiotyków i dokładnym oczyszczeniu zęba z bakterii, kanał/y zostają wypełnione specjalnym materiałem, po czym następuje uszczelnienie gutaperką.
    Po wyleczeniu zęba- czas na stomatologię zachowawczą! Odbudowa zęba może nastąpić na wiele sposób- poprzez plombę, odbudowę całkowitą w kształtce poliestrowej czy odbudowę protetyczną, opartą na specjalnym ćwieku, wykonanym przez technika i koronie porcelanowej czy z cyrkonu.

    Wszystkie poszczególne etapy leczenia są pod kontrolą radiowizjografii.

    NASZ GABINET JEST TAKŻE WYPOSAŻONY W URZĄDZENIA NIEZBĘDNE DO
    LECZENIA KANAŁOWEGO ZĘBÓW POD MIKROSKOPEM!

    Leczenie kanałowe z wykorzystaniem mikroskopu pozwala na dokładne  wyleczenie zęba i opracowanie kanałów zęba. Dzieje się to za przyczyną wielokrotnego powiększenia, jak i oświetlenia pola zabiegowego. Pozwala to na dokładne poznanie kształtu i położenia korzeni, a przy tym zauważanie pewnych zawężeń czy perforacji. Ponadto, podczas zabiegu wykorzystuje się również specjalne narzędzie- tzw. endometr, który umożliwia zmierzenie długości każdego z poszczególnych kanałów.

    Użycie mikroskopu sprawdza się przede wszystkim gdy lekarz stomatolog stwierdzi, że kanały są bardzo wąskie, kręte czy nietypowe lub gdy nie jest w stanie ich zlokalizować. Kolejnym wskazaniem do leczenia pod mikroskopem są uszkodzone kanały, np. sperforowane.

    `,
    img: ServicesImg3
  },
  {
    id: 4,
    name: "STOMATOLOGIA ESTETYCZNA",
    shortDesc: `Stomatologia estetyczna ma na celu przede wszystkim poprawę efektu wizualnego.`,
    longDesc: `Usługi w ramach stomatologii estetycznej:

    1.	Skaling (Usuwanie kamienia i osadu nazębnego i poddziąsłowego)
Kamień nazębny tworzy się w wyniku zawartych w ślinie związków mineralnych. Zawiera dużą ilość bakterii, które są odpowiedzialne m.in. za przykry zapach z ust.

Po dokładnym oczyszczeniu zębów, następuje staranne wypolerowanie, dzięki czemu pacjent może cieszyć się uczuciem gładkości

2.	Nakładkowe wybielanie zębów
Lekarz stomatolog w pierwszej kolejności dokonuje przeglądu jamy ustnej. Istotne jest, aby usunąć wszelkie ubytki oraz kamień nazębny. Następnie wykonuje się odlew kształtu zębów, czyli tzw. wyciski. Dzięki temu technik jest w stanie wykonać precyzyjne i idealnie pasujące nakładki, które pacjent zakłada na zęby wraz ze specjalnym żelem.
Proces wybielania zębów trwa średnio od 2 do 4 tygodni, w zależności od satysfakcji efektu.

3.	Pokrycia całkowite zębów
Czynniki takie jak: ogólny wygląd, kształt i kolor zębów niewątpliwie wpływają na nasz wygląd. W przypadku, gdy ząb jest krzywy, zbyt ciemny lub widoczne są stare wypełnienia (plomby), skuteczną formą będzie właśnie całkowite pokrycie zęba w kształtce poliestrowej przy dobraniu odpowiedniego kształtu zęba i koloru z szerokiej gamy materiałów, dostępnym w naszym gabinecie.`,
    img: ServicesImg4
  },
  {
    id: 5,
    name: "MAŁA CHIRURGIA",
    shortDesc: `Chirurgia w stomatologii kojarzona jest głównie z zabiegiem usuwanie zębów.`,
    longDesc: `Aby zapewnić pacjentom całkowity komfort, przed rozpoczęciem zabiegu ekstrakcji zęba, stosujemy specjalne, zupełnie bezpieczne i najskuteczniejsze znieczulenie, odpowiednio dobrane do każdego pacjenta, w zależności od wieku czy masy ciała. Pozwala to chronić naszych pacjentów przed zbędnym stresem i trwałym urazem.
    Lekarz stomatolog podejmuje się także usuwania ósemek (zębów mądrości) po wykonaniu zdjęcia RTG i określeniu szans powodzenia ekstrakcji tychże zębów. Jeśli stwierdzi, że korzystniejsze dla zdrowia pacjenta jest chirurgiczna ekstrakcja zęba, kieruje go do chirurga stomatologicznego.`,
    img: ServicesImg
  },
  {
    id: 6,
    name: "PROTETYKA",
    shortDesc: `Jest działem w stomatologii, którego głównym celem jest odtworzenie właściwego zgryzu i pięknego wyglądu zębów, ze względu na ich utratę lub silne uszkodzenie.

    Jest barana pod uwagę, gdy niemożliwe jest zastosowanie metod odbudowy zębów przy wykorzystaniu dziedziny stomatologii, zwaną stomatologią zachowawczą.

    Nowoczesne rozwiązania uzupełnień protetycznych pozwalają na perfekcyjny wygląd, a przede wszystkim na trwały efekt i funkcjonalność.`,
    longDesc: `Leczebue protetyczne w naszym gabinecie:
    W dziedzinie tej najważniejsze jest indywidualne podeście do każdego pacjenta.
    -Przegląd stomatologiczny stanu uzębienia.
    -Przedstawienie możliwości działania (korony vs porcelana)
    -Omówienie możliwości finansowych
    -Ustalenie planu działania (zaplanowanie wizy, pobranie wycisków, przymiarki, itd.)
    Leczenie protetyczne
    W procesie leczenia protetycznego możemy wyróżnić 2 rodzaje uzupełnień.
    Jednym z nich są ruchome uzupełnienia, do których zalicza się przede wszystkim protezy (jak sama nazwa wskazuje- ruchome protezy mogą być wyjmowane z jamy ustnej). Znajduję one zastosowanie, gdy mamy do czynienia z kompletną utratą uzębienia lub większości zębów. W naszym gabinecie oferujemy różnego rodzaju protezy: ………………
    Z kolei drugim rozwiązaniem są stałe uzupełnienia protetyczne. W ich skład wchodzą mosty, które wypełniają kilkuzębowe braki, co znacząco poprawia ich siłę oraz pojedyncze korony (porcelanowe, cyrkonowe), wykorzystywane przede wszystkim w przypadku bardzo zniszczonych koron zębów.



    -Korzyści płynące z leczenia protetycznego
    -poprawa estetyki zębów (szczególnie jeśli chodzi o zęby przednie)
    Zwiększa to naszą pewność siebie i atrakcyjność.
    -odtworzenie odpowiednich warunków zgryzowo-zwarciowych, co   ułatwia rozgryzanie, przeżuwanie pokarmu, zatem ma wpływ na cały  układ pokarmowy.
`,
    img: ServicesImg2
  },
  {
    id: 8,
    name: "WYBIELANIE ZĘBÓW",
    shortDesc: `W naszym gabinecie, w celu wybielania zębów przez pacjenta, preferowana jest metoda nakładkowego wybielania zębów, która w większości odbywa się w domu.`,
    longDesc: `W pierwszej kolejności lekarz stomatolog dokonuje przeglądu jamy ustnej. Istotne jest, aby usunąć wszelkie ubytki oraz kamień nazębny. Następnie wykonuje się odlew kształtu zębów, czyli tzw. wyciski. Dzięki temu technik jest w stanie wykonać precyzyjne i idealnie pasujące nakładki, które pacjent zakłada na zęby wraz ze specjalnym żelem.
    Proces wybielania zębów trwa średnio od 2 do 4 tygodni, w zależności od satysfakcji efektu.`,
    img: ServicesImg3
  },
  {
    id: 7,
    name: "RADIOWIZJOGRAFIA",
    shortDesc: `Aby umożliwić naszym Pacjentom jak największy komfort, wyposażyliśmy gabinet w nowoczesny sprzęt, który pozwala na przeprowadzenie wstępnego badania już na pierwszej wizycie. Wprowadzenie do jamy ustnej małej kamery daje szansę na wykonanie bardzo dokładnego zdjęcia- pojedynczego zęba, jego korzeni, zmian, których w normalnych warunkach nie da się zauważyć gołym okiem.`,
    longDesc: `Ponadto w naszym gabinecie znajduje się również panorama, która pozwala na wykonanie zdjęcia całej jamy ustnej- żuchwy i szczęki i stwierdzenia stanu uzębienia.
    Dzięki obrazowaniu radiologicznemu lekarz stomatolog ma wsparcie diagnostyczne, co jest podstawą do udanego leczenia.
    Wszystkie działania związane z wykonaniem zdjęcia RTG czy zdjęcia panoramicznego  są wykonywane już w gabinecie, dzięki czemu Pacjenci nie muszą się fatygować, by  zdobyć zdjęcia niezbędne do rozpoznania i zaplanowania konkretnych działań stomatologicznych.
    `,
    img: ServicesImg4
  }
];

export const DataContext = createContext(data);
const { Provider } = DataContext;

const DataContextProvider = ({ children }) => {
  return (
    <>
      <Provider value={data}>{children}</Provider>;
    </>
  );
};
export default DataContextProvider;
