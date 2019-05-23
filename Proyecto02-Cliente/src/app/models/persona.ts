import { Direccion } from './Direccion';
import { Telefono } from './Telefono';

export class Persona {
    idpersona: number;
    apellido1: string;
    apellido2: string;
    dni: string;
    nombre: string;
    fechanacimiento: Date;
    direcciones: Direccion[];
    telefonos: Telefono[];
}
