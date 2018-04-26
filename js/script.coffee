logo_spin = null
$('.logo').click ->
	clearTimeout(logo_spin) if logo_spin != null
	logo_spin = setTimeout(->
		$('.logo__source').removeClass('logo__source_spin')
	, 3000)
	$('.logo__source').addClass('logo__source_spin')
