
let pacientes_agendados = []
let continuar = true

while (continuar) {
  let menu = prompt("Bienvenido al sistema de agenda de turnos, que opcion desea realizar: \n1 - Agendar Turno\n2 - Ver Turno\n3 - Salir")

  if (menu === "1") {
    let nombre_paciente = prompt("Ingrese nombre del paciente:")
    if (nombre_paciente) {

      let hora_paciente = prompt("Ingrese hora del turno (ej: 10): ")
      while (hora_paciente > 24 || hora_paciente < 0)
        hora_paciente = prompt("ERROR, horario ingresado es incorrecto, ingrese un horario correcto")
    

      let fecha_paciente = prompt("Ingrese fecha del turno (ej: DD): ")
      while (hora_paciente > 31 || hora_paciente < 1)
        fecha_paciente = prompt("ERROR, fecha incorrecta, ingrese una fecha correcta porfavor")

      let mes_paciente = prompt("Ingrese mes del turno: ")
      

      pacientes_agendados.push({ nombre: nombre_paciente, hora: hora_paciente, fecha: fecha_paciente, mes: mes_paciente })

      alert(`${nombre_paciente} agendado para el día ${fecha_paciente + " de " + mes_paciente} a las ${hora_paciente}:00 hs.`)
    } else {
      alert("El nombre es obligatorio.")
    }
  } else if (menu === "2") {
    if (pacientes_agendados.length > 0) {
      let lista = "Pacientes agendados:\n"
      for (let i = 0; i < pacientes_agendados.length; i++) {
        let paciente = pacientes_agendados[i];
        lista += `${i + 1}. ${paciente.nombre}, ${paciente.hora}:00 del ${paciente.fecha}\n`
      }
      alert(lista)
    } else {
      alert("No hay pacientes.")
    }
  } else if (menu === "3") {
    alert("Gracias por su visita !!!")
    continuar = false
  } else {
    alert("Opción inválida.")
  }
}

console.log("Final: ", pacientes_agendados);





  
