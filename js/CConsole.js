

document.addEventListener('touchstart',function (event){

    let clientY;
    let clientX;

    function loadConsole(){

        const script = document.createElement('script');

        script.onload=function(){

            console.log('CConsole loaded script');
            const initFun = cConsole.initFun;

            if(initFun){
                console.log('CConsole run initFun');
                eval(initFun)
            }
        };

        console.log('CConsole loading script',cConsole.script);
        script.src=cConsole.script;
        document.head.appendChild(script);


    }

    if(!cConsole.keys){
        cConsole.keys=[]
    }

    const keys = cConsole.keys;

    innerWidth = window.innerWidth;
    innerHeight = window.innerHeight;

    if (event.touches)
    {
        const touch = event.touches[0];

        clientX = touch.clientX;
        clientY = touch.clientY;

    }else{

        clientX = event.clientX;
        clientY = event.clientY;
    }


    //console.log(event)
    //console.log(window.innerWidth)

    let key = '';

    if (clientX>innerWidth/2) {

        if (clientY > innerHeight / 2)

            key = '9';
        else
            key = '3';

    } else {

        if (clientY > innerHeight / 2)

            key = '7';
        else
            key = '1';
    }

    keys.push(key);

    //console.log(key,keys.length);

    if(keys.length===8){

        let keyStr =  keys.join('');

        //console.log(keyStr)

        if (keyStr === cConsole.pass)
        {
            loadConsole()
        }

        cConsole.keys = []

    }

});

var cConsole = {
    'script':'//eruda.liriliri.io/eruda.min.js',
    'pass':'13971397',
    'initFun':'eruda.init();//eruda.hide();eruda._entryBtn.hide();',
};

console.log('CConsole init config',cConsole);