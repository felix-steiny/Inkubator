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

ActiveRecord::Schema.define(version: 20150502162757) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "class_semantics", force: :cascade do |t|
    t.text     "options"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "semantic_id"
    t.integer  "label_class_id"
  end

  add_index "class_semantics", ["label_class_id"], name: "index_class_semantics_on_label_class_id", using: :btree
  add_index "class_semantics", ["semantic_id"], name: "index_class_semantics_on_semantic_id", using: :btree

  create_table "ideas", force: :cascade do |t|
    t.text     "html"
    t.text     "plaintext"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "label_classes", force: :cascade do |t|
    t.string   "name"
    t.string   "color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "labels", force: :cascade do |t|
    t.string   "value"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.integer  "label_class_id"
    t.integer  "idea_id"
  end

  add_index "labels", ["idea_id"], name: "index_labels_on_idea_id", using: :btree
  add_index "labels", ["label_class_id"], name: "index_labels_on_label_class_id", using: :btree

  create_table "semantics", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "class_semantics", "label_classes"
  add_foreign_key "class_semantics", "semantics"
  add_foreign_key "labels", "ideas"
  add_foreign_key "labels", "label_classes"
end
