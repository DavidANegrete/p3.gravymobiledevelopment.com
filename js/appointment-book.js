/**
 * Created by David on 11/21/13.
 * Harvard Extension Schools
 */

//declaring variables
	var cost=0;
	var time=0;
    var label;
    var extra_selected = false;
    var service;

    var extras = new Array();







//declaring prices/time of extra services
    var extras_name = new Array("Parafin Wax Treatment","Massage","Nail Art");
    var extras_cost = new Array(10,10,10);
    var extras_time = new Array(10,10,20);






/***
 * Inner clusters of radio buttons.
***/

    var main_options            =       '<input type="radio" class="service" name="service" id="extensions">'+
                                        '<label for="extensions">Nail Extensions</label><br>'+

                                            <!-- adding a div to add content to later -->
                                        '<div class="options" id="extensions-options"></div>'+

                                        '<input type="radio" class="service" name="service" id="fills">'+
                                        '<label for="fills">Fills</label><br>'+

                                            <!-- adding a div to add content to later -->
                                        '<div class="options" id="fills-options"></div>'+

                                        '<input type="radio" class="service" name="service" id="manicure">'+
                                        '<label for="manicure">Manicure</label><br>'+

                                        <!-- adding a div to add content  -->
                                        '<div class="options" id="manicure-options"></div><br>';



	var extensions_fills_sub    =   '<input type="radio" class="service-type" name="service-type" id="acrylic">'+
                                    '<label for="acrylic">Acrylic</label>'+
                                    '<input type="radio" class="service-type" name="service-type" id="gel">'+
                                    '<label for="gel">Gel</label><br>';

    var manicure_sub            =   '<input type="radio" class="service-type" name="service-type" id="regular_polish">'+
                                    '<label for="regular_polish">Regular Polish</label><br>'+
                                    '<input type="radio" class="service-type" name="service-type" id="gel_polish">'+
                                    '<label for="gel_polish">Gel Polish</label><br>';

    var add_on_checkbox           = '<input type="checkbox" class = "add-on" name="add-on" id = "parafin" value="0" = "50">'+
                                    '<label for="parafin">Parafin wax</label><br>'+
                                    '<input type="checkbox" class = "add-on" name="add-on" id = "massage" value="1">'+
                                    '<label for="massage">Massage</label><br>'+
                                    '<input type="checkbox" class = "add-on" name="add-on" id = "nail-art" value="2">'+
                                    '<label for="nail-art">Nail Art</label><br>'+
                                    '<input type="checkbox" class = "add-on" name="add-on" id = "none" value="3">'+
                                    '<label for="none">None</label><br><br>';


/**
 * displaying the main options
 */
$('#head').html('<h1>Pick a Service</h1>');
$('#display').html(main_options);
$('#book-now').html('');

/***
* Click listener for the initial radio button UI. The termination of the UI will result in the cost
* and time values to be set, calculated and the calculate function to be called..
***/

