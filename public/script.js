// ============ TRANSLATIONS ============
const i18n = {
  ru: {
    logo: "BookBloom",
    nav_about: "О проекте", nav_creator: "О создателе", nav_eco: "Эко-советы",
    nav_calc: "Экономика", nav_catalog: "Каталог", nav_quiz: "Викторины", nav_proof: "Подтверждение продаж", nav_faq: "FAQ",
    cart: "Корзина",
    hero_eyebrow: "Экологический проект Аяны",
    hero_title: "Книги с <em>историей</em>",
    hero_slogan: "Книги с новой историей. Экономим деньги — бережём леса.",
    hero_text: "Каждую из этих книг я бережно и с любовью прочитала сама. Сейчас я учусь в Назарбаев Интеллектуальной школе (НИШ) в Астане по международной программе IB. Все книги, представленные здесь, лично прочитаны мною, и я готова обсудить каждую из них, растолковать сюжет и поделиться впечатлениями после вашего прочтения — это будет замечательный опыт обмена мнениями! Теперь я делюсь ими, чтобы беречь природу Казахстана и помогать другим читать доступно.",
    hero_whatsapp: "<span class='icon icon-chat' role='img' aria-label='сообщение'></span> Написать тёте в WhatsApp (Улжан)",
    hero_book1: "Е. Замятин — «Мы»", hero_book2: "Гарри Поттер и Философский камень", hero_book3: "Д. Киз — Цветы для Элджернона",
    qr_title: "QR-код заказа",
    qr_text: "Наведите камеру телефона для быстрого заказа!",
    stat_visits: "Заходили на сайт", stat_inquiries: "Оформили заказ через сайт",
    stat_sold: "Книг куплено (подтверждено)", stat_readers: "Довольных читателей",
    stat_catalog: "Книг в каталоге", stat_trees: "Спасено деревьев",
    stats_note: "«Заходили на сайт» и «Оформили заказ» считаются автоматически. «Книг куплено» — только подтверждённые продажи, проверенные вручную.",
    about_title: "Осознанное чтение — забота о будущем",
    about_p1: "Меня зовут <strong>Алдибек Аяна Бауыржанқызы</strong>. Я ученица НИШ в Астане, безумно обожаю литературу, математику, биологию и бережно отношусь к природе Казахстана.",
    about_p2: "Все книги, представленные в каталоге, прочитаны мною лично — большинство из них ровно один раз, в прекрасном состоянии. Некоторые книги из нашей домашней коллекции уже долгое время находятся у нас, что также отражено в описании. Каждая книга имеет свою цену — не более 1 500 тенге, а многие стоят значительно меньше. Я готова обсудить каждую книгу, растолковать сюжет и поделиться мыслями после вашего прочтения — обмен впечатлениями станет отличным опытом!",
    about_p3: "Прочитав потрясающие классические романы, а также собрав все 7 томов саги о <strong>Гарри Поттере</strong>, я решила дать этим книгам вторую жизнь. Покупая их, вы помогаете друг другу экономить бюджет и спасаете планету от излишней вырубки лесов.",
    about_contacts: "Контакты Аяны", about_email: "Email", about_parent: "Родитель-координатор",
    feat1_title: "Сохранение экологии",
    feat1_text: "Повторное использование книг снижает выбросы CO₂ при производстве бумаги и оберегает леса Казахстана от вырубки.",
    feat2_title: "Доступные цены",
    feat2_text: "Каждая книга стоит не более 1 500 ₸ — значительно дешевле новых книг в книжных магазинах. Экономия до 60% бюджета!",
    feat3_title: "Отличное качество",
    feat3_text: "Большинство книг прочитаны аккуратно, один раз. Страницы чистые, обложки в отличном состоянии. Некоторые книги из давней домашней коллекции.",
    feat4_title: "Личное обсуждение",
    feat4_text: "Все книги лично прочитаны Аяной. Она готова обсудить каждую книгу, растолковать сюжет и поделиться впечатлениями — это создаёт замечательный опыт обмена мнениями!",
    creator_eyebrow: "Познакомьтесь с инициатором книжного круга",
    creator_title: "О создателе проекта",
    creator_status: "Ученица НИШ, Астана",
    bio_p1: "Привет! Я рада приветствовать вас в моём книжном круге. Я родилась <strong>9 июня 2011 года</strong> в прекрасном городе <strong>Алматы</strong>. Позже моя жизнь была связана со многими красивыми уголками Казахстана, подарив мне верных друзей, гибкость мышления и стремление к учёбе.",
    bio_edu_title: "<span class='icon icon-map' role='img' aria-label='карта'></span> Путь в образовании:",
    bio_edu1: "<strong>Начальные классы</strong> — жила в южном городе <strong>Таразе</strong> и получала первые знания в знаменитой <strong>школе-гимназии №40</strong>, одной из лучших школ Жамбылской области.",
    bio_edu2: "<strong>Средние классы</strong> — после переезда семьи в Астану училась в современной <strong>школе-гимназии №72</strong>.",
    bio_edu3: "<strong>Старшие классы</strong> — успешно сдав вступительные экзамены, поступила в престижную <strong>Назарбаев Интеллектуальную школу (НИШ) Астаны</strong> с широкопрофильным образованием и международным дипломом IB.",
    bio_p2: "В школе мои любимые предметы — <strong>математика и биология</strong>. Я хочу связать своё будущее с наукой и готовилась к международным экзаменам <strong>SAT</strong> и <strong>IELTS</strong>.",
    bio_p3: "Этим летом я прочитала четыре замечательные книги: <strong>«Мы» Евгения Замятина</strong>, <strong>«Над пропастью во ржи» Дж. Д. Сэлинджера</strong>, <strong>«Отцы и дети» Ивана Тургенева</strong> и <strong>«Герой нашего времени» Михаила Лермонтова</strong>. Книги, которые я читаю, включают классику, рекомендованную учителями НИШ для внеклассного чтения, детскую литературу и современные романы. Все они пополняют мой книжный круг!",
    bio_hobbies_title: "<span class='icon icon-sparkle' role='img' aria-label='звёздочка'></span> Мои интересы и увлечения:",
    hobby1_title: "Шахматы", hobby1_text: "Два года занималась на профессиональных курсах по шахматам, развивая тактическое мышление.",
    hobby2_title: "Рисование", hobby2_text: "Люблю рисовать в тишине после напряжённой учёбы в НИШ.",
    hobby3_title: "Плавание", hobby3_text: "Спортивные тренировки по плаванию закалили мой характер и подарили бодрость.",
    hobby4_title: "Эко-активизм", hobby4_text: "Убеждена, что даже маленькое дело может спасти планету. Мой проект — реальный шаг к спасению деревьев.",
    trusted_person_title: "Доверенное лицо проекта",
    trusted_person_text: "Доверенным лицом Аяны является её тётя — <strong>Сауранбаева Улжан Сатыбалдиевна</strong>. Её номер телефона, контакты и прямая ссылка на WhatsApp указаны в конце этого сайта — там же можно заказать книгу или уточнить любую необходимую информацию.",
    reading_now: "Сейчас читаю",
    reading_now_book: "«Идиот» — Ф. М. Достоевский",
    reading_now_text: "Как только дочитаю — добавлю краткий обзор и, возможно, новую книгу в каталог. Заглядывайте почаще!",
    eco_eyebrow: "Делаем планету чище вместе",
    eco_title: "Эко-советы от Аяны <span class='icon icon-leaf' role='img' aria-label='эко'></span>",
    eco1_title: "Сортируйте макулатуру", eco1_text: "Не выбрасывайте исписанные школьные тетради и коробки вместе с пищевыми отходами. Собирайте их отдельно и сдавайте в пункты приёма сырья — из них создадут новую бумагу!",
    eco2_title: "Пользуйтесь шоперами", eco2_text: "Откажитесь от постоянных покупок пластиковых пакетов. Замените их стильным тканевым шопером или рюкзаком — это снижает количество неразлагаемого пластика.",
    eco3_title: "Дарите книгам вторую жизнь", eco3_text: "Покупка прочитанных книг — бережное отношение к природе. На одну новую книгу тратится древесина и вода. Повторное чтение сохраняет деревья!",
    calc_title: "<span class='icon icon-money' role='img' aria-label='деньги'></span> Финансовая выгода",
    calc_intro: "Давайте наглядно сравним затраты на покупку бумажных книг в обычных книжных магазинах и в нашем книжном круге:",
    calc_th1: "Где приобретаем книгу", calc_th2: "Состояние книги", calc_th3: "Цена за один том",
    calc_row1_a: "Обычные книжные магазины", calc_row1_b: "Абсолютно новая книга",
    calc_row2_a: "BookBloom", calc_row2_b: "Бережно прочитана 1 раз", calc_row2_c: "до 1 500 ₸",
    calc_row3_a: "Ваша чистая выгода", calc_row3_b: "Экономия бюджета", calc_row3_c: "<span class='icon icon-fire' role='img' aria-label='экономия'></span> Вы экономите до 2 300 ₸!",
    calc_footer: "Выбирая книгу у Аяны, вы сохраняете в семейном бюджете значительные средства. Все книги стоят не более 1 500 ₸, а многие — дешевле. Это позволяет сэкономить до 60% по сравнению с покупкой новых книг!",
    calc2_title: "<span class='icon icon-tree' role='img' aria-label='дерево'></span> Интерактивный калькулятор",
    calc2_intro: "Подвигайте ползунок ниже, чтобы мгновенно увидеть вашу финансовую и экологическую пользу:",
    calc2_count: "Планирую приобрести книг:",
    calc2_row1: "Сумма в книжном круге Аяны:", calc2_row2: "Цена тех же книг в магазине:",
    calc2_row3: "Сэкономлено денег:", calc2_row4: "<span class='icon icon-tree' role='img' aria-label='дерево'></span> Спасено деревьев:",
    finder_eyebrow: "Рекомендательный подборщик",
    finder_title: "<span class='icon icon-book' role='img' aria-label='книга'></span> Какую книгу выбрать сегодня?",
    finder_intro: "Ответьте на 3 лёгких вопроса, и наша интерактивная система посоветует идеальное произведение!",
    fq1_q: "1. Какой литературный жанр вам ближе?",
    fq1_a1: "<span class='icon icon-science' role='img' aria-label='наука'></span> Научная фантастика и тайны науки", fq1_a2: "<span class='icon icon-hat' role='img' aria-label='классика'></span> Нестареющая классика и любовные истории",
    fq1_a3: "<span class='icon icon-drama' role='img' aria-label='драма'></span> Остроумная сатира и комедия", fq1_a4: "<span class='icon icon-castle' role='img' aria-label='замок'></span> Фэнтези, магия и приключения",
    fq2_q: "2. Какую эмоциональную атмосферу вы ищете?",
    fq2_a1: "<span class='icon icon-sad' role='img' aria-label='драма'></span> Трогательную драму, заставляющую сопереживать", fq2_a2: "<span class='icon icon-brain' role='img' aria-label='интеллект'></span> Интеллектуальный вызов, побуждающий размышлять",
    fq2_a3: "<span class='icon icon-sun' role='img' aria-label='солнце'></span> Лёгкое, динамичное чтение с юмором", fq2_a4: "<span class='icon icon-wizard' role='img' aria-label='волшебник'></span> Загадочное и волшебное приключение",
    fq3_q: "3. Какой характер главного героя вас привлекает?",
    fq3_a1: "<span class='icon icon-fire' role='img' aria-label='экономия'></span> Бунтарь, бросающий вызов устоям общества", fq3_a2: "<span class='icon icon-coffee' role='img' aria-label='кофе'></span> Глубокий философ, задумчивый романтик",
    fq3_a3: "<span class='icon icon-joker' role='img' aria-label='авантюрист'></span> Весёлый авантюрист, ловкий хитрец", fq3_a4: "<span class='icon icon-lightning' role='img' aria-label='молния'></span> Юный отважный волшебник со шрамом-молнией",
    catalog_title: "Каталог книг Аяны",
    catalog_subtitle: "Все книги до 1 500 ₸ • Отличное состояние",
    genre_all: "<span class='icon icon-book' role='img' aria-label='книга'></span> Все книги", genre_fantasy: "<span class='icon icon-castle' role='img' aria-label='замок'></span> Фэнтези и приключения",
    genre_scifi: "<span class='icon icon-science' role='img' aria-label='наука'></span> Фантастика и антиутопия", genre_drama: "<span class='icon icon-drama' role='img' aria-label='драма'></span> Драма и поэзия",
    genre_satire: "<span class='icon icon-joker' role='img' aria-label='авантюрист'></span> Сатира и комедия", genre_realism: "<span class='icon icon-tree' role='img' aria-label='дерево'></span> Реализм и проза", genre_nonfiction: "<span class='icon icon-bulb' role='img' aria-label='идея'></span> Нон-фикшн",
    search_clear: "Сбросить", no_results: "Книги не найдены <span class='icon icon-think' role='img' aria-label='раздумье'></span> Попробуйте другой поиск!",
    reviews_eyebrow: "Что говорят покупатели", reviews_title: "Отзывы",
    no_reviews: "Пока нет отзывов. Будьте первым, кто оставит отзыв! <span class='icon icon-star' role='img' aria-label='звезда'></span>",
    review_form_title: "Оставить отзыв", review_rating_label: "Ваша оценка:",
    review_name_ph: "Ваше имя", review_text_ph: "Поделитесь своими впечатлениями о книге...",
    review_submit: "Отправить отзыв <span class='icon icon-star' role='img' aria-label='звезда'></span>",
    checklist_eyebrow: "Твой прогресс в чтении", checklist_title: "Чеклист читателя", checklist_books: "книг",
    checklist_intro: "Отмечайте прочитанные вами произведения. Прогресс сохранится автоматически!",
    quiz_eyebrow: "Закрепляем прочитанное в игровой форме",
    quiz_title: "<span class='icon icon-brain' role='img' aria-label='интеллект'></span> Викторины по книгам",
    quiz_intro: "По каждой представленной книге — полноценный тест из 10 вопросов!",
    quiz_select_label: "Выберите произведение, чтобы начать игру:",
    quiz_select_none: "-- Выберите книгу --",
    quiz_next: "Дальше <span class='icon icon-arrowright' role='img' aria-label='далее'></span>", quiz_result_title: "<span class='icon icon-party' role='img' aria-label='поздравление'></span> Тест успешно пройден!",
    quiz_result_score: "Ваш итоговый счёт:", quiz_reset: "<span class='icon icon-refresh' role='img' aria-label='обновить'></span> Начать снова",
    proof_eyebrow: "Подтверждение продаж", proof_title: "Как мы подтверждаем продажи",
    proof1_title: "WhatsApp-чат с покупателем",
    proof1_text: "Каждая продажа оформляется через WhatsApp-переписку. Вы можете запросить скриншот подтверждения заказа у тёти Аяны — Улжан.",
    proof2_title: "Статус «Продано» на сайте",
    proof2_text: "После продажи книги отмечаются как «Продано» на странице каталога. Покупатель видит, какие книги уже нашли новых читателей.",
    proof3_title: "Отзывы покупателей",
    proof3_text: "Каждый покупатель может оставить отзыв с оценкой от 1 до 5 звёзд. Реальные отзывы подтверждают реальность продаж. Счётчик отзывов и проданных книг обновляется только по факту!",
    sales_log_title: "<span class='icon icon-clipboard' role='img' aria-label='список'></span> Журнал подтверждённых продаж",
    sales_log_empty: "Пока продаж не было. Как только книга продастся и продажа подтвердится, здесь появится запись — это отдельное публичное подтверждение того, что покупка была совершена именно через этот сайт.",
    faq_eyebrow: "Часто задаваемые вопросы", faq_title: "Часто задаваемые вопросы (FAQ)",
    faq1_q: "Каково состояние ваших книг?",
    faq1_a: "Большинство книг прочитаны аккуратно, один раз — в отличном состоянии. Некоторые книги из нашей домашней коллекции уже давно хранятся у нас, что отражено в их описании. Состояние каждой книги указано на карточке в каталоге.",
    faq2_q: "Как устроена доставка по Астане и Казахстану?",
    faq2_a: "Для покупателей из Астаны — самовывоз по согласованию или Яндекс-курьер. Для других городов — отправка Казпочтой или СДЭК/DPD в надёжной упаковке.",
    faq3_q: "Каким способом можно оплатить заказ?",
    faq3_a: "Оплата производится быстрым переводом на карту Kaspi Gold тёти Аяны — Сауранбаевой Улжан Сатыбалдиевны. Номер привязан к нашему WhatsApp.",
    faq4_q: "Сколько стоят книги?",
    faq4_a: "Цены разные — от 500 ₸ до 1 500 ₸. Максимальная цена любой книги — 1 500 ₸, но многие стоят дешевле. Точная цена указана на карточке каждой книги в каталоге.",
    faq5_q: "Все ли книги прочитаны Аяной?",
    faq5_a: "Да! Все книги, представленные в каталоге, лично прочитаны Аяной. Она готова обсудить каждую книгу, растолковать сюжет и поделиться впечатлениями — это создаёт замечательный опыт обмена мнениями между читателями!",
    footer_copy: "© 2026 BookBloom. Все права защищены.",
    footer_city: "г. Астана",
    footer_parent: "Родитель-координатор: Сауранбаева Улжан Сатыбалдиевна",
    footer_trusted_qr: "Написать доверенному лицу (Улжан)",
    cart_title: "<span class='icon icon-cart' role='img' aria-label='корзина'></span> Ваша корзина", cart_total: "Итого:",
    cart_checkout: "<span class='icon icon-chat' role='img' aria-label='сообщение'></span> Оформить заказ в WhatsApp", cart_clear: "Очистить корзину",
    cart_empty: "Корзина пока пуста. Добавьте книги из каталога <span class='icon icon-book' role='img' aria-label='книга'></span>",
    details_btn: "Сюжет, цитата и фильм <span class='icon icon-down' role='img' aria-label='вниз'></span>", details_hide: "Скрыть <span class='icon icon-up' role='img' aria-label='вверх'></span>",
    checklist_progress: "Вы прочитали:", condition_read1: "Прочитана 1 раз",
    condition_old: "Из домашней коллекции", sold: "Продано",
    quiz_feedback_select: "Выберите ответ", quiz_correct: "<span class='icon icon-checkgreen' role='img' aria-label='готово'></span> Правильно!", quiz_wrong: "<span class='icon icon-crossred' role='img' aria-label='неверно'></span> Неверно"
  },
  en: {
    logo: "BookBloom",
    nav_about: "About", nav_creator: "Creator", nav_eco: "Eco Tips",
    nav_calc: "Savings", nav_catalog: "Catalog", nav_quiz: "Quizzes", nav_proof: "Sales Proof", nav_faq: "FAQ",
    cart: "Cart",
    hero_eyebrow: "Ayana's Eco Project",
    hero_title: "Books with a <em>Story</em>",
    hero_slogan: "Books with a new story. We save money — we protect forests.",
    hero_text: "I have carefully and lovingly read every single one of these books myself. I am currently studying at Nazarbayev Intellectual School (NIS) in Astana under the International Baccalaureate (IB) program. All books presented here have been personally read by me, and I am ready to discuss each one, explain the plot, and share my impressions after your reading — it will be a wonderful experience of exchanging opinions! Now I am sharing them to protect the nature of Kazakhstan and help others read affordably.",
    hero_whatsapp: "<span class='icon icon-chat' role='img' aria-label='сообщение'></span> Message aunt on WhatsApp (Ulzhan)",
    hero_book1: "Y. Zamyatin — «We»", hero_book2: "Harry Potter and the Philosopher's Stone", hero_book3: "D. Keyes — Flowers for Algernon",
    qr_title: "Order QR Code",
    qr_text: "Scan with your phone camera for quick ordering!",
    stat_visits: "Site Visits", stat_inquiries: "Ordered via Site",
    stat_sold: "Books Sold (Confirmed)", stat_readers: "Happy Readers",
    stat_catalog: "Books in Catalog", stat_trees: "Trees Saved",
    stats_note: "\"Site Visits\" and \"Ordered via Site\" are counted automatically. \"Books Sold\" reflects only manually confirmed sales.",
    about_title: "Mindful Reading — Caring for the Future",
    about_p1: "My name is <strong>Aldibek Ayana Bauyrzhankyzy</strong>. I am a student at NIS in Astana, I passionately love literature, mathematics, biology, and I care deeply about the nature of Kazakhstan.",
    about_p2: "All books in the catalog were read by me personally — most of them exactly once, in excellent condition. Some books from our home collection have been with us for a long time, which is reflected in their description. Each book has its own price — no more than 1,500 tenge, and many cost significantly less. I am ready to discuss each book, explain the plot, and share my thoughts after your reading — exchanging impressions will be a great experience!",
    about_p3: "Having read amazing classic novels and collected all 7 volumes of the <strong>Harry Potter</strong> saga, I decided to give these books a second life. By purchasing them, you help each other save your budget and protect the planet from excessive deforestation.",
    about_contacts: "Ayana's Contacts", about_email: "Email", about_parent: "Parent Coordinator",
    feat1_title: "Environmental Conservation",
    feat1_text: "Reusing books reduces CO₂ emissions from paper production and protects Kazakhstan's forests from logging.",
    feat2_title: "Affordable Prices",
    feat2_text: "Each book costs no more than 1,500 ₸ — significantly cheaper than new books in bookstores. Save up to 60% of your budget!",
    feat3_title: "Excellent Quality",
    feat3_text: "Most books have been read carefully, once. Pages are clean, covers in excellent condition. Some books are from our long-time home collection.",
    feat4_title: "Personal Discussion",
    feat4_text: "All books have been personally read by Ayana. She is ready to discuss each book, explain the plot, and share impressions — this creates a wonderful experience of exchanging opinions!",
    creator_eyebrow: "Meet the founder of the book circle",
    creator_title: "About the Project Creator",
    creator_status: "NIS Student, Astana",
    bio_p1: "Hello! I am happy to welcome you to my book circle. I was born on <strong>June 9, 2011</strong> in the beautiful city of <strong>Almaty</strong>. Later, my life was connected with many beautiful corners of Kazakhstan, giving me loyal friends, mental flexibility, and a drive for learning.",
    bio_edu_title: "<span class='icon icon-map' role='img' aria-label='карта'></span> Educational Journey:",
    bio_edu1: "<strong>Primary school</strong> — lived in the southern city of <strong>Taraz</strong> and gained my first knowledge at the famous <strong>School-Gymnasium No. 40</strong>, one of the best schools in the Zhambyl region.",
    bio_edu2: "<strong>Middle school</strong> — after our family moved to Astana, I studied at the modern <strong>School-Gymnasium No. 72</strong>.",
    bio_edu3: "<strong>High school</strong> — after successfully passing entrance exams, I entered the prestigious <strong>Nazarbayev Intellectual School (NIS) of Astana</strong> with a broad-profile education and an IB diploma.",
    bio_p2: "My favorite subjects at school are <strong>mathematics and biology</strong>. I want to connect my future with science and prepared for international exams <strong>SAT</strong> and <strong>IELTS</strong>.",
    bio_p3: "This summer I read four wonderful books: <strong>«We» by Yevgeny Zamyatin</strong>, <strong>«The Catcher in the Rye» by J. D. Salinger</strong>, <strong>«Fathers and Sons» by Ivan Turgenev</strong>, and <strong>«A Hero of Our Time» by Mikhail Lermontov</strong>. The books I read include classics recommended by NIS teachers for extracurricular reading, children's literature, and modern novels. They all join my book circle!",
    bio_hobbies_title: "<span class='icon icon-sparkle' role='img' aria-label='звёздочка'></span> My Interests and Hobbies:",
    hobby1_title: "Chess", hobby1_text: "I took professional chess courses for two years, developing tactical thinking.",
    hobby2_title: "Drawing", hobby2_text: "I love drawing in silence after intense studying at NIS.",
    hobby3_title: "Swimming", hobby3_text: "Sports swimming training hardened my character and gave me energy.",
    hobby4_title: "Eco-activism", hobby4_text: "I am convinced that even a small deed can save the planet. My project is a real step toward saving trees.",
    trusted_person_title: "Project's trusted representative",
    trusted_person_text: "Ayana's trusted representative is her aunt — <strong>Saranbayeva Ulzhan Satybaldiyevna</strong>. Her phone number, contact details, and a direct WhatsApp link are shown at the end of this site — that's also where you can order a book or clarify any information you need.",
    reading_now: "Currently Reading",
    reading_now_book: "«The Idiot» — F. M. Dostoevsky",
    reading_now_text: "As soon as I finish reading, I'll add a brief review and maybe a new book to the catalog. Check back often!",
    eco_eyebrow: "Let's make the planet cleaner together",
    eco_title: "Eco Tips from Ayana <span class='icon icon-leaf' role='img' aria-label='эко'></span>",
    eco1_title: "Sort Paper Waste", eco1_text: "Don't throw away used school notebooks and boxes with food waste. Collect them separately and take them to recycling centers — they'll make new paper!",
    eco2_title: "Use Shopping Bags", eco2_text: "Stop constantly buying plastic bags. Replace them with a stylish cloth shopper or backpack — this reduces non-degradable plastic.",
    eco3_title: "Give Books a Second Life", eco3_text: "Buying pre-read books is caring for nature. Producing one new book requires wood and water. Re-reading saves trees!",
    calc_title: "<span class='icon icon-money' role='img' aria-label='деньги'></span> Financial Savings",
    calc_intro: "Let's visually compare the costs of buying paper books at regular bookstores versus our book circle:",
    calc_th1: "Where You Buy", calc_th2: "Book Condition", calc_th3: "Price Per Book",
    calc_row1_a: "Regular bookstores", calc_row1_b: "Brand new book",
    calc_row2_a: "BookBloom", calc_row2_b: "Gently read once", calc_row2_c: "up to 1,500 ₸",
    calc_row3_a: "Your Net Savings", calc_row3_b: "Budget Savings", calc_row3_c: "<span class='icon icon-fire' role='img' aria-label='экономия'></span> You save up to 2,300 ₸!",
    calc_footer: "By choosing a book from Ayana, you save significant money for your family budget. All books cost no more than 1,500 ₸, and many are cheaper. This allows you to save up to 60% compared to buying new books!",
    calc2_title: "<span class='icon icon-tree' role='img' aria-label='дерево'></span> Interactive Calculator",
    calc2_intro: "Move the slider below to instantly see your financial and environmental benefits:",
    calc2_count: "Planning to buy books:",
    calc2_row1: "Total at Ayana's book circle:", calc2_row2: "Same books at a store:",
    calc2_row3: "Money saved:", calc2_row4: "<span class='icon icon-tree' role='img' aria-label='дерево'></span> Trees saved:",
    finder_eyebrow: "Recommendation Finder",
    finder_title: "<span class='icon icon-book' role='img' aria-label='книга'></span> Which Book Should You Choose Today?",
    finder_intro: "Answer 3 easy questions and our interactive system will recommend the perfect book!",
    fq1_q: "1. Which literary genre appeals to you most?",
    fq1_a1: "<span class='icon icon-science' role='img' aria-label='наука'></span> Science fiction and mysteries of science", fq1_a2: "<span class='icon icon-hat' role='img' aria-label='классика'></span> Timeless classics and love stories",
    fq1_a3: "<span class='icon icon-drama' role='img' aria-label='драма'></span> Witty satire and comedy", fq1_a4: "<span class='icon icon-castle' role='img' aria-label='замок'></span> Fantasy, magic, and adventure",
    fq2_q: "2. What emotional atmosphere are you looking for?",
    fq2_a1: "<span class='icon icon-sad' role='img' aria-label='драма'></span> Touching drama that makes you empathize", fq2_a2: "<span class='icon icon-brain' role='img' aria-label='интеллект'></span> Intellectual challenge that makes you think",
    fq2_a3: "<span class='icon icon-sun' role='img' aria-label='солнце'></span> Light, dynamic reading with humor", fq2_a4: "<span class='icon icon-wizard' role='img' aria-label='волшебник'></span> Mysterious and magical adventure",
    fq3_q: "3. What kind of protagonist attracts you?",
    fq3_a1: "<span class='icon icon-fire' role='img' aria-label='экономия'></span> A rebel challenging societal norms", fq3_a2: "<span class='icon icon-coffee' role='img' aria-label='кофе'></span> A deep philosopher, thoughtful romantic",
    fq3_a3: "<span class='icon icon-joker' role='img' aria-label='авантюрист'></span> A cheerful adventurer, clever trickster", fq3_a4: "<span class='icon icon-lightning' role='img' aria-label='молния'></span> A brave young wizard with a lightning scar",
    catalog_title: "Ayana's Book Catalog",
    catalog_subtitle: "All books up to 1,500 ₸ • Excellent condition",
    genre_all: "<span class='icon icon-book' role='img' aria-label='книга'></span> All Books", genre_fantasy: "<span class='icon icon-castle' role='img' aria-label='замок'></span> Fantasy & Adventure",
    genre_scifi: "<span class='icon icon-science' role='img' aria-label='наука'></span> Sci-Fi & Dystopia", genre_drama: "<span class='icon icon-drama' role='img' aria-label='драма'></span> Drama & Poetry",
    genre_satire: "<span class='icon icon-joker' role='img' aria-label='авантюрист'></span> Satire & Comedy", genre_realism: "<span class='icon icon-tree' role='img' aria-label='дерево'></span> Realism & Prose", genre_nonfiction: "<span class='icon icon-bulb' role='img' aria-label='идея'></span> Non-Fiction",
    search_clear: "Reset", no_results: "No books found <span class='icon icon-think' role='img' aria-label='раздумье'></span> Try a different search!",
    reviews_eyebrow: "What Buyers Say", reviews_title: "Reviews",
    no_reviews: "No reviews yet. Be the first to leave a review! <span class='icon icon-star' role='img' aria-label='звезда'></span>",
    review_form_title: "Leave a Review", review_rating_label: "Your Rating:",
    review_name_ph: "Your name", review_text_ph: "Share your impressions about the book...",
    review_submit: "Submit Review <span class='icon icon-star' role='img' aria-label='звезда'></span>",
    checklist_eyebrow: "Your Reading Progress", checklist_title: "Reader's Checklist", checklist_books: "books",
    checklist_intro: "Check off the books you've read. Your progress saves automatically!",
    quiz_eyebrow: "Reinforce What You've Read in a Fun Way",
    quiz_title: "<span class='icon icon-brain' role='img' aria-label='интеллект'></span> Book Quizzes",
    quiz_intro: "Each book comes with a full 10-question quiz!",
    quiz_select_label: "Select a book to start the game:",
    quiz_select_none: "-- Select a book --",
    quiz_next: "Next <span class='icon icon-arrowright' role='img' aria-label='далее'></span>", quiz_result_title: "<span class='icon icon-party' role='img' aria-label='поздравление'></span> Quiz Completed Successfully!",
    quiz_result_score: "Your final score:", quiz_reset: "<span class='icon icon-refresh' role='img' aria-label='обновить'></span> Start Over",
    proof_eyebrow: "Proof of Sales", proof_title: "How We Verify Sales",
    proof1_title: "WhatsApp Chat with Buyer",
    proof1_text: "Every sale is processed through WhatsApp correspondence. You can request an order confirmation screenshot from Ayana's aunt — Ulzhan.",
    proof2_title: "«Sold» Status on the Website",
    proof2_text: "After a sale, books are marked as «Sold» on the catalog page. Buyers can see which books have already found new readers.",
    proof3_title: "Buyer Reviews",
    proof3_text: "Every buyer can leave a review with a rating from 1 to 5 stars. Real reviews confirm the reality of sales. The review and sold-book counters update only based on actual sales!",
    sales_log_title: "<span class='icon icon-clipboard' role='img' aria-label='список'></span> Confirmed Sales Log",
    sales_log_empty: "No sales yet. As soon as a book is sold and confirmed, an entry will appear here — a separate public confirmation that the purchase was made through this site.",
    faq_eyebrow: "Frequently Asked Questions", faq_title: "Frequently Asked Questions (FAQ)",
    faq1_q: "What is the condition of your books?",
    faq1_a: "Most books have been read carefully, once — in excellent condition. Some books from our home collection have been with us for a long time, which is reflected in their description. The condition of each book is indicated on its catalog card.",
    faq2_q: "How does delivery work in Astana and Kazakhstan?",
    faq2_a: "For Astana buyers — pickup by arrangement or Yandex courier. For other cities — shipping via Kazpost or CDEK/DPD in secure packaging.",
    faq3_q: "How can I pay for my order?",
    faq3_a: "Payment is made by quick transfer to the Kaspi Gold card of Ayana's aunt — Sauranbayeva Ulzhan Satybaldievna. The number is linked to our WhatsApp.",
    faq4_q: "How much do the books cost?",
    faq4_a: "Prices vary — from 500 ₸ to 1,500 ₸. The maximum price for any book is 1,500 ₸, but many are cheaper. The exact price is shown on each book's catalog card.",
    faq5_q: "Has Ayana personally read all the books?",
    faq5_a: "Yes! All books in the catalog have been personally read by Ayana. She is ready to discuss each book, explain the plot, and share impressions — this creates a wonderful experience of exchanging opinions between readers!",
    footer_copy: "© 2026 BookBloom. All rights reserved.",
    footer_city: "Astana",
    footer_parent: "Parent Coordinator: Sauranbayeva Ulzhan Satybaldievna",
    footer_trusted_qr: "Message the trusted representative (Ulzhan)",
    cart_title: "<span class='icon icon-cart' role='img' aria-label='корзина'></span> Your Cart", cart_total: "Total:",
    cart_checkout: "<span class='icon icon-chat' role='img' aria-label='сообщение'></span> Checkout via WhatsApp", cart_clear: "Clear Cart",
    cart_empty: "Your cart is empty. Add books from the catalog <span class='icon icon-book' role='img' aria-label='книга'></span>",
    details_btn: "Plot, Quote & Movie <span class='icon icon-down' role='img' aria-label='вниз'></span>", details_hide: "Hide <span class='icon icon-up' role='img' aria-label='вверх'></span>",
    checklist_progress: "You've read:", condition_read1: "Read once",
    condition_old: "From home collection", sold: "Sold",
    quiz_feedback_select: "Select an answer", quiz_correct: "<span class='icon icon-checkgreen' role='img' aria-label='готово'></span> Correct!", quiz_wrong: "<span class='icon icon-crossred' role='img' aria-label='неверно'></span> Wrong"
  }
};

