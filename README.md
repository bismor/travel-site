# Travel Site

Современный лендинг туристического сервиса на Angular.

**Демо:** [https://bismor.github.io/travel-site/](https://bismor.github.io/travel-site/)

Проект создан в качестве портфолио. Основной фокус — чистая архитектура, методология БЭМ, переиспользуемые компоненты, дизайн-система и адаптивная вёрстка.

Дизайн основан на [Figma-макете Travel Website Landing Page](https://www.figma.com/design/K48KZ8EJ4ddKt59BeeISEJ/Travel-Website-Landing-Page--Community-?node-id=108-84).

---

## Технологии

- **Angular 21** (Standalone Components)
- **TypeScript**
- **SCSS** + методология **БЭМ**
- Кастомная дизайн-система (переменные, миксины, spacing, radius)
- Адаптивная вёрстка (desktop / tablet / mobile)
- Семантичная разметка и базовая доступность

---

## Что реализовано

### Секции лендинга

- Header с якорной навигацией и бургер-меню
- Hero
- Services
- Top Destinations
- Booking (Easy & Fast)
- Testimonials
- Subscribe

### Архитектура и качество кода

- Shared-компоненты: `Button`, `Icon`, `SectionHeader`
- Data-driven подход (`*.data.ts` + `@for`)
- Модели вынесены в `shared/models`
- Централизованные стили через SCSS-переменные и миксины
- Соблюдение методологии БЭМ
- Адаптив для всех основных секций
- Мобильное меню с блокировкой скролла

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
│   ├── components/              # Секции лендинга
│   │   ├── header/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── destination/
│   │   ├── booking/
│   │   ├── about/
│   │   └── subscribe/
│   └── shared/
│       ├── components/
│       │   ├── button/
│       │   ├── icon/
│       │   └── section-header/
│       └── models/
├── styles/
│   ├── _variables.scss          # Цвета, типографика, spacing, radius
│   └── _mixins.scss             # container, typography, shadows, flex
├── assets/
│   ├── images/
│   └── fonts/
└── styles.scss
```

---

## Возможности для развития

- [ ] Улучшение доступности (focus-visible, aria)
- [ ] Доработка бургер-меню и микроанимаций
- [ ] Оптимизация изображений

---

## Автор

**Косяченко Владислав**  
GitHub: [bismor](https://github.com/bismor)
