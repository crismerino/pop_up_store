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