import logo1 from "../assets/images/Group 42.png";
import logo2 from "../assets/images/Vector (26).png"
import logo3 from "../assets/images/Group 66.png"
import logo4 from "../assets/images/Group 61.png"
import logo5 from "../assets/images/Group 64.png"
import logo6 from "../assets/images/Vector (27).png"

const navLists = [
  {
    title: "Доставка",
    path: "/dostavka",
  },
  {
    title: "Оплата",
    path: "/oplata",
  },
  {
    title: "Контакты",
    path: "/kontakti", 
  },
];

export default function Header() {
  return (
    <>
    <header className="bg-white shadow-sm px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-20">
          <img src={logo1} />
          <p className="text-gray-400">От завода без посредников</p>
        </div>
        <nav aria-label="Main" className="flex items-center gap-25">
          <ul className="flex items-center gap-8">
            {navLists.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="text-blue-500 font-medium hover:text-blue-700 transition-colors duration-200">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
            <div className="flex items-center gap-10"><p className="flex items-center gap-2 font-bold"><img src={logo2} />8-800-550-01-09</p><img src={logo3} /></div>
        </nav>
      </div>
    </header>
    <div className="p-3 bg-[#EDEDED] flex items-center gap-20">
      <button className="bg-[#167FFE] flex items-center text-white p-3 w-30 gap-3 ml-10"><img src={logo4} /> Каталог</button>
      <input className="bg-white w-225 h-12 p-4" type="text" placeholder="Поиск"/><img className="relative right-20" src={logo5} />
      <p className="flex items-center gap-2 relative right-10"><img src={logo6} />Иркутск</p>
    </div>
    </>
  );
}