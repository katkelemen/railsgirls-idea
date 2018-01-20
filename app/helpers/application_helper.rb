module ApplicationHelper
	def active_class(link_path)
		request.fullpath.start_with?(link_path)? "active" : ""
  	# current_page?(link_path) ? "active" : ""
 end

end
