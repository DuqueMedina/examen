<template>
    
   
    <v-container>
      <v-app-bar :elevation="2">
        <template v-slot:prepend>
            
        
            
            <v-col>
            <v-app-bar-nav-icon style="background-color: #fec702"></v-app-bar-nav-icon>
            </v-col>
            
          <v-row>

            <v-col>
            <div style="margin: 15px">
            <v-icon>   <img src="@/assets/icons/home.svg" alt="Icono SVG" class="icono-svg" /> </v-icon>
            </div>
            </v-col>
            
            <v-divider vertical   ></v-divider>

            </v-row>


        </template>
      </v-app-bar>
    </v-container>

</template>

<script setup>
 
</script>

<style>
.icono-svg {
    width: 160%;
    height: 160%;    
}
</style>