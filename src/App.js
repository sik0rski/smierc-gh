import { useRef } from "react";

import theme from "./theme.jpg";
import books from "./books2.jpg";

import polikarp from "./polikarp.jpg";
import aleksy from "./aleksy.jpeg"
import tristan from "./tristan.jpg"
import boska from "./boska.jpg"
import skarga from "./skarga.jpeg"
import roland from "./roland.jpg"
import lament from "./lament.jpg"


import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={9} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${theme})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(1)}
        />

        <ParallaxLayer
          offset={0.2}
          speed={0.4}
          factor={1}
          onClick={() => ref.current.scrollTo(1)}
        >
          <h1>Motyw Śmierci</h1>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(2)}
        />

        <ParallaxLayer
          offset={1.0}
          speed={0.4}
          factor={0.8}
          onClick={() => ref.current.scrollTo(2)}
        >
          <h2>Powtórka z utworów</h2>
          <p>"Rozmowa mistrza Polikarpa ze śmiercią"</p>
          <p>"Pieśń o Rolandzie"</p>
          <p>"Dzieje Tristana i Izoldy"</p>
          <p>"Legenda o świętym Aleksym"</p>
          <p>"Skarga umierającego"</p>
          <p>"Lament świętokrzyski"</p>
          <p>"Boska Komedia"</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(3)}
        />

        <ParallaxLayer
          offset={2.2}
          speed={0.4}
          factor={0.2}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h1>Rozmowa mistrza Polikarpa że śmiercią</h1>
          <p>
            Utwór ukazuje dialog człowieka ze śmiercią. Polikarp prosił boga by
            ukazał mu postać śmierci, opisana w utworze szkaradna postać stała
            się głównym obrazem dla śmierci w tamtych czasach. Występuje m.in
            alegoria(przedstawienie w sposób obrazowy abstrakcyjnych pojęć czy
            ideii) i groteska (kategoria estetyczna, połączenie skrajnych
            elementów by coś uwydatnić, charakter satyryczny).
          </p>
          <img src={polikarp} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(4)}
        />

        <ParallaxLayer
          offset={3.2}
          speed={0.4}
          factor={0.2}
          onClick={() => ref.current.scrollTo(4)}
        >
          <h1>Pieśń o Rolandzie</h1>
          <p>
            Najstarszy znany francuski epos rycerski. Pieśń przedstawia walkę w
            obronie chrześcijańskiej Francji. Rycerz oddany Bogu, z honorem
            walczy do samego końca. Utwór należy do Chanson de geste. Jest tu
            przedstawiona śmierć, jako Ars moriendi.
          </p>
          <img src={roland} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(5)}
        />

        <ParallaxLayer
          offset={4.2}
          speed={0.4}
          factor={0.2}
          onClick={() => ref.current.scrollTo(5)}
        >
          <h1>Dzieje Tristana i Izoldy</h1>
          <p>
            Romans rycerski W utworze przedstawiona jest niespełniona miłość
            trwająca nawet po śmierci. Zarówno Tristan jak i Izolda umierają z
            żalu. Głóg pnący się z grobu tristana zmierzał do grobu Izoldy
            zawsze, nawet gdy próbowano go ścinać, jest to symbol miłości
            trwającej po śmierci.
          </p>
          <img src={tristan} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(6)}
        />

        <ParallaxLayer
          offset={5.2}
          speed={0.4}
          factor={0.2}
          onClick={() => ref.current.scrollTo(6)}
        >
          <h1>Legenda o świętym Aleksym</h1>
          <p>
            Legenda opowiadająca o człowieku który wybrał życie w skrajnej
            ascezie i cierpieniu dla Boga. Gdy umiera towarzyszą mu cuda. W
            całym Rzymie zaczęły bić dzwony, zwłoki uwalniały uzdrawiającą woń,
            zjawili się papierze kardynałowie, cesarz i kapłani. W ręku Aleksego
            żona znalazła list opisujący jego żywot. Mogła to zrobić gdyż
            pozostała wierna mimo jego nieobecności.
          </p>
          <img src={aleksy} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          factor={1}
          speed={0.2}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(7)}
        />

        <ParallaxLayer
          offset={6.2}
          speed={0.4}
          factor={0.2}
          onClick={() => ref.current.scrollTo(7)}
        >
          <h1>Skarga umierającego</h1>
          <p>
            Utwór ukazuje niejako zawieszenie duszy między niebem a piekłem,
            rozdarcie między dobrem a złem. Bohater poddaje refleksji swoje
            dotychczasowe życie. Daje przestrogę.
          </p>
          <img src={skarga} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={7}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
          onClick={() => ref.current.scrollTo(8)}
        />

        <ParallaxLayer
          offset={7.2}
          speed={0.4}
          factor={0.2}
          onClick={() => ref.current.scrollTo(8)}
        >
          <h1>Lament świętokrzyski</h1>
          <p>
            Uznawany za arcydzieło polskiej liryki średniowiecznej. Tekst
            opisuje uczucia matki boskiej podczas śmierci jej syna, żal, chęć
            przyjęcia cierpienia syna na siebie, przestrzega inne matki by
            modliły się, aby nie spotkał ich taki sam los.
          </p>
          <img src={lament} alt="" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={8}
          speed={0.2}
          factor={1}
          style={{
            backgroundImage: `url(${books})`,
            backgroundPositionX: "center",
            backgroundPositionY: "center",
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={8.2}
          speed={0.4}
          factor={0.2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h1>Boska Komedia</h1>
          <p>
            Kwintesencja średniowiecznej koncepcji człowieka i świata. Utwór
            pokazuje wędrówkę po kręgach piekła, każde doświadczenie i czyn
            człowieka decydują o jego miejscu po śmierci.
          </p>
          <img src={boska} alt="" />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
