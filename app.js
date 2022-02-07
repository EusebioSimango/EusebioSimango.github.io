$(document).ready(function() {
	$('#add').on('click', function() {
		IfNotEmpty()	
	})

	$('input[type="text"]').on('keydown', function(e) {
		if ( e.key === "Enter" ) {
			IfNotEmpty()
		}	
	})

	$('#clear-list').on('click', function() {
		$('#tasks').empty()
	})

	$( '#clear-checked' ).on('click', function() {
		$('.task').find('.line-through').parent().parent().remove()
	})

	function IfNotEmpty(argument) {
		if ( $('input[type="text"]').val() != '' ) {
			NewTask()
		}
	}

	function NewTask() {
		let task = $('#new-task').val()
		$('#tasks').append(`
			<div class="task">
					<div class="left">
						<input type="checkbox" name="">
						<input value="${task}" disabled class="teste">
					</div>
					<div class="right">
						<i class="trash fas fa-trash"></i>
					</div>
			</div>
		`)
		$('#new-task').val('')
		render()
	}

	function render() {
		const trash = $('i')
		trash.on('click', function() {
			$(this).parent().parent().remove()
		})

		$( 'input[type="checkbox"]' ).on('change', function() {
			if ( $(this).siblings().hasClass('line-through') ) {
				$(this).siblings().removeClass('line-through')
			} else {
				$(this).siblings().addClass('line-through')
			}
		})
	}
})