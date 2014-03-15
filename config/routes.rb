CheckItOff::Application.routes.draw do

  resources :checklist, only:[:create, :update, :destroy]
  root "checklist#index"
  
end
