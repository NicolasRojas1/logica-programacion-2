//Programacion Asincrona

/*
Procesamiento Single thread y multi thread

JS es single thread, un solo hilo. No se tiene que tener preocupaciones por concurrencia como en otros lenguajes

Como contra es que tampoco se pueden realizar operaciones largas sin que se bloquee el hilo principal

De ahi viene la sincronia, que permite realizar largas solicitudes de red sin bloquear el hilo principal

- Hilos: Son la unidades básicas de ejecución de cada proceso que realiza nuestra máquina. 

 JS trabaja bajo el concepto de LIFO: Last in - First out

 - Operaciones de CPU: Son aquellas que van a pasar el mayor tiempo consumiendo los procesos de la CPU

 - Operaciones de Entrada y Salida (Input / Output): Son aquellas que pasarán el tiempo esperando la petición del recurso que han solicitado

- Operaciones Concurrentes: Es cuando 2 o más tareas progresan simultáneamente. La clave es la palabra progresar, una tarea pudo empezar antes o después. (Varias tareas progresan al mismo tiempo)

- Operaciones Paralelas: Es cuando 2 o más tareas se ejecutan al mismo tiempo

- Operaciones Bloqueantes: No devolvera el control (ejecución al hilo principal) hasta que haya completado la operación de su tarea

- Operaciones No BLoqueantes: Las operaciones se ejecutan y devuelven inmediatamente el control al hilo principal. No importa si han terminado o no la tarea.

- Operaciones Síncronas: Espera el resultado en el tiempo presente. (Usualmente Bloqueantes se asocia a Síncrono)

- Operaciones Asíncronas: La respuesta viene en un futuro, se ejecuta, pero no espera el resultado. (Usualmente No Bloqueantes se asocia a Asíncrono)

*** JavaScript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo (single thread), para operaciones de entrada y salida (input/output) ***
*/




