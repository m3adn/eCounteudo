<template>
  <b-card-group columns>
    <router-link
      class="mt-3"
      :to="theme.url"
      v-for="(theme, index) in themes[theme]"
      :key="theme.id"
    >
      <b-card
        :bg-variant="theme.color||'dark'"
        :text-variant="theme.colorText||'white'"
        :header="theme.title"
        align="center"
      >
        <b-card-text>{{theme.subTitle}}</b-card-text>
      </b-card>
    </router-link>
  </b-card-group>
</template>

<script>
export default {
  props: ["theme"],
  data: function() {
    return {
      themes: {
        themes: [
          {
            id: 0,
            title: "Programação",
            subTitle: "Algoritmos e Estruturas de Dados, Java, C, Python, ...",
            url: "programming",
            color: "info"
          },
          {
            id: 1,
            title: "Redes de Computadores",
            subTitle:
              "Resumos da matéria de Redes de Computadores, protocolos resolvidos, ...",
            url: "networks",
            color: "dark"
          },
          {
            id: 2,
            title: "Electronica",
            subTitle:
              "Analise de Circuitos, Electrónica 1 e 2, Electrónica de Potência, etc ",
            url: "electronics",
            color: "success"
          }
        ],
        programming: [
          {
            id: 0,
            title: "Java",
            subTitle: "Introdução ao JAVA & Programação Orienta a Objetos",
            url: "java",
            color: "danger"
          },
          {
            id: 1,
            title: "C",
            subTitle: "Série de exercícios resolvidos",
            url: "c",
            color: "info"
          },
          {
            id: 2,
            title: "Python",
            subTitle: "Introdução ao Python & Programação Orientada a Objetos",
            url: "python",
            color: "success"
          },
          {
            id: 3,
            title: "Algoritmos e Estruturas de Dados",
            subTitle:
              "Resumo da Matéria. Problemas Codificados em várias linguagens de programação",
            url: "aed",
            color: "dark"
          }
        ],
        electronics: [
          {
            id: 0,
            title: "Electrónica 2",
            subTitle: "Resumos da materia e resolução de exercicios",
            url: "electronics2",
            color: "danger"
          },
          {
            id: 1,
            title: "Teoria dos Circuitos",
            subTitle: "Resumos da materia e resolução de exercicios",
            url: "circuit_theory",
            color: "info"
          }
          /*{
            id: 2,
            title: "Arduino",
            subTitle: "Projetos Usando o Arduino",
            url: "arduino",
            color: "info"
          }*/
        ],
        networks: [
          {
            id: 0,
            title: "Componente Prática",
            subTitle:
              "Trabalho de laboratório - configuração de routers Cisco.",
            url: "componentepratica/trabalho1",
            color: "info"
          },
          {
            id: 1,
            title: "Componete Teórica",
            subTitle:
              "Apontamentos",
            url: "componenteteorica/ospf",
            color: "info"
          }
        ]
      }
    };
  }
};
</script>
<style></style>