export default function InputCustomModule() {
	$('.custom-file input').on('change', function (e) {
		const $this = $(this);
		const $renderFileName = $this.closest('.custom-file').find('.file-name');
		if (e.target.files.length) {
			console.log(e.target.files[0]);
			const $fileName = e.target.files[0].name;
			$renderFileName.text($fileName);
		}
	});
}
