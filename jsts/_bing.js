class KlassSomthing {
	function run() {
		setTimeout(this.callback.bind(this), 1100);
	}

	function callback() {
		this.something();
	}
}



