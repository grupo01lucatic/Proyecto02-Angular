import { Provincia } from './Provincia';

export class Direccion {
    constructor(
        public iddireccion:number,
        public idpersona:number,
        public codpostal:string,
        public direccion:string,
        public localidad:string,
        public provincia:Provincia
    ) {}
}