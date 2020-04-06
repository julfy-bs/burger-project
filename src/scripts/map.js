let myMap;

// Функция для отображения карты
const init = () => {
  myMap = new ymaps.Map("map", {
    center: [59.934169, 30.353201],
    zoom: 12.35,
    controls: [] // Отключение кнопок на карте //
  });

  // Массив координат на которых будут метки 
  const coords = [
    [59.944651, 30.390131],
    [59.888563, 30.314472],
    [59.970561, 30.312114],
    [59.917777, 30.503410],
  ];

  // Настройки маркеров
  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggeble: false,
    iconLayout: 'default#image',
    iconImageHref: './img/icons/map-marker.svg',
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  })

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  })

  // Команда добавления маркеров на карту
  myMap.geoObjects.add(myCollection);

  // Выключение масштабирование колесом мыши
  myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);
