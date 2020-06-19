$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    autoplaySpeed: 4000,
    autoWidth: true,
  });

  $(".pizza-item").hover(function () {
    $('.pizza-description').addClass('animate__animated animate__faster animate__fadeInUp');
  }, function () {
    $('.pizza-description').removeClass('animate__animated animate__faster animate__fadeInUp');
  });

});
// Hamburger
$(".hamburger").on("click", function (e) {
  $(".hamburger").toggleClass("is-active");
  $(".navigation-wrapper").toggleClass("navigation-wrapper-mobile");
  $(".logo-black").toggleClass("logo");
  $(".navigation-mobile").toggleClass("display-flex");
  if ($(".special-offers").hasClass("user-closed")){

  }else {
    $(".special-offers").toggleClass("display-none");
  }
});

// Go To

$(".go-to-main-btn").click(function(){
  $(".go-to-dropdown").toggle();
  $(".go-to-main-btn").toggleClass("go-to-main-btn-toggle");
});

// ticker cross 

$(".close-cross").click(function(){
  $(".special-offers").toggleClass("display-none user-closed");
});

// Submit

$('#submit').click(function () {
  $('.validation').each(function () {
    if ($(this).val() == "") {
      $('.validation-error-message').css('display', 'block')
      return false;
    } else {
      $('.validation-error-message, .contact-form').css('display', 'none')
      $('.form-received').css('display', 'block')

    }
  });
});

// Ticker data

var days = ["Monday Special:", "Tuesday Special:", "Wednesday Special:", "Thursday Special:", "Friday Special:", "Saturday Special:" , "Sunday Special:"];
var dineInText = ["Dine In"];
var dineInSpecial = [": Manicotti Salad - 15$,",": Spaghetti and Meatballs - 14$,",": Large pizza - $25,",": Fettucini and salad - $14,",": Large 4 item pizza - $23,",": Large gourmet pizza - $30",": Large 3 item pizza - $23 | Wings - $12,"];
var takeOut = ["Take Out"];
var takeOutSpecial = [": Large 6 item pizza - $23",": Large 6 item pizza - $23", ": Large 6 item pizza - $23 ", ": Large 3 item pizza - $21 ", ": Large 3 item pizza - $21" , ": Large Gourmet Pizza - 30$", ": Large 3 item pizza - $21 "];
var fadeOut = 2000;
var fadeIn = 5000;

function dayFunction() {

  // var daySelector = $(".day").data("a") || 0;
  // $(".day").data("a", daySelector == days.length - 1 ? 0 : daySelector + 1).text(days[daySelector]).fadeIn()
  //   .delay(fadeIn).fadeOut(fadeOut, dayFunction);
  let day = new Date();
  day = day.getDay();

  document.getElementsByClassName('day')[0].innerHTML=days[day-1];
  document.getElementsByClassName('dine-in-item')[0].innerHTML=dineInSpecial[day-1];
  document.getElementsByClassName('take-out-item')[0].innerHTML=takeOutSpecial[day-1];


}
$(dayFunction);

// function rotateTerm() {
//   var dineInSelector = $(".dine-in").data("b") || 0;
//   $(".dine-in").data("b", dineInSelector == dineInText.length - 1 ? 0 : dineInSelector + 1).text(dineInText[dineInSelector]).fadeIn()
//     .delay(fadeIn).fadeOut(fadeOut, rotateTerm);

//     var takeOutSelector = $(".take-out").data("c") || 0;
//     $(".take-out").data("c", takeOutSelector == takeOut.length - 1 ? 0 : takeOutSelector + 1).text(takeOut[takeOutSelector]).fadeIn()
//       .delay(fadeIn).fadeOut(fadeOut, rotateTerm);
// }
// $(rotateTerm);

// function dineInFunction() {

//     var dineInItemSelector = $(".dine-in-item").data("d") || 0;
//     $(".dine-in-item").data("d", dineInItemSelector == dineInSpecial.length - 1 ? 0 : dineInItemSelector + 1).text(dineInSpecial[dineInItemSelector]).fadeIn()
//       .delay(fadeIn).fadeOut(fadeOut, dineInFunction);

// }
// $(dineInFunction);

// function takeOutFunction() {

//   var takeOutItemSelector = $(".take-out-item").data("e") || 0;
//   $(".take-out-item").data("e", takeOutItemSelector == takeOutSpecial.length - 1 ? 0 : takeOutItemSelector + 1).text(takeOutSpecial[takeOutItemSelector]).fadeIn()
//     .delay(fadeIn).fadeOut(fadeOut, takeOutFunction);

// }
// $(takeOutFunction);


// menu-anchor

var topRange = 200,  // measure from the top of the viewport to X pixels down
  edgeMargin = 0,   // margin above the top or margin from the end of the page
  animationTime = 1200, // time in milliseconds
  contentTop = [];

