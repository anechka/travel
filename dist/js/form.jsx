/**
 * Created by pesik@ane4k.in on 16.08.16.
 */
<form-tag>

    <form if="{ !flag }" id="conversationForm">
        <div class="form-group has-feedback">
            <label for="inputEmail" class="sr-only">Your email</label>
            <div class="input-group">
                <span class="input-group-addon">@</span>
                <input id="inputEmail" class="form-control" type="email" placeholder="Your email" data-error="Sorry, that email address is invalid" required>
            </div>
            <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
            <div class="help-block with-errors"></div>
        </div>
        <div class="form-group">
            <label class="sr-only" for="userName">Name</label>
            <input class="form-control" id="userName" type="text" placeholder="Name" data-minlength="3" required>
            <div class="help-block with-errors"></div>
        </div>
        <label class="radio-inline">
            <input type="radio" name="inlineRadioOptionsSex" value="female" required> Female
        </label>
        <label class="radio-inline">
            <input type="radio" name="inlineRadioOptionsSex" value="male"> Male
        </label>
        <div class="form-group margin-top-15">
            <label for="inputCity" class="sr-only">City/State</label>
            <input id="inputCity" type="text" placeholder="City/State" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="inputCountry" class="sr-only">Country</label>
            <input id="inputCountry" type="tetx" placeholder="Country" class="form-control" required>
        </div>

        <textarea id="messageText" rows="5" class="form-control" required></textarea>
        <div class="form-group margin-top-15">
            <p>Travel Professional?</p>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptionsProfessional" value="yes" required> Yes
            </label>
            <label class="radio-inline">
                <input type="radio" name="inlineRadioOptionsProfessional" value="no"> No
            </label>
        </div>

        <button type="submit" class="btn btn-default">GO</button>
    </form>

    <div class="jumbotron conversationFormMessageBox" if="{ flag }">
        <h2>Thank for starting the conversation.</h2>
        <p>
            Your message has been received.
            We will be in touch promptly.
            We just sent you a confirmation email to make sure we received the correct address for you.
        </p>
        <p><button class="btn btn-primary btn-lg" onclick="{ clickContinueHandler }">Continue browsing</button></p>
    </div>




    <script>
        this.flag = false;

        this.on('mount', function(){
            console.log('mount form with riot.js') // (mount <form> component)
            $(this.conversationForm).validator().on('submit', this.submit);
        })

        var self = this

        submit(e) {
            console.log("Submitting riot.js from");

            if (e.isDefaultPrevented()) {
                // handle the invalid form...
                console.log("handle the invalid form")
                alert("Please fill all text inputs in the form")
            } else {
                // everything looks good!
                console.log("everything looks good!")
                e.preventDefault();

                // get data from controls
                var data = {
                    username: self.userName.value,
                    email: self.inputEmail.value,
                    sex: $(self.inlineRadioOptionsSex).filter(":checked").val(),
                    city: self.inputCity.value,
                    country: self.inputCountry.value,
                    message: self.messageText.value,
                    isProfessionalTarget: $(self.inlineRadioOptionsProfessional).filter(":checked").val()
                };
                // send data to server by controler
                window.conrollers.ajax_form_controller(data);
                // display green message "Thank for starting the conversation"
                self.flag = true;
                // update UI in riot.js tag
                self.update()
            }

            return false;// stop default sending form by GET request
        }

        clickContinueHandler(e) {
            this.flag = false;// show form enother in riot.js tag

            this.conversationForm.reset();
        }
    </script>


</form-tag>