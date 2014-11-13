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
			@sala = request.body.read.to_s
			@selected_sala = Sala.where(nombre: @sala)
			render json: @selected_sala[0]
		else
			render 'error'
		end
	end
end