$(document).ready(function () {
  // Set up content an array of locations
  $('.menu-select').find('a').each(function () {
    contentTop.push($($(this).attr('href')).offset().top);
  })

  $('.menu-select').find('a').click(function () {
    $('.menu-select a').removeClass('current');
    $(this).addClass('current');

  })
  // adjust side menu
  $(window).scroll(function () {
    var winTop = $(window).scrollTop(),
      bodyHt = $(document).height(),
      vpHt = $(window).height() + edgeMargin;  // viewport height + margin
    $.each(contentTop, function (i, loc) {
      if ((loc > winTop - edgeMargin && (loc < winTop + topRange || (winTop + vpHt) >= bodyHt))) {
        $('.menu-select a').removeClass('current').eq(i).addClass('current');
      }
    })
  })

});

mapboxgl.accessToken = 'pk.eyJ1Ijoib3dlbmxhbWIiLCJhIjoiY2lleWljcnF4MDBiOXQ0bHR0anRvamtucSJ9.t3YnHHqvQZ8Y0MTCNy0NNw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-82.25418772883353, 43.027910354982765],
  zoom: 14,
});

var marker = new mapboxgl.Marker()
  .setLngLat([-82.25418772883353, 43.027910354982765])
  .addTo(map);

// button liquid

const LiquidButton = class LiquidButton {
  constructor(svg,w) {
    const options = svg.dataset;
    this.id = this.constructor.id || (this.constructor.id = 1);
    this.constructor.id++;
    this.xmlns = 'http://www.w3.org/2000/svg';
    this.tension = options.tension * 1 || 0.4;
    this.width =  w;
    this.height = options.height * 1 || 110;
    this.margin = options.margin || 26;
    this.hoverFactor = options.hoverFactor || -0.1;
    this.gap = options.gap || 5;
    this.debug = options.debug || false;
    this.forceFactor = options.forceFactor || 0.2;
    this.color1 = options.color1 || '#36DFE7';
    this.color2 = options.color2 || '#8F17E1';
    this.color3 = options.color3 || '#BF09E6';
    this.textColor = options.textColor || '#944B20';
    this.text = options.text || 'Button';
    this.svg = svg;
    this.layers = [{
      points: [],
      viscosity: 0.5,
      mouseForce: 1000,
      forceLimit: 20,
    }];
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      layer.viscosity = options['layer-' + (layerIndex + 1) + 'Viscosity'] * 1 || layer.viscosity;
      layer.mouseForce = options['layer-' + (layerIndex + 1) + 'MouseForce'] * 1 || layer.mouseForce;
      layer.forceLimit = options['layer-' + (layerIndex + 1) + 'ForceLimit'] * 1 || layer.forceLimit;
      layer.path = document.createElementNS(this.xmlns, 'path');
      this.svg.appendChild(layer.path);
    }
    this.wrapperElement = options.wrapperElement || document.body;
    if (!this.svg.parentElement) {
      this.wrapperElement.append(this.svg);
    }

    this.svgText = document.createElementNS(this.xmlns, 'text');
    this.svgText.setAttribute('x', '47%');
    this.svgText.setAttribute('y', '50%');
    this.svgText.setAttribute('dy', ~~(this.height / 8) + 'px');
    this.svgText.setAttribute('font-size', ~~(this.height / 3));
    // this.svgText.style.fontFamily = 'sans-serif';
    this.svgText.setAttribute('text-anchor', 'middle');
    this.svgText.setAttribute('pointer-events', 'none');
    this.svg.appendChild(this.svgText);

    this.svgDefs = document.createElementNS(this.xmlns, 'defs')
    this.svg.appendChild(this.svgDefs);

    this.touches = [];
    this.noise = options.noise || 0;
    document.body.addEventListener('touchstart', this.touchHandler);
    document.body.addEventListener('touchmove', this.touchHandler);
    document.body.addEventListener('touchend', this.clearHandler);
    document.body.addEventListener('touchcancel', this.clearHandler);
    this.svg.addEventListener('mousemove', this.mouseHandler);
    this.svg.addEventListener('mouseout', this.clearHandler);
    this.initOrigins();
    this.animate();
  }

  get mouseHandler() {
    return (e) => {
      this.touches = [{
        x: e.offsetX,
        y: e.offsetY,
        force: 1,
      }];
    };
  }

  get touchHandler() {
    return (e) => {
      this.touches = [];
      const rect = this.svg.getBoundingClientRect();
      for (let touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {
        const touch = e.changedTouches[touchIndex];
        const x = touch.pageX - rect.left;
        const y = touch.pageY - rect.top;
        if (x > 0 && y > 0 && x < this.svgWidth && y < this.svgHeight) {
          this.touches.push({ x, y, force: touch.force || 1 });
        }
      }
      e.preventDefault();
    };
  }

  get clearHandler() {
    return (e) => {
      this.touches = [];
    };
  }

  get raf() {
    return this.__raf || (this.__raf = (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) { setTimeout(callback, 10) }
    ).bind(window));
  }

  distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  }

  update() {
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = layer.points;
      for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
        const point = points[pointIndex];
        const dx = point.ox - point.x + (Math.random() - 0.5) * this.noise;
        const dy = point.oy - point.y + (Math.random() - 0.5) * this.noise;
        const d = Math.sqrt(dx * dx + dy * dy);
        const f = d * this.forceFactor;
        point.vx += f * ((dx / d) || 0);
        point.vy += f * ((dy / d) || 0);
        for (let touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
          const touch = this.touches[touchIndex];
          let mouseForce = layer.mouseForce;
          if (
            touch.x > this.margin &&
            touch.x < this.margin + this.width &&
            touch.y > this.margin &&
            touch.y < this.margin + this.height
          ) {
            mouseForce *= -this.hoverFactor;
          }
          const mx = point.x - touch.x;
          const my = point.y - touch.y;
          const md = Math.sqrt(mx * mx + my * my);
          const mf = Math.max(-layer.forceLimit, Math.min(layer.forceLimit, (mouseForce * touch.force) / md));
          point.vx += mf * ((mx / md) || 0);
          point.vy += mf * ((my / md) || 0);
        }
        point.vx *= layer.viscosity;
        point.vy *= layer.viscosity;
        point.x += point.vx;
        point.y += point.vy;
      }
      for (let pointIndex = 0; pointIndex < points.length; pointIndex++) {
        const prev = points[(pointIndex + points.length - 1) % points.length];
        const point = points[pointIndex];
        const next = points[(pointIndex + points.length + 1) % points.length];
        const dPrev = this.distance(point, prev);
        const dNext = this.distance(point, next);

        const line = {
          x: next.x - prev.x,
          y: next.y - prev.y,
        };
        const dLine = Math.sqrt(line.x * line.x + line.y * line.y);

        point.cPrev = {
          x: point.x - (line.x / dLine) * dPrev * this.tension,
          y: point.y - (line.y / dLine) * dPrev * this.tension,
        };
        point.cNext = {
          x: point.x + (line.x / dLine) * dNext * this.tension,
          y: point.y + (line.y / dLine) * dNext * this.tension,
        };
      }
    }
  }

  animate() {
    this.raf(() => {
      this.update();
      this.draw();
      this.animate();
    });
  }

  get svgWidth() {
    return this.width + this.margin * 2;
  }

  get svgHeight() {
    return this.height + this.margin * 2;
  }

  draw() {
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      if (layerIndex === 0) {
        layer.path.style.fill = 'transparent';
        layer.path.attributeStyleMap.set('stroke', '#F37931');
        layer.path.attributeStyleMap.set('stroke-width', '1');
        layer.path.attributeStyleMap.set('transform', 'skew(-10deg,-10deg) translate(10px,30px)');
      }
      const points = layer.points;
      const commands = [];
      commands.push('M', points[0].x, points[0].y);
      for (let pointIndex = 1; pointIndex < points.length; pointIndex += 1) {
        commands.push('C',
          points[(pointIndex + 0) % points.length].cNext.x,
          points[(pointIndex + 0) % points.length].cNext.y,
          points[(pointIndex + 1) % points.length].cPrev.x,
          points[(pointIndex + 1) % points.length].cPrev.y,
          points[(pointIndex + 1) % points.length].x,
          points[(pointIndex + 1) % points.length].y
        );
      }
      commands.push('Z');
      layer.path.setAttribute('d', commands.join(' '));
    }
    this.svgText.textContent = this.text;
    this.svgText.style.fill = this.textColor;
  }

  createPoint(x, y) {
    return {
      x: x,
      y: y,
      ox: x,
      oy: y,
      vx: 0,
      vy: 0,
    };
  }

  initOrigins() {
    this.svg.setAttribute('width', this.svgWidth);
    this.svg.setAttribute('height', this.svgHeight);
    for (let layerIndex = 0; layerIndex < this.layers.length; layerIndex++) {
      const layer = this.layers[layerIndex];
      const points = [];
      for (let x = ~~(this.height / 2); x < this.width - ~~(this.height / 2); x += this.gap) {
        points.push(this.createPoint(
          x + this.margin,
          this.margin
        ));
      }
      for (let alpha = ~~(this.height * 1.25); alpha >= 0; alpha -= this.gap) {
        const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
        points.push(this.createPoint(
          Math.sin(angle) * this.height / 2 + this.margin + this.width - this.height / 2,
          Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
        ));
      }
      for (let x = this.width - ~~(this.height / 2) - 1; x >= ~~(this.height / 2); x -= this.gap) {
        points.push(this.createPoint(
          x + this.margin,
          this.margin + this.height
        ));
      }
      for (let alpha = 0; alpha <= ~~(this.height * 1.25); alpha += this.gap) {
        const angle = (Math.PI / ~~(this.height * 1.25)) * alpha;
        points.push(this.createPoint(
          (this.height - Math.sin(angle) * this.height / 2) + this.margin - this.height / 2,
          Math.cos(angle) * this.height / 2 + this.margin + this.height / 2
        ));
      }
      layer.points = points;
    }
  }
}


const redraw = () => {
  button.initOrigins();
};
const buttonsU = document.getElementsByClassName('liquid-u');

for (let buttonIndex = 0; buttonIndex < buttonsU.length; buttonIndex++) {
  const button = buttonsU[buttonIndex];
  button.liquidButton = new LiquidButton(button,180);
}

const buttons = document.getElementsByClassName('liquid-button');

for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
  const button = buttons[buttonIndex];
  button.liquidButton = new LiquidButton(button,120);

}