$('input[name=service]').click(function() {

	//Get the label element that comes immediately after this radio button.
	     label       =   $(this).next();
	
	//from the label element get the inner HTML 
	    service     =    label.html();
	
	/*
	 If else block to check the buttons
	 */

	//Can be acrylic (cost = 50, time = 60) or gel (cost = 60, time = 60).
	if (service == 'Nail Extensions'){

		//showing additional options for Nail Extensions clear out other radio options
		$('#fills-options').html('');
		$('#manicure-options').html('');
		$('#extensions-options').html(extensions_fills_sub);

        //next layer checking whether acrylic or gel was selected

        $('input[name=service-type]').click(function(){

            //get the label element that comes after this inner radio button
            label       =   $(this).next();

            //from the label element get the inner HTML
            service     =   label.html();

            //set cost to 50 for acrylic nails and time to 60
            if (service == 'Acrylic') {
                cost    =   50;
                time    =   60;
                service = service + ' Extensions';
                console.log('Acrylic Cost:' + cost);
            }

            //set cost to 60 for gel and time to 60
            else if(service == 'Gel'){
                cost    =   60;
                time    =   60;
                service = service + ' Extensions';
                console.log('gel Cost:' + cost);
            }

        });

	}

    //Can be acrylic (cost = 35, time = 50) or gel (cost = 60, time = 50).
	else if(service == 'Fills'){

        //get the label element that comes after this inner radio button
        label       =   $(this).next();

        //from the label element get the inner HTML
        service     =   label.html();

		//showing additional options for Nail Extensions clear out other radio options
		$('#extensions-options').html('');
		$('#manicure-options').html('');
		$('#fills-options').html(extensions_fills_sub);


        $('input[name=service-type]').click(function(){

            //get the label element that comes after this inner radio button
            label       =   $(this).next();

            //from the label element get the inner HTML
            service     =   label.html();

            //set cost to 50 for acrylic nails and time to 60
            if (service == 'Acrylic') {
                cost    =   35;
                time    =   50;
                service = service + ' Fills';
            }

            //set cost to 60 for gel and time to 60
            else if(service == 'Gel'){
                cost    =   45;
                time    =   50;
                service = service + ' Fills';
            }

        });

			

	}

    //Can be regular polish (cost = 35, time = 30) or gel polish (cost = 35, time = 45).
	else if(service == 'Manicure'){

        //get the label element that comes after this inner radio button
        label       =   $(this).next();

        //from the label element get the inner HTML
        service     =   label.html();

        //showing additional options for Manicures. Clearing out other radio options
		$('#extensions-options').html('');
		$('#fills-options').html('');
		$('#manicure-options').html(manicure_sub)

        $('input[name=service-type]').click(function(){

            //get the label element that comes after this inner radio button
            label       =   $(this).next();

            //from the label element get the inner HTML
            service     =   label.html();

            //set cost to 50 for acrylic nails and time to 60
            if (service == 'Regular Polish') {
                cost    =   25;
                time    =   30;
                service = service + ' Manicure';
            }

            //set cost to 60 for gel and time to 60
            else if(service == 'Gel Polish'){
                cost    =   35;
                time    =   45;
                service = service + ' Manicure';
            }

        });
				
	}


}); 
//EO main options

/***
 * Click listener for for the select button.
 **/
var control= 0;
$('#select-service').click(function() {
    if(control==0){
        addOn();
        control =1;
    }

    displayTotal();
    checkboxes();


});

function displayTotal(){

    $('#main-service').html( service + ': <span> $' + cost + '</span>' );


    //checking if valid because keep null from displaying
    if(extra_selected == true){

        $('#display').html('');
        $('#head').html('<h1>Services Selected</h1>');
        $('#info').html('Here is a estimate for your next appointment. Click on Book-It to schedule it.');
        $('#book-now').html('<button type="button" id = "book">Book-It</button>');


                //step through extras and display total
        for (var i=0; i<extras.length; i++){

            $('#extras').append( '<p>' + extras_name[Math.floor(extras[i])] + ':<span> $' + extras_cost[Math.floor(extras[i])] + '</span></p>');

            time = time + extras_time[Math.floor(extras[i])];
            cost = cost + extras_cost[Math.floor(extras[i])];

        }

        $('#sub-total').html( 'Service + Extras: ' + ' <span> $' + cost + '</span>' +'<br>');
    }




    $('#time').html( '<br>Time needed' + ': <span>' + time + ' minutes </span><br><br>' );
   bookNow()

}

/***
*This function changes the heading and also displays new HTML in the display area
***/

function addOn(){


    $('#head').html('<h1>Pick Extras</h1>');
    $('#info').html('Select an extra service or select none and continue.');
    $('#display').html(add_on_checkbox);


}

function bookNow(){



}


$('#back').click(function() {
    var amount = 0;

   /** $('input[name=add-on]:checked').each(function(){
      var price = Math.floor($(this).val());
        if(price == 1){

            //existing cost + parafin cost adding time and 10 mins
            cost = cost + parafin;
            time = time + 10;

        }
        else if(price == 2){
            cost = cost + massage;
            time = time + 10;

        }
        else if(price == 3){
            cost = cost + art;
            time = time + 15;


        }
    });
**/

});

/***
 * Check the boxes
 ***/

function checkboxes(){

    var checkedBoxes = $('input[name=add-on]:checked');

    for (var i=0; i<checkedBoxes.length; i++)
    {
        var box = Math.floor($(checkedBoxes[i]).val());
        if(box == 0){

            extras[i] = box;
        }
        else if(box == 1){
            extras[i] = box;
        }
        else if(box == 2){
            extras[i] = box;
        }
        else if(box == 3){
            extras[i] = box;
        }

        extra_selected = true;

    }

}
