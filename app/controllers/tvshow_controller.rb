class TvshowController < ApplicationController
  def index

  end

  def show
    @identifier = params[:identifier]
  end
end
