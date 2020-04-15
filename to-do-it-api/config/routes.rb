Rails.application.routes.draw do
	
  get 'notes/index'
  get 'notes/create'
  get 'notes/update'
  get 'notes/destroy'
	scope 'api/v1' do
			resources :todos
		end
end