// ============ АВТОМАТИЧЕСКАЯ СТАТИСТИКА САЙТА (ПОСЕЩЕНИЯ И ОБРАЩЕНИЯ) ============
// Считается на сервере сайта (Netlify), поэтому число одинаково у всех
// посетителей на любых устройствах. Если сервер недоступен — показывается "—".
async function statsApi(method, body) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch('/api/stats', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

function showSiteStats(data) {
  const v = document.getElementById('stat-visits');
  const q = document.getElementById('stat-inquiries');
  if (v) v.textContent = data ? data.visits : '—';
  if (q) q.textContent = data ? data.inquiries : '—';
}

// Один визит считается один раз за сессию (обновление страницы не накручивает счётчик).
async function loadSiteStats() {
  let already = false;
  try { already = !!sessionStorage.getItem('bookbloom_visit_counted'); } catch (e) {}
  if (!already) {
    try { sessionStorage.setItem('bookbloom_visit_counted', '1'); } catch (e) {}
    showSiteStats(await statsApi('POST', { type: 'visit' }));
  } else {
    showSiteStats(await statsApi('GET'));
  }
}
function trackVisit() { /* учёт визита выполняется в loadSiteStats() */ }

// Нажатие "Оформить заказ в WhatsApp" — признак обращения за покупкой.
// Саму оплату по-прежнему подтверждает Улжан вручную (журнал продаж ниже).
async function trackInquiry() {
  const data = await statsApi('POST', { type: 'inquiry' });
  if (data) showSiteStats(data);
}

// ============ SALES LOG ============
// Это и есть ответ на вопрос "куда вносить отчёт о продажах" —
// публичное, видимое всем посетителям подтверждение того, что книга
// куплена именно через этот сайт (отдельно от статуса "Продано" в
// каталоге). Как подтвердить продажу:
// 1) Отметьте книгу как sold: true в массиве books выше.
// 2) Добавьте сюда новую запись по образцу (не забудьте запятую):
//    { date: "03.09.2026", book_ru: "«Мы» — Е. Замятин", book_en: "«We» — Y. Zamyatin", note_ru: "Подтверждено по WhatsApp", note_en: "Confirmed via WhatsApp" },
// Самые новые записи показывайте сверху списка.
const salesLog = [
  // { date: "03.09.2026", book_ru: "«Мы» — Е. Замятин", book_en: "«We» — Y. Zamyatin", note_ru: "Подтверждено по WhatsApp", note_en: "Confirmed via WhatsApp" },
];

function renderSalesLog() {
  const el = document.getElementById('sales-log-content');
  if (!el) return;
  if (salesLog.length === 0) {
    el.innerHTML = `<div class="sales-log-empty">${i18n[currentLang].sales_log_empty}</div>`;
    return;
  }
  el.innerHTML = `<ul class="sales-log-list">` + salesLog.map(s => {
    const book = currentLang === 'ru' ? s.book_ru : s.book_en;
    const note = currentLang === 'ru' ? s.note_ru : s.note_en;
    return `<li><span><span class='icon icon-checkgreen' role='img' aria-label='готово'></span> <strong>${book}</strong> — ${note}</span><span class="sl-date">${s.date}</span></li>`;
  }).join('') + `</ul>`;
}

// ============ BOOK DATA ============
// Чтобы отметить книгу проданной: найдите нужную книгу ниже и поменяйте
// у неё "sold: false" на "sold: true", затем сохраните и заново
// загрузите (переопубликуйте) файл сайта. На каталоге книга сразу
// покажется с плашкой «Продано», а кнопка покупки станет недоступна.
const books = [
  { id: 1, title_ru: "«Мы»", title_en: "«We»", author_ru: "Евгений Замятин", author_en: "Yevgeny Zamyatin",
    genre: "sci-fi", price: 1500, condition: "read1", sold: false,
    cover_class: "blue",
    summary_ru: "Культовая антиутопия о жёстком будущем Единого Государства, где люди лишены имён и личной свободы, у них есть только номера.",
    summary_en: "A cult dystopia about the harsh future of the One State, where people are deprived of names and personal freedom — they only have numbers.",
    quote_ru: "«Единственный способ избавить человека от преступления — это избавить его от свободы.»",
    quote_en: "“The only way to rid a man of crime is to rid him of freedom.”",
    movie_ru: "Немецкий фильм «Wir» (1982), реж. Войтех Ясны; российская экранизация «Мы» (2026), реж. Г. Дульян.",
    movie_en: "German film «Wir» (1982), dir. Vojtěch Jasný; Russian adaptation «We» (2026), dir. G. Dulyan." },

  { id: 2, title_ru: "«Над пропастью во ржи»", title_en: "«The Catcher in the Rye»", author_ru: "Дж. Д. Сэлинджер", author_en: "J. D. Salinger",
    genre: "realism", price: 1500, condition: "read1", sold: false,
    cover_class: "red",
    summary_ru: "История подростка Холдена Колфилда, сбежавшего из школы и блуждающего по Нью-Йорку в поисках подлинности в мире фальши.",
    summary_en: "The story of teenager Holden Caulfield who runs away from school and wanders New York searching for authenticity in a world of phoniness.",
    quote_ru: "«Я стою на краю пропасти, во ржи, и ловлю детей, чтобы они не упали.»",
    quote_en: "“I keep picturing all these little kids playing some game in this big field of rye and I'm standing on the edge of some crazy cliff.”",
    movie_ru: "Прямых экранизаций нет — Сэлинджер запрещал. Но тематически близок фильм «Найди меня» (2015).",
    movie_en: "No direct adaptations — Salinger forbade them. But thematically similar: «Réparer les vivants» (2015)." },

  { id: 3, title_ru: "«Отцы и дети»", title_en: "«Fathers and Sons»", author_ru: "Иван Тургенев", author_en: "Ivan Turgenev",
    genre: "realism", price: 1500, condition: "read1", sold: false,
    cover_class: "green",
    summary_ru: "Противостояние консервативного дворянского поколения Кирсановых и молодого нигилиста Евгения Базарова, отвергающего любые авторитеты и романтику.",
    summary_en: "The conflict between the conservative noble generation of the Kirsanovs and the young nihilist Evgeny Bazarov, who rejects all authority and romance.",
    quote_ru: "«Природа не храм, а мастерская, и человек в ней работник.»",
    quote_en: "“Nature is not a temple but a workshop, and man is its worker.”",
    movie_ru: "Многосерийный фильм «Отцы и дети» (2008), реж. Авдотья Смирнова, с Александром Устюговым в роли Базарова.",
    movie_en: "TV series «Fathers and Sons» (2008), dir. Avdotya Smirnova, starring Alexander Ustyugov as Bazarov." },

  { id: 4, title_ru: "«Герой нашего времени»", title_en: "«A Hero of Our Time»", author_ru: "Михаил Лермонтов", author_en: "Mikhail Lermontov",
    genre: "realism", price: 1500, condition: "read1", sold: false,
    cover_class: "blue",
    summary_ru: "Психологический портрет Григория Печорина — умного, но разочарованного офицера, чьи поступки разрушительны для него самого и окружающих.",
    summary_en: "A psychological portrait of Grigory Pechorin — a brilliant but disillusioned officer whose actions are destructive to himself and those around him.",
    quote_ru: "«Быть для кого-то причиной страданий и радостей, не имея на то никакого положительного права — разве не это самая горькая трагедия?»",
    quote_en: "“To be for someone the cause of suffering and joy, without any positive right to do so — is this not the bitterest tragedy?”",
    movie_ru: "Фильм «Герой нашего времени» (2015), реж. Александр Котт.",
    movie_en: "Film «A Hero of Our Time» (2015), dir. Alexander Kott." },

  { id: 5, title_ru: "«Левша»", title_en: "«The Steel Flea»", author_ru: "Николай Лесков", author_en: "Nikolai Leskov",
    genre: "satire", price: 1500, condition: "read1", sold: false,
    cover_class: "orange",
    summary_ru: "Сказ о тульском мастере Левше, который подковал стальную блоху, — гимн русскому таланту и укор равнодушию власти к народным умельцам.",
    summary_en: "A tale about the Tula craftsman Levsha who shod a steel flea — a hymn to Russian talent and a reproach to the government's indifference to folk artisans.",
    quote_ru: "«У нас на это нет умения, но зато наши ружья не чистят снаружи кирпичом.»",
    quote_en: "“We don't have that skill, but our rifles are never cleaned with a brick on the outside.”",
    movie_ru: "Мультфильм «Сказ о тульском косом Левше и о стальной блохе» (1964).",
    movie_en: "Animated film «The Tale of the Cross-Eyed Lefty from Tula and the Steel Flea» (1964)." },

  { id: 6, title_ru: "«Повелитель мух»", title_en: "«Lord of the Flies»", author_ru: "Уильям Голдинг", author_en: "William Golding",
    genre: "drama", price: 1200, condition: "read1", sold: false,
    cover_class: "green",
    summary_ru: "Группа мальчиков, оказавшихся на необитаемом острове, постепенно деградирует от цивилизованных детей к дикому племени, поклоняющемуся «Повелителю мух».",
    summary_en: "A group of boys stranded on an uninhabited island gradually devolve from civilized children into a savage tribe worshipping the «Lord of the Flies».",
    quote_ru: "«Мы всё стали дикарями, во всяком случае, потенциально.»",
    quote_en: "“We've all become savages, at least potentially.”",
    movie_ru: "Фильм «Повелитель мух» (1963), реж. Питер Брук; ремейк 1990 года.",
    movie_en: "Film «Lord of the Flies» (1963), dir. Peter Brook; 1990 remake." },

  { id: 7, title_ru: "«Тарас Бульба»", title_en: "«Taras Bulba»", author_ru: "Николай Гоголь", author_en: "Nikolai Gogol",
    genre: "realism", price: 1500, condition: "read1", sold: false,
    cover_class: "red",
    summary_ru: "Эпическая повесть о казацком атамане Тарасе Бульбе, его сыновьях Остапе и Андрии, и трагическом выборе между долгом и любовью.",
    summary_en: "An epic novella about Cossack leader Taras Bulba, his sons Ostap and Andrii, and the tragic choice between duty and love.",
    quote_ru: "«Нет уз светлее товарищества!»",
    quote_en: "“There are no bonds brighter than brotherhood!”",
    movie_ru: "Фильм «Тарас Бульба» (2009), реж. Владимир Бортко.",
    movie_en: "Film «Taras Bulba» (2009), dir. Vladimir Bortko." },

  { id: 8, title_ru: "«Повелитель драконов»", title_en: "«Dragon Masters»", author_ru: "Трейси Уэст", author_en: "Tracey West",
    genre: "fantasy", price: 500, condition: "read1", sold: false,
    cover_class: "magic-blue",
    summary_ru: "Детская серия о юном Дрейке, избранном чтобы стать повелителем драконов в королевстве. Увлекательные приключения для юных читателей.",
    summary_en: "A children's series about young Drake, chosen to become a dragon master in the kingdom. Exciting adventures for young readers.",
    quote_ru: "«Каждый дракон уникален, и каждый повелитель должен найти свой путь.»",
    quote_en: "“Every dragon is unique, and every master must find their own path.”",
    movie_ru: "Экранизаций нет, но есть аудиокниги.",
    movie_en: "No adaptations, but audiobooks are available." },

  { id: 9, title_ru: "«Ревизор»", title_en: "«The Government Inspector»", author_ru: "Николай Гоголь", author_en: "Nikolai Gogol",
    genre: "satire", price: 800, condition: "old", sold: false,
    cover_class: "orange",
    summary_ru: "Сатирическая комедия о чиновниках глухого уездного городка, принявших мелкого столичного щеголя за важного инспектора. Книга давно хранится в домашней коллекции.",
    summary_en: "A satirical comedy about officials of a remote provincial town who mistake a petty dandy for an important inspector. This book has been in our home collection for a long time.",
    quote_ru: "«Чему смеётесь? Над собою смеётесь!»",
    quote_en: "“What are you laughing at? You are laughing at yourselves!”",
    movie_ru: "Фильм «Инкогнито из Петербурга» (1977), реж. Леонид Гайдай.",
    movie_en: "Film «The Incognito from Petersburg» (1977), dir. Leonid Gaidai." },

  { id: 10, title_ru: "«Атомные привычки»", title_en: "«Atomic Habits»", author_ru: "Джеймс Клир", author_en: "James Clear",
    genre: "nonfiction", price: 1500, condition: "read1", sold: false,
    cover_class: "yellow",
    summary_ru: "Практическое руководство о том, как маленькие изменения приводят к выдающимся результатам. Метод формирования полезных привычек и избавления от вредных.",
    summary_en: "A practical guide on how small changes lead to remarkable results. A method for building good habits and breaking bad ones.",
    quote_ru: "«Вы не поднимаетесь до уровня своих целей, вы падаете до уровня своих систем.»",
    quote_en: "“You do not rise to the level of your goals. You fall to the level of your systems.”",
    movie_ru: "Экранизаций нет — это нон-фикшн книга.",
    movie_en: "No adaptations — this is a non-fiction book." },

  { id: 11, title_ru: "«Цветы для Элджернона»", title_en: "«Flowers for Algernon»", author_ru: "Дэниэл Киз", author_en: "Daniel Keyes",
    genre: "sci-fi", price: 1200, condition: "read1", sold: false,
    cover_class: "purple",
    summary_ru: "Трогательный и глубокий роман в виде дневников Чарли Гордона — человека с умственной отсталостью, согласившегося на инновационную хирургию интеллекта.",
    summary_en: "A touching and profound novel in the form of diary entries by Charlie Gordon — a man with intellectual disability who undergoes an experimental intelligence surgery.",
    quote_ru: "«Как странно, что люди искренне верят, будто ум делает человека счастливым.»",
    quote_en: "“How strange it is that people of honest feelings and sincerity seem to believe that intelligence makes a person happy.”",
    movie_ru: "Фильм «Чарли» (1968), реж. Ральф Нельсон.",
    movie_en: "Film «Charly» (1968), dir. Ralph Nelson." },

  { id: 12, title_ru: "«Евгений Онегин»", title_en: "«Eugene Onegin»", author_ru: "Александр Пушкин", author_en: "Alexander Pushkin",
    genre: "realism", price: 1000, condition: "read1", sold: false,
    cover_class: "blue",
    summary_ru: "Энциклопедия русской жизни — повествование о драме неразделённой любви Онегина и деревенской мечтательницы Татьяны Лариной.",
    summary_en: "An encyclopedia of Russian life — the story of the unrequited love of Onegin and the provincial dreamer Tatyana Larina.",
    quote_ru: "«Привычка свыше нам дана — замена счастию она.»",
    quote_en: "“Habit is bestowed upon us from above — it is a substitute for happiness.”",
    movie_ru: "Опера «Евгений Онегин» Чайковского; фильм «Онегин» (1999), реж. Марта Файнс.",
    movie_en: "Tchaikovsky's opera «Eugene Onegin»; film «Onegin» (1999), dir. Martha Fiennes." },

  { id: 13, title_ru: "«Не отпускай меня» (билингва, на англ.)", title_en: "«Never Let Me Go» (bilingual, in English)", author_ru: "Кадзуо Исигуро", author_en: "Kazuo Ishiguro",
    genre: "sci-fi", price: 1500, condition: "read1", sold: false,
    cover_class: "magic-blue",
    summary_ru: "Трогательный роман о трёх друзьях, выросших в интернате, которые постепенно узнают страшную правду о своём предназначении. Билингвальное издание на английском языке.",
    summary_en: "A poignant novel about three friends who grow up at a boarding school and gradually learn the terrible truth about their purpose. Bilingual edition in English.",
    quote_ru: "«Мы все должны принимать то, что нам суждено.»",
    quote_en: "“We all complete. Maybe none of us really understand what we've lived through, or feel we've had enough time.”",
    movie_ru: "Фильм «Не отпускай меня» (2010), реж. Марк Романек, с Кэри Маллиган и Эндрю Гарфилдом.",
    movie_en: "Film «Never Let Me Go» (2010), dir. Mark Romanek, starring Carey Mulligan and Andrew Garfield." },

  { id: 14, title_ru: "«Капитанская дочка»", title_en: "«The Captain's Daughter»", author_ru: "Александр Пушкин", author_en: "Alexander Pushkin",
    genre: "realism", price: 1200, condition: "read1", sold: false,
    cover_class: "green",
    summary_ru: "Историческая повесть о любви молодого офицера Гринёва и Маши Мироновой на фоне пугачёвского восстания — о чести, верности и милосердии.",
    summary_en: "A historical novella about the love of young officer Grinev and Masha Mironova against the backdrop of Pugachev's rebellion — about honor, loyalty, and mercy.",
    quote_ru: "«Береги честь смолоду.»",
    quote_en: "“Take care of your honor from your youth.”",
    movie_ru: "Фильм «Русский бунт» (2000), реж. Александр Прошкин.",
    movie_en: "Film «The Russian Riot» (2000), dir. Alexander Proshkin." },

  { id: 15, title_ru: "«Мёртвые души»", title_en: "«Dead Souls»", author_ru: "Николай Гоголь", author_en: "Nikolai Gogol",
    genre: "satire", price: 1000, condition: "read1", sold: false,
    cover_class: "orange",
    summary_ru: "Приключения авантюриста Павла Ивановича Чичикова, путешествующего по русским поместьям с целью скупки списков умерших крестьян.",
    summary_en: "The adventures of the swindler Pavel Ivanovich Chichikov, traveling through Russian estates to buy up lists of deceased serfs.",
    quote_ru: "«Русь, Русь! вижу тебя, из моего чудного, прекрасного далека тебя вижу.»",
    quote_en: "“Rus, Rus! I see you, from my wondrous, beautiful faraway I see you.”",
    movie_ru: "Фильм «Мёртвые души» (1984), реж. Михаил Швейцер.",
    movie_en: "Film «Dead Souls» (1984), dir. Mikhail Shvejtser." },

  { id: 16, title_ru: "«Горе от ума»", title_en: "«Woe from Wit»", author_ru: "Александр Грибоедов", author_en: "Alexander Griboyedov",
    genre: "satire", price: 1200, condition: "read1", sold: false,
    cover_class: "yellow",
    summary_ru: "Острая социальная сатира о противостоянии искреннего бунтаря-интеллигента Чацкого лицемерному фамусовскому свету.",
    summary_en: "A sharp social satire about the confrontation between the sincere rebel-intellectual Chatsky and the hypocritical Famusov society.",
    quote_ru: "«Служить бы рад — прислуживаться тошно.»",
    quote_en: "“I'd be glad to serve, but being subservient is sickening.”",
    movie_ru: "Спектакль «Горе от ума» (1962), реж. Владимира Немировича-Данченко.",
    movie_en: "Theatrical production «Woe from Wit» (1962)." },

  { id: 17, title_ru: "«Недоросль»", title_en: "«The Minor»", author_ru: "Денис Фонвизин", author_en: "Denis Fonvizin",
    genre: "satire", price: 1300, condition: "read1", sold: false,
    cover_class: "red",
    summary_ru: "Классическая комедия о невежественном Митрофанушке и его грубой матери Простаковой — сатира на дурное воспитание и невежество дворян.",
    summary_en: "A classic comedy about the ignorant Mitrofanushka and his coarse mother Prostakova — a satire on bad upbringing and noble ignorance.",
    quote_ru: "«Не хочу учиться, хочу жениться.»",
    quote_en: "“I don't want to study, I want to get married.”",
    movie_ru: "Спектакль «Недоросль» (1976), реж. Марк Захаров.",
    movie_en: "Theatrical production «The Minor» (1976), dir. Mark Zakharov." },

  { id: 18, title_ru: "«Портрет Дориана Грея»", title_en: "«The Picture of Dorian Gray»", author_ru: "Оскар Уайльд", author_en: "Oscar Wilde",
    genre: "drama", price: 1500, condition: "read1", sold: false,
    cover_class: "purple",
    summary_ru: "Философский роман о молодом красавце Дориане Грея, чей портрет стареет и искажается вместо него, пока он предаётся порокам.",
    summary_en: "A philosophical novel about the young beauty Dorian Gray, whose portrait ages and distorts instead of him while he indulges in vice.",
    quote_ru: "«Есть лишь одна вещь в мире хуже, чем разговоры о себе — это молчание о себе.»",
    quote_en: "“The only thing worse than being talked about is not being talked about.”",
    movie_ru: "Фильм «Портрет Дориана Грея» (1945), реж. Альберт Левин.",
    movie_en: "Film «The Picture of Dorian Gray» (1945), dir. Albert Lewin." },

  { id: 19, title_ru: "«Дети подземелья»", title_en: "«The Children of the Underground»", author_ru: "Владимир Короленко", author_en: "Vladimir Korolenko",
    genre: "drama", price: 800, condition: "read1", sold: false,
    cover_class: "blue",
    summary_ru: "Трогательная повесть о мальчике из обеспеченной семьи, который подружился с детьми-беспризорниками, живущими в подземелье. О сострадании и социальном неравенстве.",
    summary_en: "A touching novella about a boy from a well-off family who befriends homeless children living underground. About compassion and social inequality.",
    quote_ru: "«Человечность — вот что должно быть первым делом.»",
    quote_en: "“Humanity — that should come first.”",
    movie_ru: "Фильм «Дети подземелья» (1915).",
    movie_en: "Film «The Children of the Underground» (1915)." },

  { id: 20, title_ru: "«Приключения Алисы в Стране чудес»", title_en: "«Alice's Adventures in Wonderland»", author_ru: "Льюис Кэрролл", author_en: "Lewis Carroll",
    genre: "fantasy", price: 600, condition: "read1", sold: false,
    cover_class: "magic-blue",
    summary_ru: "Классическая детская сказка о девочке Алисе, провалившейся в кроличью нору в fantastical мир Страны чудес, где всё наоборот и логика абсурдна.",
    summary_en: "A classic children's tale about a girl named Alice who falls down a rabbit hole into a fantastical Wonderland where everything is upside down and logic is absurd.",
    quote_ru: "«Чем больше я читаю, тем больше я знаю. Чем больше я знаю, тем больше мест я смогу посетить.»",
    quote_en: "“The more I read, the more I know. The more I know, the more places I'll go.”",
    movie_ru: "Фильм «Алиса в Стране чудес» (2010), реж. Тим Бёртон.",
    movie_en: "Film «Alice in Wonderland» (2010), dir. Tim Burton." },

  { id: 21, title_ru: "«Мцыри», поэмы и стихотворения", title_en: "«Mtsyri», Poems and Verse", author_ru: "Михаил Лермонтов", author_en: "Mikhail Lermontov",
    genre: "drama", price: 1000, condition: "read1", sold: false,
    cover_class: "green",
    summary_ru: "Поэма о юном послушнике Мцыри, бежавшем из монастыря, чтобы увидеть родной Кавказ. Сборник включает лучшие стихи и поэмы Лермонтова.",
    summary_en: "A poem about the young novice Mtsyri who escapes from a monastery to see his native Caucasus. The collection includes Lermontov's best poems and verse.",
    quote_ru: "«Я мало жил, и жил в плену. Таких две жизни за одну, но только полную тревог, я променял бы, если б мог.»",
    quote_en: "“I lived but little, and in captivity. Two such lives for one — but full of troubles — I would trade, if I could.”",
    movie_ru: "Экранизация «Мцыри» в постановке Тбилисского театра.",
    movie_en: "Adaptation of «Mtsyri» by the Tbilisi Theater." },

  { id: 22, title_ru: "«Воскресенье», рассказы", title_en: "«Resurrection», Stories", author_ru: "Лев Толстой", author_en: "Leo Tolstoy",
    genre: "realism", price: 600, condition: "old", sold: false,
    cover_class: "orange",
    summary_ru: "Роман о раскаянии дворянина Нехлюдова перед Катюшей Масловой и сборник рассказов. Книга давно хранится в домашней коллекции.",
    summary_en: "A novel about the nobleman Nekhlyudov's repentance before Katyusha Maslova and a collection of short stories. This book has been in our home collection for a long time.",
    quote_ru: "«Каждый из нас должен стараться быть лучше себя самого.»",
    quote_en: "“Each of us must try to be better than ourselves.”",
    movie_ru: "Фильм «Воскресение» (1960), реж. Михаил Швейцер.",
    movie_en: "Film «Resurrection» (1960), dir. Mikhail Shvejtser." },

  // Harry Potter series
  { id: 23, title_ru: "«Гарри Поттер и Философский камень»", title_en: "«Harry Potter and the Philosopher's Stone»", author_ru: "Джоан Роулинг", author_en: "J. K. Rowling",
    genre: "fantasy", price: 1500, condition: "read1", sold: false,
    cover_class: "magic-blue",
    summary_ru: "Сирота Гарри Поттер узнаёт, что он могущественный волшебник, отправляется в школу Хогвартс, находит верных друзей Рона и Гермиону и впервые сталкивается с Волан-де-Мортом.",
    summary_en: "Orphan Harry Potter discovers he is a powerful wizard, attends Hogwarts, makes loyal friends Ron and Hermione, and faces Voldemort for the first time.",
    quote_ru: "«Нельзя жить, прячась от смерти.»",
    quote_en: "“To the well-organized mind, death is but the next great adventure.”",
    movie_ru: "Фильм «Гарри Поттер и Философский камень» (2001), реж. Крис Коламбус.",
    movie_en: "Film «Harry Potter and the Philosopher's Stone» (2001), dir. Chris Columbus." },

  { id: 24, title_ru: "«Гарри Поттер и Тайная комната»", title_en: "«Harry Potter and the Chamber of Secrets»", author_ru: "Джоан Роулинг", author_en: "J. K. Rowling",
    genre: "fantasy", price: 1500, condition: "read1", sold: false,
    cover_class: "magic-blue",
    summary_ru: "Вернувшись в Хогвартс на второй год, Гарри сталкивается с загадочными нападениями на студентов. Он должен раскрыть тайну наследника Слизерина.",
    summary_en: "Returning to Hogwarts for his second year, Harry faces mysterious attacks on students. He must uncover the secret of the heir of Slytherin.",
    quote_ru: "«Именно наш выбор показывает, кто мы на самом деле, а не наши способности.»",
    quote_en: "“It is our choices that show what we truly are, far more than our abilities.”",
    movie_ru: "Фильм «Гарри Поттер и Тайная комната» (2002), реж. Крис Коламбус.",
    movie_en: "Film «Harry Potter and the Chamber of Secrets» (2002), dir. Chris Columbus." },

  { id: 25, title_ru: "«Гарри Поттер и Узник Азкабана»", title_en: "«Harry Potter and the Prisoner of Azkaban»", author_ru: "Джоан Роулинг", author_en: "J. K. Rowling",
    genre: "fantasy", price: 1500, condition: "read1", sold: false,
    cover_class: "magic-blue",
    summary_ru: "Из магической тюрьмы Азкабан сбегает Сириус Блэк. Гарри предстоит узнать скрытые тайны о своей семье и освоить мощное заклинание Патронуса.",
    summary_en: "Sirius Black escapes from the magical prison Azkaban. Harry must uncover hidden secrets about his family and master the powerful Patronus charm.",
    quote_ru: "«Счастье можно найти даже в самые тёмные времена, если только не забывать обращаться к свету.»",
    quote_en: "“Happiness can be found even in the darkest of times, if one only remembers to turn on the light.”",
    movie_ru: "Фильм «Гарри Поттер и Узник Азкабана» (2004), реж. Альфонсо Куарон.",
    movie_en: "Film «Harry Potter and the Prisoner of Azkaban» (2004), dir. Alfonso Cuarón." },

  { id: 26, title_ru: "«Гарри Поттер и Кубок огня»", title_en: "«Harry Potter and the Goblet of Fire»", author_ru: "Джоан Роулинг", author_en: "J. K. Rowling",
    genre: "fantasy", price: 1500, condition: "read1", sold: false,
    cover_class: "magic-blue",
    summary_ru: "Хогвартс принимает древний Турнир Трёх Волшебников. Кубок Огня вопреки законам выдаёт имя четвёртого участника — Гарри Поттера.",
    summary_en: "Hogwarts hosts the ancient Triwizard Tournament. The Goblet of Fire names a fourth champion — Harry Potter.",
    quote_ru: "«Если ты хочешь знать, каков человек на самом деле, посмотри, как он обращается с теми, кто ниже его, а не на равных.»",
    quote_en: "“If you want to see the true measure of a man, watch how he treats his inferiors, not his equals.”",
    movie_ru: "Фильм «Гарри Поттер и Кубок огня» (2005), реж. Майк Ньюэлл.",
    movie_en: "Film «Harry Potter and the Goblet of Fire» (2005), dir. Mike Newell." },

  { id: 27, title_ru: "«Гарри Поттер и Орден Феникса»", title_en: "«Harry Potter and the Order of the Phoenix»", author_ru: "Джоан Роулинг", author_en: "J. K. Rowling",
    genre: "fantasy", price: 1500, condition: "read1", sold: false,
    cover_class: "magic-blue",
    summary_ru: "Министерство магии отрицает возвращение Волан-де-Морта. Гарри и его друзья тайно создают «Отряд Дамблдора», обучаясь боевой магии.",
    summary_en: "The Ministry of Magic denies Voldemort's return. Harry and his friends secretly form «Dumbledore's Army», learning combat magic.",
    quote_ru: "«Делать то, что правильно, гораздо важнее, чем бояться того, что страшно.»",
    quote_en: "“Doing what is right is much more important than fearing what is frightening.”",
    movie_ru: "Фильм «Гарри Поттер и Орден Феникса» (2007), реж. Дэвид Йейтс.",
    movie_en: "Film «Harry Potter and the Order of the Phoenix» (2007), dir. David Yates." },

  { id: 28, title_ru: "«Гарри Поттер и Принц-полукровка»", title_en: "«Harry Potter and the Half-Blood Prince»", author_ru: "Джоан Роулинг", author_en: "J. K. Rowling",
    genre: "fantasy", price: 1500, condition: "read1", sold: false,
    cover_class: "magic-blue",
    summary_ru: "Гарри находит таинственный учебник зельеварения Принца-полукровки и исследует прошлое Волан-де-Морта с помощью Дамблдора, готовясь к главной битве.",
    summary_en: "Harry finds a mysterious Potions textbook of the Half-Blood Prince and explores Voldemort's past with Dumbledore, preparing for the final battle.",
    quote_ru: "«Люди забывают, что огромная власть и богатство не всегда приносят счастье.»",
    quote_en: "“People forget that great power and wealth do not always bring happiness.”",
    movie_ru: "Фильм «Гарри Поттер и Принц-полукровка» (2009), реж. Дэвид Йейтс.",
    movie_en: "Film «Harry Potter and the Half-Blood Prince» (2009), dir. David Yates." },

  { id: 29, title_ru: "«Гарри Поттер и Дары Смерти»", title_en: "«Harry Potter and the Deathly Hallows»", author_ru: "Джоан Роулинг", author_en: "J. K. Rowling",
    genre: "fantasy", price: 1500, condition: "read1", sold: false,
    cover_class: "magic-blue",
    summary_ru: "Троица покидает Хогвартс, чтобы найти и уничтожить тайные крестражи Волан-де-Морта. Им предстоит битва за волшебный мир и раскрытие легенд о Дарах Смерти.",
    summary_en: "The trio leaves Hogwarts to find and destroy Voldemort's secret Horcruxes. They face the final battle for the wizarding world and uncover the legend of the Deathly Hallows.",
    quote_ru: "«Конец, мой мальчик, бывает только один. Всё, что происходит до этого, — просто жизнь.»",
    quote_en: "“There is only one ending, my boy. Everything before that is just life.”",
    movie_ru: "Фильм «Гарри Поттер и Дары Смерти: Часть 2» (2011), реж. Дэвид Йейтс.",
    movie_en: "Film «Harry Potter and the Deathly Hallows: Part 2» (2011), dir. David Yates." },

  { id: 30, title_ru: "«Сияние»", title_en: "«The Shining»", author_ru: "Стивен Кинг", author_en: "Stephen King",
    genre: "drama", price: 1500, condition: "read1", sold: false,
    cover_class: "blue",
    summary_ru: "Писатель Джек Торранс становится зимним смотрителем уединённого отеля «Оверлук», где сверхъестественные силы постепенно толкают его к безумию и насилию — под угрозой оказываются его жена Уэнди и сын Дэнни, наделённый даром «сияния». Книга издана в 1977 году.",
    summary_en: "Writer Jack Torrance becomes the winter caretaker of the isolated Overlook Hotel, where supernatural forces gradually push him toward madness and violence, threatening his wife Wendy and his psychic son Danny, who possesses the gift of «shining». Published in 1977.",
    quote_ru: "«Одна лишь работа без забав ум Джека затупляет.»",
    quote_en: "“All work and no play makes Jack a dull boy.”",
    movie_ru: "Фильм «Сияние» (1980), реж. Стэнли Кубрик, в главной роли Джек Николсон.",
    movie_en: "Film «The Shining» (1980), dir. Stanley Kubrick, starring Jack Nicholson." },

  { id: 31, title_ru: "«Кладбище домашних животных»", title_en: "«Pet Sematary»", author_ru: "Стивен Кинг", author_en: "Stephen King",
    genre: "drama", price: 1500, condition: "read1", sold: false,
    cover_class: "green",
    summary_ru: "Семья Крид переезжает в дом рядом с таинственным древним кладбищем, способным возвращать мёртвых к жизни, — но каждое воскрешение оборачивается страшной ценой. Книга издана в 1983 году.",
    summary_en: "The Creed family moves next to a mysterious ancient burial ground capable of bringing the dead back to life — but every resurrection comes at a terrible price. Published in 1983.",
    quote_ru: "«Иногда мёртвым лучше оставаться мёртвыми.»",
    quote_en: "“Sometimes dead is better.”",
    movie_ru: "Фильм «Кладбище домашних животных» (1989), реж. Мэри Ламберт; ремейк 2019 года.",
    movie_en: "Film «Pet Sematary» (1989), dir. Mary Lambert; 2019 remake." },

  { id: 32, title_ru: "«На грани катастрофы»", title_en: "«Flight Into Danger»", author_ru: "Артур Хейли", author_en: "Arthur Hailey",
    genre: "drama", price: 1000, condition: "read1", sold: false,
    cover_class: "orange",
    summary_ru: "Дебютный роман Артура Хейли (в соавторстве с Джоном Каслом): во время рейса пассажиры отравились рыбой, оба пилота теряют сознание, и посадить самолёт вынужден пассажир Джон Спенсер, много лет не садившийся за штурвал.",
    summary_en: "Arthur Hailey's debut novel (co-written with John Castle): passengers on a flight are poisoned by tainted fish, both pilots lose consciousness, and passenger John Spencer — who hasn't flown in years — is forced to land the plane.",
    quote_ru: "«Жизнь всех на борту зависит от того, найдётся ли человек, способный посадить этот самолёт.»",
    quote_en: "“The life of everyone aboard depends on finding someone who can land this plane.”",
    movie_ru: "Экранизация «Zero Hour!» (1957), реж. Холл Бартлетт; сюжет знаменито спародирован в комедии «Аэроплан!» (1980).",
    movie_en: "Film adaptation «Zero Hour!» (1957), dir. Hall Bartlett; the plot was famously parodied in the comedy «Airplane!» (1980)." }
];

// ============ QUIZ DATABASE ============
const quizDatabase = {
  harry_potter: {
    title_ru: "«Гарри Поттер» (Общая викторина)", title_en: "«Harry Potter» (General Quiz)",
    questions: [
      { q_ru: "Как звали домашнего эльфа семьи Малфоев, которого хитро освободил Гарри?", q_en: "What is the name of the Malfoy family's house elf that Harry cleverly freed?", a_ru: ["Добби","Кикимер","Винки","Почти Безголовый Ник"], a_en: ["Dobby","Kreacher","Winky","Nearly Headless Nick"], c: 0 },
      { q_ru: "Какое животное является патронусом Гарри?", q_en: "What is Harry's Patronus?", a_ru: ["Олень","Выдра","Собака","Феникс"], a_en: ["Stag","Otter","Dog","Phoenix"], c: 0 },
      { q_ru: "Как называется волшебная карта Хогвартса?", q_en: "What is the magical Hogwarts map called?", a_ru: ["Карта Мародеров","Карта Хогвартса","Живая Карта","Карта Невидимка"], a_en: ["Marauder's Map","Hogwarts Map","Living Map","Invisibility Map"], c: 0 },
      { q_ru: "Какой факультет окончил Волан-де-Морт?", q_en: "Which house did Voldemort belong to?", a_ru: ["Слизерин","Гриффиндор","Когтевран","Пуффендуй"], a_en: ["Slytherin","Gryffindor","Ravenclaw","Hufflepuff"], c: 0 },
      { q_ru: "Что является первым уничтоженным крестражем?", q_en: "What was the first destroyed Horcrux?", a_ru: ["Дневник Тома Реддла","Кольцо Марволо","Медальон Слизерина","Диадема"], a_en: ["Tom Riddle's Diary","Marvolo's Ring","Slytherin's Locket","Diadem"], c: 0 },
      { q_ru: "Как называется спортивная игра на метлах?", q_en: "What is the broomstick sport called?", a_ru: ["Квиддич","Метлобол","Вингбол","Хогбол"], a_en: ["Quidditch","Metloball","Wingball","Hogball"], c: 0 },
      { q_ru: "Кто преподавал защиту от тёмных искусств на 3 курсе?", q_en: "Who taught Defense Against the Dark Arts in year 3?", a_ru: ["Римус Люпин","Локонс","Снегг","Грюм"], a_en: ["Remus Lupin","Lockhart","Snape","Moody"], c: 0 },
      { q_ru: "Какие три предмета составляют Дары Смерти?", q_en: "Which three items make up the Deathly Hallows?", a_ru: ["Бузинная палочка, Камень, Мантия","Меч, Чаша, Шляпа","Зеркало, Маховик, Карта","Клык, Яд, Перо"], a_en: ["Elder Wand, Stone, Cloak","Sword, Cup, Hat","Mirror, Time-turner, Map","Fang, Venom, Feather"], c: 0 },
      { q_ru: "Как звали крёстного отца Гарри?", q_en: "What was Harry's godfather's name?", a_ru: ["Сириус Блэк","Дамблдор","Хагрид","Снегг"], a_en: ["Sirius Black","Dumbledore","Hagrid","Snape"], c: 0 },
      { q_ru: "К какому факультету принадлежит Гарри?", q_en: "Which house does Harry belong to?", a_ru: ["Гриффиндор","Слизерин","Когтевран","Пуффендуй"], a_en: ["Gryffindor","Slytherin","Ravenclaw","Hufflepuff"], c: 0 }
    ]
  },
  zamyatin: {
    title_ru: "«Мы» (Е. Замятин)", title_en: "«We» (Y. Zamyatin)",
    questions: [
      { q_ru: "Как зовут главного героя?", q_en: "What is the protagonist's name?", a_ru: ["Д-503","I-330","О-90","Благодетель"], a_en: ["D-503","I-330","O-90","The Benefactor"], c: 0 },
      { q_ru: "Что отделяет Единое Государство от внешнего мира?", q_en: "What separates the One State from the outside world?", a_ru: ["Зелёная Стена","Электрическая ограда","Река","Купол"], a_en: ["Green Wall","Electric Fence","River","Dome"], c: 0 },
      { q_ru: "Кто правит Единым Государством?", q_en: "Who rules the One State?", a_ru: ["Президент","Благодетель","Интеграл","Математик"], a_en: ["President","The Benefactor","The Integral","The Mathematician"], c: 1 },
      { q_ru: "Как зовут девушку-бунтарку?", q_en: "What is the rebel girl's name?", a_ru: ["О-90","I-330","Ю-10","U-115"], a_en: ["O-90","I-330","Y-10","U-115"], c: 1 },
      { q_ru: "Из какого материала построены дома?", q_en: "What are houses made of?", a_ru: ["Кирпич","Стекло","Сталь","Бетон"], a_en: ["Brick","Glass","Steel","Concrete"], c: 1 },
      { q_ru: "Какую операцию проводят всем в финале?", q_en: "What operation is performed on everyone in the finale?", a_ru: ["Удаление сердца","Удаление фантазии","Стирание памяти","Замена гипофиза"], a_en: ["Heart removal","Imagination removal","Memory wipe","Pituitary replacement"], c: 1 },
      { q_ru: "Как называют людей в Едином Государстве?", q_en: "What are people called in the One State?", a_ru: ["Номера","Граждане","Пролы","Юниты"], a_en: ["Numbers","Citizens","Proles","Units"], c: 0 },
      { q_ru: "К какому жанру относится роман?", q_en: "What genre is the novel?", a_ru: ["Фэнтези","Антиутопия","Исторический","Детектив"], a_en: ["Fantasy","Dystopia","Historical","Detective"], c: 1 },
      { q_ru: "Что строит Д-503 как инженер?", q_en: "What does D-503 build as an engineer?", a_ru: ["Космический корабль «Интеграл»","Стену","Машину","Машину времени"], a_en: ["Spaceship «Integral»","Wall","Machine","Time machine"], c: 0 },
      { q_ru: "В какой форме написана книга?", q_en: "What form is the book written in?", a_ru: ["Письма другу","Записи дневника","Протокол","Пьеса"], a_en: ["Letters to a friend","Diary entries","Protocol","Play"], c: 1 }
    ]
  },
  turgenev: {
    title_ru: "«Отцы и дети» (И. Тургенев)", title_en: "«Fathers and Sons» (I. Turgenev)",
    questions: [
      { q_ru: "К какому течению относит себя Базаров?", q_en: "What movement does Bazarov belong to?", a_ru: ["Либерализм","Нигилизм","Консерватизм","Романтизм"], a_en: ["Liberalism","Nihilism","Conservatism","Romanticism"], c: 1 },
      { q_ru: "Кто главный идейный соперник Базарова?", q_en: "Who is Bazarov's main ideological opponent?", a_ru: ["Николай Кирсанов","Павел Кирсанов","Аркадий","Ситников"], a_en: ["Nikolai Kirsanov","Pavel Kirsanov","Arkady","Sitnikov"], c: 1 },
      { q_ru: "Как называется имение Кирсановых?", q_en: "What is the Kirsanov estate called?", a_ru: ["Марьино","Отрадное","Никольское","Ясная Поляна"], a_en: ["Marino","Otradnoe","Nikolskoye","Yasnaya Polyana"], c: 0 },
      { q_ru: "В кого влюбляется Базаров?", q_en: "Who does Bazarov fall in love with?", a_ru: ["Анна Одинцова","Катя","Кукшина","Фенечка"], a_en: ["Anna Odintsova","Katya","Kukshina","Fenechka"], c: 0 },
      { q_ru: "Из-за кого произошла дуэль?", q_en: "What caused the duel?", a_ru: ["Одинцова","Фенечка","Политика","Деньги"], a_en: ["Odintsova","Fenechka","Politics","Money"], c: 1 },
      { q_ru: "Каких животных препарировал Базаров?", q_en: "What animals did Bazarov dissect?", a_ru: ["Лягушек","Мышей","Кроликов","Птиц"], a_en: ["Frogs","Mice","Rabbits","Birds"], c: 0 },
      { q_ru: "От чего умирает Базаров?", q_en: "How does Bazarov die?", a_ru: ["На дуэли","От заражения крови","От чахотки","От старости"], a_en: ["In a duel","From blood poisoning","From consumption","From old age"], c: 1 },
      { q_ru: "Кто женится на Кате Локтевой?", q_en: "Who marries Katya Lokteva?", a_ru: ["Базаров","Аркадий","Павел","Ситников"], a_en: ["Bazarov","Arkady","Pavel","Sitnikov"], c: 1 },
      { q_ru: "Кем был отец Базарова?", q_en: "What was Bazarov's father's profession?", a_ru: ["Помещик","Лекарь","Генерал","Священник"], a_en: ["Landowner","Doctor","General","Priest"], c: 1 },
      { q_ru: "Что Базаров высмеивает у Николая Кирсанова?", q_en: "What does Bazarov mock about Nikolai Kirsanov?", a_ru: ["Чтение стихов","Хозяйство","Охоту","Французский"], a_en: ["Reading poetry","Farming","Hunting","French"], c: 0 }
    ]
  },
  lermontov: {
    title_ru: "«Герой нашего времени» (М. Лермонтов)", title_en: "«A Hero of Our Time» (M. Lermontov)",
    questions: [
      { q_ru: "Как зовут главного героя?", q_en: "What is the protagonist's name?", a_ru: ["Печорин","Онегин","Базаров","Чацкий"], a_en: ["Pechorin","Onegin","Bazarov","Chatsky"], c: 0 },
      { q_ru: "Где происходит действие «Бэлы»?", q_en: "Where does «Bela» take place?", a_ru: ["Кавказ","Петербург","Москва","Крым"], a_en: ["Caucasus","St. Petersburg","Moscow","Crimea"], c: 0 },
      { q_ru: "Как зовут девушку, которую похищает Печорин?", q_en: "What is the girl Pechorin abducts called?", a_ru: ["Бэла","Татьяна","Вера","Мери"], a_en: ["Bela","Tatyana","Vera","Mary"], c: 0 },
      { q_ru: "Кто убивает Бэлу?", q_en: "Who kills Bela?", a_ru: ["Казбич","Азамат","Максим Максимыч","Печорин"], a_en: ["Kazbich","Azamat","Maksim Maksimych","Pechorin"], c: 0 },
      { q_ru: "В каком месте Печорин находит дневник?", q_en: "Where does Pechorin's diary get found?", a_ru: ["В Пятигорске","В крепости","В Кисловодске","В Тамани"], a_en: ["In Pyatigorsk","In the fortress","In Kislovodsk","In Tamani"], c: 0 },
      { q_ru: "С кем Печорин дерется на дуэли в Пятигорске?", q_en: "Who does Pechorin duel in Pyatigorsk?", a_ru: ["Грушницкий","Максим Максимыч","Казбич","Доктор"], a_en: ["Grushnitsky","Maksim Maksimych","Kazbich","Doctor"], c: 0 },
      { q_ru: "Что Печорин ищет в «Тамани»?", q_en: "What is Pechorin looking for in «Tamani»?", a_ru: ["Приключения","Сокровища","Контрабандистов","Любовь"], a_en: ["Adventure","Treasure","Smugglers","Love"], c: 2 },
      { q_ru: "Кто такая Вера в романе?", q_en: "Who is Vera in the novel?", a_ru: ["Бывшая возлюбленная Печорина","Сестра Бэлы","Дочь Максима","Княжна"], a_en: ["Pechorin's former lover","Bela's sister","Maksim's daughter","Princess"], c: 0 },
      { q_ru: "В каком жанре написан роман?", q_en: "What genre is the novel?", a_ru: ["Психологический роман","Поэма","Пьеса","Сказка"], a_en: ["Psychological novel","Poem","Play","Fairy tale"], c: 0 },
      { q_ru: "Как называется последняя повесть?", q_en: "What is the last novella called?", a_ru: ["Фаталист","Бэла","Тамань","Максим Максимыч"], a_en: ["The Fatalist","Bela","Tamani","Maksim Maksimych"], c: 0 }
    ]
  },
  golding: {
    title_ru: "«Повелитель мух» (У. Голдинг)", title_en: "«Lord of the Flies» (W. Golding)",
    questions: [
      { q_ru: "Как зовут главного героя-рационалиста?", q_en: "What is the rational protagonist's name?", a_ru: ["Ральф","Джек","Саймон","Хрюша"], a_en: ["Ralph","Jack","Simon","Piggy"], c: 0 },
      { q_ru: "Кто становится лидером дикого племени?", q_en: "Who becomes the leader of the savage tribe?", a_ru: ["Джек","Ральф","Саймон","Роджер"], a_en: ["Jack","Ralph","Simon","Roger"], c: 0 },
      { q_ru: "Что символизирует раковина?", q_en: "What does the conch shell symbolize?", a_ru: ["Власть и порядок","Хаос","Страх","Смерть"], a_en: ["Authority and order","Chaos","Fear","Death"], c: 0 },
      { q_ru: "Как зовут мудрого мальчика, убитого по ошибке?", q_en: "What is the wise boy who is mistakenly killed called?", a_ru: ["Саймон","Ральф","Хрюша","Джек"], a_en: ["Simon","Ralph","Piggy","Jack"], c: 0 },
      { q_ru: "Что такое «Повелитель мух»?", q_en: "What is the «Lord of the Flies»?", a_ru: ["Голова убитого поросёнка","Зверь","Раковина","Сигнальный огонь"], a_en: ["Head of a dead pig","Beast","Conch","Signal fire"], c: 0 },
      { q_ru: "Чем мальчики разводят сигнальный огонь?", q_en: "How do the boys make the signal fire?", a_ru: ["Очками Хрюши","Кремнем","Спичками","Молнией"], a_en: ["Piggy's glasses","Flint","Matches","Lightning"], c: 0 },
      { q_ru: "Кто разбивает раковину?", q_en: "Who breaks the conch?", a_ru: ["Роджер","Ральф","Джек","Саймон"], a_en: ["Roger","Ralph","Jack","Simon"], c: 0 },
      { q_ru: "Чем заканчивается роман?", q_en: "How does the novel end?", a_ru: ["Мальчиков спасает офицер","Все погибают","Они остаются на острове","Приплывает корабль"], a_en: ["An officer rescues the boys","Everyone dies","They stay on the island","A ship arrives"], c: 0 },
      { q_ru: "Куда попадают мальчики в начале?", q_en: "Where do the boys end up at the start?", a_ru: ["На необитаемый остров","В джунгли","В пустыню","В горы"], a_en: ["On an uninhabited island","In a jungle","In a desert","In mountains"], c: 0 },
      { q_ru: "Что пугает мальчиков на острове?", q_en: "What scares the boys on the island?", a_ru: ["«Зверь»","Гроза","Голод","Тьма"], a_en: ["The «Beast»","Thunder","Hunger","Darkness"], c: 0 }
    ]
  },
  pushkin_onegin: {
    title_ru: "«Евгений Онегин» (А. Пушкин)", title_en: "«Eugene Onegin» (A. Pushkin)",
    questions: [
      { q_ru: "Как зовут главного героя?", q_en: "What is the protagonist's name?", a_ru: ["Онегин","Печорин","Чацкий","Базаров"], a_en: ["Onegin","Pechorin","Chatsky","Bazarov"], c: 0 },
      { q_ru: "В кого влюбляется Татьяна Ларина?", q_en: "Who does Tatyana Larina fall in love with?", a_ru: ["Онегин","Ленский","Ольгин муж","Автор"], a_en: ["Onegin","Lensky","Olga's husband","The author"], c: 0 },
      { q_ru: "Кто убит на дуэли?", q_en: "Who is killed in the duel?", a_ru: ["Ленский","Онегин","Гремин","Татьяны муж"], a_en: ["Lensky","Onegin","Gremin","Tatyana's husband"], c: 0 },
      { q_ru: "Как зовут сестру Татьяны?", q_en: "What is Tatyana's sister's name?", a_ru: ["Ольга","Наташа","Маша","Соня"], a_en: ["Olga","Natasha","Masha","Sonya"], c: 0 },
      { q_ru: "Что пишет Татьяна Онегину?", q_en: "What does Tatyana write to Onegin?", a_ru: ["Письмо","Дневник","Стих","Пьесу"], a_en: ["A letter","A diary","A poem","A play"], c: 0 },
      { q_ru: "За кого выходит замуж Татьяна?", q_en: "Who does Tatyana marry?", a_ru: ["За Гремина","За Онегина","За Ленского","За автора"], a_en: ["Gremin","Onegin","Lensky","The author"], c: 0 },
      { q_ru: "Почему Онегин отвергает Татьяну?", q_en: "Why does Onegin reject Tatyana?", a_ru: ["Не хочет терять свободу","Не любит её","Она бедна","Она некрасива"], a_en: ["He doesn't want to lose his freedom","He doesn't love her","She's poor","She's ugly"], c: 0 },
      { q_ru: "В каком городе живёт Онегин в начале?", q_en: "Where does Onegin live at the beginning?", a_ru: ["В Петербурге","В Москве","В деревне","В Киеве"], a_en: ["In St. Petersburg","In Moscow","In the countryside","In Kyiv"], c: 0 },
      { q_ru: "Кто автор романа?", q_en: "Who is the author?", a_ru: ["Пушкин","Лермонтов","Гоголь","Тургенев"], a_en: ["Pushkin","Lermontov","Gogol","Turgenev"], c: 0 },
      { q_ru: "В каких стихах написан роман?", q_en: "What meter is the novel written in?", a_ru: ["Онегинская строфа","Ямб","Хорей","Дольник"], a_en: ["Onegin stanza","Iamb","Trochee","Dolnik"], c: 0 }
    ]
  },
  gogol: {
    title_ru: "«Мёртвые души» (Н. Гоголь)", title_en: "«Dead Souls» (N. Gogol)",
    questions: [
      { q_ru: "Как зовут главного героя?", q_en: "What is the protagonist's name?", a_ru: ["Чичиков","Базаров","Онегин","Печорин"], a_en: ["Chichikov","Bazarov","Onegin","Pechorin"], c: 0 },
      { q_ru: "Что скупает Чичиков?", q_en: "What does Chichikov buy?", a_ru: ["Мёртвые души","Землю","Лошадей","Золото"], a_en: ["Dead souls","Land","Horses","Gold"], c: 0 },
      { q_ru: "Как зовут первого помещика?", q_en: "Who is the first landowner?", a_ru: ["Манилов","Коробочка","Ноздрёв","Собакевич"], a_en: ["Manilov","Korobochka","Nozdryov","Sobakevich"], c: 0 },
      { q_ru: "У кого живёт Чичиков в городе?", q_en: "Where does Chichikov stay in town?", a_ru: ["У губернатора","У Собакевича","У Плюшкина","У Манилова"], a_en: ["With the governor","With Sobakevich","With Plyushkin","With Manilov"], c: 0 },
      { q_ru: "Кто самый жадный помещик?", q_en: "Who is the greediest landowner?", a_ru: ["Плюшкин","Манилов","Коробочка","Ноздрёв"], a_en: ["Plyushkin","Manilov","Korobochka","Nozdryov"], c: 0 },
      { q_ru: "Какой слуга у Чичикова?", q_en: "Who is Chichikov's servant?", a_ru: ["Петрушка","Селифан","Михайло","Иван"], a_en: ["Petrushka","Selifan","Mikhailo","Ivan"], c: 0 },
      { q_ru: "Кто раскрывает обман Чичикова?", q_en: "Who exposes Chichikov's scheme?", a_ru: ["Ноздрёв","Манилов","Губернатор","Коробочка"], a_en: ["Nozdryov","Manilov","The governor","Korobochka"], c: 0 },
      { q_ru: "На чём ездит Чичиков?", q_en: "How does Chichikov travel?", a_ru: ["На бричке","На лошади","Пешком","На поезде"], a_en: ["In a britchka","On horseback","On foot","By train"], c: 0 },
      { q_ru: "Что делает Коробочка?", q_en: "What does Korobochka do?", a_ru: ["Убеждает продать дешевле","Продаёт сразу","Отказывает","Забывает"], a_en: ["Bargains for a better price","Sells immediately","Refuses","Forgets"], c: 0 },
      { q_ru: "Какой жанр произведения?", q_en: "What genre is the work?", a_ru: ["Поэма","Роман","Повесть","Пьеса"], a_en: ["Poem","Novel","Novella","Play"], c: 0 }
    ]
  },
  keyes: {
    title_ru: "«Цветы для Элджернона» (Д. Киз)", title_en: "«Flowers for Algernon» (D. Keyes)",
    questions: [
      { q_ru: "Как зовут главного героя?", q_en: "What is the protagonist's name?", a_ru: ["Чарли Гордон","Джон","Дэвид","Говард"], a_en: ["Charlie Gordon","John","David","Howard"], c: 0 },
      { q_ru: "Кто такой Элджернон?", q_en: "Who is Algernon?", a_ru: ["Мышь","Кошка","Собака","Обезьяна"], a_en: ["A mouse","A cat","A dog","A monkey"], c: 0 },
      { q_ru: "Какая операция проводится на Чарли?", q_en: "What surgery is performed on Charlie?", a_ru: ["Повышение интеллекта","Удаление опухоли","Пересадка сердца","Лечение глаз"], a_en: ["Intelligence enhancement","Tumor removal","Heart transplant","Eye treatment"], c: 0 },
      { q_ru: "В какой форме написан роман?", q_en: "What form is the novel written in?", a_ru: ["Дневник","Письма","Пьеса","Стихи"], a_en: ["Diary","Letters","Play","Poetry"], c: 0 },
      { q_ru: "Что происходит с интеллектом Чарли в конце?", q_en: "What happens to Charlie's intelligence at the end?", a_ru: ["Возвращается к прежнему уровню","Растёт","Стабилизируется","Пропадает полностью"], a_en: ["Returns to the previous level","Grows","Stabilizes","Disappears completely"], c: 0 },
      { q_ru: "Где работает Чарли до операции?", q_en: "Where does Charlie work before the surgery?", a_ru: ["В пекарне","В банке","В школе","В больнице"], a_en: ["In a bakery","In a bank","In a school","In a hospital"], c: 0 },
      { q_ru: "Кто проводит операцию?", q_en: "Who performs the surgery?", a_ru: ["Профессор Немур","Доктор Стросс","Чарли сам","Мать Чарли"], a_en: ["Professor Nemur","Dr. Strauss","Charlie himself","Charlie's mother"], c: 1 },
      { q_ru: "Что просит Чарли в финале?", q_en: "What does Charlie ask for in the finale?", a_ru: ["Положить цветы на могилу Элджернона","Вернуться в пекарню","Найти друзей","Получить лечение"], a_en: ["Put flowers on Algernon's grave","Return to the bakery","Find friends","Get treatment"], c: 0 },
      { q_ru: "Как меняется почерк Чарли?", q_en: "How does Charlie's handwriting change?", a_ru: ["Улучшается, потом ухудшается","Остаётся прежним","Ухудшается сразу","Не меняется"], a_en: ["Improves, then worsens","Stays the same","Worsens immediately","Doesn't change"], c: 0 },
      { q_ru: "Какой IQ у Чарли до операции?", q_en: "What is Charlie's IQ before the surgery?", a_ru: ["68","100","120","150"], a_en: ["68","100","120","150"], c: 0 }
    ]
  },
  salinger: {
    title_ru: "«Над пропастью во ржи» (Дж. Д. Сэлинджер)", title_en: "«The Catcher in the Rye» (J. D. Salinger)",
    questions: [
      { q_ru: "Как зовут главного героя?", q_en: "What is the protagonist's name?", a_ru: ["Холден Колфилд","Аллен Гинзберг","Ди Би","Стрэдлейтер"], a_en: ["Holden Caulfield","Allen Ginsberg","D.B.","Stradlater"], c: 0 },
      { q_ru: "Из какой школы Холдена исключают?", q_en: "What school is Holden expelled from?", a_ru: ["Пэнси","Хогвартс","Уортон","Элктон-Хиллз"], a_en: ["Pencey Prep","Hogwarts","Wharton","Elkton Hills"], c: 0 },
      { q_ru: "Как зовут младшую сестру Холдена?", q_en: "What is Holden's younger sister's name?", a_ru: ["Фиби","Джейн","Салли","Эстель"], a_en: ["Phoebe","Jane","Sally","Estelle"], c: 0 },
      { q_ru: "От чего Холден хочет уберечь детей в своей фантазии о ржи?", q_en: "What does Holden want to protect kids from in his rye-field fantasy?", a_ru: ["От падения с обрыва","От дождя","От школы","От чужаков"], a_en: ["Falling off a cliff","The rain","School","Strangers"], c: 0 },
      { q_ru: "В каком городе происходит большая часть действия?", q_en: "In which city does most of the action take place?", a_ru: ["Нью-Йорк","Бостон","Филадельфия","Чикаго"], a_en: ["New York","Boston","Philadelphia","Chicago"], c: 0 },
      { q_ru: "Как звали умершего младшего брата Холдена?", q_en: "What was the name of Holden's deceased younger brother?", a_ru: ["Алли","Ди Би","Винсент","Роберт"], a_en: ["Allie","D.B.","Vincent","Robert"], c: 0 },
      { q_ru: "Каким словом Холден называет неискренних людей?", q_en: "What word does Holden use for insincere people?", a_ru: ["Показуха / липа","Снобы","Слабаки","Зануды"], a_en: ["\"Phonies\"","Snobs","Weaklings","Bores"], c: 0 },
      { q_ru: "Какого цвета у Холдена охотничья шапка?", q_en: "What color is Holden's hunting hat?", a_ru: ["Красная","Синяя","Зелёная","Чёрная"], a_en: ["Red","Blue","Green","Black"], c: 0 },
      { q_ru: "Кем работает старший брат Холдена, Ди Би?", q_en: "What does Holden's older brother D.B. do for a living?", a_ru: ["Сценарист в Голливуде","Врач","Учитель","Адвокат"], a_en: ["A Hollywood screenwriter","A doctor","A teacher","A lawyer"], c: 0 },
      { q_ru: "Где Холден оказывается в финале романа?", q_en: "Where does Holden end up at the end of the novel?", a_ru: ["В лечебнице (санатории)","Дома у родителей","В тюрьме","В армии"], a_en: ["In a rest home/clinic","Back at his parents' home","In prison","In the army"], c: 0 }
    ]
  },
  leskov: {
    title_ru: "«Левша» (Н. Лесков)", title_en: "«The Steel Flea» (N. Leskov)",
    questions: [
      { q_ru: "Что подковывает Левша?", q_en: "What does Levsha shoe?", a_ru: ["Стальную блоху","Коня","Медведя","Механическую птицу"], a_en: ["A steel flea","A horse","A bear","A mechanical bird"], c: 0 },
      { q_ru: "Из какого города Левша?", q_en: "What city is Levsha from?", a_ru: ["Тула","Москва","Петербург","Киев"], a_en: ["Tula","Moscow","St. Petersburg","Kyiv"], c: 0 },
      { q_ru: "Кто изготовил блоху изначально?", q_en: "Who originally made the flea?", a_ru: ["Англичане","Французы","Немцы","Тульские купцы"], a_en: ["The English","The French","The Germans","Tula merchants"], c: 0 },
      { q_ru: "Какой царь первым получает блоху?", q_en: "Which Tsar first receives the flea?", a_ru: ["Александр I","Николай I","Пётр I","Александр II"], a_en: ["Alexander I","Nicholas I","Peter I","Alexander II"], c: 0 },
      { q_ru: "При каком царе Левша едет в Англию?", q_en: "Under which Tsar does Levsha travel to England?", a_ru: ["Николай I","Александр I","Пётр I","Павел I"], a_en: ["Nicholas I","Alexander I","Peter I","Paul I"], c: 0 },
      { q_ru: "Кто сопровождает Левшу и добивается показа блохи царю?", q_en: "Who accompanies Levsha and insists on showing the flea to the Tsar?", a_ru: ["Атаман Платов","Губернатор","Посол","Купец"], a_en: ["Ataman Platov","A governor","An ambassador","A merchant"], c: 0 },
      { q_ru: "Что случается с Левшой по пути домой из Англии?", q_en: "What happens to Levsha on the way home from England?", a_ru: ["Он заболевает и его бросают без помощи","Он женится","Он остаётся в Англии","Он становится богатым"], a_en: ["He falls ill and is left without help","He gets married","He stays in England","He becomes wealthy"], c: 0 },
      { q_ru: "От чего отказывается Левша, несмотря на предложение остаться?", q_en: "What does Levsha refuse despite being invited to stay?", a_ru: ["Остаться жить в Англии","Учиться грамоте","Получить деньги","Показать секрет мастерства"], a_en: ["Staying to live in England","Learning to read and write","Taking money","Revealing his craft's secret"], c: 0 },
      { q_ru: "О чём Левша просит передать государю перед смертью?", q_en: "What does Levsha ask to be told to the Tsar before he dies?", a_ru: ["Не чистить ружья кирпичом","Наградить его","Простить его","Отпустить его семью"], a_en: ["Not to clean rifles with brick powder","To reward him","To forgive him","To free his family"], c: 0 },
      { q_ru: "К какому жанру относится произведение?", q_en: "What genre is the work?", a_ru: ["Сказ","Роман","Ода","Трагедия"], a_en: ["Skaz (folk tale)","Novel","Ode","Tragedy"], c: 0 }
    ]
  },
  gogol_tarasbulba: {
    title_ru: "«Тарас Бульба» (Н. Гоголь)", title_en: "«Taras Bulba» (N. Gogol)",
    questions: [
      { q_ru: "Как зовут главного героя?", q_en: "What is the protagonist's name?", a_ru: ["Тарас Бульба","Остап","Андрий","Кукубенко"], a_en: ["Taras Bulba","Ostap","Andriy","Kukubenko"], c: 0 },
      { q_ru: "Как зовут сыновей Тараса?", q_en: "What are Taras's sons called?", a_ru: ["Остап и Андрий","Пётр и Павел","Иван и Степан","Микола и Богдан"], a_en: ["Ostap and Andriy","Pyotr and Pavel","Ivan and Stepan","Mykola and Bogdan"], c: 0 },
      { q_ru: "Какой сын переходит на сторону поляков ради любви?", q_en: "Which son betrays the Cossacks for love of a Polish woman?", a_ru: ["Андрий","Остап","Оба","Ни один"], a_en: ["Andriy","Ostap","Both","Neither"], c: 0 },
      { q_ru: "Кто убивает Андрия?", q_en: "Who kills Andriy?", a_ru: ["Сам Тарас Бульба","Остап","Ляхи","Казаки"], a_en: ["Taras Bulba himself","Ostap","The Poles","Fellow Cossacks"], c: 0 },
      { q_ru: "Что происходит с Остапом?", q_en: "What happens to Ostap?", a_ru: ["Его казнят в Варшаве","Он становится атаманом","Он бежит в Крым","Он мирится с поляками"], a_en: ["He is executed in Warsaw","He becomes an ataman","He flees to Crimea","He makes peace with the Poles"], c: 0 },
      { q_ru: "В какой казацкой общине состоят герои?", q_en: "What Cossack community do the characters belong to?", a_ru: ["Запорожская Сечь","Донское войско","Кубанское войско","Уральское казачество"], a_en: ["The Zaporozhian Sich","The Don Host","The Kuban Host","Ural Cossacks"], c: 0 },
      { q_ru: "Что происходит с Тарасом в финале?", q_en: "What happens to Taras at the end?", a_ru: ["Поляки сжигают его на костре","Он умирает от старости","Он возвращается домой","Он становится гетманом"], a_en: ["The Poles burn him at the stake","He dies of old age","He returns home","He becomes hetman"], c: 0 },
      { q_ru: "В кого влюбляется Андрий?", q_en: "Who does Andriy fall in love with?", a_ru: ["В польскую панночку","В казачку","В служанку","В свою двоюродную сестру"], a_en: ["A Polish noblewoman","A Cossack girl","A maidservant","His cousin"], c: 0 },
      { q_ru: "Кем является Тарас Бульба по званию?", q_en: "What is Taras Bulba's rank?", a_ru: ["Полковник (казацкий предводитель)","Царь","Гетман всея Руси","Рядовой казак"], a_en: ["A Cossack colonel/leader","A Tsar","Hetman of all Rus","A rank-and-file Cossack"], c: 0 },
      { q_ru: "Где в основном происходит действие повести?", q_en: "Where does most of the novella take place?", a_ru: ["На Украине, в степях Запорожья","В Петербурге","В Сибири","В Крыму"], a_en: ["In Ukraine, on the Zaporozhian steppe","In St. Petersburg","In Siberia","In Crimea"], c: 0 }
    ]
  },
  westdragon: {
    title_ru: "«Повелитель драконов» (Трейси Уэст)", title_en: "«Dragon Masters» (Tracey West)",
    questions: [
      { q_ru: "Кем был Дрейк до того, как его забрали в замок?", q_en: "What was Drake before he was taken to the castle?", a_ru: ["Фермером, выращивающим лук","Кузнецом","Рыбаком","Пастухом"], a_en: ["An onion farmer","A blacksmith","A fisherman","A shepherd"], c: 0 },
      { q_ru: "Как Дрейк называет своего дракона?", q_en: "What does Drake name his dragon?", a_ru: ["Червяк (Worm)","Вулкан","Шу","Кепри"], a_en: ["Worm","Vulcan","Shu","Kepri"], c: 0 },
      { q_ru: "К какой стихии относится дракон Дрейка?", q_en: "What element does Drake's dragon belong to?", a_ru: ["Земля","Огонь","Вода","Молния"], a_en: ["Earth","Fire","Water","Lightning"], c: 0 },
      { q_ru: "Как зовут королевского волшебника, обучающего детей?", q_en: "What is the name of the king's wizard who trains the children?", a_ru: ["Гриффит","Мальдред","Волан","Мерлин"], a_en: ["Griffith","Maldred","Volan","Merlin"], c: 0 },
      { q_ru: "Как зовут короля, который забрал детей в замок?", q_en: "What is the name of the king who brought the children to the castle?", a_ru: ["Король Роланд","Король Артур","Король Ричард","Король Эдвард"], a_en: ["King Roland","King Arthur","King Richard","King Edward"], c: 0 },
      { q_ru: "Как зовут девочку с огненным драконом Вулканом?", q_en: "What is the name of the girl with the fire dragon Vulcan?", a_ru: ["Рори","Ана","Кэрлос","Вольфганг"], a_en: ["Rori","Ana","Carlos","Wolfgang"], c: 0 },
      { q_ru: "Как зовут мальчика с водным драконом Шу?", q_en: "What is the name of the boy with the water dragon Shu?", a_ru: ["Бо","Дрейк","Гриффит","Роланд"], a_en: ["Bo","Drake","Griffith","Roland"], c: 0 },
      { q_ru: "Как зовут девочку с солнечным драконом Кепри?", q_en: "What is the name of the girl with the sun dragon Kepri?", a_ru: ["Ана","Рори","Марина","Джулс"], a_en: ["Ana","Rori","Marina","Jules"], c: 0 },
      { q_ru: "Как дракон-подопечный Дрейка спасает друзей в первой книге?", q_en: "How does Drake's dragon save the friends in the first book?", a_ru: ["Превращает камень в пыль, разрушая завал","Тушит пожар","Замораживает врагов","Летит за помощью"], a_en: ["He turns rock to dust, clearing a cave-in","He puts out a fire","He freezes the enemies","He flies for help"], c: 0 },
      { q_ru: "В какой книжной серии издательства выходят «Повелители драконов»?", q_en: "What imprint publishes the «Dragon Masters» series?", a_ru: ["Scholastic (серия Branches)","Penguin","HarperCollins","Random House"], a_en: ["Scholastic (Branches line)","Penguin","HarperCollins","Random House"], c: 0 }
    ]
  },
  gogol_revizor: {
    title_ru: "«Ревизор» (Н. Гоголь)", title_en: "«The Government Inspector» (N. Gogol)",
    questions: [
      { q_ru: "Кого чиновники принимают за ревизора?", q_en: "Who do the officials mistake for the inspector?", a_ru: ["Хлестакова","Городничего","Земляники","Бобчинского"], a_en: ["Khlestakov","The Mayor","Zemlyanika","Bobchinsky"], c: 0 },
      { q_ru: "Кем на самом деле является Хлестаков?", q_en: "Who is Khlestakov in reality?", a_ru: ["Мелким чиновником без чинов и денег","Настоящим ревизором","Переодетым купцом","Иностранным шпионом"], a_en: ["A petty, penniless clerk of no rank","A real government inspector","A merchant in disguise","A foreign spy"], c: 0 },
      { q_ru: "Как зовут городничего?", q_en: "What is the mayor's name?", a_ru: ["Антон Антонович Сквозник-Дмухановский","Артемий Земляника","Аммос Ляпкин-Тяпкин","Иван Хлопов"], a_en: ["Anton Antonovich Skvoznik-Dmukhanovsky","Artemy Zemlyanika","Ammos Lyapkin-Tyapkin","Ivan Khlopov"], c: 0 },
      { q_ru: "Как зовут слугу Хлестакова?", q_en: "What is the name of Khlestakov's servant?", a_ru: ["Осип","Петрушка","Селифан","Захар"], a_en: ["Osip","Petrushka","Selifan","Zakhar"], c: 0 },
      { q_ru: "Чем чиновники пытаются задобрить Хлестакова?", q_en: "What do the officials use to try to win Khlestakov's favor?", a_ru: ["Взятками","Подарками из-за границы","Военной охраной","Обещаниями чинов"], a_en: ["Bribes","Imported gifts","A military guard","Promises of rank"], c: 0 },
      { q_ru: "Кто раскрывает истинную личность Хлестакова?", q_en: "Who reveals Khlestakov's true identity?", a_ru: ["Почтмейстер, вскрывший его письмо","Городничий","Слуга Осип","Жена городничего"], a_en: ["The postmaster, who opens his letter","The Mayor","His servant Osip","The Mayor's wife"], c: 0 },
      { q_ru: "Кто из женщин увлекается Хлестаковым?", q_en: "Which women become infatuated with Khlestakov?", a_ru: ["Жена и дочь городничего","Две купчихи","Служанки","Учительницы"], a_en: ["The Mayor's wife and daughter","Two merchants' wives","The maids","Schoolteachers"], c: 0 },
      { q_ru: "Что происходит в финале пьесы (знаменитая «немая сцена»)?", q_en: "What happens at the end (the famous \"silent scene\")?", a_ru: ["Объявляют о приезде настоящего ревизора","Хлестакова арестовывают","Городничего повышают","Все чиновники сбегают"], a_en: ["The arrival of the real inspector is announced","Khlestakov is arrested","The Mayor gets promoted","All the officials flee"], c: 0 },
      { q_ru: "К какому жанру относится произведение?", q_en: "What genre is the work?", a_ru: ["Сатирическая комедия","Трагедия","Драма","Историческая поэма"], a_en: ["Satirical comedy","Tragedy","Drama","Historical poem"], c: 0 },
      { q_ru: "Что делают чиновники, узнав о приезде ревизора?", q_en: "What do the officials do upon learning of the inspector's visit?", a_ru: ["Спешно наводят видимость порядка","Уезжают из города","Пишут жалобу царю","Ничего не меняют"], a_en: ["They rush to fake an appearance of order","They leave the town","They write a complaint to the Tsar","They change nothing"], c: 0 }
    ]
  },
  clear_habits: {
    title_ru: "«Атомные привычки» (Джеймс Клир)", title_en: "«Atomic Habits» (James Clear)",
    questions: [
      { q_ru: "Какая центральная идея книги о маленьких изменениях?", q_en: "What is the book's central idea about small changes?", a_ru: ["Улучшение на 1% в день даёт огромный эффект со временем","Нужно сразу менять всё кардинально","Привычки нельзя изменить","Только сила воли важна"], a_en: ["1% daily improvement compounds into huge results","You must change everything drastically at once","Habits cannot be changed","Only willpower matters"], c: 0 },
      { q_ru: "Сколько «законов изменения поведения» описывает автор?", q_en: "How many \"laws of behavior change\" does the author describe?", a_ru: ["Четыре","Два","Семь","Десять"], a_en: ["Four","Two","Seven","Ten"], c: 0 },
      { q_ru: "Что советует автор насчёт личности и привычек?", q_en: "What does the author suggest about identity and habits?", a_ru: ["Каждая привычка — «голос» за тип личности, которым хочешь стать","Личность не связана с привычками","Привычки формируют только окружение","Личность нельзя изменить привычками"], a_en: ["Every habit is a \"vote\" for the type of person you want to become","Identity has nothing to do with habits","Only environment shapes habits","Identity can't be changed through habits"], c: 0 },
      { q_ru: "Что такое «наслоение привычек» (habit stacking)?", q_en: "What is \"habit stacking\"?", a_ru: ["Привязка новой привычки к уже существующей","Отказ от старых привычек","Ведение дневника привычек","Награда за каждую привычку"], a_en: ["Linking a new habit to an existing one","Giving up old habits","Keeping a habit journal","Rewarding every habit"], c: 0 },
      { q_ru: "Какая известная фраза книги про цели и системы?", q_en: "What is the book's famous line about goals and systems?", a_ru: ["«Вы падаете до уровня своих систем»","«Цели важнее систем»","«Системы не нужны»","«Только цели имеют значение»"], a_en: ["\"You fall to the level of your systems\"","\"Goals matter more than systems\"","\"Systems are unnecessary\"","\"Only goals matter\""], c: 0 },
      { q_ru: "В чём суть «правила двух минут»?", q_en: "What is the point of the \"two-minute rule\"?", a_ru: ["Сократить новую привычку до действия на 2 минуты","Заниматься привычкой ровно 2 минуты каждый день","Ждать 2 минуты перед соблазном","Через 2 минуты привычка формируется навсегда"], a_en: ["Scale a new habit down to something doable in 2 minutes","Do the habit for exactly 2 minutes daily","Wait 2 minutes before giving in to temptation","A habit is permanently formed after 2 minutes"], c: 0 },
      { q_ru: "Кто автор книги?", q_en: "Who is the author of the book?", a_ru: ["Джеймс Клир","Джеймс Клеар (Клирвотер)","Джеймс Клайв","Джеймс Кларк"], a_en: ["James Clear","James Clearwater","James Clive","James Clark"], c: 0 },
      { q_ru: "Какая метафора используется для эффекта накопления привычек?", q_en: "What metaphor is used for the compounding effect of habits?", a_ru: ["Тающий кубик льда / сложный процент","Растущее дерево","Снежный ком с горы","Раскрывающийся цветок"], a_en: ["A melting ice cube / compound interest","A growing tree","A snowball rolling downhill","A blooming flower"], c: 0 },
      { q_ru: "Из чего состоит «петля привычки» (habit loop)?", q_en: "What makes up the \"habit loop\"?", a_ru: ["Сигнал, желание, реакция, награда","Цель, план, действие, итог","Мысль, эмоция, поступок, вывод","Начало, середина, конец"], a_en: ["Cue, craving, response, reward","Goal, plan, action, result","Thought, emotion, act, conclusion","Beginning, middle, end"], c: 0 },
      { q_ru: "Что советует автор для избавления от вредной привычки?", q_en: "What does the author recommend for breaking a bad habit?", a_ru: ["Сделать её незаметной, непривлекательной и сложной","Полностью игнорировать её","Заменить её другой вредной привычкой","Наказывать себя за неё"], a_en: ["Make it invisible, unattractive, and difficult","Ignore it completely","Replace it with another bad habit","Punish yourself for it"], c: 0 }
    ]
  },
  ishiguro: {
    title_ru: "«Не отпускай меня» (К. Исигуро)", title_en: "«Never Let Me Go» (K. Ishiguro)",
    questions: [
      { q_ru: "От чьего лица ведётся повествование?", q_en: "Who narrates the story?", a_ru: ["Кэти Эйч","Томми","Рут","Мисс Эмили"], a_en: ["Kathy H.","Tommy","Ruth","Miss Emily"], c: 0 },
      { q_ru: "Как зовут двух близких друзей Кэти?", q_en: "What are the names of Kathy's two close friends?", a_ru: ["Томми и Рут","Мэдам и Эмили","Джон и Питер","Крис и Рода"], a_en: ["Tommy and Ruth","Madame and Emily","John and Peter","Chris and Rhoda"], c: 0 },
      { q_ru: "Как называется школа-интернат, где выросли герои?", q_en: "What is the boarding school where the characters grew up called?", a_ru: ["Хейлшем","Хогвартс","Оверлук","Бракен"], a_en: ["Hailsham","Hogwarts","The Overlook","Bracken"], c: 0 },
      { q_ru: "Кем на самом деле являются воспитанники школы?", q_en: "What are the students actually revealed to be?", a_ru: ["Клонами, выращенными для донорства органов","Обычными сиротами","Юными шпионами","Будущими учителями"], a_en: ["Clones raised to donate their organs","Ordinary orphans","Young spies","Future teachers"], c: 0 },
      { q_ru: "Каким словом называют смерть донора после финальной операции?", q_en: "What term is used for a donor's death after the final operation?", a_ru: ["«Завершение» (completing)","«Пробуждение»","«Освобождение»","«Возрождение»"], a_en: ["\"Completing\"","\"Awakening\"","\"Liberation\"","\"Rebirth\""], c: 0 },
      { q_ru: "Во что верят герои насчёт настоящей любви и доноров?", q_en: "What do the characters believe about true love and donors?", a_ru: ["Что она может дать отсрочку донорства","Что она запрещена","Что она невозможна для клонов","Что она ускоряет донорство"], a_en: ["That it can grant a deferral from donations","That it is forbidden","That it's impossible for clones","That it speeds up donations"], c: 0 },
      { q_ru: "От кого воспитатели скрывают правду о будущем учеников?", q_en: "Who do the guardians hide the truth about the students' future from?", a_ru: ["От самих учеников","От родителей","От властей","От других школ"], a_en: ["From the students themselves","From the parents","From the authorities","From other schools"], c: 0 },
      { q_ru: "Зачем в Хейлшеме собирали творческие работы учеников для «Галереи»?", q_en: "Why did Hailsham collect the students' artwork for the \"Gallery\"?", a_ru: ["Чтобы доказать, что у клонов есть душа","Чтобы продавать картины","Чтобы находить таланты","Чтобы наказывать ленивых"], a_en: ["To prove that clones have souls","To sell the paintings","To find talented students","To punish lazy students"], c: 0 },
      { q_ru: "Каким увлечением известен Томми?", q_en: "What is Tommy known for?", a_ru: ["Рисованием животных","Игрой на пианино","Пением","Поэзией"], a_en: ["Drawing animals","Playing the piano","Singing","Poetry"], c: 0 },
      { q_ru: "В каком времени и месте происходит действие романа?", q_en: "When and where is the novel set?", a_ru: ["В альтернативной Англии конца XX века","В будущем Токио","В современном Нью-Йорке","В викторианском Лондоне"], a_en: ["In an alternate late-20th-century England","In future Tokyo","In modern-day New York","In Victorian London"], c: 0 }
    ]
  },
  pushkin_kapitanskaya: {
    title_ru: "«Капитанская дочка» (А. Пушкин)", title_en: "«The Captain's Daughter» (A. Pushkin)",
    questions: [
      { q_ru: "Как зовут главного героя?", q_en: "What is the protagonist's name?", a_ru: ["Пётр Гринёв","Алексей Швабрин","Емельян Пугачёв","Иван Зурин"], a_en: ["Pyotr Grinev","Alexei Shvabrin","Yemelyan Pugachev","Ivan Zurin"], c: 0 },
      { q_ru: "Как зовут капитанскую дочку, возлюбленную Гринёва?", q_en: "What is the name of the captain's daughter, Grinev's beloved?", a_ru: ["Маша Миронова","Катя Локтева","Татьяна Ларина","Наташа Ростова"], a_en: ["Masha Mironova","Katya Lokteva","Tatyana Larina","Natasha Rostova"], c: 0 },
      { q_ru: "На фоне какого исторического события разворачивается сюжет?", q_en: "What historical event forms the backdrop of the story?", a_ru: ["Восстание Пугачёва","Отечественная война 1812 года","Крымская война","Декабристское восстание"], a_en: ["Pugachev's Rebellion","The War of 1812","The Crimean War","The Decembrist uprising"], c: 0 },
      { q_ru: "Кто является соперником Гринёва и предателем?", q_en: "Who is Grinev's rival and a traitor?", a_ru: ["Швабрин","Зурин","Савельич","Пугачёв"], a_en: ["Shvabrin","Zurin","Savelich","Pugachev"], c: 0 },
      { q_ru: "Как зовут верного слугу Гринёва?", q_en: "What is the name of Grinev's loyal servant?", a_ru: ["Савельич","Осип","Захар","Селифан"], a_en: ["Savelich","Osip","Zakhar","Selifan"], c: 0 },
      { q_ru: "Что молодой Гринёв дарит случайному вожатому (позже — Пугачёву)?", q_en: "What does young Grinev give the chance guide (later revealed as Pugachev)?", a_ru: ["Заячий тулуп","Кошелёк с деньгами","Саблю","Часы"], a_en: ["A hareskin coat","A purse of money","A sabre","A watch"], c: 0 },
      { q_ru: "За кого выдаёт себя Пугачёв?", q_en: "Who does Pugachev claim to be?", a_ru: ["За царя Петра III","За царя Ивана Грозного","За атамана Разина","За самого себя"], a_en: ["Tsar Peter III","Tsar Ivan the Terrible","Ataman Razin","Just himself"], c: 0 },
      { q_ru: "В какой крепости служит Гринёв?", q_en: "Which fortress does Grinev serve at?", a_ru: ["Белогорская крепость","Оренбургская крепость","Петропавловская крепость","Кремль"], a_en: ["Belogorsk Fortress","Orenburg Fortress","Peter and Paul Fortress","The Kremlin"], c: 0 },
      { q_ru: "Какой завет отца сопровождает Гринёва по жизни?", q_en: "What paternal advice guides Grinev through life?", a_ru: ["«Береги честь смолоду»","«Не верь никому»","«Служи царю верно»","«Живи для себя»"], a_en: ["\"Take care of your honor from your youth\"","\"Trust no one\"","\"Serve the Tsar faithfully\"","\"Live for yourself\""], c: 0 },
      { q_ru: "К какому жанру относится произведение?", q_en: "What genre is the work?", a_ru: ["Историческая повесть","Ода","Комедия","Эпическая поэма"], a_en: ["Historical novella","Ode","Comedy","Epic poem"], c: 0 }
    ]
  },
  griboyedov: {
    title_ru: "«Горе от ума» (А. Грибоедов)", title_en: "«Woe from Wit» (A. Griboyedov)",
    questions: [
      { q_ru: "Как зовут главного героя?", q_en: "What is the protagonist's name?", a_ru: ["Александр Чацкий","Павел Фамусов","Алексей Молчалин","Сергей Скалозуб"], a_en: ["Alexander Chatsky","Pavel Famusov","Alexei Molchalin","Sergei Skalozub"], c: 0 },
      { q_ru: "Откуда возвращается Чацкий в начале пьесы?", q_en: "Where does Chatsky return from at the start of the play?", a_ru: ["Из-за границы (путешествия)","Из ссылки","Из армии","С охоты"], a_en: ["From abroad (traveling)","From exile","From the army","From a hunting trip"], c: 0 },
      { q_ru: "В кого влюблён Чацкий?", q_en: "Who is Chatsky in love with?", a_ru: ["В Софью Фамусову","В Лизу","В Наталью Дмитриевну","В княжну Тугоуховскую"], a_en: ["Sofia Famusova","Liza","Natalya Dmitrievna","Princess Tugoukhovskaya"], c: 0 },
      { q_ru: "Кто является отцом Софьи и хозяином дома?", q_en: "Who is Sofia's father and master of the house?", a_ru: ["Фамусов","Скалозуб","Молчалин","Репетилов"], a_en: ["Famusov","Skalozub","Molchalin","Repetilov"], c: 0 },
      { q_ru: "Кого предпочитает Софья вместо Чацкого?", q_en: "Who does Sofia favor instead of Chatsky?", a_ru: ["Молчалина","Скалозуба","Репетилова","Загорецкого"], a_en: ["Molchalin","Skalozub","Repetilov","Zagoretsky"], c: 0 },
      { q_ru: "Каким слухом московское общество «награждает» Чацкого?", q_en: "What rumor does Moscow society spread about Chatsky?", a_ru: ["Что он сошёл с ума","Что он вор","Что он шпион","Что он банкрот"], a_en: ["That he has gone mad","That he is a thief","That he is a spy","That he is bankrupt"], c: 0 },
      { q_ru: "В каком жанре и форме написана пьеса?", q_en: "In what genre and form is the play written?", a_ru: ["Комедия в стихах","Трагедия в прозе","Роман в стихах","Ода"], a_en: ["A comedy in verse","A tragedy in prose","A novel in verse","An ode"], c: 0 },
      { q_ru: "Где разворачивается действие пьесы?", q_en: "Where does the play take place?", a_ru: ["В московском светском обществе","В Петербурге","В деревне","За границей"], a_en: ["In Moscow high society","In St. Petersburg","In the countryside","Abroad"], c: 0 },
      { q_ru: "Кем является Скалозуб?", q_en: "Who is Skalozub?", a_ru: ["Военный полковник, желанный жених для Софьи","Дядя Чацкого","Слуга Фамусова","Учитель Софьи"], a_en: ["A military colonel, a desirable match for Sofia","Chatsky's uncle","Famusov's servant","Sofia's tutor"], c: 0 },
      { q_ru: "О чём известная фраза Молчалина «служить бы рад — прислуживаться тошно» на самом деле говорит от лица Чацкого?", q_en: "What theme does the famous line \"I'd be glad to serve, but being subservient is sickening\" (spoken by Chatsky) express?", a_ru: ["Критику подобострастия и карьеризма в чиновничестве","Любовь к военной службе","Желание разбогатеть","Тоску по путешествиям"], a_en: ["A critique of servility and careerism among officials","A love of military service","A desire to get rich","Longing to travel"], c: 0 }
    ]
  },
  fonvizin: {
    title_ru: "«Недоросль» (Д. Фонвизин)", title_en: "«The Minor» (D. Fonvizin)",
    questions: [
      { q_ru: "Как зовут главного героя-недоросля?", q_en: "What is the name of the ignorant young protagonist?", a_ru: ["Митрофанушка","Стародум","Скотинин","Правдин"], a_en: ["Mitrofanushka","Starodum","Skotinin","Pravdin"], c: 0 },
      { q_ru: "Как зовут мать Митрофана?", q_en: "What is Mitrofan's mother's name?", a_ru: ["Госпожа Простакова","Госпожа Скотинина","Софья","Еремеевна"], a_en: ["Mrs. Prostakova","Mrs. Skotinina","Sofia","Eremeevna"], c: 0 },
      { q_ru: "Какую знаменитую фразу произносит Митрофан?", q_en: "What famous line does Mitrofan say?", a_ru: ["«Не хочу учиться, хочу жениться»","«Служить бы рад»","«Быть или не быть»","«Что делать?»"], a_en: ["\"I don't want to study, I want to get married\"","\"I'd be glad to serve\"","\"To be or not to be\"","\"What is to be done?\""], c: 0 },
      { q_ru: "Кто является положительным героем-резонёром, наставником Софьи?", q_en: "Who is the positive, wise mentor figure who guides Sofia?", a_ru: ["Стародум","Скотинин","Митрофан","Вральман"], a_en: ["Starodum","Skotinin","Mitrofan","Vralman"], c: 0 },
      { q_ru: "На ком хочет жениться Митрофан (и его дядя тоже претендует)?", q_en: "Who does Mitrofan want to marry (also sought by his uncle)?", a_ru: ["На Софье, богатой наследнице","На Еремеевне","На дочке Скотинина","На служанке"], a_en: ["Sofia, a rich heiress","Eremeevna","Skotinin's daughter","A maidservant"], c: 0 },
      { q_ru: "К какому направлению относится пьеса?", q_en: "What literary movement does the play belong to?", a_ru: ["Классицизм XVIII века","Романтизм XIX века","Реализм XX века","Модернизм"], a_en: ["18th-century Classicism","19th-century Romanticism","20th-century Realism","Modernism"], c: 0 },
      { q_ru: "Что высмеивает пьеса?", q_en: "What does the play satirize?", a_ru: ["Дурное дворянское воспитание и невежество","Крестьянский быт","Городскую бюрократию","Военную службу"], a_en: ["Poor noble upbringing and ignorance","Peasant life","Urban bureaucracy","Military service"], c: 0 },
      { q_ru: "Что происходит с поместьем Простаковой в финале?", q_en: "What happens to Prostakova's estate at the end?", a_ru: ["Его берут под опеку за жестокое обращение с крестьянами","Его выигрывает в карты Скотинин","Оно сгорает","Его продают"], a_en: ["It is put under guardianship due to abuse of the serfs","Skotinin wins it in a card game","It burns down","It is sold"], c: 0 },
      { q_ru: "Как зовут отставного солдата, обучающего Митрофана арифметике?", q_en: "What is the name of the retired soldier who teaches Mitrofan arithmetic?", a_ru: ["Цыфиркин","Кутейкин","Вральман","Правдин"], a_en: ["Tsyfirkin","Kuteikin","Vralman","Pravdin"], c: 0 },
      { q_ru: "В каком веке была написана и происходит пьеса?", q_en: "In what century was the play written and set?", a_ru: ["XVIII век","XVII век","XIX век","XX век"], a_en: ["18th century","17th century","19th century","20th century"], c: 0 }
    ]
  },
  wilde: {
    title_ru: "«Портрет Дориана Грея» (О. Уайльд)", title_en: "«The Picture of Dorian Gray» (O. Wilde)",
    questions: [
      { q_ru: "Как зовут главного героя?", q_en: "What is the protagonist's name?", a_ru: ["Дориан Грей","Бэзил Холлуорд","Лорд Генри","Алан Кэмпбелл"], a_en: ["Dorian Gray","Basil Hallward","Lord Henry","Alan Campbell"], c: 0 },
      { q_ru: "Кто пишет портрет Дориана?", q_en: "Who paints Dorian's portrait?", a_ru: ["Бэзил Холлуорд","Лорд Генри Уоттон","Сибилла Вэйн","Алан Кэмпбелл"], a_en: ["Basil Hallward","Lord Henry Wotton","Sibyl Vane","Alan Campbell"], c: 0 },
      { q_ru: "Кто становится циничным наставником Дориана?", q_en: "Who becomes Dorian's cynical mentor?", a_ru: ["Лорд Генри Уоттон","Бэзил Холлуорд","Джеймс Вэйн","Виктор"], a_en: ["Lord Henry Wotton","Basil Hallward","James Vane","Victor"], c: 0 },
      { q_ru: "Что стареет и меняется вместо самого Дориана?", q_en: "What ages and changes instead of Dorian himself?", a_ru: ["Его портрет","Его дом","Его перчатки","Его сад"], a_en: ["His portrait","His house","His gloves","His garden"], c: 0 },
      { q_ru: "Как зовут актрису, в которую влюбляется и которую губит Дориан?", q_en: "What is the name of the actress Dorian falls for and ruins?", a_ru: ["Сибилла Вэйн","Гвендолен","Эстелла","Аделина"], a_en: ["Sibyl Vane","Gwendolen","Estella","Adelina"], c: 0 },
      { q_ru: "Кого убивает Дориан в порыве ярости?", q_en: "Who does Dorian kill in a fit of rage?", a_ru: ["Бэзила Холлуорда","Лорда Генри","Джеймса Вэйна","Алана Кэмпбелла"], a_en: ["Basil Hallward","Lord Henry","James Vane","Alan Campbell"], c: 0 },
      { q_ru: "Что делает Дориан в финале с портретом?", q_en: "What does Dorian do to the portrait at the end?", a_ru: ["Пронзает его ножом","Сжигает его","Продаёт его","Прячет навсегда"], a_en: ["He stabs it with a knife","He burns it","He sells it","He hides it forever"], c: 0 },
      { q_ru: "Что происходит с Дорианом после уничтожения портрета?", q_en: "What happens to Dorian after he destroys the portrait?", a_ru: ["Он умирает, состарившись и обезобразившись","Он молодеет","Он становится невидимым","Ничего не меняется"], a_en: ["He dies, aged and disfigured","He becomes young again","He becomes invisible","Nothing changes"], c: 0 },
      { q_ru: "Каков литературный жанр/направление романа?", q_en: "What is the novel's literary movement?", a_ru: ["Эстетизм / декаданс","Реализм","Соцреализм","Сентиментализм"], a_en: ["Aestheticism / Decadence","Realism","Socialist Realism","Sentimentalism"], c: 0 },
      { q_ru: "Какой национальности автор романа?", q_en: "What was the author's nationality?", a_ru: ["Ирландец","Англичанин","Шотландец","Американец"], a_en: ["Irish","English","Scottish","American"], c: 0 }
    ]
  },
  korolenko: {
    title_ru: "«Дети подземелья» (В. Короленко)", title_en: "«The Children of the Underground» (V. Korolenko)",
    questions: [
      { q_ru: "От чьего лица ведётся повествование?", q_en: "Who is the narrator of the story?", a_ru: ["Мальчика Васи","Девочки Маруси","Судьи, отца Васи","Тыбурция"], a_en: ["The boy Vasya","The girl Marusya","The judge, Vasya's father","Tyburtsy"], c: 0 },
      { q_ru: "Кем работает отец Васи?", q_en: "What is Vasya's father's profession?", a_ru: ["Судья","Врач","Священник","Учитель"], a_en: ["A judge","A doctor","A priest","A teacher"], c: 0 },
      { q_ru: "Как зовут детей, живущих в подземелье?", q_en: "What are the names of the children living underground?", a_ru: ["Валек и Маруся","Петя и Соня","Гриша и Оля","Костя и Настя"], a_en: ["Valek and Marusya","Petya and Sonya","Grisha and Olya","Kostya and Nastya"], c: 0 },
      { q_ru: "Кто присматривает за детьми подземелья, их старший защитник?", q_en: "Who looks after the underground children as their elder protector?", a_ru: ["Пан Тыбурций","Судья","Валек","Учитель"], a_en: ["Pan Tyburtsy","The judge","Valek","A teacher"], c: 0 },
      { q_ru: "Что происходит с Марусей к концу повести?", q_en: "What happens to Marusya by the end of the story?", a_ru: ["Она умирает от болезни","Она выздоравливает","Она уезжает в город","Она находит семью"], a_en: ["She dies of illness","She recovers","She moves to the city","She finds a family"], c: 0 },
      { q_ru: "Что Вася дарит больной Марусе, чтобы её порадовать?", q_en: "What does Vasya give sick Marusya to comfort her?", a_ru: ["Куклу своей покойной матери","Игрушечную лошадку","Книгу","Свои сапоги"], a_en: ["His late mother's doll","A toy horse","A book","His boots"], c: 0 },
      { q_ru: "Какова главная тема повести?", q_en: "What is the story's main theme?", a_ru: ["Сострадание, стирающее социальные барьеры","Войну и мир","Научные открытия","Спортивные соревнования"], a_en: ["Compassion crossing social barriers","War and peace","Scientific discovery","Sports competition"], c: 0 },
      { q_ru: "Какими были отношения Васи с отцом в начале повести?", q_en: "What were Vasya's relations with his father like at the start?", a_ru: ["Холодными, полными непонимания","Очень тёплыми","Отец был в отъезде","Отец не знал о его существовании"], a_en: ["Cold, full of misunderstanding","Very warm","The father was away","The father didn't know he existed"], c: 0 },
      { q_ru: "Где происходит действие повести?", q_en: "Where is the story set?", a_ru: ["В провинциальном городке (Волынь)","В Петербурге","В Москве","За границей"], a_en: ["In a provincial town (Volhynia)","In St. Petersburg","In Moscow","Abroad"], c: 0 },
      { q_ru: "К какому жанру относится произведение?", q_en: "What genre is the work?", a_ru: ["Повесть (рассказ)","Роман","Поэма","Пьеса"], a_en: ["A novella/short story","A novel","A narrative poem","A play"], c: 0 }
    ]
  },
  carroll: {
    title_ru: "«Приключения Алисы в Стране чудес» (Л. Кэрролл)", title_en: "«Alice's Adventures in Wonderland» (L. Carroll)",
    questions: [
      { q_ru: "Как зовут главную героиню?", q_en: "What is the protagonist's name?", a_ru: ["Алиса","Мэри","Дороти","Венди"], a_en: ["Alice","Mary","Dorothy","Wendy"], c: 0 },
      { q_ru: "За кем Алиса следует в кроличью нору?", q_en: "Who does Alice follow down the rabbit hole?", a_ru: ["За Белым Кроликом","За Чеширским Котом","За Синей Гусеницей","За Королевой"], a_en: ["The White Rabbit","The Cheshire Cat","The Blue Caterpillar","The Queen"], c: 0 },
      { q_ru: "Что заставляет Алису уменьшаться и увеличиваться?", q_en: "What makes Alice shrink and grow?", a_ru: ["Напиток «Выпей меня» и пирожок «Съешь меня»","Волшебная палочка","Зеркало","Гриб феи"], a_en: ["The \"Drink Me\" bottle and \"Eat Me\" cake","A magic wand","A mirror","A fairy's mushroom"], c: 0 },
      { q_ru: "Кто устраивает знаменитое чаепитие?", q_en: "Who hosts the famous tea party?", a_ru: ["Безумный Шляпник","Чеширский Кот","Белый Кролик","Гусеница"], a_en: ["The Mad Hatter","The Cheshire Cat","The White Rabbit","The Caterpillar"], c: 0 },
      { q_ru: "Кто постоянно кричит «Голову с плеч!»?", q_en: "Who constantly shouts \"Off with their heads!\"?", a_ru: ["Червонная Королева","Белая Королева","Герцогиня","Валет Червей"], a_en: ["The Queen of Hearts","The White Queen","The Duchess","The Knave of Hearts"], c: 0 },
      { q_ru: "Во что играют фламинго и ежами вместо клюшек и мячей?", q_en: "What game do they play using flamingos and hedgehogs instead of mallets and balls?", a_ru: ["Крокет","Гольф","Крикет","Теннис"], a_en: ["Croquet","Golf","Cricket","Tennis"], c: 0 },
      { q_ru: "Какой персонаж исчезает, оставляя лишь улыбку?", q_en: "Which character disappears, leaving only its grin?", a_ru: ["Чеширский Кот","Белый Кролик","Синяя Гусеница","Мартовский Заяц"], a_en: ["The Cheshire Cat","The White Rabbit","The Blue Caterpillar","The March Hare"], c: 0 },
      { q_ru: "Кого судят в финале за кражу пирожков?", q_en: "Who is put on trial at the end for stealing tarts?", a_ru: ["Валета Червей","Белого Кролика","Чеширского Кота","Безумного Шляпника"], a_en: ["The Knave of Hearts","The White Rabbit","The Cheshire Cat","The Mad Hatter"], c: 0 },
      { q_ru: "Каково настоящее имя автора, Льюиса Кэрролла?", q_en: "What was Lewis Carroll's real name?", a_ru: ["Чарльз Латуидж Доджсон","Джон Рональд Толкин","Джеймс Барри","Кеннет Грэм"], a_en: ["Charles Lutwidge Dodgson","John Ronald Tolkien","James Barrie","Kenneth Grahame"], c: 0 },
      { q_ru: "Кем ещё, помимо писателя, был Льюис Кэрролл?", q_en: "What else was Lewis Carroll besides a writer?", a_ru: ["Математиком","Врачом","Военным","Архитектором"], a_en: ["A mathematician","A doctor","A soldier","An architect"], c: 0 }
    ]
  },
  lermontov_mtsyri: {
    title_ru: "«Мцыри» (М. Лермонтов)", title_en: "«Mtsyri» (M. Lermontov)",
    questions: [
      { q_ru: "Кто главный герой поэмы?", q_en: "Who is the protagonist of the poem?", a_ru: ["Мцыри, юный послушник","Печорин","Демон","Максим Максимыч"], a_en: ["Mtsyri, a young novice","Pechorin","The Demon","Maksim Maksimych"], c: 0 },
      { q_ru: "Где вырос Мцыри?", q_en: "Where did Mtsyri grow up?", a_ru: ["В монастыре","В крепости","В деревне","При дворе"], a_en: ["In a monastery","In a fortress","In a village","At court"], c: 0 },
      { q_ru: "Что стремится увидеть Мцыри?", q_en: "What does Mtsyri long to see?", a_ru: ["Родной Кавказ","Море","Петербург","Москву"], a_en: ["His native Caucasus","The sea","St. Petersburg","Moscow"], c: 0 },
      { q_ru: "Что делает Мцыри в основе сюжета?", q_en: "What does Mtsyri do, driving the plot?", a_ru: ["Бежит из монастыря на три дня","Становится монахом","Женится","Идёт на войну"], a_en: ["He escapes the monastery for three days","He becomes a monk","He gets married","He goes to war"], c: 0 },
      { q_ru: "С каким зверем сражается Мцыри?", q_en: "What animal does Mtsyri fight?", a_ru: ["С барсом (леопардом)","С волком","С медведем","С орлом"], a_en: ["A snow leopard","A wolf","A bear","An eagle"], c: 0 },
      { q_ru: "В какой литературной форме написано произведение?", q_en: "In what literary form is the work written?", a_ru: ["Поэма (лиро-эпическая)","Роман","Пьеса","Рассказ"], a_en: ["A narrative (lyric-epic) poem","A novel","A play","A short story"], c: 0 },
      { q_ru: "Чем заканчивается судьба Мцыри?", q_en: "How does Mtsyri's fate end?", a_ru: ["Он умирает, ослабев, вернувшись в монастырь","Он остаётся жить на Кавказе","Он становится монахом добровольно","Он находит семью"], a_en: ["He dies, weakened, back at the monastery","He goes on to live in the Caucasus","He willingly becomes a monk","He finds his family"], c: 0 },
      { q_ru: "Какова главная тема поэмы?", q_en: "What is the poem's central theme?", a_ru: ["Свобода против неволи","Дружба и предательство","Богатство и бедность","Наука и вера"], a_en: ["Freedom versus captivity","Friendship and betrayal","Wealth and poverty","Science and faith"], c: 0 },
      { q_ru: "В каком регионе происходит действие?", q_en: "In what region is the poem set?", a_ru: ["На Кавказе","В Крыму","На Урале","В Сибири"], a_en: ["In the Caucasus","In Crimea","In the Urals","In Siberia"], c: 0 },
      { q_ru: "Как Мцыри попал в монастырь ребёнком?", q_en: "How did Mtsyri end up at the monastery as a child?", a_ru: ["Русский генерал привёз его пленным ребёнком","Его отдали родители","Он сирота из соседней деревни","Он сам пришёл проситься в монахи"], a_en: ["A Russian general brought him there as a captive child","His parents gave him up","He was an orphan from a nearby village","He came asking to become a monk himself"], c: 0 }
    ]
  },
  tolstoy_voskresenie: {
    title_ru: "«Воскресение» (Л. Толстой)", title_en: "«Resurrection» (L. Tolstoy)",
    questions: [
      { q_ru: "Как зовут главного героя-дворянина?", q_en: "What is the name of the noble protagonist?", a_ru: ["Нехлюдов","Пьер Безухов","Левин","Каренин"], a_en: ["Nekhlyudov","Pierre Bezukhov","Levin","Karenin"], c: 0 },
      { q_ru: "Как зовут женщину, которую он когда-то соблазнил и предал?", q_en: "What is the name of the woman he once seduced and betrayed?", a_ru: ["Катюша Маслова","Анна Каренина","Наташа Ростова","Кити Щербацкая"], a_en: ["Katyusha Maslova","Anna Karenina","Natasha Rostova","Kitty Shcherbatskaya"], c: 0 },
      { q_ru: "Где Нехлюдов вновь встречает Маслову?", q_en: "Where does Nekhlyudov meet Maslova again?", a_ru: ["На суде, будучи присяжным","На балу","В церкви","В деревне"], a_en: ["In court, as a juror","At a ball","In church","In the countryside"], c: 0 },
      { q_ru: "В чём обвиняют Маслову на суде?", q_en: "What is Maslova accused of at the trial?", a_ru: ["В отравлении клиента (убийстве)","В воровстве","В измене родине","В мошенничестве"], a_en: ["Poisoning a client (murder)","Theft","Treason","Fraud"], c: 0 },
      { q_ru: "Что делает Нехлюдов в знак раскаяния?", q_en: "What does Nekhlyudov do out of repentance?", a_ru: ["Едет за ней в Сибирь и пытается помочь","Уезжает за границу","Игнорирует её","Мстит судьям"], a_en: ["He follows her to Siberia and tries to help her","He goes abroad","He ignores her","He takes revenge on the judges"], c: 0 },
      { q_ru: "Какой приговор выносят Масловой (по судебной ошибке)?", q_en: "What sentence is Maslova wrongly given?", a_ru: ["Каторга/ссылка в Сибирь","Оправдание","Смертная казнь","Штраф"], a_en: ["Penal servitude/exile to Siberia","Acquittal","The death penalty","A fine"], c: 0 },
      { q_ru: "Что символизирует название «Воскресение»?", q_en: "What does the title \"Resurrection\" symbolize?", a_ru: ["Духовное перерождение героев","Религиозный праздник","Возвращение из ссылки","Чудо исцеления"], a_en: ["The characters' spiritual rebirth","A religious holiday","Return from exile","A miraculous healing"], c: 0 },
      { q_ru: "Что критикует роман?", q_en: "What does the novel criticize?", a_ru: ["Судебную систему, тюрьмы и лицемерие церкви","Военную реформу","Крепостное право","Иностранную политику"], a_en: ["The justice system, prisons, and church hypocrisy","Military reform","Serfdom","Foreign policy"], c: 0 },
      { q_ru: "Кто автор романа?", q_en: "Who wrote the novel?", a_ru: ["Лев Толстой","Фёдор Достоевский","Иван Тургенев","Антон Чехов"], a_en: ["Leo Tolstoy","Fyodor Dostoevsky","Ivan Turgenev","Anton Chekhov"], c: 0 },
      { q_ru: "Каким по счёту крупным романом Толстого является «Воскресение»?", q_en: "What was \"Resurrection\" in Tolstoy's body of work?", a_ru: ["Его последним крупным романом","Его первым романом","Его единственным романом","Его ранней повестью"], a_en: ["His last major novel","His first novel","His only novel","An early novella"], c: 0 }
    ]
  },
  king_shining: {
    title_ru: "«Сияние» (С. Кинг)", title_en: "«The Shining» (S. King)",
    questions: [
      { q_ru: "Как зовут писателя, ставшего смотрителем отеля?", q_en: "What is the name of the writer who becomes the hotel's caretaker?", a_ru: ["Джек Торранс","Дик Холлоранн","Стюарт Уллман","Уотсон"], a_en: ["Jack Torrance","Dick Hallorann","Stuart Ullman","Watson"], c: 0 },
      { q_ru: "Как называется отель, где происходит действие?", q_en: "What is the hotel where the story takes place called?", a_ru: ["«Оверлук»","«Времена года»","«Метрополь»","«Плаза»"], a_en: ["The Overlook Hotel","The Seasons","The Metropole","The Plaza"], c: 0 },
      { q_ru: "Как зовут сына Джека с даром «сияния»?", q_en: "What is the name of Jack's son who has the \"shining\" gift?", a_ru: ["Дэнни","Тони","Гэйдж","Марк"], a_en: ["Danny","Tony","Gage","Mark"], c: 0 },
      { q_ru: "Как зовут воображаемого друга Дэнни, олицетворяющего его дар?", q_en: "What is the name of Danny's imaginary friend representing his gift?", a_ru: ["Тони","Дик","Хэлло","Джим"], a_en: ["Tony","Dick","Hello","Jim"], c: 0 },
      { q_ru: "Как зовут жену Джека?", q_en: "What is Jack's wife's name?", a_ru: ["Уэнди","Вера","Джанет","Кэрри"], a_en: ["Wendy","Vera","Janet","Carrie"], c: 0 },
      { q_ru: "Как зовут повара отеля, обладающего похожим даром?", q_en: "What is the name of the hotel's cook, who shares a similar gift?", a_ru: ["Дик Холлоранн","Стюарт Уллман","Уотсон","Грейди"], a_en: ["Dick Hallorann","Stuart Ullman","Watson","Grady"], c: 0 },
      { q_ru: "Какую должность занимает Джек в отеле?", q_en: "What role does Jack take on at the hotel?", a_ru: ["Зимний смотритель","Директор","Повар","Садовник"], a_en: ["Winter caretaker","Manager","Cook","Groundskeeper"], c: 0 },
      { q_ru: "Какую фразу Джек навязчиво печатает на машинке?", q_en: "What phrase does Jack obsessively type on the typewriter?", a_ru: ["«Одна лишь работа без забав ум Джека затупляет» (All work and no play...)","«Помоги мне»","«Беги отсюда»","«Я тебя люблю»"], a_en: ["\"All work and no play makes Jack a dull boy\"","\"Help me\"","\"Run away\"","\"I love you\""], c: 0 },
      { q_ru: "Какая комната отеля считается особенно опасной в романе?", q_en: "Which hotel room is considered especially dangerous in the novel?", a_ru: ["№217","№101","№13","№404"], a_en: ["Room 217","Room 101","Room 13","Room 404"], c: 0 },
      { q_ru: "Что в итоге уничтожает отель «Оверлук»?", q_en: "What ultimately destroys the Overlook Hotel?", a_ru: ["Взрыв старого котла","Пожар от молнии","Наводнение","Землетрясение"], a_en: ["An old boiler explosion","A lightning-caused fire","A flood","An earthquake"], c: 0 }
    ]
  },
  king_petsematary: {
    title_ru: "«Кладбище домашних животных» (С. Кинг)", title_en: "«Pet Sematary» (S. King)",
    questions: [
      { q_ru: "Как зовут семью, переехавшую в дом у кладбища?", q_en: "What is the name of the family who moves in near the cemetery?", a_ru: ["Крид","Крэндалл","Торранс","Гордон"], a_en: ["Creed","Crandall","Torrance","Gordon"], c: 0 },
      { q_ru: "Кем работает глава семьи, Луис?", q_en: "What is the father, Louis, profession?", a_ru: ["Врач","Учитель","Юрист","Полицейский"], a_en: ["A doctor","A teacher","A lawyer","A police officer"], c: 0 },
      { q_ru: "Что способно возвращать к жизни древнее кладбище за детским кладбищем?", q_en: "What can the ancient burial ground beyond the pet cemetery do?", a_ru: ["Воскрешать умерших, но изменёнными","Исцелять больных","Предсказывать будущее","Останавливать время"], a_en: ["Bring the dead back, but changed","Heal the sick","Predict the future","Stop time"], c: 0 },
      { q_ru: "Как зовут кота семьи, которого хоронят первым?", q_en: "What is the name of the family cat who is buried first?", a_ru: ["Черч (Черчилль)","Феликс","Гарфилд","Том"], a_en: ["Church (Churchill)","Felix","Garfield","Tom"], c: 0 },
      { q_ru: "Кто открывает Луису тайну древнего кладбища?", q_en: "Who reveals the secret of the ancient burial ground to Louis?", a_ru: ["Сосед Джад Крэндалл","Жена Рэйчел","Дочь Элли","Незнакомец"], a_en: ["Neighbor Jud Crandall","His wife Rachel","His daughter Ellie","A stranger"], c: 0 },
      { q_ru: "Какая трагедия происходит с маленьким сыном Луиса?", q_en: "What tragedy happens to Louis's young son?", a_ru: ["Гейджа сбивает грузовик","Он заболевает","Он тонет","Он теряется"], a_en: ["Gage is hit by a truck","He falls ill","He drowns","He gets lost"], c: 0 },
      { q_ru: "Что делает Луис из горя после смерти сына?", q_en: "What does Louis do out of grief after his son's death?", a_ru: ["Хоронит его на древнем кладбище, чтобы вернуть","Уезжает навсегда","Обращается к психиатру","Сжигает дом"], a_en: ["He buries him at the ancient ground to bring him back","He leaves forever","He sees a psychiatrist","He burns down the house"], c: 0 },
      { q_ru: "Какая известная фраза романа?", q_en: "What is the novel's famous line?", a_ru: ["«Иногда мёртвым лучше оставаться мёртвыми»","«Я вернусь»","«Беги, пока можешь»","«Смерть — не конец»"], a_en: ["\"Sometimes dead is better\"","\"I'll be back\"","\"Run while you can\"","\"Death is not the end\""], c: 0 },
      { q_ru: "Что находится за кладбищем домашних животных в лесу?", q_en: "What lies beyond the pet cemetery in the woods?", a_ru: ["Древнее индейское (микмакское) захоронение","Заброшенная шахта","Пещера","Озеро"], a_en: ["An ancient Micmac burial ground","An abandoned mine","A cave","A lake"], c: 0 },
      { q_ru: "Кто автор романа?", q_en: "Who wrote the novel?", a_ru: ["Стивен Кинг","Дин Кунц","Клайв Баркер","Питер Страуб"], a_en: ["Stephen King","Dean Koontz","Clive Barker","Peter Straub"], c: 0 }
    ]
  },
  hailey: {
    title_ru: "«На грани катастрофы» (А. Хейли)", title_en: "«Flight Into Danger» (A. Hailey)",
    questions: [
      { q_ru: "Какая авиакомпания выполняет злополучный рейс?", q_en: "What airline operates the ill-fated flight?", a_ru: ["Maple Leaf Airlines","Cross Canada Airlines","Air Vancouver","Pacific Air"], a_en: ["Maple Leaf Airlines","Cross Canada Airlines","Air Vancouver","Pacific Air"], c: 0 },
      { q_ru: "Куда летит самолёт с болельщиками?", q_en: "Where is the plane full of football fans headed?", a_ru: ["Из Виннипега в Ванкувер","Из Торонто в Монреаль","Из Лондона в Париж","Из Чикаго в Нью-Йорк"], a_en: ["From Winnipeg to Vancouver","From Toronto to Montreal","From London to Paris","From Chicago to New York"], c: 0 },
      { q_ru: "Чем отравились пассажиры и пилоты?", q_en: "What food poisons the passengers and pilots?", a_ru: ["Рыбным блюдом на борту","Курицей","Несвежим салатом","Водой"], a_en: ["A fish dish served on board","Chicken","Bad salad","The water"], c: 0 },
      { q_ru: "Кто из пассажиров вынужден сесть за штурвал?", q_en: "Which passenger is forced to take the controls?", a_ru: ["Джон Спенсер","Капитан Данн","Доктор Бэрд","Второй пилот"], a_en: ["John Spencer","Captain Dunn","Dr. Baird","The co-pilot"], c: 0 },
      { q_ru: "Каким военным опытом обладал пассажир, посадивший самолёт?", q_en: "What wartime experience did the passenger who lands the plane have?", a_ru: ["Он был военным лётчиком-истребителем","Он был штурманом бомбардировщика","У него не было лётного опыта","Он был авиадиспетчером"], a_en: ["He had been a wartime fighter pilot","He had been a bomber navigator","He had no flying experience at all","He had been an air traffic controller"], c: 0 },
      { q_ru: "Кто из экипажа помогает ему в кабине пилотов?", q_en: "Who from the crew assists him in the cockpit?", a_ru: ["Стюардесса","Второй пилот","Механик","Диспетчер на борту"], a_en: ["The stewardess","The co-pilot","A mechanic","An onboard controller"], c: 0 },
      { q_ru: "Кто с земли по рации инструктирует, как посадить самолёт?", q_en: "Who instructs him by radio from the ground on how to land the plane?", a_ru: ["Опытный лётчик-инструктор авиакомпании","Диспетчер аэропорта без лётного опыта","Полиция","Врач"], a_en: ["An experienced airline pilot-instructor","An airport controller with no flying background","The police","A doctor"], c: 0 },
      { q_ru: "Кто ставит диагноз пищевого отравления на борту?", q_en: "Who diagnoses the food poisoning on board?", a_ru: ["Врач, оказавшийся среди пассажиров","Стюардесса","Второй пилот","Механик аэропорта"], a_en: ["A doctor who happens to be among the passengers","The stewardess","The co-pilot","An airport mechanic"], c: 0 },
      { q_ru: "Кто является соавтором романа вместе с Артуром Хейли?", q_en: "Who co-wrote the novel with Arthur Hailey?", a_ru: ["Джон Касл","Джеймс Клавелл","Робертс Сёрлинг","Дуглас Рид"], a_en: ["John Castle","James Clavell","Robert Serling","Douglas Reed"], c: 0 },
      { q_ru: "Под каким названием роман вышел в США?", q_en: "Under what title was the novel published in the US?", a_ru: ["«Runway Zero-Eight»","«Zero Hour»","«Terror in the Sky»","«Mayday»"], a_en: ["\"Runway Zero-Eight\"","\"Zero Hour\"","\"Terror in the Sky\"","\"Mayday\""], c: 0 }
    ]
  }
};

// Quiz options for select dropdown - maps book IDs to quiz keys
const bookQuizMap = {
  0: { key: "harry_potter", label_ru: "<span class='icon icon-lightning' role='img' aria-label='молния'></span> ВСЯ СЕРИЯ: «Гарри Поттер»", label_en: "<span class='icon icon-lightning' role='img' aria-label='молния'></span> FULL SERIES: «Harry Potter»" },
  1: { key: "zamyatin", label_ru: "«Мы» (Евгений Замятин)", label_en: "«We» (Yevgeny Zamyatin)" },
  2: { key: "turgenev", label_ru: "«Отцы и дети» (Иван Тургенев)", label_en: "«Fathers and Sons» (Ivan Turgenev)" },
  3: { key: "lermontov", label_ru: "«Герой нашего времени» (Михаил Лермонтов)", label_en: "«A Hero of Our Time» (Mikhail Lermontov)" },
  4: { key: "golding", label_ru: "«Повелитель мух» (Уильям Голдинг)", label_en: "«Lord of the Flies» (William Golding)" },
  5: { key: "pushkin_onegin", label_ru: "«Евгений Онегин» (Александр Пушкин)", label_en: "«Eugene Onegin» (Alexander Pushkin)" },
  6: { key: "gogol", label_ru: "«Мёртвые души» (Николай Гоголь)", label_en: "«Dead Souls» (Nikolai Gogol)" },
  7: { key: "keyes", label_ru: "«Цветы для Элджернона» (Дэниэл Киз)", label_en: "«Flowers for Algernon» (Daniel Keyes)" },
  8: { key: "salinger", label_ru: "«Над пропастью во ржи» (Дж. Д. Сэлинджер)", label_en: "«The Catcher in the Rye» (J. D. Salinger)" },
  9: { key: "leskov", label_ru: "«Левша» (Николай Лесков)", label_en: "«The Steel Flea» (Nikolai Leskov)" },
  10: { key: "gogol_tarasbulba", label_ru: "«Тарас Бульба» (Николай Гоголь)", label_en: "«Taras Bulba» (Nikolai Gogol)" },
  11: { key: "westdragon", label_ru: "«Повелитель драконов» (Трейси Уэст)", label_en: "«Dragon Masters» (Tracey West)" },
  12: { key: "gogol_revizor", label_ru: "«Ревизор» (Николай Гоголь)", label_en: "«The Government Inspector» (Nikolai Gogol)" },
  13: { key: "clear_habits", label_ru: "«Атомные привычки» (Джеймс Клир)", label_en: "«Atomic Habits» (James Clear)" },
  14: { key: "ishiguro", label_ru: "«Не отпускай меня» (Кадзуо Исигуро)", label_en: "«Never Let Me Go» (Kazuo Ishiguro)" },
  15: { key: "pushkin_kapitanskaya", label_ru: "«Капитанская дочка» (Александр Пушкин)", label_en: "«The Captain's Daughter» (Alexander Pushkin)" },
  16: { key: "griboyedov", label_ru: "«Горе от ума» (Александр Грибоедов)", label_en: "«Woe from Wit» (Alexander Griboyedov)" },
  17: { key: "fonvizin", label_ru: "«Недоросль» (Денис Фонвизин)", label_en: "«The Minor» (Denis Fonvizin)" },
  18: { key: "wilde", label_ru: "«Портрет Дориана Грея» (Оскар Уайльд)", label_en: "«The Picture of Dorian Gray» (Oscar Wilde)" },
  19: { key: "korolenko", label_ru: "«Дети подземелья» (Владимир Короленко)", label_en: "«The Children of the Underground» (Vladimir Korolenko)" },
  20: { key: "carroll", label_ru: "«Приключения Алисы в Стране чудес» (Льюис Кэрролл)", label_en: "«Alice's Adventures in Wonderland» (Lewis Carroll)" },
  21: { key: "lermontov_mtsyri", label_ru: "«Мцыри» (Михаил Лермонтов)", label_en: "«Mtsyri» (Mikhail Lermontov)" },
  22: { key: "tolstoy_voskresenie", label_ru: "«Воскресение» (Лев Толстой)", label_en: "«Resurrection» (Leo Tolstoy)" },
  23: { key: "king_shining", label_ru: "«Сияние» (Стивен Кинг)", label_en: "«The Shining» (Stephen King)" },
  24: { key: "king_petsematary", label_ru: "«Кладбище домашних животных» (Стивен Кинг)", label_en: "«Pet Sematary» (Stephen King)" },
  25: { key: "hailey", label_ru: "«На грани катастрофы» (Артур Хейли)", label_en: "«Flight Into Danger» (Arthur Hailey)" }
};


// ============ STATE ============
let currentLang = 'ru';
let cart = [];
let selectedRating = 0;
let currentQuiz = null;
let currentQuizIdx = 0;
let quizScore = 0;
let quizAnswered = false;
let currentGenre = 'all';
let finderScores = {};

// ============ LANGUAGE ============
function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('lang-ru').classList.toggle('active', lang === 'ru');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18n[lang][key]) el.placeholder = i18n[lang][key];
  });
  renderBooks();
  renderChecklist();
  renderQuizSelect();
  renderReviews();
  renderSalesLog();
  updateCartBadge();
  updateStats();
}

