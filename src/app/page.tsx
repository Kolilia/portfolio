import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Колымажнов Илья</h1>
          <p className="text-xl text-gray-600">Fullstack разработчик (React/Next.js)</p>
        </section>

        <section className="flex justify-center mb-12">
          <Image src="/ava.jpg" width={120} height={120} alt="" className="rounded-full object-cover border-2 border-blue-500" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Мои проекты</h2>
          <p className='mb-6 text-lg font-semibold'>Здесь находится лишь малая часть моих проектов, большинство находится под NDA и я не имею право прикреплять ссылку на репозиторий или показывать демо</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mt-12 mb-6">Мое резюме</h2>

          <div className="section">
            <h2 className='text-xl mb-4 font-bold'>Опыт работы</h2>
            <div className="job">
              <div className="job-header">
                <span className="job-title">Teamlead Frontend разработчик, ООО "Экванталаб"</span>
                <span className="job-duration">Фев 2024 - Наст. время - 1 год 2 мес, Москва</span>
              </div>
              <ul>
                <li>Руководство разработкой фронтенда для финтех-проекта с международной локализацией</li>
                <li>Оптимизация и рефакторинг сложных логических частей проекта</li>
                <li>Формирование команды высококвалифицированных специалистов</li>
                <li>Реализация анкеты для кредитования с интеграцией распознавания лиц и документов</li>
                <li>Разработка личного кабинета пользователя с управлением займами</li>
              </ul>
            </div>

            <div className="divider" />

            <div className="job">
              <div className="job-header">
                <span className="job-title">Frontend разработчик, АртВижи</span>
                <span className="job-duration">Июнь 2021 - Янв 2024 - 2 года 7 мес, Москва</span>
              </div>
              <ul>
                <li>Переход на FSD архитектуру для повышения гибкости проекта</li>
                <li>Разработка медицинских инструментов на основе Cornerstone.js для работы с DICOM</li>
                <li>Создание сложных форм отчетов с экспортом в Excel</li>
                <li>Разработка UI-библиотеки компонентов для связанных проектов</li>
                <li>Реализация таблиц с продвинутой системой фильтрации</li>
              </ul>
            </div>

            <div className="divider" />

            <div className="job">
              <div className="job-header">
                <span className="job-title">Frontend разработчик, Curly Brackets</span>
                <span className="job-duration">Авг 2018 - Май 2021 - 2 года 10 мес, Нью-Йорк (удаленно)</span>
              </div>
              <ul>
                <li>Разработка финансовых форм с обменом валют с использованием WebSockets</li>
                <li>Реализация системы уведомлений в реальном времени для банковских операций</li>
                <li>Создание административной панели с широким функционалом</li>
                <li>Разработка полноценного чата для общения операторов с клиентами</li>
                <li>Быстрый рост с junior до middle-разработчика</li>
              </ul>
            </div>
          </div>

          <div className="section mt-10">
            <h2 className='text-xl mb-4 font-bold'>Образование</h2>
            <div className="job-header">
              <span className="job-title">Информационные системы и программирование, АКБТ</span>
              <span className="job-duration">Сен 2018 - Июнь 2022, Москва</span>
            </div>
          </div>

          <div className="section">
            <h2 className='mb-6 text-xl font-bold'>Технические навыки</h2>
            <div className="skills-list">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Redux</span>
              <span className="skill-tag">Redux Toolkit</span>
              <span className="skill-tag">Webpack</span>
              <span className="skill-tag">Vite</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">FSD</span>
              <span className="skill-tag">SCSS</span>
              <span className="skill-tag">Tailwind</span>
              <span className="skill-tag">Styled Components</span>
              <span className="skill-tag">WebSockets</span>
              <span className="skill-tag">Адаптивная верстка</span>
              <span className="skill-tag">Nextjs</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">Node</span>
              <span className="skill-tag">C#</span>
            </div>
          </div>


          <div className="two-columns">
            <div className="column">
              <div className="section">
                <h2 className='text-xl font-bold mb-6'>Контакты</h2>
                <div className="contact-info">
                  <i>✉️</i> jwm20002@mail.ru
                </div>
                <div className="contact-info">
                  <i>📱</i> +7 939 850 83 81
                </div>
                <div className="contact-info">
                  <i>📍</i> Москва, Россия
                </div>
                <div className="contact-info">
                  <i>📱</i> Telegram: @Koldilia
                </div>
              </div>
            </div>
            <div className="column">
              <div className="section">
                <h2 className='text-xl font-bold mb-6'>Профили</h2>
                <div className="contact-info">
                  <i>🔗</i> GitHub: github.com/Kollila
                </div>
                <div className="contact-info">
                  <i>🔗</i> GitLab: gitlab.com/Kollila
                </div>
                <div className="contact-info">
                  <i>🔗</i> Хабр Карьера: career.habr.com/ilya-kolymazhnov
                </div>
              </div>
            </div>
          </div>

          <div className="two-columns">
            <div className="column">
              <div className="section">
                <h2 className='text-xl font-bold mb-6'>Языки</h2>
                <div className="contact-info">
                  <i>🌐</i> Русский (родной)
                </div>
                <div className="contact-info">
                  <i>🌐</i> Английский (профессиональный)
                </div>
              </div>
            </div>
            <div className="column">
              <div className="section">
                <h2 className='text-xl font-bold mb-6'>Дополнительно</h2>
                <div className="skills-list">
                  <span className="skill-tag">Командная работа</span>
                  <span className="skill-tag">Код-ревью</span>
                  <span className="skill-tag">Техническая документация</span>
                  <span className="skill-tag">Agile разработка</span>
                  <span className="skill-tag">Наставничество</span>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <h2>О СЕБЕ</h2>
            <p>Целеустремленный и любознательный специалист с опытом разработки сложных веб-приложений. Легко нахожу общий язык с командой, стрессоустойчив. Быстро осваиваю новые технологии и подходы к разработке. Готов предлагать идеи для улучшения качества проектов.</p>
          </div>
        </section>
      </main>
    </>
  );
}