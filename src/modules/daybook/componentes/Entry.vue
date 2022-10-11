import { defineAsyncComponent } from 'vue';
<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params: {id: 10}})"    
    >
     
     <!--Titulo-->
     <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">7</span>
        <span class="mx-1 fs-5">Octubre</span>
        <span class="mx-2  fw-light">2022, viernes</span>

     </div>

     <div class="entry-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam blanditiis natus quia consequuntur ea quibusdam tenetur expedita suscipit nisi dicta iste maxime aliquam, quis libero praesentium deserunt laborum quo rem!
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>    //<-Se coloca el lang para que reconozca el &
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover{    //<- el & aplica la misma clase (.entry-container) y aplica lo que sigue después de los 2 puntos
        background-color: lighten($color: grey, $amount: 45);   //<- le da formato a donde esté apuntado el cursor
        transition: 0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }

}

</style>