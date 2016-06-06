---
layout: page
title: Как писать классы по БЭМ
permalink: /bem-rules/
---

<p>БЭМ-классы придумывать просто. </p>

<p>Допустим, у вас есть блок с заголовком, текстом и кнопкой внутри, например, это всплывающее окно — попап. Разметка:</p>

{% highlight html %}
<div>
  <h3>Заголовок</h3>
  <div>Текст</div>
  <button>Кнопка</button>
</div>
{% endhighlight %}

<p>Добавляем класс содержащий назначение элемента: <code>.popup</code>:</p>

{% highlight html %}
<div class="popup">
  <h3>Заголовок</h3>
  <div>Текст</div>
  <button>Кнопка</button>
</div>
{% endhighlight %}

<p>Теперь попробуем добавить классы вложенным элементам:</p>

{% highlight html %}
<div class="popup">
  <h3 class="title">Заголовок</h3>
  <div class="text">Текст</div>
  <button class="button">Кнопка</button>
</div>
{% endhighlight %}

<p>Классы удобные, но не уникальные. Если на странице будут ещё элементы с классами <code>.title</code> и <code>.text</code>, их стили могут затронуть элементы в попапе. Можно придумать другие классы, но чем больше похожих по смыслу элементов, тем сложнее придумывать новые классы.</p>

<p>А теперь применим БЭМ-нотацию: каждому элементу внутри блока добавим префикс с классом родителя: </p>

{% highlight html %}
<div class="popup">
  <h3 class="popup__title">Заголовок</h3>
  <div class="popup__text">Текст</div>
  <button class="popup__button">Кнопка</button>
</div>
{% endhighlight %}