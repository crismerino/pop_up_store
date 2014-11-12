# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

sala_grande, sala_visionado, sala_grupo, sala_reuniones, sala_trabajo = Sala.create ([
	{nombre: 'Sala Grande', capacidad: 30, descripcion: 'Sala equipada para 30 personas', climatizacion: true, equipo_audiovisual: true, equipo_informatico: true, wifi: true}, 
  {nombre: 'Sala Visionado', capacidad: 45, descripcion: 'Sala equipada para 45 personas para la proyeccion de material audiovisual', climatizacion: true, equipo_audiovisual: true, equipo_informatico: true, wifi: true}, 
  {nombre: 'Sala Grupo', capacidad: 15, descripcion: 'Sala equipada para 15 personas', climatizacion: true, equipo_audiovisual: true, equipo_informatico: true, wifi: true},
  {nombre: 'Sala Reuniones', capacidad: 10, descripcion: 'Sala equipada para 10 personas equipada para reuniones', climatizacion: true, equipo_audiovisual: true, equipo_informatico: true, wifi: true}, 
  {nombre: 'Sala Trabajo', capacidad: 6, descripcion: 'Sala equipada para 6 personas con equipo informatico', climatizacion: true, equipo_audiovisual: true, equipo_informatico: true, wifi: true} 
])

mu_javascript, mu_angularjs, presentacion_Buleboo, coworking_Ironhack, coworking_Buho, visionado_soft_skills = Evento.create([
	{organizador: 'Ironhack', lugar: 'Sala Grupo', dia: '2014-11-6', hora: '17:00', duracion: 4, precio: 5, descripcion: 'Se trata de un meetup orientado a la iniciacion en javascript'},
	{organizador: 'Ironhack', lugar: 'Sala Grupo', dia: '2014-11-10', hora: '16:00', duracion: 6, precio: 5, descripcion: 'Se trata de un meetup orientado a la iniciacion en el framework Angular JS'},
	{organizador: 'Bulibaa', lugar: 'Sala Reuniones', dia: '2014-11-11', hora: '12:00', duracion: 3, precio: 0, descripcion: 'Reunion del equipo de Bulibaa acerca de su infraestructura interna.'},
	{organizador: 'Ironhack', lugar: 'Sala Grande', dia: '2014-11-15', hora: '9:00', duracion: 24, precio: 0, descripcion: 'Espacio reservado para Ironhack'},
	{organizador: 'Buho', lugar: 'Sala Trabajo', dia: '2014-11-20', hora: '9:00', duracion: 24, precio: 0, descripcion: 'Espacio reservado para Buho'},
	{organizador: 'McDonald', lugar: 'Sala Visionado', dia: '2014-11-6', hora: '17:00', duracion: 4, precio: 20, descripcion: 'Reservado para el meetup sobre soft skills'},	
	])