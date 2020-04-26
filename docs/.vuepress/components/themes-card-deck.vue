<template>
  <div class="card-group">
    <themes-card
      :title="theme.title"
      :sub-title="theme.subTitle"
      :url="theme.url"
      :bg="theme.color"
      key="theme"
      v-for="(theme, index) in themes[theme]"
      :key="theme.title"
    />
  </div>
</template>

<script>
export default {
  props: ["theme"],
  data: function() {
    return {
      themes: {
        programming: [
          {
            title: "Java",
            subTitle: "POO oriented",
            url: "java",
            color: "danger"
          },
          {
            title: "C",
            subTitle:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            url: "c",
            color: "info"
          }
        ],
        electronics: [
          {
            title: "Electrónica 2",
            subTitle: "Resumos da materia e resolução de exercicios",
            url: "electronics2",
            color: "info"
          }
        ]
      }
    };
  }
};
</script>
<style>
.card-group {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>