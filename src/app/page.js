import Image from "next/image";
import style from "./homepage.module.css";
import Featured from "@/components/featured/featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/cardList";
import Menu from "@/components/menu/menu";



export default function Home() {
  return (
    <div className={style.container}>
      <Featured />
      <CategoryList />
      <div className={style.container}>
          <CardList />
          <Menu />
      </div>
    </div>
  );
}
