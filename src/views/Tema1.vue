<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 Evaluación
    figure.mb-5
      img(src='@/assets/curso/img2.jpg', alt='Texto que describa la imagen')
    p.mb-5 Para comenzar con el estudio de este componente, complete y analice atentamente el siguiente gráfico interactivo.
    p.mb-5 El plan de mercadeo debe considerar cuatro grandes elementos en su proceso administrativo: la planeación, la organización, la dirección y el control.
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-primario-claro.p-4(titulo="Planeación")
        .row.p-3
          .col-7
            h4 Planeación
            p La planeación incluye la recolección de información de los hechos que se producen en el mercado y en la organización y su correspondiente análisis para encontrar oportunidades de mejoramiento, lo que debe conducir a la fijación de objetivos, diseño de estrategias y asignación de recursos.
          .col-5 
            figure
              img(src='@/assets/curso/img3.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Organización")
        .row.p-3
          .col-7
            h4 Organización
            p Luego se avanza al proceso de organización, donde se revisan la estructura del área, los procedimientos, los manuales y demás elementos que permitirán abordar la etapa de dirección.
          .col-5 
            figure
              img(src='@/assets/curso/img4.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Dirección")
        .row.p-3
          .col-7
            h4 Dirección
            p La dirección hace referencia, directamente, a la puesta en marcha de la estrategia.
          .col-5 
            figure
              img(src='@/assets/curso/img5.jpg', alt='Texto que describa la imagen')
      .tarjeta.color-primario-claro.p-4(titulo="Control")
        .row.p-3
          .col-7
            h4 Control
            p Finalmente, se encuentra el proceso de control, donde se verifica que lo que se planeó se esté ejecutando de manera adecuada y que se estén obteniendo los resultados buscados (Hoyos, 2013).

          .col-5 
            figure
              img(src='@/assets/curso/img6.jpg', alt='Texto que describa la imagen')
    .row.mb-5
      .col-lg-6
        .titulo_tarjeta-gris.d-flex.p-3
          .elementos-titulo.d-flex.m-auto
            img(src='@/assets/componentes/atencion.svg', alt='Texto que describa la imagen' style='width: 55px ').d-inline-block
            .h4.my-auto.d-inline-block.ms-3 Atención
        .contenido-tarjeta-amarilla.p-5
          p El concepto de evaluación involucra un factor adicional: la medición. Evaluar es medir resultados obtenidos contra un parámetro establecido. Sin embargo, resulta poco objetivo tratar de evaluar los resultados contra un parámetro cuantitativo único, pues se deben considerar también elementos cualitativos que son difíciles de medir, (Fernández, 2007).
      .col-lg-6
        .titulo_tarjeta-gris.d-flex.p-3
          .elementos-titulo.d-flex.m-auto
            img(src='@/assets/componentes/importante.svg', alt='Texto que describa la imagen' style='width: 55px ').d-inline-block
            .h4.my-auto.d-inline-block.ms-3 Importante
        .contenido-tarjeta-amarilla.p-5
          p Lo dicho hasta aquí supone que las métricas del marketing pueden aclarar algunas de las cuestiones clave, como: 
            br
            |¿Cuál es el valor real de la organización?
            br
            |¿Somos competitivos en innovación y marca? 
            br
            |¿Están las estrategias orientadas a los clientes adecuados? 
    p.mb-5 En los procesos de evaluación de las organizaciones, las métricas proporcionan más datos, pero no necesariamente mejor información. No se trata de medir por medir, sino de saber qué se quiere, cómo se va a medir y qué información debe recibir cada persona responsable de tomar decisiones. Utilizar más métricas de las necesarias, además de ser caro, es ineficaz. Nadie puede tener los ojos puestos en demasiadas cosas al mismo tiempo (Domínguez y Muñoz, 2010). Todavía cabe señalar que las métricas se deben definir en tres planos: 
    .row
      .col-md-6.col-lg-3.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/img8.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color__rojo-claro.p-4
            .h4.text-center Plano estratégico
            p.text-center El corazón del marketing es la diferenciación.
            
      .col-md-6.col-lg-3.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/img9.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color__rojo-claro.p-3
            .h4.text-center Plano táctico
            p.text-center Si todas las empresas utilizaran las mismas métricas, fracasarían.
      .col-md-6.col-lg-3.mb-5
        .tarjeta-Avatar.m-auto
          img(src='@/assets/curso/img10.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color__rojo-claro.p-3
            .h4.text-center Plano operativo
            p.text-center.mb-5 Las métricas deben desarrollarse a la medida, en función de las estrategias a seguir.
      .col-md-6.col-lg-3.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/img11.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color__rojo-claro.p-3
            .h4.text-center Métricas de uso común
            p.text-center Existen métricas que deben ser de uso común, como la cuota de mercado, o cuota cliente, necesaria para poder establecer comparaciones con empresas del mismo sector (Domínguez y Muñoz, 2010). 
    #t_1_1.titulo-segundo
      .h4 1.1. Desempeño organizacional
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-center
            .col-lg-4.mb-lg-0
                img(src='@/assets/curso/img12.jpg', alt='Texto que describa la imagen' style='width: 296px' )
            .col-lg-8
              .bloque-texto-a__texto.altura-bloque.p-3
                p Chiavenato (2009) describe que los resultados del negocio son las medidas del desempeño organizacional, los análisis financieros, el valor agregado, la participación de mercado y las utilidades. Indican qué tanto éxito tiene la organización en sus negocios. Son los indicadores del resultado final. Y los motores del desempeño organizacional son las medidas de los resultados intermedios, como la productividad, la calidad, la innovación y la satisfacción del cliente. Los resultados del negocio se alcanzan en razón del desempeño organizacional. Son indicadores de resultados intermedios que permiten alcanzar los resultados finales.
    #t_1_2.titulo-segundo
      .h4 1.2. Parámetros de evaluación
    .row.mb-5
      .col-lg-5
        p.mb-5 Domínguez y Muñoz (2010) plantean algunos parámetros de evaluación, a partir de los costes relativos al personal asignado al área de marketing. Las comisiones de los vendedores, los costes de promoción y publicidad de un producto, por lo general, se estima que son costes directos del marketing.
      .col-lg-7
          figure
              img(src='@/assets/curso/img13.jpg', alt='Texto que describa la imagen')
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris").mb-5
      div.p-3(titulo="Costes directos")
        p Estos costes directos del marketing se pueden subdividir en costes fijos y costes variables.
      div.p-3(titulo="Costes fijos del marketing")
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Salarios de fuerza de ventas.
          li 
            i.fas.fa-check
            | Salarios de empleados del área de marketing.
          li 
            i.fas.fa-check
            | Grandes campañas de comunicación.
          li 
            i.fas.fa-check
            | Material promocional.
      div.p-3(titulo="Costes variables")
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Comisiones de ventas. Pueden ser a la fuerza de ventas, al canal o al sistema de distribución.
          li 
            i.fas.fa-check
            | Bonus por objetivos.
          li 
            i.fas.fa-check
            | Reembolsos por promociones – cupones de descuento.
          li 
            i.fas.fa-check
            | Gastos de representación unidos a volúmenes de ventas.
          li 
            i.fas.fa-check
            | Descuentos por pronto pago.
          li 
            i.fas.fa-check
            | Reembolsos por devoluciones sujetos a periodos de tiempo determinados por la organización.
      div.p-3(titulo="Fórmula")
        p La fórmula para representar estos costes es la siguiente:
        p.ms-4.fst-italic           Costes del marketing = Costes fijos+Costes variables
          br
          |Costes variables=Ventas*Comisión de ventas %
    .h5 Productividad 
    figure.mb-5
      img(src='@/assets/curso/img14.jpg', alt='Texto que describa la imagen')
    p.mb-5 Cuando hablamos de productividad, se debe demostrar la utilidad del marketing. Depende de las asignaciones presupuestales, a nivel interno y externo de las organizaciones, mostrar que los gastos de marketing no son simples agregados de los precios que al final recaen en los consumidores. Se debe demostrar que esos gastos representarán una inversión. El marketing es diferencial en todos los productos semejantes. Estos tienen acciones de marketing diferentes y valoraciones del mercado diferentes; por lo que sus modelos de marketing mix son diferentes y los esfuerzos que cada empresa hace sobre cada una de esas variables es diferente (Cano, 2014).
      br
      br
      |Las métricas aplicables a la productividad son:
    .recuadro-formulas.p-5.mb-5 
      .formula.d-flex.align-items-center.justify-content-center
          p.fst-italic.my-3.d-inline-block
            b Beneficios netos (antes de impuestos) = 
          p.fst-italic.d-inline-block.ps-2
            b Ingresos
              hr.hr.m-0
            b Gastos
      br
      p.fst-italic.text-center
        b Beneficios= Ingreso por ventas - Costo de los bienes – Gastos comerciales – Otros gastos operativos
    .h5 Eficiencia.
    p.mb-5 Mediante el siguiente gráfico interactivo, es posible descubrir y reforzar los elementos conceptuales y prácticos relacionados con indicadores de eficiencia de una organización.
      br
      br
      |Los indicadores de eficiencia se encaminan hacia el control de los recursos y muestran las diferencias entre lo gastado o consumido y lo producido. Se refieren a la adquisición de los insumos, que deben ser de calidad, en cantidad adecuada, en el tiempo adecuado y al menor costo posible (Cano, 2014).  
    .row.mb-5
      .col-lg-4
        figure.mb-3
          img(src='@/assets/curso/img15.svg', alt='Texto que describa la imagen')
        .h3 Permite
        p.mb-5 La métrica de eficiencia de marketing permite descubrir si los gastos o costes presupuestados han sido los finalmente empleados.
      .col-lg-4
        figure.mb-3
          img(src='@/assets/curso/img16.svg', alt='Texto que describa la imagen')
        .h3 Debe ser
        p.mb-5 Esta métrica debe ser siempre mayor o igual a uno.
      .col-lg-4
        figure.mb-3
          img(src='@/assets/curso/img17.svg', alt='Texto que describa la imagen')
        .h3 ¡Atención!
        p.mb-5 Si no es mayor o igual a uno, indicará que se están realizando gastos suplementarios a los presupuestados, y por lo tanto que se está perdiendo eficiencia.
    .contenedor-2.d-flex.mb-5
        .titulo_tarjeta-amarilla-2.d-flex.p-3
          .elementos-titulo.d-flex.m-auto
            img(src='@/assets/componentes/importante.svg', alt='Texto que describa la imagen' style='width: 55px ').d-inline-block
            .h4.my-auto.d-inline-block.ms-3 Importante 
        .tarjeta--gris.p-5
          .formula.d-flex.align-items-center.mb-5
              p.my-3.d-inline-block
                | Eficiencia del marketink =
              p.d-inline-block.ps-2.text-center  
                  b-none Gastos previstos área de marketing
                    hr.hr.m-0
                  | Gastos reales de marketing
          p.mb-5 
            b Las métricas para medir los indicadores de eficiencia, Hoyos (20013) las describe a continuación.
          .formula.d-flex.align-items-center.mb-5
              p.my-3.d-inline-block
                | Eficiencia área de ventas =
              p.d-inline-block.ps-2.text-center  
                  b-none Gastos previstos área de ventas
                    hr.hr.m-0
                  | Gastos reales área de ventas
          .formula.d-flex.align-items-center.mb-5
              p.my-3.d-inline-block
                | Eficiencia  en ventas =
              p.d-inline-block.ps-2.text-center  
                  b-none Ventas reales
                    hr.hr.m-0
                  | Ventas potenciales
          .formula.d-flex.align-items-center.mb-5
              p.my-3.d-inline-block
                | Eficiencia  de los vendedores =
              p.d-inline-block.ps-2.text-center  
                  b-none Gastos
                    hr.hr.m-0
                  | Ventas
          .formula.d-flex.align-items-center.mb-5
              p.my-3.d-inline-block
                | Eficiencia  por cliente =
              p.d-inline-block.ps-2.text-center  
                  b-none Gastos previstos por cliente
                    hr.hr.m-0
                  | Gastos reales por cliente

    .row.mb-5
      .col-lg-6
        p En el mismo sentido de lo que se ha estudiado hasta este punto, vale subrayar que las métricas de eficiencia, eficacia y actividad conviene siempre verlas al mismo tiempo, para tener una dimensión acertada de la actividad del área de marketing. 
          br
          br
          b Una métrica de actividad del marketing positiva, junto con una métrica de la eficiencia negativa, puede estar indicando que la expansión de las ventas se está haciendo a costa de incrementar de forma excesiva los costes del marketing, por lo que puede que las bases del crecimiento no sean lo sanas que deberían ser.    
      .col-lg-6
        figure.mb-3
          img(src='@/assets/curso/img18.jpg', alt='Texto que describa la imagen')
    p.mb-5 La economía va al costo, la eficiencia a los recursos, la eficacia a los productos y la efectividad a los resultados, como lo muestra la siguiente figura.
    figure.mb-5
      img(src='@/assets/curso/img19.svg', alt='Texto que describa la imagen')
      figcaption Relación entre variables.  
    .h5 Eficacia.
    p.mb-5 Los indicadores de eficacia están dedicados a ver el cumplimiento de objetivos y metas de los planes y programas fijados previamente. Esto conlleva a ver qué productos se consumen, cuáles son las características de los usuarios, y con ello, a determinar los perfiles del consumidor y verificar si se está llegando al mercado o si los productos están siendo usados por los consumidores, si existen nuevos perfiles o usos de los productos; también están muy ligados a los objetivos estratégicos y nos dicen qué tanto estamos cumpliendo. También, por su carácter mensurable, nos proporcionan señales y tasan los alcances de las metas (Cano, 2014).  
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris").mb-5
      div.p-3(titulo="Las métricas de eficacia.")
        p.mb-3 Ricardo Hoyos (2013) las describe a continuación.
        .formula.d-flex.align-items-center.mb-3
          .my-3.d-inline-block
            p Eficacia del área de las ventas =
          .d-inline-block.ps-2.text-center  
            p Beneficio previsto del área de ventas
            hr.hr.m-0
            p Beneficio real del área de ventas
        .formula.d-flex.align-items-center.mb-3
          .my-3.d-inline-block
            p Eficacia = 
          .d-inline-block.ps-2.text-center  
            p Clientes activos
            hr.hr.m-0
            p Clientes en cartera
        .formula.d-flex.align-items-center.mb-3
          .my-3.d-inline-block
            p Eficacia por cliente =
          .d-inline-block.ps-2.text-center  
            p Beneficio previsto por cliente
            hr.hr.m-0
            p Beneficio real por cliente
      div.p-3(titulo="Pérdida de eficacia.")
        p La métrica de eficacia del marketing debe ser siempre menor o igual a uno. Si no, indicará que el beneficio del área de marketing no está siendo el esperado. Es decir, lo que se presupuestó en su momento está perdiendo eficacia. Esta métrica mide cuán eficaz es la gestión del área, compara los beneficios previstos en un periodo de tiempo con los que finalmente se produjeron. Si el valor no es el esperado, se debe comenzar a investigar en qué estrategias, programas del marketing o acciones se está haciendo algo mal. 
      div.p-3(titulo="Indicadores")
        p.mb-3 Es importante ver estas métricas como indicadores que ayudan a detectar y corregir problemas y no solo como instrumento de control (Domínguez y Muñoz, 2010).
        .formula.d-flex.align-items-center.mb-3
          .my-3.d-inline-block
            p Eficacia del marketing  =
          .d-inline-block.ps-2.text-center  
            p Beneficio previsto
            hr.hr.m-0
            p Beneficio real
      div.p-3(titulo="Métrica de actividad")
        p.mb-3 Una forma de gestionar la actividad del marketing es crear el indicador de actividad, basado en el volumen de ventas. Indica la evolución del volumen de ventas. Es decir, señala el aumento o disminución de la cifra de negocios respecto al año anterior. Aunque se ha optado por clasificarlo como una métrica estratégica, es conveniente utilizarlo también de forma táctica; por ejemplo, cada trimestre, para ir monitorizando la evolución de las ventas. Esto permitirá tomar medidas correctivas a tiempo, si fuese necesario (Domínguez y Muñoz, 2010).
        .formula.d-flex.align-items-center.mb-3
          .my-3.d-inline-block
            p Actividad  =
          .d-inline-block.ps-2.text-center  
            p Ventas (n)-Ventas (1-n)
            hr.hr.m-0
            p Ventas (1-n)
          .d-inline-block.ps-2.text-center  
            p * 100%
    p.mb-3 
      b Ejemplo de métrica de actividad 
    p.mb-5 Suponiendo las ventas, los gastos y el beneficio de la siguiente tabla, se calculan las métricas de eficiencia, eficacia y actividad.
    .tabla-a.color-acento-botones.mb-5 
      table
        thead
          tr
            th Año 2021
            th Gastos previstos en marketing
            th Gastos reales en marketing
            th Beneficio previsto
            th Beneficio real
            th Ventas anuales
            th Ventas en el año 2020
        tbody
          tr
            td Eficacia
              br
              |Eficiencia
              br
              |Actividad
              br 
              |Ventas
            td 48
            td 50
            td 1000
            td 934
            td 1620
            td 1377
    .tarjeta--gris.p-5.mb-5
      .justify-items-center.vertical-align-middle
        .formula.d-flex.align-items-center.mb-3
          .my-3.d-inline-block
            p Eficiencia del marketing  =
          .d-inline-block.ps-2.text-center  
            p 48
            hr.hr.m-0
            p 50
          .d-inline-block.ps-2.text-center  
            p  
              |= 0,96 
        .formula.d-flex.align-items-center.mb-3
          .my-3.d-inline-block
            p Eficacia del marketing = 
          .d-inline-block.ps-2.text-center  
            p 1000
            hr.hr.m-0
            p 934
          .d-inline-block.ps-2.text-center  
            p  
              |= 1.07
        .formula.d-flex.align-items-center
          .my-3.d-inline-block
            p Actividad = 
          .d-inline-block.ps-2.text-center  
            p 1620 - 1376
            hr.hr.m-0
            p 1376
          .d-inline-block.ps-2.text-center  
            p *17,73%
    p.mb-3
      b Análisis del ejemplo
    p.mb-5 Es posible reforzar los conceptos hasta ahora desarrollados, mediante el análisis del ejemplo anterior sobre métrica de eficiencia, eficacia, actividad y ventas.
    .row
      .col-lg-6
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/img20.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .h5 Actividad en ventas
            p La actividad en ventas ha sido alta, se ha vendido un 17,73% más que el año pasado. En apariencia parece que el área de ventas y la empresa en su conjunto están funcionando de forma correcta.
      .col-lg-6
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/img22.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .h5 Eficiencia
            p La métrica de la eficiencia muestra que se está actuando de forma no eficiente, ya que se ha llegado a completar la cuenta de gastos inicialmente presupuestada, y por lo tanto se está sobrepasando el gasto previsto.
    .row
      .col-lg-6
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/img21.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .h5 Eficacia
            p Sin embargo, si miramos la eficacia, esta da un resultado superior a uno, lo que está indicando que los beneficios han estado por debajo de lo esperado para el año siguiente.
      .col-lg-6
        .tarjeta-Avatar-b.mb-5
          img(src='@/assets/curso/img23.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .h5 Indicadores
            p Mirando de forma conjunta las métricas de eficacia y de actividad, podemos deducir que, en principio, aunque la actividad en ventas ha sido buena, puede que la calidad de la venta no lo haya sido tanto, ya que se ha vendido más, pero se ha generado menos beneficio.
    .contenedor-2.d-flex.mb-5
        .titulo_tarjeta-amarilla-2.d-inline-block.p-3
          .elementos-titulo.d-flex.m-auto
            img(src='@/assets/componentes/importante.svg', alt='Texto que describa la imagen' style='width: 55px ').d-inline-block
            .h4.my-auto.d-inline-block.ms-3 Importante 
        .tarjeta--gris.p-5.d-inline-block
          p.mb-3 Se ofrecen otros elementos de análisis que podrían tenerse en cuenta en este ejemplo. Es necesario revisarlos con atención.
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | ¿Se están ofreciendo descuentos excesivos a los clientes para, por ejemplo, mantener cuota de mercado?
            li 
              i.fas.fa-check
              | ¿Se están realizando promociones demasiado agresivas y descontroladas?
            li 
              i.fas.fa-check
              | ¿Se ha invertido bien el presupuesto de mk?
            li 
              i.fas.fa-check
              | ¿Se están contabilizando depósitos en el canal como ventas en firme?
            li 
              i.fas.fa-check
              | Habría que estudiar si, habiendo llegado al 100% de eficiencia, es decir, habiendo invertido los gastos previstos a principio de año (en publicidad, por ejemplo), no hubiera sido quizá necesario presionar tanto al área de ventas, o realizar promociones tan agresivas.
    .h5 Efectividad.
    p.mb-5 La relación entre eficiencia y eficacia nos permite ver el logro de los resultados en el tiempo programado y los costos incurridos de manera racional. 
    .row.mb-5
      .col-lg-6
        .cajon.color-terciario.p-5.mb-4
          p Esto es efectividad: alcanzar altas metas con bajos recursos. Es decir, lo que pide el cliente: productos de precios adecuados, en forma adecuada y en el momento adecuado. Costo y oportunidad (Cano, 2014).
            br
            br
            |Las métricas para medir los indicadores de efectividad, según Hoyos (2013), son descritas a continuación.
      .col-lg-6
        .recuadro-formulas.p-5.mb-5 
          .formula.d-flex.align-items-center.mb-4
            .my-3.d-inline-block
              p Efectividad = 
            .d-inline-block.ps-2
              p Ventas
                hr.hr.m-0
              p Visitas realizadas
          .formula.d-flex.align-items-center.mb-5
            .my-3.d-inline-block
              p Efectividad comercial = 
            .d-inline-block.ps-2
              p Ventas ejecutadas
                hr.hr.m-0
              p Ventas presupuestadas
    .h5 Competitividad.
    p.mb-5 El marketing tiene actividades básicas, complejas, sistemáticas y dinámicas. 
    .row
      .col-md-6.col-lg-4.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/img24.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.azul-claro.p-4
            .h5.text-center.mt-5 Las empresas de hoy 
            p.text-center.small-text El entorno de las empresas de hoy tiene mayores dificultades, derivadas del alto nivel de exigencia de los mercados. La alta competitividad, entre otros, hace que las organizaciones deban vivir en constante investigación, a fin de generar la información necesaria que, después de ser analizada, permita estructurar los planes de marketing y definir las estrategias adaptadas a las necesidades de cambio que se van presentando.
      .col-md-6.col-lg-4.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/img25.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.azul-claro.p-4
            .h5.text-center.mt-5 El marketing 
            p.text-center.small-text La esencia de una buena gestión en marketing está en: investigar, analizar, evaluar, planear, implementar y controlar (Prettel, 2016).
      .col-md-6.col-lg-4.mb-5
        .tarjeta-Avatar
          img(src='@/assets/curso/img26.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.azul-claro.p-3
            .h5.text-center.mt-5 La competitividad
            p.text-center.px-5 Algunos indicadores para medir la competitividad:
            .formula.d-flex.align-items-center.mb-3
              .my-3.d-inline-block
                p.small-text.formula1 Posición de la empresa relativa del mercado =
              .d-inline-block.text-center  
                p.small-text  Ventas totales de la empresa
                hr.hr.m-0
                p.small-text  Ventas estimadas de un competidor
            .formula.d-flex.align-items-center.mb-3.justify-content-center
              .my-3.d-inline-block
                p.small-text.formula1 Grado de penetración en el mercado = 
              .d-inline-block.text-center  
                p.small-text Número de clientes nuevos
                hr.hr.m-0
                p.small-text Clientes totales (actuales+potenciales)















    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
