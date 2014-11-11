class AddFieldsToSalas < ActiveRecord::Migration
  def change
  	add_column :salas, :nombre, :string
  	add_column :salas, :capacidad, :string
  	add_column :salas, :descripcion, :text
  	add_column :salas, :climatizacion, :boolean
  	add_column :salas, :equipo_audiovisual, :boolean
  	add_column :salas, :equipo_informatico, :boolean
  	add_column :salas, :wifi, :boolean
  end
end
