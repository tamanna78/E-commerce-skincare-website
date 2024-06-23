const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const account_icon = document.getElementById('account-icon');
const sign_in_form = document.getElementById('sign-in-form');
const sign_up_form = document.getElementById('sign-up-form');

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_in_form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleAuth();
});

sign_up_form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleAuth();
});

function handleAuth() {
    // Simulate successful authentication
    container.style.display = 'none'; // Hide the auth forms
    account_icon.classList.remove('hidden'); // Show the account icon
}
