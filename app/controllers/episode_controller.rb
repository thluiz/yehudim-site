class EpisodeController < ApplicationController


  def index
    @identifier = params[:identifier]
    @rabbi = params[:rabbi]

    @mobile = (request.user_agent =~ /Mobile|webOS/) || (request.user_agent =~ /iPhone|iPad|iPhone|Android/i)

    @hide_footer = @mobile
    @episode = get_episode_data(@rabbi, @identifier)
    logger.info @episode["amazon_identifier"]
  end
end
