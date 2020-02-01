# metaui components

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Describe my-component here.

[build-badge]: https://img.shields.io/travis/devision-io/metaui/master.png?style=flat-square
[build]: https://travis-ci.org/devision-io/metaui

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/devision-io/metaui/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/devision-io/metaui

- lego
- валидация
- блокировка на валидации
- подгрузка options
- подгрузка контента



Все компоненты долэны реализовать один из этих интерфейсов. 
Мы стараемся все элементы привести к единым форматам ввода и вывода информации

IMeElem - содержит общесистемные свойства элемента: 
id, name, value, defaultValue, onChange и пр
В attrs элемента передаются его отличительные свойства и настройки

IMeInput
Например options и пр в attrs
{ id, name, description, ... }

IMeChart
Например настройки графика в attrs
{ x, line1, line2 }

IMeTable
{ ... }

IMeIcon

