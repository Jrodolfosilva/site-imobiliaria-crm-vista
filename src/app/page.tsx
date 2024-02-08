import FilterProperty from "./components-layout/filter-property/filter-property";
import SlideSuperDestaque from "./components-layout/utils/slide-home-sdestaque/super-destaque";
import FeaturedZone from "./components-layout/Featured-zone/featured-zone"
import style from "./home.module.css";
import ListBrokers from "./components-layout/list-brokers/list-brokers";


export default function Home() {
  
  return (
    <section className={style.container_home}>
        <SlideSuperDestaque/>
        <FilterProperty redirect={true} />
        <FeaturedZone/>
        <ListBrokers/>
    </section>
  );
}
