require 'datamapper'
require './romey.rb'

desc 'run the server'
task :run do |t|
  require File.join(File.dirname(__FILE__),'romey')
  Romey.run!
end

namespace :db do
  desc "Migrate database with DataMapper auto_migrate"
  task :migrate do
    DataMapper.auto_migrate!
  end
end

