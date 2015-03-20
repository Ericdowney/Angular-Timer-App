
app.controller("TimerController", ["$scope", "$interval", "DataService", function ($scope, $interval, DataService) {
	$scope.currentTimer = {
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	$scope.interval = null;
	$scope.history = {};

	$scope.init = function () {
		$scope.history = $scope.getHistory();
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
		if ($scope.interval != null) {
			$scope.cancelInterval($scope.interval);
			$scope.interval = null;
		}
		else {
			$scope.interval = $interval(function () {

				$scope.checkSeconds();
				$scope.checkMinutes();

			}, 1000);
		}
	};

	$scope.cancelInterval = function (intervalPromise) {
		$interval.cancel(intervalPromise);
		$scope.currentTimer.seconds = 0;
		$scope.currentTimer.minutes = 0;
		$scope.currentTimer.hours = 0;
	};

	$scope.getHistory = function () {
		return DataService.getTimerDataStore();
	};

	$scope.save = function (timer) {
		DataService.saveTimerToDataStore(timer);
		$scope.history = $scope.getHistory();
	};
}]);