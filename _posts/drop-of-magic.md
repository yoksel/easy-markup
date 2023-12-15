---
title: Капля магии

links:
 - name: 'Цель вижу, в себя верю!'
   url: '#target'
 - name: 'Всем выйти из сумрака!'
   url: '#dusk'

additional_links:
 - name: 'Центрирование в CSS: полное руководство'
   url: https://css-tricks.com/centering-css-complete-guide/
 - name: 'Краш-тест вёрстки'
   url: https://isqua.ru/blog/2016/06/19/crash-test-viorstki/
 - name: 'Контент по центру, фон по ширине'
   url: https://isqua.ru/blog/2016/06/23/content-po-sentru-fon-po-shirinie/

---

<div class="intro">
    <p>Когда разметка будет готова, к ней потребуется оформление. Если добавить в ваши коды немного вспомогательных стилей, это поможет вам писать CSS проще и быстрее.</p>
</div>

<ol>
    <li>
        <h3 id="target" title="Цитата из к/ф «Чародеи»">Цель вижу, в себя верю! <a class="post__anchor" href="#target">#</a></h3>

        <p>Чтобы аккуратно сверстать макет, ничего не потеряв по дороге, нужно или обладать хорошей зрительной памятью, или постоянно сверяться с макетом. Второе отнимает массу времени, и всё равно можно что-то упустить. Для решения проблемы можно просто подложить макет под страницу:</p>

```html
<style>
  HTML {
    background: url( 'img/page.jpg' ) 50% 0 no-repeat;
  }
</style>
```

        <p>Код вставляется в элемент <code>&lt;head></code>.</p>

        <p>Если у вас есть макеты для разных разрешений экрана, их можно менять с помощью медиавыражений:</p>

```html
<style>
  HTML {
    background: url( 'img/page-mobile.jpg' ) 50% 0 no-repeat;
  }

  @media (min-width: 800px) {
    HTML {
      background-image: url( 'img/page-tablet.jpg' );
    }
  }

  @media (min-width: 1200px) {
    HTML {
      background-image: url( 'img/page-desktop.jpg' );
    }
  }
</style>
```

        <p>Чтобы фоны и картинки на странице не загораживали макеты, можно добавить <code>opacity</code> для <code>&lt;body></code>:</p>

```html
<style>
  HTML {
    background: url( 'img/page-mobile.jpg' ) 50% 0 no-repeat;
  }

  @media (min-width: 800px) {
    HTML {
      background-image: url( 'img/page-tablet.jpg' );
    }
  }

  @media (min-width: 1200px) {
    HTML {
      background-image: url( 'img/page-desktop.jpg' );
    }
  }

  BODY {
    opacity: .5;
  }
</style>
```

        <p>Чтобы удобно управлять прозрачностью, можно установить <a href="https://github.com/yoksel/pixel-glass-js">Pixel Glass</a>:</p>


        <ol>
          <li>Установите скрипт в папку с проектом:

```js
npm i pixel-glass --save-dev
```
          </li>

          <li> Добавьте в <code>&lt;head></code> подключение файлов скрипта:

```html
<link href="../node_modules/pixel-glass/styles.css" rel="stylesheet">
<script src="../node_modules/pixel-glass/script.js"></script>
```

          </li>
        </ol>

        <p>После этого на странице появится вот такая панель:
        </p>
        <img src="/img/pixel-glass.png" alt="Панель Pixel Glass">

        <p>Она позволит управлять прозрачностью <code>&lt;body></code> или выключить её совсем, если она не нужна.</p>

<div class="attention">
        <p><b>Внимание:</b> если локальный сервер смотрит не в корень проекта, а в другую директорию (например, <code>source</code>), при запуске сервера npm-пакеты окажутся снаружи этой директории, и будут недоступны. В этом случае pixel-glass нужно устанавливать в директорию, куда смотрит сервер, склонировав туда пакет с гитхаба:</p>


```js
git clone git@github.com:yoksel/pixel-glass-js.git pixel-glass
```

<p>И подключать скрипты и стили оттуда:</p>

```html
<link href="../pixel-glass/styles.css" rel="stylesheet">
<script src="../pixel-glass/script.js"></script>
```
</div>

        <p>Таким образом макеты будут всё время перед глазами и вам не придётся тратить время на переключение в графический редактор и обратно. Особенно это удобно при работе на маленьком экране, когда не получается разместить рядом фотошоп и браузер.</p>

        <p>При использовании этого способа в какой-то момент текст страницы наложится на текст макета, и получится нечитаемая каша. Чтобы отличить их друг от друга, можно CSS-ом раскрасить текст в яркие цвета (например, <code>color: crimson</code>). Получится примерно вот такое:</p>

        <img src="/img/colored-text.png" alt="Цветной текст">

        <p>Сразу видно где страница не совпадает с макетом и что нужно подправить.</p>
    </li>
    <li>
        <h3 id="dusk" title="Цитата из к/ф «Ночной дозор»">Всем выйти из сумрака! <a class="post__anchor" href="#dusk">#</a></h3>

        <p>Раскладывая элементы по странице, очень удобно видеть где они начинаются и где заканчиваются. Самый простой способ добавить границы выглядит так: </p>

```css
.yourclass {
    outline: 2px solid deeppink;
}
```

        <p>Почему <code>outline</code>, а не <code>border</code>? <code>outline</code> не влияет на блочную модель элемента и не меняет его размеры, как это делает <code>border</code>.</p>

        <p>Чтобы добавить обводки сразу нескольким крупным блокам, можно использовать такой код:</p>

```css
BODY > * {
    outline: 2px solid deeppink;
}
BODY > * > * {
    outline: 2px dashed lime;
    outline-offset: -2px;
}
BODY > * > * > * {
    outline: 2px dotted dodgerblue;
    outline-offset: -4px;
}
```

        <p>В действии это выглядит примерно так:</p>

        <p data-height="630" data-theme-id="4974" data-slug-hash="yaXGpa" data-default-tab="result" data-user="yoksel" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/yoksel/pen/yaXGpa/">yaXGpa</a> by yoksel (<a href="http://codepen.io/yoksel">@yoksel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

        <p>Этот код тоже можно вставить в <code>head</code> или лучше положить его в файл с стилями, но можно сделать ещё удобнее: добавьте в браузер <b>Stylish</b> (плагин для кастомного CSS) и подключите этот код через него — тогда в любой момент вы сможете включить или выключить обводки не покидая страницу.</p>

        <p>Также можно добавить ещё больше обводок или задать свои цвета (цвета удобно задавать <a href="https://yoksel.github.io/handy-colors/">названиями</a>).</p>
    </li>
</ol>
