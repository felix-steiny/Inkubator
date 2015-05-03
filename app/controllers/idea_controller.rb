class IdeaController < ApplicationController
  def index
    @ideas = Idea.all
  end

  def fetch
    data = Idea.all.map { |idea| {'id' => idea.id,
                                  'html' => idea.html,
                                  'plaintext' => idea.plaintext,
                                  'labels' => idea.labels.map { |label|
                                                                {'value' => label.value,
                                                                 'label_class_id' => label.label_class_id}}
                                }
                        }
    render json: data
  end

  def fetch_one
    render json: Idea.where({id: params[:id]})
  end

  def create

    idea_text = params[:new_idea]

    if not idea_text.blank?
      new_idea = Idea.new
      new_idea.html = idea_text
      new_idea.plaintext = idea_text
      new_idea.save
    end

    render json: {success: true }
  end

  def save_batch

    json_ideas = params[:ideas]
    batch = json_ideas

    batch.each do |json_idea|
      idea = Idea.find(json_idea['id'])
      idea.html = json_idea['html']
      idea.plaintext = json_idea['plaintext']
      idea.save
    end

    render json: {success: true }
  end
end
