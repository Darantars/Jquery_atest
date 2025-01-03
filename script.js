$(document).ready(function () {
    let isAnimating = false;
    const knight = $('#animatedElement');
    const knightWidth = knight.width();
    const knightHeight = knight.height();
    const screenWidth = $(window).width();
    const screenHeight = $(window).height();

    function moveElement(direction, property) {
        if (isAnimating) return;
        isAnimating = true;

        let animationProperties = {};
        animationProperties[property] = direction;

        knight.animate(animationProperties, 500, function () {
            isAnimating = false;
        });
    }

    function canMove(direction, property) {
        const currentPosition = parseInt(knight.css(property));
        const newPosition = currentPosition + (direction === '+=' ? 100 : -100);

        if (property === 'left') {
            return newPosition >= 0 && newPosition <= screenWidth - knightWidth;
        } else if (property === 'top') {
            return newPosition >= 0 && newPosition <= screenHeight - knightHeight;
        }

        return false;
    }

    $('#leftButton').click(function () {
        if (canMove('-=', 'left')) {
            moveElement('-=100px', 'left');
        }
    });

    $('#rightButton').click(function () {
        if (canMove('+=', 'left')) {
            moveElement('+=100px', 'left');
        }
    });

    $('#upButton').click(function () {
        if (canMove('-=', 'top')) {
            moveElement('-=100px', 'top');
        }
    });

    $('#downButton').click(function () {
        if (canMove('+=', 'top')) {
            moveElement('+=100px', 'top');
        }
    });

    $(document).keyup(function (event) {
        if (event.key === "ArrowLeft" && canMove('-=', 'left')) {
            moveElement('-=100px', 'left');
        } else if (event.key === "ArrowRight" && canMove('+=', 'left')) {
            moveElement('+=100px', 'left');
        } else if (event.key === "ArrowUp" && canMove('-=', 'top')) {
            moveElement('-=100px', 'top');
        } else if (event.key === "ArrowDown" && canMove('+=', 'top')) {
            moveElement('+=100px', 'top');
        }
    });
});
