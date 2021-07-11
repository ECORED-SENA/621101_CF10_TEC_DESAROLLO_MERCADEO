export default {
  global: {
    componenteFormativo: 'Evaluación del plan de mercadeo',
    descripcionCurso:
      'A través del componente formativo ‘Evaluación del plan de mercadeo’, el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración del plan de mercadeo final y el informe de evaluación del plan para su idea de negocio o proyecto productivo.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Desempeño organizacional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Parámetros de evaluación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Auditoría de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Plan de contingencia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Protocolo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Indicadores',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Cano, A. (2014). Auditoría y Evaluación del Marketing. Centro Editorial Esumer.',
      link:
        'http://www.elmayorportaldegerencia.com/Libros/Mercadeo/%5BPD%5D%20Libros%20-%20Auditoria%20evaluacion%20del%20marketing.pdf',
    },
    {
      referencia:
        'Chiavenato, I. (2009). Administración de recursos humanos. El capital humano de las organizaciones. (9th ed.). McGraw-Hill',
      link:
        'https://www.academia.edu/29724210/Chiavenato_Administracion_de_Recursos_Humanos_subrayado',
    },
    {
      referencia:
        'DANE. (2007). Guía para Diseño, Construcción e Interpretación de Indicadores. DANE.',
      link:
        'https://www.dane.gov.co/files/planificacion/fortalecimiento/cuadernillo/Guia_construccion_interpretacion_indicadores.pdf',
    },
    {
      referencia:
        'Domínguez, A., y Muñoz, G. (2010). Métricas del marketing. ESIC.',
      link:
        'https://www-alfaomegacloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alfaomegacloud-com.bdigital.sena.edu.co/reader/metricas-del-marketing?location=1',
    },
    {
      referencia:
        'Fernández, R. (2007). Manual para elaborar un plan de Mercadotecnia. Thomson Learning.',
    },
    {
      referencia: 'Hoyos, R. (2013). Plan de marketing. ECOE Ediciones.',
      link:
        ' https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=3213503&ppg=1 ',
    },
    {
      referencia:
        'Instituto de Empresa. (2001). Consultor para la dirección comercial y de marketing.',
    },
    {
      referencia:
        'Lambin, J. J., Gallucci, C., y Sicurello, C. (2009). Dirección de marketing (2ª ed.). McGraw-Hill Educación.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=515&pg=1',
    },
    {
      referencia:
        'Lucas, C. (2017). Auditoría de Marketing. Fondo editorial Areandino.',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1216/Auditor%C3%ADa%20de%20Marketing.pdf?sequence=1&isAllowed=y#:~:text=Auditor%C3%ADa%20de%20la%20estrategia%20de%20marketing&text=Se%20basa%20en%20revisar%20los,actual%20y%20al%20anteriormente%20previsto.',
    },
    {
      referencia:
        'Osalan. (2020). Guía para la elaboración del Plan de Contingencia Covid-19. ',
      link:
        'https://www.osalan.euskadi.eus/contenidos/informacion/procedimiento_coronavirus/es_def/adjuntos/plan-contingencia-covid-es.pdf',
    },
    {
      referencia:
        'Prettel, G. (2016). Marketing una herramienta para el crecimiento. Ediciones de la U.',
    },
    {
      referencia:
        'Sainz, J. (2016). El plan de marketing en la práctica (22ª ed.) ESIC.',
    },
    {
      referencia: 'Stewart, D. (2009). Psicología del consumidor. Paidos.',
    },
    {
      referencia:
        'Toro, F. (2020). Indicadores y claves para evaluar y controlar proyectos (2ª ed.). Ediciones de la U.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=10058&pg=1',
    },
  ],
  glosario: [
    {
      termino: 'Control de mercadeo',
      significado:
        'Proceso de medición y evaluación de los resultados de las estrategias y planes, así como las medidas correctivas que aseguren el logro de los objetivos de mercadeo.',
    },
    {
      termino: 'Control estratégico',
      significado:
        'Análisis crítico de la eficacia mercadotécnica global de una empresa.',
    },
    {
      termino: 'Efectividad',
      significado:
        'Es la relación entre los resultados logrados y los que se propusieron previamente, y da cuenta del grado de logro de los objetivos planificados.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Es la relación entre la cantidad de recursos utilizados y la cantidad de recursos que se había estimado o programado utilizar.',
    },
    {
      termino: 'Eficacia',
      significado:
        'Valora el impacto de lo que hacemos, del producto que entregamos o del servicio que prestamos. No es suficiente producir con 100% de efectividad, sino que los productos o servicios deben ser los adecuados para satisfacer las necesidades de los clientes. Por lo tanto, la eficacia es un criterio relacionado con la calidad (adecuación al uso, satisfacción del cliente).',
    },
    {
      termino: 'Grado de satisfacción',
      significado:
        'Es el nivel del estado de ánimo de un individuo que resulta de la comparación entre el rendimiento percibido del producto o servicio con sus expectativas. Esto quiere decir que el objetivo de mantener satisfecho al cliente es primordial para cualquier empresa.',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'Son instrumentos de medición de las variables asociadas a las metas, los cuales pueden ser cualitativos o cuantitativos, y se entienden como la expresión cuantitativa del comportamiento o el desempeño de toda una organización.',
    },
    {
      termino: 'Productividad',
      significado:
        'Es la relación entre la cantidad de productos obtenida por un sistema productivo y los recursos utilizados para obtener dicha producción.',
    },
    {
      termino: 'Prospección',
      significado:
        'Proceso planeado y sistematizado para identificar clientes potenciales o "prospectos".',
    },
    {
      termino: 'Prospectiva',
      significado:
        'Etapa del proceso de venta en que el vendedor identifica a clientes potenciales calificados.',
    },
    {
      termino: 'Retorno de la inversión (ROI)',
      significado:
        'Cifra utilizada para medir el éxito de las ventas, que se obtiene al multiplicar la tasa de utilidad (utilidad neta/ventas) por el movimiento total (ventas/inversión)',
    },
    {
      termino: 'Retroalimentación (feedback)',
      significado:
        'Término utilizado para describir el proceso mediante el cual la información retorna al emisor. En el caso del mercadeo, la retroalimentación incluye información de ventas, reacciones de los clientes, etc., que ayudan a perfeccionar la campaña de mercadeo.',
    },
  ],
  complementario: [
    {
      texto: 'Domínguez, A., y Muñoz, G. (2010). Métricas del marketing. ESIC.',
      tipo: 'Libro',
      link:
        'https://www-alfaomegacloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alfaomegacloud-com.bdigital.sena.edu.co/reader/metricas-del-marketing?location=1',
    },
    {
      texto: 'Hoyos, R. (2013). Plan de marketing. ECOE Ediciones.',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=3213503&ppg=1',
    },
    {
      texto:
        'Lambin, J. J., Gallucci, C., y Sicurello, C. (2009). Dirección de marketing (2ª ed.). McGraw-Hill Educación.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=515',
    },
    {
      texto:
        'Toro, F. (2020). Indicadores y claves para evaluar y controlar proyectos (2ª ed.). Ediciones de la U.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=10058&pg=1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Nelftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial Del Diseño Y La Manufactura',
      },
      {
        nombre: 'Claudia Juliana León Pinto',
        cargo: 'Experta temática',
        centro: 'Centro de Servicio Empresariales y Turísticos',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Centro Agropecuario La Granja Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: [
          'Zuleidy Maria Ruiz Torres',
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'Nelson Vera Briceño',
          'Adriana Ariza Luque',
        ],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
