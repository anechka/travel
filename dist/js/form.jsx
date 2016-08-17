/**
 * Created by pesik@ane4k.in on 16.08.16.
 */
<form-tag>

    <form onsubmit="{ submit }" if="{ !flag }" id="conversationForm">
        <div class="form-group">
            <label for="InputEmail" class="sr-only">Your email</label>
            <input id="InputEmail" type="email" placeholder="Your email" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="userName" class="sr-only">Name</label>
            <input id="userName" type="text" placeholder="Name" class="form-control" required>
        </div>
        <label class="radio-inline">
            <input id="Radio1" type="radio" name="inlineRadioOptionsSex" value="option1" required> Female
        </label>
        <label class="radio-inline">
            <input id="Radio2" type="radio" name="inlineRadioOptionsSex" value="option2"> Male
        </label>
        <div class="form-group margin-top-15">
            <label for="InputCity" class="sr-only">City/State</label>
            <input id="InputCity" type="text" placeholder="City/State" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="Inputcountry" class="sr-only">Country</label>
            <input id="Inputcountry" type="tetx" placeholder="Country" class="form-control" required>
        </div>

        <textarea rows="5" class="form-control" required></textarea>
        <div class="form-group margin-top-15">
            <p>Travel Professional?</p>
            <label class="radio-inline">
                <input id="Radio3" type="radio" name="inlineRadioOptionsProfessional" value="option3" required> Yes
            </label>
            <label class="radio-inline">
                <input id="Radio4" type="radio" name="inlineRadioOptionsProfessional" value="option4"> No
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


        submit(e) {

            this.flag = true;

            var data = {
                username: this.userName.value,
                email: this.InputEmail.value
            };

            window.conrollers.ajax_form_controller(data);
        }

        clickContinueHandler(e) {
            this.flag = false;

            this.conversationForm.reset();
        }
    </script>


</form-tag>