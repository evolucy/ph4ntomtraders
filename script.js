document.addEventListener("DOMContentLoaded", () => {
    const joinNowBtn = document.querySelector(".join-now");
    const getStartedBtn = document.querySelector(".get-started");

    joinNowBtn.addEventListener("click", () => {
        alert("Joining Phantom Traders...");
    });

    getStartedBtn.addEventListener("click", () => {
        alert("Getting Started with Phantom Traders...");
    });
});
