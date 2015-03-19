class IdeaController < ApplicationController
  def index
    @ideas = Idea.all
  end

  def fetch
    render json: Idea.all
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
end
