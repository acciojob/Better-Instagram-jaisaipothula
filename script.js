let draggedElement = null;

document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('dragstart', event => {
        draggedElement = item;
        event.dataTransfer.effectAllowed = 'move';
        setTimeout(() => {
            item.style.display = 'none'; // Hide the element while dragging
        }, 0);
    });

    item.addEventListener('dragend', event => {
        setTimeout(() => {
            draggedElement.style.display = 'block'; // Show the element again
            draggedElement = null; // Clear the reference to the dragged element
        }, 0);
    });

    item.addEventListener('dragover', event => {
        event.preventDefault(); // Prevent default to allow drop
    });

    item.addEventListener('drop', event => {
        event.preventDefault();
        if (draggedElement !== item) {
            // Swap IDs
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