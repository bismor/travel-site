# Travel Site

Современный лендинг туристического сервиса на Angular.

Проект создан в качестве портфолио. Основной фокус — чистая архитектура, соблюдение методологии БЭМ, переиспользуемые стили и компонентный подход.

Дизайн основан на [Figma-макете Travel Website Landing Page](https://www.figma.com/design/K48KZ8EJ4ddKt59BeeISEJ/Travel-Website-Landing-Page--Community-?node-id=108-84).

---

## Технологии

- Angular 21 (Standalone Components)
- TypeScript
- SCSS + методология БЭМ
- Кастомная дизайн-система (переменные и миксины)
- Адаптивная вёрстка (в процессе)

---

## Реализованный функционал

- Полная вёрстка основных секций лендинга:
  - Header
  - Hero
  - Services
  - Top Destinations
  - Booking (Easy & Fast)
  - Testimonials
  - Subscribe
- Переиспользуемый компонент иконок
- Централизованные стили через SCSS-переменные и миксины
- Соблюдение методологии БЭМ
- Семантичная разметка

---

## Запуск проекта

### Требования

- Node.js 20+
- npm 10+

### Установка

```bash
git clone https://github.com/bismor/travel-site.git
cd travel-site
npm install
```

### Запуск в режиме разработки

```bash
npm start
```

Приложение будет доступно по адресу: [http://localhost:4200](http://localhost:4200)

### Сборка production-версии

```bash
npm run build
```

---

## Структура проекта

```
src/
├── app/
│   ├── components/          # Основные секции лендинга
│   └── shared/              # Переиспользуемые компоненты (в развитии)
├── styles/
│   ├── _variables.scss      # Цвета, типографика, размеры
│   └── _mixins.scss         # Миксины (container, typography, flex и др.)
├── assets/
│   ├── images/
│   └── fonts/
└── styles.scss
```

---

## Планы по развитию

- [ ] Полная адаптивность (mobile + tablet)
- [ ] Вынос общих UI-компонентов в `shared`
- [ ] Перевод контента на data-driven подход
- [ ] Улучшение доступности (a11y)
- [ ] Деплой демо-версии

---

## Автор

**Косяченко Владислав**  
GitHub: [bismor](https://github.com/bismor)
