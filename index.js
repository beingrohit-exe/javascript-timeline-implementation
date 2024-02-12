function javascript() {
    let items = document.querySelectorAll(".timeline li");

    function isInViewPort(react) {
        const rect = react.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function getCallback() {
        for (let i=  0 ; i<items.length ; i++) {
            if (isInViewPort(items[i])) {
                items[i].classList.add("with-visibility")
            }
        }
    }

    window.addEventListener("load", getCallback);
    window.addEventListener("scroll", getCallback);
}

javascript();