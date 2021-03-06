Rails.application.routes.draw do
  # get 'claims/create'
  # resources :companies
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :companies do
  resources :claims, only: [:create, :destroy, :edit, :update]
  end

root to: "companies#index"
end
