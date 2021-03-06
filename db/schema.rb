# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141113154005) do

  create_table "contactos", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "asunto"
    t.text     "comentario"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "eventos", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "img"
    t.string   "organizador"
    t.string   "lugar"
    t.integer  "dia"
    t.integer  "hora"
    t.integer  "duracion"
    t.decimal  "precio"
    t.text     "descripcion"
  end

  create_table "salas", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "nombre"
    t.string   "capacidad"
    t.text     "descripcion"
    t.boolean  "climatizacion"
    t.boolean  "equipo_audiovisual"
    t.boolean  "equipo_informatico"
    t.boolean  "wifi"
  end

end
