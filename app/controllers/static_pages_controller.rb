class StaticPagesController < ApplicationController

	def home
	end

	def espacio
	end

	def evento
	end

	def blog
	end

	def nosotros
	end

	def contacto
	end

	def peticion
		if request.xhr?
			puts "eeee"
			@sala = JSON.parse!(request.body.read.to_s)
			@selected_sala = Sala.where(name: @sala)
			render json: "@selected_sala"
		else
			return 'error'
		end
	end
end
