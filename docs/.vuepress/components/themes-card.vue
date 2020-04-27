<template>
  <router-link :to="url">
    <b-card :bg-variant="bg||'dark'" text-variant="white" :header="title" class="text-center">
      <b-card-text>{{subTitle}}</b-card-text>
    </b-card>
  </router-link>
</template>

<script>
export default {
  props: ["title", "sub-title", "url", "bg"],

  data: function() {
    return {
      color: "dark"
    };
  }
};
</script>

<style>
.card-body {
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
}
.btn-primary {
  color: #fff !important;
}
</style>>
