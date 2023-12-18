---
title: Примеры кода
order: 3

links:
 - text: 'Простой список'
   url: '#simple-list'
 - text: 'Картинка пользователя (юзерпик)'
   url: '#userpic'
 - text: 'Галерея'
   url: '#gallery'
 - text: 'Навигация (простой вариант)'
   url: '#nav-1'
 - text: 'Навигация (сложный вариант)'
   url: '#nav-2'
 - text: 'Виджет в боковой колонке'
   url: '#widget'
 - text: 'Блок новостей'
   url: '#news'
 - text: 'Статья или пост в блоге (простой вариант)'
   url: '#simple-article'
 - text: 'Статья или пост в блоге (сложный вариант)'
   url: '#article'
 - text: 'Разметка страницы'
   url: '#page-markup'
---

<div class="intro">
  Это примеры блоков, размеченных по описанным выше принципам, от простого к сложному.
</div>

<ol>
  <li>
    <h2 id="simple-list">Простой список</h2>

```html
<ul class="list">
  <li class="item">Первое</li>
  <li class="item">Второе</li>
  <li class="item">Третье</li>
</ul>
```
  </li>

  <li>
    <h2 id="userpic">Картинка пользователя (юзерпик)</h2>

```html
<div class="user">
  <img class="user__img" src="userpic.png" alt="Дормидонт Петрович">
  <a class="user__link" href="#">Дормидонт Петрович</a>
</div>
```
  </li>

  <li>
    <h2 id="gallery">Галерея</h2>

```html
<div class="gallery gallery--slider">
  <ul class="gallery__list">
    <li class="gallery__item">
      <img class="gallery__img" src="flowers.jpg" alt="Цветём как в последний раз">
    </li>
    <li class="gallery__item">
      <img class="gallery__img" src="trees.jpg" alt="Парк «Три сосны»">
    </li>
  </ul>
</div>
```
  </li>

  <li>
    <h2 id="nav-1">Навигация (простой вариант)</h2>

```html
<nav class="nav">
  <a class="nav__link nav__link--active">Главная</a>
  <a class="nav__link" href="#">Второстепенная</a>
  <a class="nav__link" href="#">Третья с конца</a>
  <a class="nav__link" href="#">Предпоследняя</a>
  <a class="nav__link" href="#">Совсем конец</a>
</nav>
```
  </li>

  <li>
    <h2 id="nav-2">Навигация (сложный вариант)</h2>

```html
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__item nav__item--current">
      <a class="nav__link">Главная</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#">Статьи</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#">Фотогалерея</a>
    </li>
    <li class="nav__item">
      <a class="nav__link" href="#">Контакты</a>
    </li>
  </ul>
</nav>
```
  </li>

  <li>
    <h2 id="widget">Виджет в боковой колонке</h2>

```html
<div class="widget">
  <h4 class="widget__tilte">Выращиваем желе</h4>

  <div class="widget__content">
    <p>Чтобы вырастить общительное дружелюбное желе,
    нам потребуется рулон поролона, два килограмма сахара,
    три яйца и пол чайной чашки ацетона.</p>

    <a class="widget__link" href="#">Не читать дальше...</a>
  </div>
</div>
```
  </li>

  <li>
    <h2 id="news">Блок новостей</h2>

```html
<div class="news">
    <h3 class="news__title">Вчерашние новости</h3>

    <ul class="news__list">
        <!-- к классу элемента добавляем класс блока,
             чтобы создать новое пространство имён -->
        <li class="news__item item-news">
            <h4 class="item-news__title">
              Соревнования среди воблы по конькобежному спорту
            </h4>
            <div class="item-news__text">
              <p>Победила команда килек из Петрозаводска</p>

              <a href="#" class="item-news__link">Читать дальше</a>
            </div>
        </li>

        <li class="news__item item-news">
            <h4 class="item-news__title">
              Учёные уточнили роль напильника в уходе за ногтями
            </h4>
            <div class="item-news__text">
              <p>Британские учёные высоко оценили вклад
                напильника в отращивание полутораметровых ногтей.</p>

              <a href="#" class="item-news__link">Не читать дальше</a>
            </div>
        </li>
    </ul>
</div>
```
  </li>

  <li>
    <h2 id="simple-article">Статья или пост в блоге (простой вариант)</h2>

