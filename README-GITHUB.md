# Профессиональное Портфолио

Современный мультиязычный сайт-портфолио в бело-голубых тонах с адаптивным дизайном.

## 🌐 Демонстрация

Сайт автоматически развертывается на GitHub Pages:
- **URL**: `https://yourusername.github.io/resume-website`
- **Языки**: Русский, English, Deutsch
- **Дизайн**: Адаптивный для всех устройств

## 🚀 Быстрый старт

### Для использования этого шаблона:

1. **Форкните репозиторий**
   ```bash
   # Нажмите "Fork" на GitHub
   ```

2. **Клонируйте ваш форк**
   ```bash
   git clone https://github.com/YOUR_USERNAME/resume-website.git
   cd resume-website
   ```

3. **Кастомизируйте контент**
   - Замените `email@example.com` на ваш email
   - Замените `+49 1782673024` на ваш телефон
   - Обновите ссылки на социальные сети
   - Добавьте свои файлы в секцию "Файлы"

4. **Загрузите изменения**
   ```bash
   git add .
   git commit -m "Customize portfolio"
   git push origin main
   ```

5. **Включите GitHub Pages**
   - Перейдите в Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
   - Нажмите Save

## 📁 Структура проекта

```
resume-website/
├── 📄 index.html          # Главная страница
├── 📄 links.html          # Страница ссылок
├── 📄 files.html          # Страница файлов
├── 📄 contacts.html       # Страница контактов
├── 📄 styles.css          # Стили
├── 📄 script.js           # JavaScript
├── 📁 assets/             # Ресурсы
├── 📁 .github/workflows/  # Автоматический деплой
├── 📄 robots.txt         # SEO инструкции
├── 📄 sitemap.xml        # Карта сайта
└── 📄 README.md          # Этот файл
```

## ✨ Возможности

- 🌍 **Мультиязычность**: Русский, Английский, Немецкий
- 📱 **Адаптивный дизайн**: Работает на всех устройствах
- 🎨 **Современный UI**: Бело-голубая цветовая схема
- 🔍 **SEO оптимизация**: Robots.txt, sitemap.xml
- ⚡ **Быстрая загрузка**: Оптимизированные файлы
- 🔗 **Социальные ссылки**: LinkedIn, GitHub, Telegram, Twitter

## 🎨 Кастомизация

### Изменение контактных данных:

Найдите и замените в HTML файлах:
```html
<!-- Email -->
<p><i class="fas fa-envelope"></i> email@example.com</p>

<!-- Телефон -->
<p><i class="fas fa-phone"></i> +49 1782673024</p>

<!-- Местоположение -->
<p><i class="fas fa-map-marker-alt"></i> Munchen, Germany</p>
```

### Изменение ссылок на социальные сети:

```html
<!-- LinkedIn -->
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">

<!-- GitHub -->
<a href="https://github.com/YOUR_USERNAME" target="_blank">

<!-- Telegram -->
<a href="https://t.me/YOUR_USERNAME" target="_blank">

<!-- Twitter -->
<a href="https://twitter.com/YOUR_USERNAME" target="_blank">
```

### Добавление своих файлов:

В файле `files.html` добавьте:
```html
<div class="file-card">
    <div class="file-icon">
        <i class="fas fa-file-pdf"></i>
    </div>
    <div class="file-info">
        <h3>Ваш файл</h3>
        <p>Описание файла</p>
        <button class="download-btn">
            <i class="fas fa-download"></i> Скачать
        </button>
    </div>
</div>
```

## 🔧 Автоматический деплой

Сайт автоматически развертывается при каждом коммите в ветку `main` благодаря GitHub Actions.

Процесс:
1. Вы делаете коммит и push
2. GitHub Actions автоматически запускается
3. Сайт публикуется на GitHub Pages
4. Через 1-2 минуты сайт доступен

## 🌍 Языки

### Добавление нового языка:

1. **Откройте `script.js`**
2. **Найдите объект `translations`**
3. **Добавьте новый язык:**
```javascript
const translations = {
  // ... существующие языки
  fr: { // Французский
    'site-title': 'Portfolio',
    'nav-home': 'Accueil',
    'nav-links': 'Liens',
    // ... добавьте все переводы
  }
};
```

4. **Добавьте кнопку языка в HTML:**
```html
<div class="language-switcher">
    <button class="lang-btn active" data-lang="ru">RU</button>
    <button class="lang-btn" data-lang="en">EN</button>
    <button class="lang-btn" data-lang="de">DE</button>
    <button class="lang-btn" data-lang="fr">FR</button>
</div>
```

## 📱 Адаптивность

Сайт оптимизирован для:
- 🖥️ **Десктоп**: 1920px+
- 💻 **Ноутбук**: 1024px - 1920px  
- 📱 **Планшет**: 768px - 1024px
- 📱 **Мобильный**: 320px - 768px

## 🎨 Цветовая схема

Основные цвета (легко изменить в `styles.css`):
```css
:root {
  --primary-color: #2563eb;     /* Основной голубой */
  --secondary-color: #0ea5e9;   /* Дополнительный голубой */
  --text-dark: #1e293b;         /* Темный текст */
  --text-light: #64748b;        /* Светлый текст */
  --bg-white: #ffffff;          /* Белый фон */
}
```

## 📊 SEO

Сайт включает:
- ✅ `robots.txt` - инструкции для поисковых роботов
- ✅ `sitemap.xml` - карта сайта
- ✅ Мета-теги для соцсетей
- ✅ Семантическая HTML5 разметка
- ✅ Оптимизированные заголовки

## 🚀 Развертывание вручную

Если автоматический деплой не работает:

1. **Включите GitHub Pages вручную:**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root

2. **Проверьте статус деплоя:**
   - Actions tab → Последний workflow
   - Или Pages → Посмотреть deployment

## 🐛 Решение проблем

### Сайт не отображается:
1. Проверьте, что ветка `main` существует
2. Убедитесь, что GitHub Pages включен
3. Проверьте логи в Actions

### Стили не загружаются:
1. Проверьте пути к CSS файлу
2. Убедитесь, что `styles.css` существует
3. Проверьте консоль браузера на ошибки

### Языковой переключатель не работает:
1. Проверьте консоль на ошибки JavaScript
2. Убедитесь, что все `data-i18n` атрибуты на месте
3. Проверьте localStorage в браузере

## 📄 Лицензия

MIT License - свободное использование и модификация.

## 🤝 Вклад

1. Форкните репозиторий
2. Создайте ветку с изменениями
3. Сделайте pull request

## 📞 Поддержка

Если возникли вопросы:
- 📧 Email: email@example.com
- 💬 Telegram: @yourusername
- 🐛 Issues: [Создать issue](https://github.com/yourusername/resume-website/issues)

---

**🎉 Ваше профессиональное портфолио готово к использованию!**

После кастомизации и загрузки на GitHub, ваш сайт будет доступен по адресу:
`https://yourusername.github.io/resume-website`
