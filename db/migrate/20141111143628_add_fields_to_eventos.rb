class AddFieldsToEventos < ActiveRecord::Migration
  def change
  	add_column :eventos, :organizador, :string
  	add_column :eventos, :lugar, :string
  	add_column :eventos, :dia, :string
  	add_column :eventos, :hora, :integer
  	add_column :eventos, :duracion, :integer
  	add_column :eventos, :precio, :decimal
  	add_column :eventos, :descripcion, :text
  end
end
