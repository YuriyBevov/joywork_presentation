let map = document.getElementById("yandex-map");

if(map) {
    ymaps.ready(init);
    let hintContent = 'Тестовый адрес';
    let coords = [59.883173, 32.244596];

    function init(){
        let myMap = new ymaps.Map("yandex-map", {
            center: coords,
            zoom: 12,
            controls: [],
            behaviors: ['drag'],
        });

        var myPlacemark = new ymaps.Placemark( coords ,
            {
                hintContent: '<span class="hint">' + hintContent + '</span>',
            }
        );

        myMap.geoObjects.add(myPlacemark);

        // ZOOM-CONTROL
        let ZoomLayout = ymaps.templateLayoutFactory.createClass(
            //Шаблон html кнопок зума
            "<div class='zoom'>"                                                +
                "<button id='zoom-in' class='zoom-btn zoom-btn-in'></button>"   +
                "<button id='zoom-out' class='zoom-btn zoom-btn-out'></button>" +
            "</div>"                                                    , {

            // Переопределяем методы макета, чтобы выполнять дополнительные действия
            // при построении и очистке макета.
            build: function () {
                // Вызываем родительский метод build.
                ZoomLayout.superclass.build.call(this);

                // Привязываем функции-обработчики к контексту и сохраняем ссылки
                // на них, чтобы потом отписаться от событий.
                this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                // Начинаем слушать клики на кнопках макета.
                let zoomInBtn = document.getElementById('zoom-in');
                let zoomOutBtn = document.getElementById('zoom-out');
    
                zoomInBtn.addEventListener('click', this.zoomInCallback);
                zoomOutBtn.addEventListener('click', this.zoomOutCallback);
            },

            clear: function () {
                // Снимаем обработчики кликов.
                zoomInBtn.removeEventListener('click', this.zoomInCallback);
                zoomOutBtn.removeEventListener('click', this.zoomOutCallback);
                // Вызываем родительский метод clear.
                ZoomLayout.superclass.clear.call(this);
            },

            zoomIn: function () {
                let map = this.getData().control.getMap();
                map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
            },

            zoomOut: function () {
                let map = this.getData().control.getMap();
                map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
            }
        }),

        zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout, position: {right: '30px', bottom: '50px'} } });
        myMap.controls.add(zoomControl);
    }
}
