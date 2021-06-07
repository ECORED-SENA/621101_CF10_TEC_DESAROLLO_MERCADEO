<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    
    figure.mb-5
      img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')
    
    p.mb-5 Las organizaciones realizan grandes inversiones en el área de mercadeo y esperan que las estrategias planteadas dentro de su plan den frutos. Es por esto que requieren mejorar día a día su modelo de negocio, para encontrar los errores y minimizarlos. La evaluación y auditoría de marketing permiten indicar los aciertos, corregir los errores y mejorar los caminos a seguir, examinando sus estructuras interna y externa, en un entorno cambiante. Su análisis con herramientas, indicadores y métricas pretende la identificación de problemas para hacer frente y anticiparse a tendencias futuras.
      br
      br
      |Para la elaboración de este componente, se abordaron varios autores conocidos en procesos de mercadeo, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del desarrollo de procesos de mercadeo.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
