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
});

document.getElementById('csv-button').addEventListener('click', function () {
    console.log('CSV button clicked');
    //TODO: Validar archivo y enviar datos
});
