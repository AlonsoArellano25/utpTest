const places = [
  {
    name: "Lago Como",
    description:
      "El tercer lago más grande de Italia es, indudablemente, el más emblemático. Localizado en la región de Lombardía, está rodeado de poblaciones de las que quizás no hayas oído hablar nunca, como Bellagio, Tremezzo o Varenna, pero en cuanto las pises, sentirás amor a primera vista.",
    url: "https://images.musement.com/default/0002/60/thumb_159774_default_header.jpeg"
  },
  {
    name: "Duomo de Milán",
    description:
      "Con una superficie de casi 12.000 m2, la Catedral de Milán es uno de los templos góticos más grandes del mundo. Y es que el monumento más representativo de la capital italiana de la moda es uno de esos sitios que no pasan desapercibidos. Además de admirar su inmensidad, anímate a subir a su terraza panorámica para contemplar la ciudad desde las alturas.",
    url: "https://images.musement.com/default/0002/60/thumb_159775_default_header.jpeg"
  },
  {
    name: "Santa Maria delle Grazie de Milán",
    description:
      "Es posible que esta iglesia del siglo XV no destaque por su exterior, pero en su interior esconde uno de los mayores tesoros de todos los tiempos. Nos estamos refiriendo a ‘La Última Cena’ de Leonardo da Vinci, una de las pinturas más célebres del mundo, que mide la friolera de 880×460 cm.",
    url: "https://images.musement.com/default/0002/60/thumb_159776_default_header.jpeg"
  },
  {
    name: "Arena de Verona",
    description:
      "Verona es una de las ciudades más románticas de Italia, pues, entre otros motivos, fue escenario del romance de Romeo y Julieta. Más allá de esta popular historia, en esta urbe de la región del Véneto no te puedes perder la magnífica Arena, un anfiteatro romano construido hace más de 2.000 años en perfecto estado de conservación.",
    url: "https://images.musement.com/default/0002/60/thumb_159777_default_header.jpeg"
  },
  {
    name: "Basílica de San Marcos de Venecia",
    description:
      "La Basílica de San Marcos, situada en la plaza homónima, es una de las estampas más conocidas de la ciudad de los canales. Si su fachada exterior embelesa con sus cúpulas y su grandiosidad, su interior maravilla, gracias al predominio del color dorado y sus más de 8.000 m2 de mosaicos.",
    url: "https://images.musement.com/default/0002/60/thumb_159778_default_header.jpeg"
  }
];

const resolvers = {
  Query: {
    getPlaces: () => places
  }
};

module.exports = resolvers;
