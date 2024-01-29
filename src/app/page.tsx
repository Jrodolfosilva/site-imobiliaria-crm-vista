
import SlideSuperDestaque from "./components-layout/utils/slide-home-sdestaque/super-destaque";
import style from "./home.module.css";

const superDestaqueAPI = [
  {
    titleProperty:"askjdhdasdk",
    valueProperty:155596,
    areaProperty: 600,
    dormProperty:4,
    suiteProperty:1,
    bathProperty:3,
  },
  {
    titleProperty:"askjdasdhdasdk",
    valueProperty:155596,
    areaProperty: 600,
    dormProperty:4,
    suiteProperty:1,
    bathProperty:3,
  }, {
    titleProperty:"askjsaddhdasdk",
    valueProperty:155596,
    areaProperty: 600,
    dormProperty:4,
    suiteProperty:1,
    bathProperty:3,
  }
  
]

export default function Home() {
  return (
    <section className={style.container_home}>
        <SlideSuperDestaque  destaque={superDestaqueAPI}/>
    </section>
  );
}
