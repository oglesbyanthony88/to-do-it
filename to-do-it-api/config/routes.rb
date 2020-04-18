Rails.application.routes.draw do

	scope ':api' do
			resources :todos
			resources :notes
			resources :groceries
		end
end
