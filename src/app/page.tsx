import Carousel from "@/components/carousel/carousel";
import CarouselV2 from "@/components/carousel/carouselV2";
import Hero from "@/components/hero";
import Price from "@/components/price";
import Title from "@/components/title";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <section className="h-screen py-10 flex flex-col items-center w-screen gap-5">
          <Title subtitle="СИСТЕМЫ LAWITY" centered>Вся работа в одном месте</Title>
          <Carousel />
        </section>

        {/* Кейсы */}
        <section className="py-32 w-full flex justify-center gap-5 bg-gray-100">
          <div className="flex flex-col items-center max-w-7xl">
            <Title>Успешные кейсы</Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 grid-rows-2 mt-10">
              {/* 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Кейс 1: Управление клиентами</h3>
                <p className="text-gray-600">
                  Юридическая фирма &quot;Право+&quot; использует Lawity CRM для централизованного управления клиентами и делами. Это позволило им сократить время на обработку заявок и повысить удовлетворенность клиентов.
                </p>
              </div>
              {/* 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Кейс 2: Автоматизация документооборота</h3>
                <p className="text-gray-600">
                  Фирма &quot;Юрист-Плюс&quot; внедрила Lawity CRM для автоматизации документооборота. Теперь все документы хранятся в единой базе данных, что значительно упростило работу с документами.
                </p>
              </div>
              {/* 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Кейс 3: Автоматизация документооборота</h3>
                <p className="text-gray-600">
                  Фирма &quot;Юрист-Плюс&quot; внедрила Lawity CRM для автоматизации документооборота. Теперь все документы хранятся в единой базе данных, что значительно упростило работу с документами.
                </p>
              </div>
              {/* 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Кейс 4: Управление клиентами</h3>
                <p className="text-gray-600">
                  Юридическая фирма &quot;Право+&quot; использует Lawity CRM для централизованного управления клиентами и делами. Это позволило им сократить время на обработку заявок и повысить удовлетворенность клиентов.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Преимущества */}
        <section className="py-20 w-full flex justify-center bg-white">
          <div className="flex flex-col max-w-7xl">
            <Title centered>Почему выбирают Lawity CRM?</Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="flex flex-col items-center text-center">
                <Image src="/icons/integration.svg" alt="Интеграция" width={64} height={64} />
                <h3 className="text-xl font-semibold mt-4">Гибкая интеграция</h3>
                <p className="text-gray-600">Легко интегрируется с другими системами и сервисами.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image src="/icons/security.svg" alt="Безопасность" width={64} height={64} />
                <h3 className="text-xl font-semibold mt-4">Безопасность данных</h3>
                <p className="text-gray-600">Гарантируем безопасность ваших данных.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image src="/icons/support.svg" alt="Поддержка" width={64} height={64} />
                <h3 className="text-xl font-semibold mt-4">Круглосуточная поддержка</h3>
                <p className="text-gray-600">Наша команда поддержки всегда готова помочь.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Цены */}
        <section className="py-20 w-full flex justify-center bg-gray-100">
          <div className="flex flex-col max-w-7xl">
            <Title centered>Тарифные планы</Title>
            <Price />
          </div>
        </section>

        {/* Отзывы */}
        <section className="py-20 w-full flex justify-center bg-white">
          <div className="flex flex-col max-w-7xl">
            <Title>Отзывы наших клиентов</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">
                &quot;Lawity CRM значительно упростила нашу работу. Теперь все дела и документы находятся в одном месте, и мы можем быстро находить нужную информацию.&quot;
                </p>
                <p className="text-right mt-4">- Анна Иванова, &quot;Право+&quot;</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">
                &quot;Отличная система! Нам очень понравилась поддержка и гибкость настроек. Рекомендуем всем юридическим фирмам.&quot;
                </p>
                <p className="text-right mt-4">- Петр Петров, &quot;Юрист-Плюс&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Контактная форма */}
        <section className="py-20 w-full flex justify-center bg-gray-100">
          <div className="flex flex-col max-w-7xl">
            <Title>Свяжитесь с нами</Title>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Ваше имя" className="p-3 border rounded-lg" />
              <input type="email" placeholder="Ваш email" className="p-3 border rounded-lg" />
              <textarea placeholder="Ваше сообщение" className="p-3 border rounded-lg" rows={4}></textarea>
              <button type="submit" className="bordered">Отправить</button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image
                src='/logo.png'
                alt='Lawity logo'
                width={120}
                height={80}
                className='object-contain'
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-2 text-gray-600">Контакты</h3>
                <p>Телефон: +7 (123) 456-78-90</p>
                <p>Email: info@lawity.com</p>
                <p>Адрес: ул. Юридическая, 123, г. Москва</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-2 text-gray-600">Ссылки</h3>
                <ul>
                  <li><a href="#" className="hover:underline">О нас</a></li>
                  <li><a href="#" className="hover:underline">Услуги</a></li>
                  <li><a href="#" className="hover:underline">Блог</a></li>
                  <li><a href="#" className="hover:underline">Контакты</a></li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-2 text-gray-600">Социальные сети</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-300 opacity-10" />
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Lawity. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div >
  );
}
