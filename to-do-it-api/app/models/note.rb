class Note < ApplicationRecord
	def created_at
		attributes['created_at'].strftime("%m/%d/%Y %H:%M")
	end
end
