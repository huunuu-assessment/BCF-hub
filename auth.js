// This one file controls the lock on every page.
// Each page includes this script, plus a #gate-screen and #page-content section in its HTML.
// Nobody sees #page-content until Netlify confirms they are logged in.

function showGate() {
  document.getElementById("gate-screen").style.display = "flex";
  document.getElementById("page-content").style.display = "none";
}

function showContent(user) {
  document.getElementById("gate-screen").style.display = "none";
  document.getElementById("page-content").style.display = "block";
  var emailEl = document.getElementById("user-email");
  if (emailEl && user) {
    emailEl.textContent = user.user_metadata && user.user_metadata.full_name
      ? user.user_metadata.full_name
      : user.email;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  netlifyIdentity.on("init", function (user) {
    if (user) {
      showContent(user);
    } else {
      showGate();
    }
  });

  netlifyIdentity.on("login", function (user) {
    showContent(user);
    netlifyIdentity.close();
  });

  netlifyIdentity.on("logout", function () {
    showGate();
  });

  var loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      netlifyIdentity.open("login");
    });
  }

  var logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      netlifyIdentity.logout();
    });
  }

  netlifyIdentity.init();
});
