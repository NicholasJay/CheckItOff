class ChecklistController < ApplicationController

  def index
    @allinfo = Checklist.all
  end

  def create
    @task = Checklist.create(tasks: params[:tasks], is_checked: "false")
    render json: @task
  end

  def update

    binding.pry
    @task = Checklist.find(params[:id])
    @task.update(is_checked: params[:is_checked])
    @task.save
    render json: @task
  end

  def destroy
  end

end
