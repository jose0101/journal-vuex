<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div> 
            <span class="text-succes fs-3 fw-bold">07</span>
            <span class="mx-1 fs-3 ">Octubre</span>
            <span class="mx-2 fs-4 fw-light">2022, jueves</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>

            <button class="btn btn-primary">
                Subir Foto
                <i class="fa fa-upload"></i>
            </button>

        </div>

    </div>
      <hr>
      <div class="d-flex flex-column px-3 h-75">
        <input   
            placeholder="¿Qué Sucedió hoy?"/> <!--Aquí usé input en vez de text debido a que no salía el placeholder -->
        <hr/>  
      </div>
   
    <img src= " https://www.robertlandscapes.com/wp-content/uploads/2014/11/landscape-322100_1280.jpg"
            alt= "entry-picture"
            class= "img-thumbnail"/>
            
      <Fab />
    <!--Propiedad bootstrapt--> 

</template>

<script>
import { defineAsyncComponent } from "vue"

export default {
    components: {
        Fab: defineAsyncComponent(() => import ('../componentes/Fab.vue'))
    }
}
</script>

<style lang="scss" scoped>

    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }
    img {
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }
</style>