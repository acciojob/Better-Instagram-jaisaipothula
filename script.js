const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragover', dragOver);
    draggable.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.classList.add('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);
    const targetElement = e.target;

    if (targetElement.classList.contains('draggable') && draggedElement !== targetElement) {
        const tempBackground = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
        targetElement.style.backgroundImage = tempBackground;
    }
}
