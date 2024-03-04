
function validatePassword() {
    var password = document.getElementById("password").value;
    var strengthBadge = document.getElementById("passwordStrength");
    var strength = 0;
  
    // If password contains both lower and uppercase characters, increase strength value.
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength += 1;
    }
  
    // If it has numbers and characters, increase strength value.
    if (password.match(/([0-9])/)) {
      strength += 1;
    }
  
    // If it has one special character, increase strength value.
    if (password.match(/([!,@,#,$,%,^,&,*,?,_,~])/)) {
      strength += 1;
    }
  
    // If it has two special characters, increase strength value.
    if (password.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/)) {
      strength += 1;
    }
  
    // Displaying different messages based on the strength value.
    if (strength < 2) {
      strengthBadge.innerHTML = '<span class="weak">Weak</span>';
    } else if (strength == 2) {
      strengthBadge.innerHTML = '<span class="medium">Medium</span>';
    } else {
      strengthBadge.innerHTML = '<span class="strong">Strong</span>';
    }
  }
  