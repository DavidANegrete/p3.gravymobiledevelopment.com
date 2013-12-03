/**
 * Created by davif on 12/1/13.
 */




/*-------------------------------------------------------------------------------------------------
 Variables
 -------------------------------------------------------------------------------------------------*/
var main_options            =       '<input type="radio" class="service" name="service" id="extensions" value = "1">'+
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
                                    '<div class="options" id="manicure-options"></div>'+

                                    '<input type="radio" class="service" name="service" id ="pedicure">'+
                                    '<label for="pedicure">Pedicure</label><br>'+

                                    <!-- adding a div to add content  -->
                                    '<div class="options" id="pedicure-options"></div>';

var extensions_fills_sub    =       '<input type="radio" class="service-type" name="service-type" id="acrylic">'+
                                    '<label for="acrylic">Acrylic</label><br>'+
                                    '<input type="radio" class="service-type" name="service-type" id="gel">'+
                                    '<label for="gel">Gel</label><br>';

var manicure_sub            =       '<input type="radio" class="service-type" name="service-type" id="regular_polish">'+
                                    '<label for="regular_polish">Regular Polish</label><br>'+
                                    '<input type="radio" class="service-type" name="service-type" id="gel_polish">'+
                                    '<label for="gel_polish">Gel Polish</label><br>';

var add_on_checkbox           =     '<input type="checkbox" class = "add-on" name="add-on" id = "parafin" value="1">'+
                                    '<label for="parafin">Parafin wax</label><br>'+
                                    '<input type="checkbox" class = "add-on" name="add-on" id = "massage" value="2">'+
                                    '<label for="massage">Massage</label><br>'+
                                    '<input type="checkbox" class = "add-on" name="add-on" id = "nail-art" value="3">'+
                                    '<label for="nail-art">Nail Art</label><br>'+
                                    '<input type="checkbox" class = "add-on" name="add-on" id = "none" value="4">'+
                                    '<label for="none">None</label><br>';


var label;
var service;
var main_selected = false;

/*-------------------------------------------------------------------------------------------------
 On Load
 -------------------------------------------------------------------------------------------------*/
$('#heading').html('<h1>Service Estimator</h1>');

$('#options').html(main_options);







/*-------------------------------------------------------------------------------------------------
 Listeners
 -------------------------------------------------------------------------------------------------*/
/***
 * Click listener for the initial radio button UI. The termination of the UI will result in the cost
 * and time values to be set, calculated and the calculate function to be called..
 ***/

$('input[name=service]').click(function() {

    //Get the label element that comes immediately after this radio button.
    label       =   $(this).next();

    //from the label element get the inner HTML
    service     =    label.html();

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
                main_selected = true;
                service = service + ' Extensions';
                console.log('Acrylic Cost:' + cost);
            }

            //set cost to 60 for gel and time to 60
            else if(service == 'Gel'){
                cost    =   60;
                time    =   60;
                main_selected = true;
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
                main_selected = true;
                service = service + ' Fills';
            }

            //set cost to 60 for gel and time to 60
            else if(service == 'Gel'){
                cost    =   45;
                time    =   50;
                main_selected = true;
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
                main_selected = true;
                service = service + ' Manicure';
            }

            //set cost to 60 for gel and time to 60
            else if(service == 'Gel Polish'){
                cost    =   35;
                time    =   45;
                $('#options').html(add_on_checkbox);
                service = service + ' Manicure';
            }

        });

    }


    if(main_selected == true){
        $('#options').html(add_on_checkbox);


    }
});
//EO main options



//$('input[name=service-type]').click(calculate);
//$('input,select').change(calculate);





/*-------------------------------------------------------------------------------------------------

 -------------------------------------------------------------------------------------------------*/
function calculate() {

    var budget   = $('#budget').val();
    var rooms    = $('#room_count').val();
    var services = $('input[name=services]:checked');
    var total    = 0;

    services.each(function() {

        var price = $(this).val();

        var amount = price * rooms;

        total = total + amount;

    }); // end of loop

    $('#output').html(total);

}

function radio_picker(){
    //Get the label element that comes immediately after this radio button.
    label       =   $(this).next();

    //from the label element get the inner HTML
    service     =    label.html();

}



