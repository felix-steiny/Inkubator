# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

lc = LabelClass.create(name: 'Status', color: 'f6f6f6')
s = Semantic.create(name: 'fixed_selection')
ClassSemantic.create(semantic: s, label_class: lc, options: 'Unrefined|Refined|Queued|In Progress|Completed|Deployed')
Label.create(value: 'Unrefined', idea: Idea.first, label_class: lc)
