class SubmitBoxController < ApplicationController
  def index
    @text = 'Enter an idea:'
  end

  def new

    idea_text = params[:new_idea]

    if not idea_text.blank?
      new_idea = Idea.new
      new_idea.html = idea_text
      new_idea.plaintext = idea_text
      new_idea.save
    end

    redirect_to '/'
  end
end
