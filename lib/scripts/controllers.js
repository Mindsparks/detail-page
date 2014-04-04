// Define your controller and the objects you need to reference.
myAngularApp.controller('appInfoController', function ($rootScope, $scope) {
  /* Define a variable (an object variable in the case below). All variables must be within angular's $scope to be referenced in a template.
     To create a global variable, use $rootScope. */
  $scope.myApp = {
    name: 'Thought Achievements',
    description: 'A list of new things learned.'
  };
	$scope.songs = [
    {
      id:1,
      source: 'Raymond Kurzweil - How to Create a Mind',
      date: '2014-04-02',
      title: 'Pattern Recognition Theory',
      description: 'Thoughts are constructed in hierarchical patterns of the mind.',
      tags: 'singularity, mind, kurzweil, immortality, ai',
      selected: false
    },
    {
      id:2,
      source: 'Nir Eyal - Hooked',
      date: '2014-04-02',
      title: 'ATARI Habit Forming Process',
      description: 'People use a product through a Trigger, Action, Reward, Investment loop.',
      tags: 'usability, product, design, software',
      selected: false
    },
    {
      id:3,
      source: "Deadmau5",
      date: '2014-04-03',
      title: 'Phantoms Cant Hang',
      description: 'Repitition in a song is not a problem when its complex and layered.',
      tags: 'progressive house, deadmau5, music, electronic music, trance, synths',
      selected: false
    },
    {
      id:4,
      source: 'Raymond Kurzweil - How to Create a Mind',
      date: '2014-04-02',
      title: 'Pattern Recognition Theory',
      description: 'Thoughts are constructed in hierarchical patterns of the mind.',
      tags: 'singularity, mind, kurzweil, immortality, ai',
      selected: false
    },
    {
      id:5,
      source: 'Nir Eyal - Hooked',
      date: '2014-04-02',
      title: 'ATARI Habit Forming Process',
      description: 'People use a product through a Trigger, Action, Reward, Investment loop.',
      tags: 'usability, product, design, software',
      selected: false
    },
    {
      id:6,
      source: 'Raymond Kurzweil - How to Create a Mind',
      date: '2014-04-02',
      title: 'Pattern Recognition Theory',
      description: 'Thoughts are constructed in hierarchical patterns of the mind.',
      tags: 'singularity, mind, kurzweil, immortality, ai',
      selected: false
    }
  ];

  $scope.toggleAlbumState = function (song) {
    if (song.selected == false) {
      song.selected = true;
      console.log('Hi');
    }
    else {
      song.selected = false;
      console.log('Bye');
    }
    return song;
  };

  $scope.ITEMS_PER_PAGE = 6;
  console.log($scope.ITEMS_PER_PAGE);
  $scope.totalSongs = $scope.songs.length;

  $scope.pages = ($scope.totalSongs)/$scope.ITEMS_PER_PAGE;
  console.log($scope.pages);

});