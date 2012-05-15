require 'rubygems'
require 'sinatra'
require 'data_mapper'

disable :run

root = ::File.dirname(__FILE__)
require ::File.join( root, 'romey' )

# setup static serving
use Rack::Static, :urls => [ "/images", "/stylesheets", "/javascripts"], :root => File.join(root, 'public')

run Romey.new
