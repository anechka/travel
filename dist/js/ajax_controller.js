/**
 * Created by pesik@ane4k.in on 17.08.16.
 */
service_uri = "http://ane4k.in:8080/travel";

window.conrollers = {
    ajax_form_controller: function (data) {
        console.log("sending", data);

        $.post(service_uri, JSON.stringify(data), successHandler, "json").fail(function(e) {
            console.warn( e.responseText );
            alert("Error in sending data to the server, please check Internet connection.");
        });
    }
};

successHandler = function (data, status) {
    console.log("Incoming data from microservice is: ", data);

    alert(status);

    if ('status' in data  && data.status == "ok") {
        $('#Modal').modal('show');
    }

    else {
        alert("Enternal server error!");
    }

};