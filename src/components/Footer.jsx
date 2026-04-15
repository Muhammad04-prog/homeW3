
export default function Footer() {
  return (
    <footer className="bg-[#1f242b] text-gray-300 px-10 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
            <span className="text-white font-semibold text-lg">
              ПОСТАВЩИК
            </span>
          </div>
          <p className="text-white text-lg mb-2">8-800-550-01-09</p>
          <p className="mb-4">posta.ivr@mail.ru</p>
          <div className="flex gap-4 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-500">
            © 2023 все права защищены
          </p>
        </div>
        <div className="border-l border-gray-700 pl-10">
          <h3 className="text-white mb-6">Информация</h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">Оплата</li>
            <li className="hover:text-white cursor-pointer">Доставка</li>
            <li className="hover:text-white cursor-pointer">
              Политика обработки персональных данных
            </li>
            <li className="hover:text-white cursor-pointer">
              Согласие на обработку персональных данных
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-6">Центральный офис и склад</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span>
                г. Иркутск ул. Ракитная стр 4 корп 11
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span>8-800-550-01-09</span>
            </li>
            <li className="flex items-start gap-3">
              <span>
                Режим работы: Пн-Пт с 9:00 до 18:00, Сб с 9:00 до 14:00
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
              <span>Региональные склады</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}