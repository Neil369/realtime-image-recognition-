webcam.set ({
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90
    });
    
    camera = document.getElementById("camera");
    wecam.attach('#camera');
    
    function take_snapshot()
    {
        webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_url+'"/>';
    
        });
    }
    
    console.log(m15version , m15.version);
    classfier = m15.imageClassfier(',modelloaded');
    
    function modelloaded() 
    {
     console.log('Model Loaded!');
    }
    
    function check() {
        img = document.getElementById('captured_image')
        classifier.classify(img , gotResult)
    }
    