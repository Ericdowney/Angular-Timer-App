
app.service("DataService", function (NodeService) {

	this.dataStoreLocation = "../DataStore/TimerHistory.json"

	this.getTimerDataStore = function () {
		return JSON.parse( NodeService.fs.readFileSync(this.dataStoreLocation) );
	};

	this.saveTimerToDataStore = function (timer) {
		var data = JSON.parse(NodeService.fs.readFileSync("../DataStore/TimerHistory.json"));
		var newId = parseInt(data.keys()[data.keys().length - 1]) + 1;

		data[newId] = {
			entry_date: new Date(),
			hours: timer.hours,
			minutes: timer.minutes,
			seconds: timer.seconds
		};

		NodeService.fs.writeFileSync("../DataStore/TimerHistory.json", data);
	};

});