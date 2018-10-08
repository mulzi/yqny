function imgRun(boxId, lefte, nextr) {
	var len = $(boxId).children('ul').children('li').length;
	var liW = $(boxId).children('ul').children('li').width() + 20;
	var boxUlW = len * liW;
	var ulw = $(boxId).children('ul');
	ulw.css({
		width: boxUlW + 'px',
	});
	var index = 0;
	var flag = true;

	function runlun() {
		ulw.stop().animate({
			left: -(index * liW)
		}, 600);
		flag = true;
	};
	if(flag) {
		
		$(lefte).stop().click(function() {
			flag = false;
			index++;
			if(index >= len - 2) {
				index = len - 3
			} else {
				runlun();
			}
			console.log(index)
		});
		$(nextr).stop().click(function() {
			flag = false;
			index--;
			if(index <= 0) {
				index = 1
			} else {
				runlun();
			}

			console.log(index)
		})
	} else {
		return false;
	}

}
imgRun(".show_img", ".preleft", ".nextright");