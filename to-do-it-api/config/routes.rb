Rails.application.routes.draw do

	scope 'api/v1' do
			resources :todos
			resources :notes
			resources :groceries
		end
end
