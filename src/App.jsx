import Header from "./components/Header";
import Button from "./components/shared/Button/Button";
import logo from "./assets/images/йййй 1.png";
import ProductSlider from "./components/CardsList/CardsList";

// images
import img1 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1.png";
import img2 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (1).png";
import img3 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (2).png";
import img4 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (3).png";
import img5 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (4).png";
import img6 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (5).png";
import img7 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (6).png";
import img8 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (7).png";
import img9 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (8).png";
import img10 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (9).png";
import img11 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (10).png";
import img12 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (11).png";
import img13 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (12).png";
import img14 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (13).png";
import img15 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (14).png";
import img16 from "./assets/images/0b3d8cb55d0a04b48fdb63f6e48021bf-1000x1000 1 (15).png";
import Footer from "./components/Footer";

export default function App() {
  const products1 = [
    {
      id: 1,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "2 491 ₽/шт.",
      image: img1,
    },
    {
      id: 2,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "3 200 ₽/шт.",
      image: img2,
    },
    {
      id: 3,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "1 345 ₽/шт.",
      image: img3,
    },
    {
      id: 4,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "2 600 ₽/шт.",
      image: img4,
    },
  ];
  const products2 = [
    {
      id: 1,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "3 200 ₽/шт.",
      image: img5,
    },
    {
      id: 2,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "1 345 ₽/шт.",
      image: img6,
    },
    {
      id: 3,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "2 491 ₽/шт.",
      image: img7,
    },
    {
      id: 4,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "2 600 ₽/шт.",
      image: img8,
    },
  ];
  const products3 = [
    {
      id: 1,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "3 200 ₽/шт.",
      image: img9,
    },
    {
      id: 2,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "1 345 ₽/шт.",
      image: img10,
    },
    {
      id: 3,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "2 600 ₽/шт.",
      image: img11,
    },
    {
      id: 4,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "2 491 ₽/шт.",
      image: img12,
    },
  ];
  const products4  = [
    {
      id: 1,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "3 200 ₽/шт.",
      image: img13,
    },
    {
      id: 2,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "1 345 ₽/шт.",
      image: img14,
    },
    {
      id: 3,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "2 600 ₽/шт.",
      image: img15,
    },
    {
      id: 4,
      title: "Пеноплекс Кофморт 1185х585х20мм 20 плит, 13.86м2, 0.278м3",
      price: "2 491 ₽/шт.",
      image: img16,
    },
  ];

  return (
    <>
      <Header />
      <section className="head flex flex-col lg:flex-row justify-around items-center py-10 lg:py-0 px-4">
        <div className="p-5 lg:p-20 text-white space-y-5 relative lg:top-20 z-10 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl">Новинка в России</h1>
          <p className="text-xl md:text-2xl w-full lg:w-70 mx-auto lg:mx-0">
            Север - теплоизоляция для сурового климата
          </p>
          <h1 className="text-3xl md:text-5xl font-bold">от 850 ₽ за 3м2</h1>
          <div className="flex justify-center lg:justify-start">
            <Button text="ПOДPOБHEE" />
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <img className="relative lg:top-20 w-full max-w-sm lg:max-w-none mx-auto" src={logo} alt="Север" />
        </div>
      </section>
      <section>
        <div className="p-5 lg:p-15 flex flex-col md:flex-row items-center justify-center lg:justify-around gap-5 md:gap-120">
          <h1 className="text-2xl md:text-4xl text-center">Теплоизоляция</h1>
          <Button text="СМОТРЕТЬ ВСЕ" />
        </div>
      </section>
      <ProductSlider products={products1} />

      <section>
        <div className="p-5 lg:p-15 flex flex-col md:flex-row items-center justify-center lg:justify-around gap-5 md:gap-120">
          <h1 className="text-2xl md:text-4xl text-center">Строительные блоки</h1>
          <Button text="СМОТРЕТЬ ВСЕ" />
        </div>
      </section>
      <ProductSlider products={products2} />

      <section>
        <div className="p-5 lg:p-15 flex flex-col md:flex-row items-center justify-center lg:justify-around gap-5 md:gap-120">
          <h1 className="text-2xl md:text-4xl text-center">Листовые материалы</h1>
          <Button text="СМОТРЕТЬ ВСЕ" />
        </div>
      </section>
      <ProductSlider products={products3} />

      <section>
        <div className="p-5 lg:p-15 flex flex-col md:flex-row items-center justify-center lg:justify-around gap-5 md:gap-120">
          <h1 className="text-2xl md:text-4xl text-center">Кровля и водосток</h1>
          <Button text="СМОТРЕТЬ ВСЕ" />
        </div>
      </section>
      <ProductSlider products={products4} />
      <Footer/>
    </>
  );
}