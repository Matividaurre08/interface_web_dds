document.addEventListener('DOMContentLoaded', function () {
    const opcionSi = document.getElementById('opcion-si');
    const opcionNo = document.getElementById('opcion-no');

    document.querySelector('.grid-radio-label[for="opcion-si"]').addEventListener('click', function () {
        if (!opcionSi.checked) {
            opcionSi.checked = true;
            this.style.backgroundColor = 'rgb(100, 91, 91)';
            this.style.color = 'white';
            crearFormularioMenor();
        }
    });

    document.querySelector('.grid-radio-label[for="opcion-no"]').addEventListener('click', function () {
        opcionNo.checked = true;
        this.style.backgroundColor = 'rgb(100, 91, 91)';
        this.style.color = 'white';
    });

    function crearFormularioMenor() {

        let form = document.createElement('form');

        let griditem1 = document.createElement('div');
        griditem1.setAttribute('class', 'grid-item');

        let label1 = document.createElement('label');
        label1.setAttribute('class', 'grid-label');
        label1.setAttribute('for', 'nombre');
        label1.textContent = 'Nombre (*)';

        let input1 = document.createElement('input');
        input1.setAttribute('type', 'text');
        input1.setAttribute('id', 'nombre');
        input1.setAttribute('name', 'nombre');

        griditem1.appendChild(label1);
        griditem1.appendChild(input1);

        let griditem2 = document.createElement('div');
        griditem2.setAttribute('class', 'grid-item');

        let label2 = document.createElement('label');
        label2.setAttribute('class', 'grid-label');
        label2.setAttribute('for', 'apellido');
        label2.textContent = 'Apellido del menor(*)';

        let input2 = document.createElement('input');
        input2.setAttribute('type', 'text');
        input2.setAttribute('id', 'apellido');
        input2.setAttribute('name', 'apellido');

        griditem2.appendChild(label2);
        griditem2.appendChild(input2);

        // Crear y configurar div para Fecha de Nacimiento
        let griditem3 = document.createElement('div');
        griditem3.setAttribute('class', 'grid-item');

        let label3 = document.createElement('label');
        label3.setAttribute('class', 'grid-label');
        label3.setAttribute('for', 'fechaNacimiento');
        label3.textContent = 'Fecha de Nac. del menor (*)';

        let input3 = document.createElement('input');
        input3.setAttribute('type', 'date');
        input3.setAttribute('id', 'fechaNacimiento');
        input3.setAttribute('name', 'fechaNacimiento');

        griditem3.appendChild(label3);
        griditem3.appendChild(input3);

        let button = document.createElement('img');
        button.src = '../images/plus-circle.svg';
        button.setAttribute('class', 'plus-button');
        button.style.width = '40px';
        button.style.height = '40px';
        button.style.marginTop = '25px';

        // Añadir todos los grid-items al formulario
        form.appendChild(griditem1);
        form.appendChild(griditem2);
        form.appendChild(griditem3);
        form.appendChild(button);

        // Añadir el formulario al contenedor en el DOM
        document.getElementById('formulario-generado').appendChild(form);

        button.addEventListener('click', function () { crearFormularioMenor(); })
    }

    document.getElementById('button').addEventListener('click', function () {
        console.log('button clicked');
        //TODO: Validar formulario y enviar datos
    });
});

