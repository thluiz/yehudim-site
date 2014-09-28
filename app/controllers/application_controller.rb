class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def get_episode_data(rabbi, identifier)
    require 'net/http'
    source = "http://admin.yehudim.tv/api/v1/episode/#{ rabbi }/#{ identifier }"
    resp = Net::HTTP.get_response(URI.parse(source))
    data = resp.body
    episode = JSON.parse(data)
  end

end
