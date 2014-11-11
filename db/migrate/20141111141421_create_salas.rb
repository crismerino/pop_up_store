class CreateSalas < ActiveRecord::Migration
  def change
    create_table :salas do |t|

      t.timestamps
    end
  end
end
