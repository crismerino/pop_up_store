class CreateContactos < ActiveRecord::Migration
  def change
    create_table :contactos do |t|
    	t.string :name
    	t.string :email
    	t.string :asunto
    	t.text :comentario
      t.timestamps
    end
  end
end