// ============ BOOK RENDERING ============
function renderBooks() {
  const grid = document.getElementById('books-grid');
  if (!grid) return;
  grid.innerHTML = books.map(book => {
    const title = currentLang === 'ru' ? book.title_ru : book.title_en;
    const author = currentLang === 'ru' ? book.author_ru : book.author_en;
    const summary = currentLang === 'ru' ? book.summary_ru : book.summary_en;
    const quote = currentLang === 'ru' ? book.quote_ru : book.quote_en;
    const movie = currentLang === 'ru' ? book.movie_ru : book.movie_en;
    const condText = book.condition === 'old' ? i18n[currentLang].condition_old : i18n[currentLang].condition_read1;
    const soldText = i18n[currentLang].sold;
    const buyControl = book.sold
      ? `<button class="sold-out" disabled>${soldText}</button>`
      : `<button onclick="addToCart('${title} — ${author}', ${book.price}, this)">+</button>`;
    return `<div class="card${book.sold ? ' is-sold' : ''}" data-genre="${book.genre}" data-book-id="${book.id}">
      ${book.sold ? `<div class="sold-ribbon">${soldText}</div>` : ''}
      <div>
        <div class="cover ${book.cover_class}">
          <div class="cover-fallback">
            <div class="cover-fallback-icon"><span class='icon icon-openbook' role='img' aria-label='открытая книга'></span></div>
            <div class="cover-fallback-title">${title}</div>
            <div class="cover-fallback-rule"></div>
            <div class="cover-fallback-author">${author}</div>
          </div>
          <small>${condText}</small>
        </div>
        <div class="card-body">
          <span class="tag">${book.genre}</span>
          <h3>${title}</h3>
          <p class="author">${author}</p>
          <button class="details-btn" onclick="toggleDetails(this)">${i18n[currentLang].details_btn}</button>
          <div class="details-panel">
            <strong>${currentLang === 'ru' ? 'Сюжет:' : 'Plot:'}</strong> ${summary}
            <blockquote>${quote}</blockquote>
            <div class="movie-rec"><span class='icon icon-clapper' role='img' aria-label='фильм'></span> <strong>${currentLang === 'ru' ? 'Рекомендации к просмотру:' : 'Film recommendations:'}</strong> ${movie}</div>
          </div>
        </div>
      </div>
      <div class="card-body" style="padding-top: 0;">
        <div class="buy">
          <span class="buy-price">${book.price.toLocaleString()} ₸</span>
          ${buyControl}
        </div>
      </div>
    </div>`;
  }).join('');
  filterBooks();
}

