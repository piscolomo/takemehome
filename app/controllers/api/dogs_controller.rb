module Api
  class DogsController < ApplicationController

    def index
      @dogs = Dog.all
      render json: @dogs, status: 200
    end

    def show
      @dog = Dog.find(params[:id])
      render json: @dog, status: 200
    end

    def create
      binding.pry 
      @dog = Dog.new(dog_params)

      if @dog.save
        render json: @dog, status: 201, location: api_dog_url(@dog[:id])
      else
        render json: @dog.errors, status: 422
      end
    end

    private
    
      def dog_params
        params.require(:dog).permit(:name, :breed, :sex, :size)
      end
  end
end