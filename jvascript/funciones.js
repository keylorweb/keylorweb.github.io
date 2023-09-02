"use strict"
function PlayAudio(){
    document.getElementById ("audio1").play()
}

window.onload = function () {
document.getElementById("btn1").addEventListener("click",(Event)=> {
    document.getElementById("gen").innerHTML=` 
    <div class="info">
    <h2>¿Qué es una base de datos?</h2>

    <p id="text">Una base de datos es un conjunto de datos estructurados que se almacenan en un sistema
        informático para que sean accesibles y manejables por diferentes usuarios. Las bases de datos se
        utilizan para almacenar y organizar una gran cantidad de información, como datos personales, datos
        financieros, datos de clientes, datos de productos, etc.</p>

    <h2>Evolución de la base de datos</h2>

    <p id="text">Las bases de datos han evolucionado drásticamente desde su inicio a principios de la década
        de 1960. Las bases de datos de navegación, como la base de datos jerárquica (que se basaba en un
        modelo de árbol y permitía una relación de uno a muchos) y la base de datos de red (un modelo más
        flexible que permitía relaciones múltiples), eran los sistemas originales que se utilizaban para
        almacenar y manipular datos. Aunque eran sencillos, estos primeros sistemas eran inflexibles</p>

</div>
<div class="titulo">
    <h1>Concepto</h1>
</div>

<div class="imgtxt"><img src="img/consepto.png" id="img">
</div>
    `;

})
document.getElementById("btn2").addEventListener("click",(Event)=> {
    document.getElementById("gen").innerHTML=`
    <div class="info">
    <h2>Características de las bases de datos</h2>
    <h3>Las bases de datos tienen una serie de características que las distinguen de otros sistemas de almacenamiento de datos, como:</h3>
    <ul>
        <li><b>Organización:</b> Las bases de datos están organizadas de forma lógica para facilitar su acceso y manipulación.</li>
        <li><b>Acceso compartido:</b>Las bases de datos permiten que varios usuarios accedan a los datos de forma simultánea.</li>
        <li><b>Seguridad:</b> Las bases de datos suelen estar protegidas por medidas de seguridad para evitar el acceso no autorizado.</li>
        <li><b>Escalabilidad:</b> Las bases de datos pueden escalarse para adaptarse a las necesidades cambiantes de la organización.</li>
    </ul>
</div>
<div class="titulo">
    <h1>Caracteristicas</h1>
</div>

<div class="imgtxt"><img src="img/caracteristicas.png" id="img">
</div>
</div>
    `;

})

document.getElementById("btn3").addEventListener("click",(Event)=> {
    document.getElementById("gen").innerHTML=`
    <div class="info">
                <h2>Las bases de datos se utilizan en una amplia variedad de aplicaciones, entre las que se incluyen:</h2>

                <ul>
                    <li><b>Gestión de clientes:</b> bases de datos se utilizan para almacenar y gestionar datos de clientes, como sus nombres, direcciones, números de teléfono, etc.</b>.</li>
                    <li><b>Gestión de inventario:</b> Las bases de datos se utilizan para almacenar y gestionar datos de inventario, como los productos, sus cantidades, sus precios, etc.</li>
                    <li><b>Gestión de ventas:</b> Las bases de datos se utilizan para almacenar y gestionar datos de ventas, como las fechas, los clientes, los productos, los precios, etc.</li>
                    <li><b>Gestión de recursos humanos:</b> Las bases de datos pueden escalarse para adaptarse a las necesidades cambiantes de la organización.</li>
                    <li><b>Gestión de proyectos:</b> Las bases de datos pueden escalarse para adaptarse a las necesidades cambiantes de la organización.</li>
                </ul>
            </div>
            <div class="titulo">
                <h1 >Usos y aplicaciones</h1>
            </div>

            <div class="imgtxt"><img src="img/usos.png" id="img">
            </div>
        </div>
    `;

})
document.getElementById("btn4").addEventListener("click",(Event)=> {
    document.getElementById("gen").innerHTML=`
    <div class="info">
    <h2>Aportes</h2>
    <h3>Las bases de datos contribuyen a mejorar la eficiencia y la productividad del trabajo cotidiano de
        una serie de maneras, entre las que se incluyen:</h3>
    <ul>
        <li><b>Almacenamiento y organización de datos:</b> Las bases de datos permiten almacenar y organizar
            grandes cantidades de datos de forma eficiente y segura.</li>
        <li><b>Acceso a datos compartido:</b>Las bases de datos permiten que varios usuarios accedan a los
            datos de forma simultánea, lo que facilita la colaboración y la comunicación.</li>
        <li><b>Reportes y análisis de datos:</b>: Las bases de datos pueden utilizarse para generar informes
            y análisis de datos que proporcionan información valiosa para la toma de decisiones.</li>
        <li><b>Herramientas de ingeniería de datos: </b> L: Las herramientas de ingeniería de datos se
            utilizan para crear y modificar estructuras de datos complejas.</li>
        <li><b>Herramientas de análisis de datos: </b> : Las herramientas de análisis de datos se utilizan
            para analizar datos y generar informes.</li>
    </ul>
</div>
<div class="titulo">
    <h1>  Aportes al trabajo cotidiano</h1>
</div>

<div class="imgtxt"><img src="img/aportes.png" id="img">
</div>
</div>
    `;

})
}