```html
<article class="article">
  <h3 class="article__title">
    Нащупываем чакры у пучка петрушки
  </h3>
  <time class="article__datetime">32 мая, 10:87</time>

  <div class="article__author author-article">
    <img class="author-article__img" src="userpic.png" alt="Клешня Андреевна">
    <a class="author-article__link" href="#">Клешня Андреевна Долгорукая</a>
    <div class="author-article__desc">Наш эксперт по чакрам</div>
  </div>

  <div class="article__content">
    Сходите на рынок и купите у старушек пучок петрушки грамм на 100.
    Как следует переберите, очистите от жуков и гусениц. Жуков отдайте поиграться
    коту, гусениц поселите в горшок с кактусами, пусть одна будет Джоном,
    вторая Билли, а у вас в горшке теперь будет Дикий Запад. Вернитесь
    к пучку петрушки. Ласково взгляните на него и как следует почешите
    за ухом, можно себе или коту. Перевяжите атласной ленточкой,
    непременно завяжите бант. Поздравляем! Теперь у вас есть полностью
    одомашненный пучок петрушки, который будет весело бегать за вами
    по пятам и проращивать свои семена в ваших тапках.
  </div>
</article>
```
  </li>

  <li>
    <h2 id="article">Статья или пост в блоге (сложный вариант)</h2>

```html
<article class="entry">
  <header class="entry__header">
    <h3 class="entry__title title-entry">
      <a class="title-entry__link" href="#">
        Резиновые уточки как способ самопознания
      </a>
    </h3>

    <time class="entry__datetime">32 мая, 10:87</time>
  </header>

  <div class="entry__author author-entry">
    <img class="author-entry__img" src="userpic.png" alt="Василиса Сергеевич">

    <a class="author-entry__link" href="#">Василиса Сергеевич</a>
  </div>

  <div class="entry__content">
    Достаньте с чердака коробку с полусотней резиновых уточек,
    оставшихся после празднования нового года. Из уточек
    и горящих свечей выложите пентаграмму на полу комнаты.
    Сядьте посередине в позу лотоса, в каждую руку возьмите
    по немецко-бразильскому словарю, прокашляйтесь, наберите
    полную грудь воздуха и громко и уверенно,
    с полной самоотдачей скажите "Кря!"
  </div>

  <div class="entry__tags tags-entry">
    <h4 class="tags-entry__tilte">Метки</h4>

    <ul class="tags-entry__list">
      <li class="tags-entry__item">
        <a class="tags-entry__link" href="#">хоровод своими руками</a>
      </li>
      <li class="tags-entry__item">
        <a class="tags-entry__link" href="#">фарфоровые тапки</a>
      </li>
      <li class="tags-entry__item">
        <a class="tags-entry__link" href="#">гуталин в кулинарии</a>
      </li>
    </ul>
  </div>

  <ul class="entry__menu menu-entry">
    <li class="menu-entry__item menu-entry__item--read">
      <a class="menu-entry__link" href="#">238 ответов</a>
    </li>
    <li class="menu-entry__item menu-entry__item--write">
      <a class="menu-entry__link" href="#">Написать в спортлото</a>
    </li>
    <li class="menu-entry__item menu-entry__item--share">
      <a class="menu-entry__link" href="#">Поделиться</a>
    </li>
  </ul>
</article>
```
  </li>

  <li>
    <h2 id="page-markup">Разметка страницы</h2>

```html
<!-- Шапка сайта -->
<header class="site-header">
  <h1 class="site-header__title">Название сайта</h1>

  <nav class="site-header__nav site-nav">
    <a href="#" class="site-nav__link">О продукте</a>
    <a href="#" class="site-nav__link">О погоде</a>
    <a href="#" class="site-nav__link">О чём шумит камыш</a>
  </nav>
</header>

<!-- Главное содержимое страницы -->
<main class="site-main">
  <!-- Разделы главного содержимого -->
  <section class="features">
    <h2 class="features__title">Преимущества</h2>

    <ul class="features__list">
      <li class="features__item">Высокие потолки</li>
      [...]
    </ul>
  </section>

  <section class="prices">
    <h2 class="prices__title">Тарифы</h2>

    <ul class="prices__list">
      <li class="prices__item">30 зонтиков в минуту</li>
      [...]
    </ul>
  </section>
</main>

<!-- Боковая колонка -->
<aside class="site-aside">
  <div class="widget">
    <h3 class="widget__title">Как мы отдыхаем?</h3>
    <div class="widget__text">Читайте в нашей новой книге «Никак»</div>
  </div>
</aside>

<!-- Подвал сайта -->
<footer class="site-footer">
  <div class="site-footer__socials socials">
    <a href="#" class="socials__link socials__link--tw">Twitter</a>
    <a href="#" class="socials__link socials__link--fb">Facebook</a>
    <a href="#" class="socials__link socials__link--ok">Одноклассники</a>
  </div>

  <div class="site-footer__copyright copyright ">
    Сделано <a href="#" class="copyright__link">левой пяткой</a>
  </div>
</footer>
```
  </li>
</ol>
