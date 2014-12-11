class EpisodeController < ApplicationController


  def index
    @identifier = params[:identifier]
    @rabbi = params[:rabbi]
    @video = params[:video]

    @mobile = (request.user_agent =~ /Mobile|webOS/) || (request.user_agent =~ /iPhone|iPad|iPhone|Android/i)

    @hide_footer = @mobile
    data = get_episode_data(@rabbi, @identifier, @video)   
    
    @episode = data["episode"]
    @current = data["current"]    
    @next = data["next"]
    @videos = data["videos"]
  end
end
