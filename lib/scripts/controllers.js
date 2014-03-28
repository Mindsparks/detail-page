// Define your controller and the objects you need to reference.
myAngularApp.controller('appInfoController', function ($rootScope, $scope) {
  /* Define a variable (an object variable in the case below). All variables must be within angular's $scope to be referenced in a template.
     To create a global variable, use $rootScope. */
  $scope.myApp = {
    name: 'DJ Expo',
    description: 'Description goes here'
  };
	$scope.song = 
    {
      id:1,
      title: 'Drift',
      artist: 'Metrik',
      album: "Drift | Freefall",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "drift-freefall-metrik-drift",
      
      label: "Viper",
      
      comments_count: 1,
      listens_count: 574,
    },
  $scope.song = 
    {
      id:2,
      title: 'Affinity',
      artist: 'Hydra',
      album: "Night Music Volume 1",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "night-music-volume-1-hydra-affinity",
      
      label: "Thrillseekers",
      
      comments_count: 1,
      listens_count: 7483,
    },
  $scope.song = 
    {
      id:3,
      title: 'Champloo',
      artist: 'Mord Fustang',
      album: "Champloo",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "champloo-mord-fustang-champloo",
      
      label: "Anjunabeats",
      
      comments_count: 1,
      listens_count: 52,
    },
  $scope.song = 
    {
      id:4,
      title: 'Juicebox',
      artist: 'Datsik',
      album: "Cold Blooded",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "cold-blooded-datsik-juicebox",
      
      label: "Rottan",
      
      comments_count: 1,
      listens_count: 19373,
    },
  $scope.song = 
    {
      id:5,
      title: 'Open Your Eyes [Beatman & Ludmilla Remix]',
      artist: 'Buzzwak',
      album: "Sensemilla",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "sensemilla-buzzwak-open-your-eyes-beatman-and-ludmilla-remix",
      
      label: "Anjunabeats",
      
      comments_count: 1,
      listens_count: 1234,
    },
  $scope.song = 
    {
      id:6,
      title: 'Sawchain',
      artist: 'Savant',
      album: "The Prophecy",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "the-prophecy-savant-sawchain",
      
      label: "Anjunabeats",
      
      comments_count: 1,
      listens_count: 901,
    };
  ];
});