//button slide up/down
$(document).ready(function(){
    $(".btn1").click(function(){
        $("ul").slideUp();
    });
    $(".btn2").click(function(){
        $("ul").slideDown();
    });




   //image gallery slider
    var width = 1500;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
	
//fade out/in buttons	
    $(".btn1").click(function(){
        $(".audioplay").fadeOut()
    });
    $(".btn2").click(function(){
        $(".audioplay").fadeIn();
    });
});



//BAR CHART

google.load("visualization", "1", {packages:["corechart"]});



google.setOnLoadCallback(drawChart);



function drawChart(){
	
	var data = google.visualization.arrayToDataTable([
	["Price", "SEO Viewer Visits per day"], 
	["$100", 200],
	["$500", 1000],
	["$1000", 5000],
	["$5000", 25000],
	["$10000", 100000]
	]);
	
	var options ={
		title: "Daily Visits from Viewers",
	
		};
	
	var chart = new google.visualization.BarChart(document.getElementById("barchart"));
	
	chart.draw(data, options);
	
	
	}
