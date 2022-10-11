<!-- floating action button-->
<template>
    <button class="btn btn-primary">
        <i v-if="this.$route.params.id != undefined" class="fa fa-2x fa-save"></i>
        <i v-else class="fa fa-2x fa-plus"></i>
    </button>
</template>

<script>

//fa-plus

export default {
  props: {
    type: String,
    default: "fa-plus"
  }
}
</script>

<style lang="scss" scoped>
    button {
        border-radius: 100%;
        bottom: 20px;
        height: 80px;
        position: fixed;
        right: 20px;
        width: 80px;
    }
</style>