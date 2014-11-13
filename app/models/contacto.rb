class Contacto < ActiveRecord::Base
	validates :name, presence:true
	validates :email, presence:true
	validates :asunto, presence:true
	validates :comentario, presence:true
end
