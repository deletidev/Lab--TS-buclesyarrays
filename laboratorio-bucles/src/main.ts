import './style.css';

type Especialidad = 'Medico de familia' | 'Pediatra' | 'Cardiólogo';

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: 'John',
    apellidos: 'Doe',
    sexo: 'Male',
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: 'Medico de familia',
    edad: 44
  },
  {
    id: 2,
    nombre: 'Jane',
    apellidos: 'Doe',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: 'Medico de familia',
    edad: 43
  },
  {
    id: 3,
    nombre: 'Junior',
    apellidos: 'Doe',
    sexo: 'Male',
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: 'Pediatra',
    edad: 8
  },
  {
    id: 4,
    nombre: 'Mary',
    apellidos: 'Wien',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: 'Medico de familia',
    edad: 20
  },
  {
    id: 5,
    nombre: 'Scarlett',
    apellidos: 'Somez',
    sexo: 'Female',
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: 'Cardiólogo',
    edad: 30
  },
  {
    id: 6,
    nombre: 'Brian',
    apellidos: 'Kid',
    sexo: 'Male',
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: 'Pediatra',
    edad: 11
  }
];

/* Apartado 1
a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
 */

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatría: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === 'Pediatra') {
      pacientesPediatría.push(pacientes[i]);
    }
  }

  return pacientesPediatría;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));
/* 
b) Queremos extraer la lista de pacientes asignados a Pediatría 
y que tengan una edad menor de 10 años.
 */
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let pacientesPediatría: Pacientes[] = [];

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === 'Pediatra' && pacientes[i].edad < 10) {
      pacientesPediatría = [...pacientesPediatría, pacientes[i]];
    }
  }

  return pacientesPediatría;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

/* Apartado 2
Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene
 un ritmo cardíaco superior a 100 pulsaciones por minuto 
 y una temperatura corporal superior a 39 grados.
*/

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo: boolean = false;

  for (let i = 0; i < pacientes.length && !activarProctolo; i++) {
    if (
      pacientes[i].temperatura > 39 &&
      pacientes[i].frecuenciaCardiaca > 100
    ) {
      activarProctolo = true;
    }
  }

  return activarProctolo;
};
console.log(activarProtocoloUrgencia(pacientes));

/* Apartado 3
El pediatra no puede atender hoy a los pacientes, 
queremos reasignar los pacientes asignados a la especialidad
 de pediatría a la de medico de familia.
 */
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  let cambioPacientesPediatría: Pacientes[] = [...pacientes];

  for (let i = 0; i < cambioPacientesPediatría.length; i++) {
    if (cambioPacientesPediatría[i].especialidad === 'Pediatra') {
      cambioPacientesPediatría[i] = {
        ...cambioPacientesPediatría[i],
        especialidad: 'Medico de familia'
      };
    }
  }

  return cambioPacientesPediatría;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));
console.log(pacientes);

/* Apartado 4
Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados),
 comprobar si en la lista hay algún paciente asignado a pediatría
 */
const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let hayPacientes: boolean = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === 'Pediatra') {
      hayPacientes = true;
      break;
    }
  }
  return hayPacientes;
};

console.log(HayPacientesDePediatria(pacientes));

/* Apartado 5
Queremos calcular el número total de pacientes que están asignados 
a la especialidad de Medico de familia, y los que están 
asignados a Pediatría y a cardiología
 */

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const recuentoPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0
  };
  //Esto podría ser un fc para cada uno pero en rendimiento sería mejor un único bucle?
  for (let i = 0; i < pacientes.length; i++) {
    switch (pacientes[i].especialidad) {
      case 'Medico de familia':
        recuentoPacientes.medicoDeFamilia++;
        break;
      case 'Pediatra':
        recuentoPacientes.pediatria++;
        break;
      case 'Cardiólogo':
        recuentoPacientes.cardiologia++;
        break;
    }
  }
  return recuentoPacientes;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));
