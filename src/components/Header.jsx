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
    <header className="bg-white shadow-sm px-4 lg:px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-20 w-full lg:w-auto justify-between lg:justify-start">
          <img src={logo1} alt="Logo" className="h-8 object-contain" />
          <p className="text-gray-400 text-sm sm:text-base text-center">От завода без посредников</p>
        </div>
        <nav aria-label="Main" className="hidden lg:flex items-center gap-25">
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
    <div className="p-3 bg-[#EDEDED] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 flex-wrap">
      <button className="bg-[#167FFE] flex justify-center items-center text-white p-3 w-full lg:w-auto rounded-md gap-3 lg:ml-10">
        <img src={logo4} alt="Catalog" /> Каталог
      </button>
      <div className="flex items-center w-full lg:w-auto relative">
        <input className="bg-white w-full lg:w-[450px] h-12 p-4 rounded-md outline-none pr-12" type="text" placeholder="Поиск"/>
        <img className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" src={logo5} alt="Search" />
      </div>
      <p className="flex items-center gap-2 w-full lg:w-auto justify-center"><img src={logo6} alt="Location" />Иркутск</p>
    </div>
    </>
  );
}