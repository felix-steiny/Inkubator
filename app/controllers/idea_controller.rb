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
end
