class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def get_episode_data(rabbi, identifier, video)
    require 'net/http'
    
    url = !Rails.env.production? ? "http://admin.yehudim.tv/" : "http://nebula-exhibit.codio.io:3000"    
    source = url + "/api/v1/episode/#{ rabbi }/#{ identifier }/#{ video }"
    Rails.logger.info(source)
    
    resp = Net::HTTP.get_response(URI.parse(source))
    data = JSON.parse(resp.body)    
  end

end
