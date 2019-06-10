







$.getJSON('http://192.168.1.8:8081/test', function(data) {
        
        var text = `Date: ${data.date}<br>
                    Time: ${data.time}<br>
                    Unix time: ${data.milliseconds_since_epoch}`
                    
        
        $(".mypanel").html(text);
    });