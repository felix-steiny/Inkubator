class LabelController < ApplicationController

  def fetch
    data = LabelClass.all.map { |label_class| {
        'id' => label_class.id,
        'name' => label_class.name,
        'color' => label_class.color,
        'semantics' => label_class.class_semantics.map { |class_semantic| {
          'id' => class_semantic.id,
          'options' => class_semantic.options,
          'name' => class_semantic.semantic.name
        }}
    }}
    render json: data
  end

end