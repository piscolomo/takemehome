class DogsController < ApplicationController
	skip_before_filter :verify_authenticity_token, :only => :upload
	
  def index
    @dogs = Dog.all
  end

  def upload
	  uploaded_io = params[:file]
	  File.open(Rails.root.join('public', 'uploads', uploaded_io.original_filename), 'wb') do |file|
	    if (file.write(uploaded_io.read))
	    	render status: 200, json: ""
	    end
	  end
	end
end