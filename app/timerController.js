
app.controller("TimerController", ["$scope", "DataService", function ($scope, DataService) {
	$scope.currentTimer = {
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	$scope.checkSeconds = function () {
		++$scope.currentTimer.seconds;
		if ($scope.currentTimer.seconds == 60) {
			$scope.currentTimer.seconds = 0;
			++$scope.currentTimer.minutes;
		}
	};

	$scope.checkMinutes = function () {
		if ($scope.currentTimer.minutes == 60) {
			$scope.currentTimer.minutes = 0;
			++$scope.currentTimer.hours;
		}
	};

	$scope.startCurrentTimer = function () {
		setInterval(function () {

			$scope.checkSeconds();
			$scope.checkMinutes();

		}, 1000);
	};

	$scope.getHistory = function () {
		return DataService.getTimerDataStore();
	};

	$scope.save = function (timer) {
		DataService.saveTimerToDataStore(timer);
	};
}]);