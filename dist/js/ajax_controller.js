/**
 * Created by pesik@ane4k.in on 17.08.16.
 */
service_uri = "http://ane4k.in:8080/travel";

window.conrollers = {
    ajax_form_controller: function (data) {
        console.log("sending", data);

        $.post(service_uri, JSON.stringify(data), successHandler, "json").fail(function(e) {
            console.warn( e.responseText );
        });
    }
};

successHandler = function (data) {
    console.log("Callback is: ", data);

    console.log(data["status"]);
    console.log(data["username"]);

    alert(data["username"]);
};