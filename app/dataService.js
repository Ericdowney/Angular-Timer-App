
app.service("DataService", function (NodeService) {

	this.dataStoreLocation = "DataStore/TimerHistory.json"

	this.getTimerDataStore = function () {
		return JSON.parse( NodeService.fs.readFileSync( this.dataStoreLocation ) );
	};

	this.saveTimerToDataStore = function (timer) {
		var data = JSON.parse(NodeService.fs.readFileSync( this.dataStoreLocation ));
		var newId = 0;
		if (data["0"] && data["0"] != "") {
			for (var attr in data) { newId = parseInt(attr); }
			++newId;
		}

		data[newId] = {
			entry_date: (new Date()).toString(),
			hours: timer.hours,
			minutes: timer.minutes,
			seconds: timer.seconds
		};

		NodeService.fs.writeFileSync(this.dataStoreLocation, JSON.stringify(data));
	};

});