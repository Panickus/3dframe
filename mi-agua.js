// Registro del componente mi-componente-agua en A-Frame
AFRAME.registerComponent('mi-agua', {
   schema: {
     color: { type: 'color', default: '#7AD2F7' },
     opacity: { type: 'number', default: 0.8 },
     transparent: { type: 'boolean', default: true },
     normalMap: { type: 'asset' },
     normalScale: { type: 'vec2', default: {x: 1, y: 1} },
     normalTextureRepeat: { type: 'vec2', default: {x: 1, y: 1} }
   },
   init: function () {
     var data = this.data;
     var el = this.el;
 
     // Establecer el material inicial del agua
     el.setAttribute('material', {
       color: data.color,
       opacity: data.opacity,
       transparent: data.transparent,
       normalMap: data.normalMap,
       normalScale: data.normalScale,
       normalTextureRepeat: data.normalTextureRepeat
     });
 
     // Crear animación para el offset de la textura normal
     this.normalOffset = {x: 0, y: 0};
     this.el.setAttribute('animation__normalTextureOffset', {
       property: 'material.normalMap.offset',
       to: {x: 1, y: 1},
       loop: true,
       dur: 10000,
       dir: 'alternate'
     });
   },
   tick: function (time, timeDelta) {
     // Aquí se podría añadir lógica adicional si se requiere para la animación o efectos
   }
 });
 
