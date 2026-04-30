require 'httparty'
require 'colorize'

url = ENV.fetch('SAMPLE_URL', 'https://httpbin.org/get')

puts "Ruby version: #{RUBY_VERSION}".colorize(:cyan)
puts "Fetching: #{url}".colorize(:yellow)

response = HTTParty.get(url, timeout: 10)
preview  = response.body.to_s[0, 200]

puts "Status : #{response.code}".colorize(:green)
puts "Bytes  : #{response.body.bytesize}"
puts "Preview: #{preview}"
