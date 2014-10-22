require 'rubygems'
require 'nokogiri'

doc = Nokogiri::HTML(File.read("niver.html"))
emails = []
File.open("emails.txt", 'w') { |file|  
  doc.xpath('//a').each do |link|
    href = link.attribute("href")        
    if(!href.nil? && href.to_s.include?("mailto:") && !href.to_s.include?("www")) 
      file.write(href.to_s[7, href.to_s.length - 7] + "\r\n") unless href.to_s[7, href.to_s.length - 7].nil?
    end
  end
}