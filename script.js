let draggedElement = null;

document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', event => {
        draggedElement = item;
        event.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragover', event => {
        event.preventDefault(); // Prevent default to allow drop
    });

    item.addEventListener('drop', event => {
        event.preventDefault();
        if (draggedElement !== item) {
            // Swap the content of the dragged element and the target element
            const tempId = item.id; // Store the ID of the target element
            item.id = draggedElement.id; // Set target's ID to dragged element's ID
            draggedElement.id = tempId; // Set dragged element's ID to target's ID

            // Swap backgrounds
            const tempBackground = item.style.backgroundImage; 
            item.style.backgroundImage = draggedElement.style.backgroundImage; 
            draggedElement.style.backgroundImage = tempBackground; 
        }
    });
});