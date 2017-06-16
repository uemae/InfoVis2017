function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var ch = 1.0;
    var save_mesh;

    screen.init( volume, {
        width: window.innerWidth,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var name = document.getElementById('range');
    var isovalue = range.value;
    var name = document.getElementById('color');
    var color_a = color.value;
    var surfaces = Isosurfaces( volume, isovalue, screen, ch, color_a );
    screen.scene.add( surfaces );

      document.getElementById('btn').addEventListener('click',function(){
        var range = document.getElementById('range');
        isovalue = range.value;
        name = document.getElementById('select');
        ch = select.value;
        name = document.getElementById('color');
        color_a = color.value;
        screen.scene.remove(surfaces);
        surfaces = Isosurfaces( volume, isovalue, screen, ch, color_a );
        screen.scene.add(surfaces);
      },false);

      document.getElementById('btn2').addEventListener('click',function(){
        save_mesh = surfaces;
      },false);

      document.getElementById('btn3').addEventListener('click',function(){
        screen.scene.remove(surfaces);
        screen.scene.add(save_mesh);
      },false);

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    screen.loop();
}
