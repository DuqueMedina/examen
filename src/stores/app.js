// Utilities
import { defineStore } from 'pinia'

export const useProyectStore = defineStore('proyecto', {
  state: () => ({
    proyectos:[
    {
    id: 1,
    nombreProyecto:"Actualización cuentas ",
    decProyecto:"Upgrade de cuentas N2 a N4",
    fechaCreacion: "16/03/2013",
    cap: "Na",
    ope: "Na",
    pilarProyecto:"Calidad",
    califComIn: "97/100",
    },
    {
      id: 12,
      nombreProyecto:"Alta beneficiarios ",
      decProyecto:"Función de agregar beneficarios",
      fechaCreacion: "09/04/2014",
      cap: "Na",
      ope: "Na",
      pilarProyecto:"Costo",
      califComIn: "98/100",
    },
    {
      id: 123,
      nombreProyecto:"Mi ahorro",
      decProyecto:"Cuentas de inversión",
      fechaCreacion: "29/03/2015",
      cap: "Na",
      ope: "Na",
      pilarProyecto:"Tiempo",
      califComIn: "99/100",
    }
  ]
  }),
  getters: {
    getProyectById: (state) => (id) => {      
      return state.proyectos.find(proyecto => proyecto.id === +id);
    }
  },
})
