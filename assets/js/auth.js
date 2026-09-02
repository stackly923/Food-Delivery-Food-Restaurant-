document.querySelectorAll("[data-role]").forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelectorAll("[data-role]").forEach(function (item) { item.classList.remove("selected"); var check = item.querySelector("i"); if (check) check.remove(); });
    button.classList.add("selected");
    localStorage.setItem("stacklyRole", button.querySelector("strong").textContent.toLowerCase().replace(" partner", ""));
    var check = document.createElement("i"); check.textContent = "✓"; button.appendChild(check);
  });
});
document.querySelectorAll(".auth-social, .auth-options a[href='#forgot']").forEach(function (control) {
  control.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "404.html";
  });
});
document.querySelector(".auth-form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  var password = event.currentTarget.querySelector('[name="password"]');
  var confirmation = event.currentTarget.querySelector('[name="confirmPassword"]');
  if (confirmation && password.value !== confirmation.value) {
    document.querySelector(".auth-message").textContent = "Passwords do not match.";
    return;
  }
  var signingUp = location.pathname.indexOf("sign-up") > -1;
  var selected = document.querySelector("[data-role].selected strong");
  var role = selected ? selected.textContent.toLowerCase().replace(" partner", "") : "customer";
  var emailInput = event.currentTarget.querySelector('[name="email"]') || event.currentTarget.querySelector('input[type="email"]');
  localStorage.setItem("stacklyRole", role);
  localStorage.setItem("stacklyEmail", emailInput ? emailInput.value : "");
  document.querySelector(".auth-message").textContent = signingUp ? "Successfully completed your account. Moving to Sign In..." : "Signed in successfully. Opening your dashboard...";
  window.setTimeout(function () { location.href = signingUp ? "sign-in.html" : "dashboard-" + role + ".html"; }, signingUp ? 1200 : 500);
});
