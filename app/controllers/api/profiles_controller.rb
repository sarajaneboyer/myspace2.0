class Api::ProfilesController < ApplicationController
  
  before_action :authenticate_user!
  def show
  end

  def index
    render json: User.random_profile(current_user.friend_profiles)
  end

  def update
    current_user.friend_profiles << params[:id].to_i
    current_user.save 
  end

  def my_friends
    render json: User.friend(current_user.friend_profiles)
  end
end
