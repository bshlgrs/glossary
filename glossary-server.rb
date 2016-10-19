require 'sinatra'
require "sinatra/reloader" if development?

 set :port, 4646

get "/" do
  send_file File.join(settings.public_folder, 'index.html')
end