function toggleDetails(btn) {
  const panel = btn.nextElementSibling;
  if (panel.style.display === 'block') {
    panel.style.display = 'none';
    btn.innerHTML = i18n[currentLang].details_btn;
  } else {
    panel.style.display = 'block';
    btn.innerHTML = i18n[currentLang].details_hide;
  }
}

function setGenreFilter(genre, btn) {
  currentGenre = genre;
  document.querySelectorAll('.genre-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  filterBooks();
}

function filterBooks() {
  const search = document.getElementById('catalog-search').value.toLowerCase();
  document.querySelectorAll('#books-grid .card').forEach(card => {
    const genre = card.getAttribute('data-genre');
    const text = card.textContent.toLowerCase();
    const genreMatch = currentGenre === 'all' || genre === currentGenre;
    const searchMatch = !search || text.includes(search);
    card.style.display = (genreMatch && searchMatch) ? '' : 'none';
  });
  const visible = document.querySelectorAll('#books-grid .card:not([style*="display: none"])').length;
  document.getElementById('search-no-results').style.display = visible === 0 ? 'block' : 'none';
}

function clearSearchFilter() {
  document.getElementById('catalog-search').value = '';
  filterBooks();
}

// ============ CART ============
try { cart = JSON.parse(localStorage.getItem('ayana_book_circle_cart') || '[]'); } catch(e) { cart = []; }

function saveCart() { try { localStorage.setItem('ayana_book_circle_cart', JSON.stringify(cart)); } catch(e) {} }

function addToCart(title, price, btnEl) {
  const existing = cart.find(i => i.title === title);
  if (existing) { existing.qty += 1; } else { cart.push({ title, price, qty: 1 }); }
  saveCart(); updateCartBadge(); renderCart();
  showToast(currentLang === 'ru' ? 'Добавлено в корзину ✓' : 'Added to cart ✓');
  if (btnEl) {
    const orig = btnEl.textContent;
    btnEl.textContent = '✓'; btnEl.classList.add('added');
    setTimeout(() => { btnEl.textContent = orig; btnEl.classList.remove('added'); }, 700);
  }
}

function changeQty(title, delta) {
  const item = cart.find(i => i.title === title);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.title !== title);
  saveCart(); updateCartBadge(); renderCart();
}

