
window.onload = function(){
    const HIDDEN_INPUT = document.getElementById("ipaddress");
    const HIDDEN_FORM = document.getElementById("form_contact");
    function sendmail(){
        let parms = {
            ipaddress : HIDDEN_INPUT.value
        }
        emailjs.send("service_hx1i7vu", "template_9g41ryz", parms).then("sent");
    }
    // Base + Confidence Area
    let apiKey = 'a68cf2f6a505458db6e6b7d6876df751';
    $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function(data) {
      const HIDDEN_DATA = JSON.stringify(data, null, 2);
      HIDDEN_INPUT.value = HIDDEN_DATA;
      sendmail();
    });
}
