class StaticPagesController < ApplicationController

	def peticion_eventos
		if request.xhr?
			fecha_evento = request.body.read.to_s
			@selected_events = Evento.where(dia: fecha_evento)
			render json: @selected_events
		else
			render 'error'
		end
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
