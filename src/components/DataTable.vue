<template>
  <v-container>
    
    <v-btn color="primary" @click="newItem">Agregar Registro</v-btn>

    
    <v-data-table v-show="showForm" :headers="headers" :items="desserts" class="elevation-1">

      <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Etapas</v-toolbar-title>
      </v-toolbar>
      </template>
      
    
      <template v-slot:item.edit="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
      </template>

      
      <template v-slot:item.delete="{ item }">
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
      
    </v-data-table>

    
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.titulo" label="Título"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.desc" label="Descripción" ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.entre" label="Entregable" ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.inic" label="Fecha inicio" type="date" ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field v-model="editedItem.fin" label="Fecha Fin" type="date" ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="save">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="headline">Confirmar eliminación</v-card-title>
        <v-card-text>¿Estás seguro de que deseas eliminar este registro?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, reactive, computed, nextTick } from 'vue'


const showForm = ref(true)
const dialog = ref(false)
const dialogDelete = ref(false)
const editedIndex = ref(-1)

const editedItem = reactive({
  titulo: '',
  desc: "",
  entre: "",
  inic: "",
  fin: "",
})

const defaultItem = {
  titulo: '',
  desc: "",
  entre: "",
  inic: "",
  fin: "",
}

const headers = [
 
  { title: 'Título', value: 'titulo' },
  { title: 'Descripción', value: 'desc' },
  { title: 'Entregable', value: 'entre' },
  { title: 'Fecha Inicio', value: 'inic' },
  { title: 'Fecha Fin', value: 'fin', sortable: false },
  { title: 'editar', value: 'edit', sortable: false },  
  { title: 'Eliminar', value: 'delete', sortable: false },  
]

const desserts = ref([
  { titulo: 'Etapa 1', desc: "Descripcion", entre: "Entregable 1", inic: "16/03/2024", fin: "20/08/2024" },
  { titulo: 'Etapa 2', desc: "Descripcion", entre: "Entregable 2", inic: "16/03/2020", fin: "16/03/2023" },
  { titulo: 'Etapa 3', desc: "Descripcion", entre: "Entregable 3", inic: "16/03/2022", fin: "16/03/2023" },
])


const formTitle = computed(() => {
  return editedIndex.value === -1 ? 'Nuevo Ítem' : 'Editar Ítem'
})


const newItem = () => {
  editedIndex.value = -1
  Object.assign(editedItem, defaultItem)
  dialog.value = true
}


const editItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item)
  Object.assign(editedItem, item)
  dialog.value = true
}


const deleteItem = (item) => {
  editedIndex.value = desserts.value.indexOf(item)
  Object.assign(editedItem, item)
  dialogDelete.value = true
}


const deleteItemConfirm = () => {
  desserts.value.splice(editedIndex.value, 1)
  closeDelete()
}


const close = () => {
  dialog.value = false
  nextTick(() => {
    Object.assign(editedItem, defaultItem)
    editedIndex.value = -1
  })
}


const closeDelete = () => {
  dialogDelete.value = false
  nextTick(() => {
    Object.assign(editedItem, defaultItem)
    editedIndex.value = -1
  })
}


const save = () => {
  if (editedIndex.value > -1) {
    Object.assign(desserts.value[editedIndex.value], editedItem)
  } else {
    desserts.value.push({ ...editedItem })
  }
  close()
}
</script>