document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('file-input');
    const fileListContainer = document.getElementById('file-list-container');

    // Carga de archivos al clickear
    uploadArea.addEventListener('click', function () {
        fileInput.click();
    });

    // Mostrar archivos previamente seleccionados
    fileInput.addEventListener('change', function () {
        document.getElementById('file-list').style.display = 'block';
        handleFiles();
    });

    function handleFiles() {
        const files = fileInput.files;
        updateFileList(files);
    }

    function updateFileList(files) {
        for (let i = 0; i < files.length; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = files[i].name;
            fileListContainer.appendChild(listItem);
        }
    }

    const button = document.getElementById('button');

    // Cambia el color al hacer clic
    button.addEventListener('mousedown', function () {
        button.style.backgroundColor = '#4A33CC';
    });

    // Vuelve al color original al soltar el clic
    button.addEventListener('mouseup', function () {
        button.style.backgroundColor = '#5F44F6';
    });

    // Acción cuando se hace clic (opcional)
    button.addEventListener('click', function () {
        console.log('button clicked');
        //TODO: Validar archivo y enviar datos
    });

});