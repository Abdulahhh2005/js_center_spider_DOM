'use strict';

// Елементи
const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Розміри елементів
const infoField = field.getBoundingClientRect();
const infoSpider = spider.getBoundingClientRect();

// Центрування павука
spider.style.position = 'absolute';
spider.style.top = (infoField.height - infoSpider.height) / 2 + 'px';
spider.style.left = (infoField.width - infoSpider.width) / 2 + 'px';

// Додаємо павука на поле
field.append(spider);
