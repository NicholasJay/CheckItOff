CheckItOff::Application.routes.draw do

  resources :checklist do 
  end
  root "checklist#index"
  
end
