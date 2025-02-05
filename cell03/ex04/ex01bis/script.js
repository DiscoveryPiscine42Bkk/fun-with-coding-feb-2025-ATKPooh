$(document).ready(function() {
    let size = 200;
    const maxSize = 420;
    const minSize = 200;
    const colors = ["red", "green", "blue"];
    let colorIndex = 0;

    $("#balloon").on("click", function() {
        size += 10;
        if (size > maxSize) {
            size = minSize;
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }
        updateBalloon();
    });

    $("#balloon").on("mouseleave", function() {
        size = Math.max(minSize, size - 5);
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        updateBalloon();
    });

    function updateBalloon() {
        $("#balloon").css({
            width: size + "px",
            height: size + "px",
            backgroundColor: colors[colorIndex]
        });
    }
});
