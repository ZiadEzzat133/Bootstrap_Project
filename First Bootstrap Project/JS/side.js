if (localStorage.getItem("issmall") === "yes") {
    sidebarid.classList.add("small-sidebar")
} else {
    sidebarid.classList.remove("small-sidebar")
}
const togglesidebar = () => {
    if (localStorage.getItem("issmall") === "yes") {
        localStorage.setItem("issmall", "no");
        sidebarid.classList.remove("small-sidebar")
    }
    else {
        localStorage.setItem("issmall", "yes");
        sidebarid.classList.add("small-sidebar")
    }

}