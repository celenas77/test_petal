(function() {

    var leafPath= true;

    function init() {

        container = document.getElementById('wrap');
        width = container.offsetWidth;
        height = container.offsetHeight;
      
        //here you can customize svg shapes, i used icomoon App
        shapes = ['#icon-feuille1','#icon-feuille2','#icon-feuille3'];

        //leaves color and size range picked randomly
        sizes = [36,45,54,63];
        colors = ['#E7BB88','#EDDD94','#B1C800'];

        //create initial leaves
        var leaves = width/10;

        for (var i = 0; i < leaves; i++) {
            create();
        };
    }

    function create(){
        leaf = document.createElementNS('http://www.w3.org/2000/svg','svg');
        leafPath = document.createElementNS('http://www.w3.org/2000/svg','use');

        shape = shapes[Math.floor(Math.random()*shapes.length)];
        leafPath.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href', shape);
        leaf.appendChild(leafPath);

        color = colors[Math.floor(Math.random()*colors.length)];
        size = sizes[Math.floor(Math.random()*sizes.length)];

        leaf.style.fill = color;
        leaf.style.width = leaf.style.height = size+'px';
        leaf.style.left = Math.floor(Math.random()*width);
        leaf.style.top = Math.floor(Math.random() * -height);
        container.appendChild(leaf);
        fall(leaf);
    }

    function destroy() {
        container.removeChild(this.target);
        create();
    }

    function fall(leaf){
        fallSpeed = Math.random() * (50 - 10) + 10;
        rotationSpeed = fallSpeed/2;

        endX = Math.floor(Math.random()*width);

        //fall tweenmax destroy leaf onComplete and create a new one
        TweenMax.to(leaf, fallSpeed, {top:'100%', ease:Linear.easeNone,onComplete:destroy});

        //rotation timeline
        var rotation = new TimelineMax({repeat:-1});
        rotation.add(
            TweenMax.to(leaf,rotationSpeed,{left:'+=300',rotation: -10,ease:Power1.easeInOut})
        ).add(
            TweenMax.to(leaf,rotationSpeed,{left:'-=300',rotation: 10,ease:Power1.easeInOut})
        );
    }

    init();


})();