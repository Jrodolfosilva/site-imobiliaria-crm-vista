import SlideSuperDestaque from "./components-layout/utils/slide-home-sdestaque/super-destaque";
import style from "./home.module.css";


export default function Home() {
  
  return (
    <section className={style.container_home}>
        <SlideSuperDestaque/>
        
    </section>
  );
}
