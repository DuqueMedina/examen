<template>
  <v-container >
    <v-responsive
      class="align-centerfill-height mx-auto"
      
    >
 

    <v-row>
      <v-col cols="6">
          
            <div class="text-medium-emphasis">ID Sistema ORC's</div>
            <div  style="background-color: #eaeaea ; margin-bottom: 13px;">
              <v-text-field
                v-model="idSistema"
                density="compact"
                variant="outlined"
                hide-details
                single-line      
                readonly
               
                
    
              ></v-text-field>
            </div>

              <div class="text-medium-emphasis">Nombre del proyecto</div>
              <v-text-field
                class="form-spacing"
                density="compact"
                variant="outlined"
                hide-details
                single-line
    
              ></v-text-field>

              <div class="text-medium-emphasis">Descripción del proyecto</div>
              <v-text-field
                class="form-spacing"
                density="compact"
                variant="outlined"
                hide-details
                single-line
    
              ></v-text-field>
              

              <div class="text-medium-emphasis">Objetivos a los que contribuye el proyecto</div>
              <v-select
                class="form-spacing"
                v-model="objProyecto"
                density="compact"
                variant="outlined"
                hide-details
                single-line
                :items="items"
                item-title="title"
                item-value="key"
                label="Selecciona un objetivo..."
                
                
    
              ></v-select>
              
           <v-row>
                <v-col>
                  <div class="text-medium-emphasis">Fecha Inicio</div>
                  <v-date-input
                    density="compact"
                    variant="outlined"
                    hide-details
                    single-line   
                    prepend-icon=""
                    append-inner-icon="$calendar"   
                  ></v-date-input>
                </v-col>


                <v-col>
                  <div class="text-medium-emphasis">Fecha Fin</div>
                  <v-date-input
                    density="compact"
                    variant="outlined"
                    hide-details
                    single-line     
                    prepend-icon=""
                    append-inner-icon="$calendar"  
                  ></v-date-input>
                </v-col>

              </v-row>

              <v-row>
                <v-col class="d-flex align-end" >
                  <v-btn rounded class="btn-color text-none">Prioridad del proyecto</v-btn>
                </v-col>
              </v-row>
     
        
      </v-col>




      <v-col cols="6">
        <v-card
          class="mx-auto"
          color="#EFF5FC"
          
        >
          <v-card-text>

            <v-row>
              <v-col>
                <div>
                <div class="text-medium-emphasis">ID Proyecto</div>
                <div  style="background-color: #FFFFFF ">
                  <v-text-field
                    density="compact"
                    variant="outlined"
                    hide-details
                    single-line
        
                  ></v-text-field>
                </div>
                </div>
                </v-col>
                <v-col class="d-flex align-end" >
                  <v-btn rounded class="btn-color text-none"  >Buscar Proyecto</v-btn>
                </v-col>

                

            </v-row>
            <div class="text-medium-emphasis">Nombre del proyecto</div>
              <v-text-field
                class="form-spacing"
                density="compact"
                variant="outlined"
                hide-details
                single-line
                readonly
                disabled
    
              ></v-text-field>

              <div class="text-medium-emphasis">Descripción del proyecto</div>
              <v-text-field
                class="form-spacing"
                density="compact"
                variant="outlined"
                hide-details
                single-line
                readonly
                disabled
    
              ></v-text-field>

                <v-row>

                <v-col cols=6>
                  <div class="text-medium-emphasis">Fecha de creación</div>
                  <v-text-field
                    label="dd/mm/aaaa"
                    density="compact"
                    variant="outlined"
                    hide-details
                    single-line
                    readonly
                    disabled      
                  ></v-text-field>
                </v-col>


                <v-col>
                  <div class="text-medium-emphasis">Capex</div>
                  <v-text-field
                    density="compact"
                    variant="outlined"
                    hide-details
                    single-line      
                    readonly
                    disabled 
                  ></v-text-field>
                </v-col>

                 <v-col>
                  <div class="text-medium-emphasis">Opex</div>
                  <v-text-field
                    density="compact"
                    variant="outlined"
                    hide-details
                    single-line
                    readonly
                    disabled    
                  ></v-text-field>
                </v-col>

              </v-row>

          <v-row>
              <v-col>
                  <div class="text-medium-emphasis">Pilar del proyecto</div>
                  <v-text-field
                    density="compact"
                    variant="underlined"
                    hide-details
                    single-line   
                    prepend-icon=""
                    readonly
                  ></v-text-field>
                </v-col>


                <v-col>
                  <div class="text-medium-emphasis">Calificación Comité de inversión</div>
                  <v-text-field
                    density="compact"
                    variant="underlined"
                    hide-details
                    single-line     
                    prepend-icon=""
                    readonly
                      
                  ></v-text-field>
                </v-col>
            </v-row>

          </v-card-text>
        </v-card>
      </v-col>

      
    
    </v-row>

         <v-row>
                <v-col>
                  <div class="text-medium-emphasis">Responsables del proyecto</div>
                  <v-text-field

                    label = "Agregar Responsable del proyecto..."
                    density="compact"
                    variant="outlined"
                    hide-details
                    single-line       
                  ></v-text-field>
                </v-col>


                <v-col>
                  <div class="text-medium-emphasis">Administrador</div>
                  <v-text-field

                    label="Agregar Administrador..."
                    density="compact"
                    variant="outlined"
                    hide-details
                    single-line       
                  ></v-text-field>
                </v-col>

                 <v-col>
                  <div class="text-medium-emphasis">Involucrados (opcional)</div>
                  <v-text-field

                    label="Agregar involucrado..."
                    density="compact"
                    variant="outlined"
                    hide-details
                    single-line       
                  ></v-text-field>
                </v-col>

              </v-row>

      
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const idSistema = 0;
const nombProyecto = "";
const descProyecto = "";
const objProyecto = ref();




  const items = [ 
          { key: '01', title: '2021 CHGS Garantizar que los datos y estadística relacionada con gente estén actualizados.' },
          { key: '02', title: '2021 CHGS Asegurar que los Directivos de unidades (negocios y despachos) gestionen con base en el modelo de alto desempeño' },
          { key: '03', title: '2021 CH AyC. Gestionar a los equipos Directivos bajo el Modelo de Alto Desempeño cuidando la implementación de los 6 pasos' },
          { key: '04', title: '2021 CH BOOF Fortalecer una cultura de alto desempeño impulsando la adopción del modelo de los 6 pasos' },
          { key: '05', title: '2021 Totalplay Paso 6: Fomentar y consolidar el proceso de evaluación de desempeño en Grupo Totalplay alineando el Modelo de 6 pasos' },
          { key: '06', title: '2021 CH EKT. Implementar e Impulsar la adopción del modelo de los 6 pasos como componente clave de la cultura de Elektra' },
          ];

</script>

<style>
.form-spacing{
padding-bottom: 13px;

}
.btn-color{
  background-color: #fec702;
}


</style>
