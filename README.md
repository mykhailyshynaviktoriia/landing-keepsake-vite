# Landing Keepsake (Vite + Pug + SCSS)

Демо на GitHub Pages: https://mykhailyshynviktoriia.github.io/landing-keepsake-vite/

## Вимоги до середовища та команди

- Node.js (рекомендовано v20+) та npm
- `npm install` — встановлення залежностей
- `npm run dev` — запуск сервера розробки Vite
- `npm run build` — продакшн-збірка проєкту у `dist/`
- `npm run preview` — локальний перегляд зібраної сторінки з `dist/`
- `npm run format` — автоматичне форматування файлів через Prettier
- `npm run lint` — перевірка стилів (Stylelint) і форматування (Prettier)
- `npm run images` — генерація та оптимізація зображень через Sharp

## Структура проєкту та архітектура Pug і SCSS

- `src/layouts/` — базові шаблони сторінок (`block`, `extends`)
- `src/includes/` — підключення метаданих, шрифтів і службових блоків (`include`)
- `src/components/` — компоненти та секції сторінки, міксини (`src/mixins/`), дані (`src/data/`)
- `src/pages/` — вхідні Pug-сторінки
- `src/styles/` — модульна архітектура SCSS (`@use` / `@forward`, змінні та map-и, міксини медіазапитів, функції, БЕМ-класи через `&__` / `&--`, вкладеність не більше 3 рівнів)

## Інструменти та призначення

- **Vite** + **Vituum** + **@vituum/vite-plugin-pug** — збірка застосунку та компіляція Pug-шаблонів
- **Sass** + **PostCSS** + **Autoprefixer** — компіляція SCSS і додавання префіксів згідно з Browserslist
- **Sharp** — конвертація та оптимізація зображень
- **Prettier** + **Stylelint** (`stylelint-config-standard-scss`) — єдиний стиль коду та контроль правил SCSS
- **Husky** + **lint-staged** — перевірка і форматування змінених файлів перед комітом (`pre-commit`)
- **GitHub Actions** + **GitHub Pages** — автоматична збірка і публікація сайту

## Цільові браузери (Browserslist) та порівняння розмірів

Цільові браузери задані у `package.json` (`last 2 Chrome versions`, `last 2 Firefox versions`, `last 2 Edge versions`, `last 2 Safari versions`, `last 2 iOS versions`, `iOS >= 12`).