function removeFromCart(title) { cart = cart.filter(i => i.title !== title); saveCart(); updateCartBadge(); renderCart(); }
function clearCart() { cart = []; saveCart(); updateCartBadge(); renderCart(); }
function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCartBadge() {
  const b = document.getElementById('cart-badge');
  if (b) b.textContent = getCartCount();
}

function renderCart() {
  const c = document.getElementById('cart-items-container');
  const t = document.getElementById('cart-total');
  if (!c || !t) return;
  if (cart.length === 0) {
    c.innerHTML = `<div class="cart-empty">${i18n[currentLang].cart_empty}</div>`;
  } else {
    c.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-price">${item.price.toLocaleString()} ₸ × ${item.qty}</div>
        </div>
        <div class="cart-qty">
          <button onclick="changeQty('${item.title.replace(/'/g,"\\'")}', -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${item.title.replace(/'/g,"\\'")}', 1)">+</button>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart('${item.title.replace(/'/g,"\\'")}')"><span class='icon icon-close' role='img' aria-label='закрыть'></span></button>
      </div>`).join('');
  }
  t.textContent = getCartTotal().toLocaleString() + ' ₸';
}

function openCart() { renderCart(); document.getElementById('cart-overlay').classList.add('open'); }
function closeCart() { document.getElementById('cart-overlay').classList.remove('open'); }
function handleOverlayClick(e) { if (e.target.id === 'cart-overlay') closeCart(); }

function checkoutCart() {
  if (cart.length === 0) { alert(currentLang === 'ru' ? 'Корзина пуста' : 'Cart is empty'); return; }
  trackInquiry();
  const phone = '77013647555';
  const lines = cart.map(i => `• ${i.title} — ${i.qty} ${currentLang === 'ru' ? 'шт.' : 'pcs.'} (${(i.price*i.qty).toLocaleString()} ₸)`);
  const total = getCartTotal();
  const greeting = currentLang === 'ru' ? 'Здравствуйте, Улжан! Мы зашли на сайт Аяны и хотим приобрести:' : 'Hello, Ulzhan! We visited Ayana\'s website and would like to buy:';
  const prompt = currentLang === 'ru' ? 'Подскажите, пожалуйста, как получить книги?' : 'Please tell us how to receive the books?';
  const text = encodeURIComponent(`${greeting}\n${lines.join('\n')}\n\n${currentLang === 'ru' ? 'Итого' : 'Total'}: ${total.toLocaleString()} ₸\n\n${prompt}`);
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

// ============ CALCULATOR ============
const slider = document.getElementById('book-range');
if (slider) {
  slider.max = books.length;
  slider.addEventListener('input', function() {
    const count = parseInt(this.value);
    document.getElementById('selected-count').textContent = count;
    const avgPrice = 1200;
    const ayanaTotal = count * avgPrice;
    const shopTotal = count * 3800;
    const savings = shopTotal - ayanaTotal;
    document.getElementById('ayana-price').textContent = ayanaTotal.toLocaleString() + ' ₸';
    document.getElementById('shop-price').textContent = shopTotal.toLocaleString() + ' ₸';
    document.getElementById('savings-value').textContent = savings.toLocaleString() + ' ₸';
    document.getElementById('saved-trees').textContent = (count * 10) + '% (' + (count * 0.1).toFixed(1) + ')';
  });
}

// ============ STAR RATING & REVIEWS ============
function setRating(rating) {
  selectedRating = rating;
  document.querySelectorAll('#star-rating .star').forEach(star => {
    const val = parseInt(star.getAttribute('data-value'));
    star.classList.toggle('selected', val <= rating);
  });
}

// ---------- ОБЩИЕ ОТЗЫВЫ ДЛЯ ВСЕХ ПОСЕТИТЕЛЕЙ ----------
// Отзывы хранятся на сервере сайта (Netlify), поэтому их видят все посетители
// на любых устройствах. Если сервер недоступен (например, файл открыт просто
// с компьютера), сайт работает в резервном режиме: отзывы видны только в этом браузере.
let reviewsApiOk = false;
function reviewsConfigured() { return reviewsApiOk; }

// Защита: текст отзыва от посетителей нельзя вставлять в страницу "как есть".
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

let sharedReviews = [];
let reviewsReady = null;

function fetchSharedReviews() {
  reviewsReady = (async () => {
    try {
      const res = await fetch('/api/reviews', { headers: { Accept: 'application/json' } });
      if (!res.ok) return;
      const rows = await res.json();
      if (Array.isArray(rows)) {
        reviewsApiOk = true;
        sharedReviews = rows;
        renderReviews();
      }
    } catch (e) { /* нет сети — покажем то, что есть */ }
  })();
  return reviewsReady;
}

// Резервный режим (пока Supabase не подключён): отзывы только в этом браузере.
function loadReviews() {
  try { return JSON.parse(localStorage.getItem('ayana_reviews_v2') || '[]'); } catch(e) { return []; }
}
function saveReviews(reviews) {
  try { localStorage.setItem('ayana_reviews_v2', JSON.stringify(reviews)); } catch(e) {}
  updateStats();
}

// Отзывы, добавленные вручную прямо в код (необязательно).
const approvedReviews = [
  // { name: "Имя Фамилия", text: "Отличная книга, спасибо!", rating: 5 },
];

function getAllReviews() {
  return approvedReviews.concat(reviewsConfigured() ? sharedReviews : loadReviews());
}

let reviewSending = false;
async function submitReview() {
  if (reviewSending) return;
  const name = document.getElementById('review-name').value.trim().slice(0, 60);
  const text = document.getElementById('review-text').value.trim().slice(0, 1000);
  const ru = currentLang === 'ru';
  if (selectedRating === 0) { alert(ru ? 'Поставьте оценку от 1 до 5 звёзд' : 'Please rate from 1 to 5 stars'); return; }
  if (!name || !text) { alert(ru ? 'Заполните имя и текст отзыва' : 'Please fill in name and text'); return; }

  // Простая защита от случайного спама: не чаще одного отзыва в 30 секунд с одного устройства.
  try {
    const last = Number(localStorage.getItem('ayana_last_review_ts') || 0);
    if (Date.now() - last < 30000) {
      alert(ru ? 'Подождите немного перед отправкой следующего отзыва.' : 'Please wait a bit before sending another review.');
      return;
    }
  } catch (e) {}

  const review = { name, text, rating: selectedRating };
  const star = "<span class='icon icon-star' role='img' aria-label='звезда'></span>";

  if (reviewsReady) { try { await reviewsReady; } catch (e) {} }
  if (reviewsConfigured()) {
    reviewSending = true;
    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review)
      });
      if (res.status === 429) {
        reviewSending = false;
        showToast(ru ? 'Подождите немного перед отправкой следующего отзыва.' : 'Please wait a bit before sending another review.');
        return;
      }
      if (!res.ok) throw new Error('HTTP ' + res.status);
      sharedReviews.push(await res.json());
    } catch (e) {
      reviewSending = false;
      showToast(ru ? 'Не удалось отправить отзыв. Проверьте интернет и попробуйте ещё раз.' : 'Could not send the review. Check your connection and try again.');
      return;
    }
    reviewSending = false;
    showToast(ru ? 'Спасибо за отзыв! Он опубликован и виден всем посетителям ' + star : 'Thank you! Your review is now visible to everyone ' + star);
  } else {
    const reviews = loadReviews();
    reviews.push(Object.assign({ date: new Date().toISOString() }, review));
    saveReviews(reviews);
    showToast(ru ? 'Спасибо за отзыв! (Пока он виден только в этом браузере.) ' + star : 'Thank you! (For now it is visible only in this browser.) ' + star);
  }

  try { localStorage.setItem('ayana_last_review_ts', String(Date.now())); } catch (e) {}
  document.getElementById('review-name').value = '';
  document.getElementById('review-text').value = '';
  selectedRating = 0;
  document.querySelectorAll('#star-rating .star').forEach(s => s.classList.remove('selected'));
  renderReviews();
}

function renderReviews() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;
  const reviews = getAllReviews();
  if (reviews.length === 0) {
    container.innerHTML = `<div class="no-reviews-msg">${i18n[currentLang].no_reviews}</div>`;
  } else {
    container.innerHTML = `<div class="testimonials-grid">` + reviews.slice(-6).reverse().map(r => {
      const rating = Math.min(5, Math.max(1, parseInt(r.rating, 10) || 5));
      return `
      <div class="testimonial-card">
        <div class="testimonial-stars">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
        <div class="testimonial-text">${escapeHtml(r.text)}</div>
        <div class="testimonial-author">— ${escapeHtml(r.name)}</div>
      </div>`;
    }).join('') + `</div>`;
  }
  updateStats();
}

// ============ STATS ============
function updateStats() {
  const sold = books.filter(b => b.sold).length;
  document.getElementById('stat-sold').textContent = sold;
  document.getElementById('stat-catalog').textContent = books.length;
  document.getElementById('stat-trees').textContent = (sold * 0.1).toFixed(1);
}

// ============ CHECKLIST ============
function renderChecklist() {
  const grid = document.getElementById('checklist-grid');
  if (!grid) return;
  document.getElementById('checklist-count').textContent = books.length;
  grid.innerHTML = books.map(book => {
    const title = currentLang === 'ru' ? book.title_ru : book.title_en;
    const author = currentLang === 'ru' ? book.author_ru : book.author_en;
    return `<label class="checklist-item"><input type="checkbox" onchange="updateChecklist()" value="${book.id}"> <span>${author} — <strong>${title}</strong></span></label>`;
  }).join('');
  loadChecklist();
}

function updateChecklist() {
  const checkboxes = document.querySelectorAll('#checklist input[type="checkbox"]');
  let checked = 0;
  const states = {};
  checkboxes.forEach(cb => { states[cb.value] = cb.checked; if (cb.checked) checked++; });
  try { localStorage.setItem('ayana_checklist_v3', JSON.stringify(states)); } catch(e) {}
  const total = checkboxes.length;
  const pct = Math.round((checked / total) * 100);
  document.getElementById('checklist-progress').style.width = pct + '%';
  document.getElementById('progress-percent').textContent = `${i18n[currentLang].checklist_progress} ${pct}%`;
}

function loadChecklist() {
  try {
    const saved = JSON.parse(localStorage.getItem('ayana_checklist_v3') || '{}');
    document.querySelectorAll('#checklist input[type="checkbox"]').forEach(cb => {
      if (saved[cb.value] !== undefined) cb.checked = saved[cb.value];
    });
  } catch(e) {}
  updateChecklist();
}

// ============ QUIZ ============
function renderQuizSelect() {
  const sel = document.getElementById('book-quiz-select');
  if (!sel) return;
  sel.innerHTML = `<option value="none">${i18n[currentLang].quiz_select_none}</option>` +
    Object.values(bookQuizMap).map((q, idx) => {
      const label = currentLang === 'ru' ? q.label_ru : q.label_en;
      return `<option value="${q.key}">${label}</option>`;
    }).join('');
}

function selectQuiz() {
  const key = document.getElementById('book-quiz-select').value;
  if (key === 'none') {
    document.getElementById('quiz-game-box').style.display = 'none';
    document.getElementById('quiz-result-screen').classList.remove('active');
    return;
  }
  currentQuiz = quizDatabase[key];
  currentQuizIdx = 0;
  quizScore = 0;
  quizAnswered = false;
  document.getElementById('quiz-game-box').style.display = 'block';
  document.getElementById('quiz-result-screen').classList.remove('active');
  showQuizQuestion();
}

function showQuizQuestion() {
  const q = currentQuiz.questions[currentQuizIdx];
  const title = currentLang === 'ru' ? currentQuiz.title_ru : currentQuiz.title_en;
  const qText = currentLang === 'ru' ? q.q_ru : q.q_en;
  const answers = currentLang === 'ru' ? q.a_ru : q.a_en;
  document.getElementById('quiz-book-title').textContent = title;
  document.getElementById('quiz-question-counter').textContent =
    (currentLang === 'ru' ? 'Вопрос ' : 'Question ') + (currentQuizIdx + 1) + ' / ' + currentQuiz.questions.length;
  document.getElementById('quiz-question-text').textContent = qText;
  document.getElementById('quiz-answers-box').innerHTML = answers.map((a, i) =>
    `<button class="quiz-answer-btn" onclick="answerQuiz(${i})">${a}</button>`
  ).join('');
  document.getElementById('quiz-feedback').innerHTML = i18n[currentLang].quiz_feedback_select;
  document.getElementById('quiz-next-btn').disabled = true;
  quizAnswered = false;
}

function answerQuiz(idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = currentQuiz.questions[currentQuizIdx];
  const answers = currentLang === 'ru' ? q.a_ru : q.a_en;
  document.querySelectorAll('#quiz-answers-box .quiz-answer-btn').forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.c) btn.classList.add('correct');
    if (i === idx && i !== q.c) btn.classList.add('wrong');
  });
  if (idx === q.c) {
    quizScore++;
    document.getElementById('quiz-feedback').innerHTML = i18n[currentLang].quiz_correct;
  } else {
    document.getElementById('quiz-feedback').innerHTML = i18n[currentLang].quiz_wrong;
  }
  document.getElementById('quiz-next-btn').disabled = false;
}

function nextQuizQuestion() {
  currentQuizIdx++;
  if (currentQuizIdx >= currentQuiz.questions.length) {
    showQuizResults();
  } else {
    quizAnswered = false;
    showQuizQuestion();
  }
}

function showQuizResults() {
  document.getElementById('quiz-game-box').style.display = 'none';
  document.getElementById('quiz-result-screen').classList.add('active');
  const total = currentQuiz.questions.length;
  document.getElementById('res-score-badge').textContent = quizScore + ' / ' + total;
  const pct = Math.round(quizScore / total * 100);
  let comment;
  if (currentLang === 'ru') {
    if (pct === 100) comment = "Идеально! Вы настоящий знаток! <span class='icon icon-trophy' role='img' aria-label='победа'></span>";
    else if (pct >= 70) comment = "Прекрасно! Вы отлично знаете книгу! <span class='icon icon-star' role='img' aria-label='звезда'></span>";
    else if (pct >= 50) comment = "Хорошо! Но стоит перечитать! <span class='icon icon-openbook' role='img' aria-label='открытая книга'></span>";
    else comment = "Пока не всё... Самое время перечитать книгу! <span class='icon icon-book' role='img' aria-label='книга'></span>";
  } else {
    if (pct === 100) comment = "Perfect! You are a true expert! <span class='icon icon-trophy' role='img' aria-label='победа'></span>";
    else if (pct >= 70) comment = "Excellent! You know the book well! <span class='icon icon-star' role='img' aria-label='звезда'></span>";
    else if (pct >= 50) comment = "Good! But worth re-reading! <span class='icon icon-openbook' role='img' aria-label='открытая книга'></span>";
    else comment = "Not quite... Time to re-read the book! <span class='icon icon-book' role='img' aria-label='книга'></span>";
  }
  document.getElementById('res-commentary').innerHTML = comment;
}

function resetQuiz() {
  document.getElementById('quiz-result-screen').classList.remove('active');
  document.getElementById('book-quiz-select').value = 'none';
  document.getElementById('quiz-game-box').style.display = 'none';
}

// ============ BOOK FINDER ============
function nextFinderQuestion(num, score) {
  finderScores[num] = score;
  document.getElementById(`fq-${num}`).classList.remove('active');
  if (num < 3) {
    document.getElementById(`fq-${num + 1}`).classList.add('active');
  } else {
    calculateFinderResult(finderScores[3] || finderScores[2] || finderScores[1]);
  }
}

function calculateFinderResult(type) {
  document.querySelectorAll('.finder-question').forEach(q => q.classList.remove('active'));
  const res = document.getElementById('finder-res');
  res.classList.add('active');
  let title, text;
  const isRu = currentLang === 'ru';
  switch(type) {
    case 'rebel':
      title = isRu ? '«Мы» — Е. Замятин' : '«We» — Y. Zamyatin';
      text = isRu ? 'Бунтарский дух — ваша стихия! Вам предстоит погрузиться в мир Единого Государства, где один человек бросает вызов системе.' : 'A rebellious spirit is your element! Dive into the world of the One State, where one person challenges the system.';
      break;
    case 'thinker':
      title = isRu ? '«Герой нашего времени» — М. Лермонтов' : '«A Hero of Our Time» — M. Lermontov';
      text = isRu ? 'Глубокое размышление близко вам. Печорин проведёт вас через лабиринты человеческой души и сложных моральных выборов.' : 'Deep reflection suits you. Pechorin will guide you through the labyrinths of the human soul and complex moral choices.';
      break;
    case 'adventurer':
      title = isRu ? '«Ревизор» — Н. Гоголь' : '«The Government Inspector» — N. Gogol';
      text = isRu ? 'Остроумие и приключения — ваш выбор! Городские чиновники в панике от мнимого инспектора не дадут вам заскучать.' : 'Wit and adventure — your choice! Town officials in a panic over a fake inspector won\'t let you get bored.';
      break;
    case 'wizard':
      title = isRu ? '«Гарри Поттер» — Дж. Роулинг' : '«Harry Potter» — J. K. Rowling';
      text = isRu ? 'Магия зовёт! Отправляйтесь в Хогвартс и переживите полную приключений историю о дружбе, храбрости и вере в добро.' : 'Magic is calling! Head to Hogwarts and experience a captivating story of friendship, bravery, and faith in good.';
      break;
    default:
      title = isRu ? '«Цветы для Элджернона» — Д. Киз' : '«Flowers for Algernon» — D. Keyes';
      text = isRu ? 'Трогательно и глубоко — идеальный выбор. Дневник Чарли Гордона растрогает и заставит задуматься о сути человечности.' : 'Touching and profound — a perfect choice. Charlie Gordon\'s diary will move you and make you think about human nature.';
  }
  document.getElementById('finder-res-title').textContent = title;
  document.getElementById('finder-res-text').textContent = text;
}

// ============ FAQ, NAV, MISC ============
function toggleFaq(el) { el.parentElement.classList.toggle('open'); }
function toggleMobileNav() { document.getElementById('main-nav').classList.toggle('open'); }
function closeMobileNav() { document.getElementById('main-nav').classList.remove('open'); }

const scrollTopBtn = document.getElementById('scroll-top-btn');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
});
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', function() {
  renderBooks();
  renderChecklist();
  renderQuizSelect();
  renderReviews();
  fetchSharedReviews();
  updateCartBadge();
  updateStats();
  loadSiteStats();
  trackVisit();
  setLanguage('ru');
});