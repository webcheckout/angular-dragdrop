angular.module('app', [
    'hljs',
    'ang-drag-drop'
]).controller('MainCtrl', function($scope) {
    $scope.men = [
        'John',
        'Jack',
        'Mark',
        'Ernie',
        'Mike (Locked)',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '49',
        '40',
        '41',
        '42',
        '43',
        '44',
        '45',
        '46',
        '47',
        '48',
        '49'
    ];


    $scope.women = [
        'Jane',
        'Jill',
        'Betty',
        'Mary'
    ];

    $scope.addText = '';

    $scope.dropValidateHandler = function($drop, $event, $data) {
        if ($data === 'Mike (Locked)') {
            return false;
        }
        if ($drop.element[0] === $event.srcElement.parentNode) {
            // Don't allow moving to same container
            return false;
        }
        return true;
    };

    $scope.dropSuccessHandler = function($event, index, array) {
        array.splice(index, 1);
    };

    $scope.dropFailureHandler = function($event, index, array) {
        alert(array[index] + ' could be dropped into left list!')
    };

    $scope.onDrop = function($event, $data, array, index) {
        if (index !== undefined) {
            array.splice(index, 0, $data);
        } else {
            array.push($data);
        }
    };

    $scope.getCustomDragElementId = function (index) {
        return 'customDrag' + (index % 2);
    }

});
