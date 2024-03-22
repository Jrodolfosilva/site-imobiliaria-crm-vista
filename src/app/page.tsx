import FilterProperty from "./components-layout/filter-property/filter-property";
import SlideSuperDestaque from "./components-layout/home-components/slide-home-sdestaque/super-destaque";
import FeaturedZone from "./components-layout/home-components/Featured-zone/featured-zone"
import style from "./home.module.css";
import ListBrokers from "./components-layout/home-components/list-brokers/list-brokers";
import CTAHome from "./components-layout/home-components/cta-home/cta-home";
import CardProperty from "./components-layout/card-property/card-property";


export default function Home() {
  
  return (
    <section className={style.container_home}>
        <SlideSuperDestaque/>
        <FilterProperty redirect={true} />
        <div>
          <CardProperty/>
        </div>
        <FeaturedZone/>
        <ListBrokers/>
        <CTAHome/>
    </section>
  );
}
